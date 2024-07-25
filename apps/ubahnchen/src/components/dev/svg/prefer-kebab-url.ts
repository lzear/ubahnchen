const _ = require('lodash')
const path = require('node:path')

const ignoreWords = {
  snake: new Set([
    'clear_saml_data',
    'confirm_link',
    'confirm_university_domain',
    'create_recurly_account',
    'current_history_content',
    'current_user',
    'default_email',
    'disable_managed_users',
    'doc_snapshot',
    'enable_history_ranges_support',
    'features_override',
    'generate_password_reset_url',
    'get_assignment',
    'get_clone',
    'health_check',
    'institutional_emails',
    'latest_template',
    'link_after_saml_response',
    'linked_file',
    'metrics_segmentation',
    'new_users',
    'no_autostart_post_gateway',
    'personal_info',
    'planned_maintenance',
    'refresh_features',
    'register_admin',
    'register_ldap_admin',
    'register_saml_admin',
    'resend_confirmation',
    'restore_file',
    'revert_file',
    'saved_vers',
    'send_test_email',
    'session_maintenance',
    'set_in_session',
    'sign_in_to_link',
    'split_test',
    'sso_configuration_test',
    'sso_email',
    'sso_enrollment',
    'track_changes',
    'update_admin',
    'user_details',
  ]),
  camel: new Set([
    'addWorkflowScope',
    'beginAuth',
    'brandVariationId',
    'closeEditor',
    'completeRegistration',
    'deactivateOldProjects',
    'deletedSubscription',
    'disconnectAllUsers',
    'editingSession',
    'emailSubscription',
    'enableManagedUsers',
    'externalCollaboration',
    'flushProjectToTpds',
    'indexAll',
    'offboardManagedUser',
    'openEditor',
    'perfTest',
    'pollDropboxForUser',
    'resendInvite',
    'resendManagedUserInvite',
    'salesContactForm',
    'showSupport',
  ]),
}

const removeTextBetweenBrackets = (text: string) => {
  while (text.includes('[') || text.includes('(')) {
    text = text.replaceAll(/\[[^[\]]*]/g, '')
    text = text.replaceAll(/\([^()]*\)/g, '')
  }
  return text
}

const shouldIgnoreWord = (str: string) =>
  str.includes(':') ||
  str.includes('(') ||
  str === '*' ||
  ignoreWords.snake.has(str) ||
  ignoreWords.camel.has(str) ||
  str.match(/^[\da-z]+$/)

const getSuggestion = (routePath: string | RegExp) => {
  if (typeof routePath === 'string') {
    const kebabed = routePath
      .split('/')
      .map((word) => (shouldIgnoreWord(word) ? word : _.kebabCase(word)))
      .join('/')
    return kebabed === routePath ? null : `'${kebabed}'`
  }

  if (routePath instanceof RegExp) {
    const words = removeTextBetweenBrackets(routePath.source).match(/[\w-]+/g)
    if (!words) return routePath

    let newSource = routePath.source
    for (const word of words) {
      if (!shouldIgnoreWord(word)) {
        newSource = newSource.replaceAll(
          new RegExp(`\\b${word}\\b`, 'g'),
          _.kebabCase(word),
        )
      }
    }

    const kebabed = new RegExp(newSource, routePath.flags)
    return kebabed.source.toString() === routePath.source.toString()
      ? null
      : kebabed
  }
}

module.exports = {
  meta: {
    type: 'problem',
    fixable: 'code',
    docs: {
      description: 'Enforce using kebab-case for URL paths',
    },
  },
  create: (context) => ({
    CallExpression(node) {
      if (
        node.callee.type === 'MemberExpression' &&
        node.arguments[0]?.type === 'Literal' &&
        [/app/i, /router/i].some((callee) =>
          typeof callee === 'string'
            ? node.callee.object.name === callee
            : callee.test(node.callee.object.name),
        ) &&
        ['get', 'post', 'put', 'delete'].includes(node.callee.property.name)
      ) {
        const routePath: string = node.arguments[0].value

        const suggestion = getSuggestion(routePath)

        if (suggestion) {
          context.report({
            node: node.arguments[0],
            message: 'Route path should be in kebab-case.',
            fix: (fixer) => fixer.replaceText(node.arguments[0], suggestion),
          })
        }
      }
    },
  }),
}
