import fs from 'node:fs'
import path from 'node:path'

// Function to convert version to major only
function convertToMajorVersion(version) {
  // If the version is already "*", return it unchanged
  if (version === '*') return version

  version = version.replace(/^\D*/, '')
  const major = version.split('.')[0]
  return `^${major}`
}

// Function to update a single package.json file
function updatePackageJson(filePath) {
  const packageJson = JSON.parse(fs.readFileSync(filePath, 'utf8'))

  for (const depType of ['dependencies', 'devDependencies']) {
    if (packageJson[depType]) {
      for (let [package_, version] of Object.entries(packageJson[depType])) {
        packageJson[depType][package_] = convertToMajorVersion(version)
      }
    }
  }

  const updatedContent = JSON.stringify(packageJson, null, 2) + '\n'
  fs.writeFileSync(filePath, updatedContent)
  console.log(`Updated ${filePath}`)
}

// Function to recursively search for package.json files
function findAndUpdatePackageJsonFiles(dir) {
  const files = fs.readdirSync(dir)

  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      // Skip node_modules directories
      if (file === 'node_modules') continue
      findAndUpdatePackageJsonFiles(filePath)
    } else if (file === 'package.json') {
      updatePackageJson(filePath)
    }
  }
}

// Start the process from the current working directory
const rootDir = process.cwd()
findAndUpdatePackageJsonFiles(rootDir)

console.log(
  'All package.json files have been updated with major versions only.',
)
