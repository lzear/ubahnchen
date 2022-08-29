export const myFetcher = <TData, TVariables>(
  query: string,
  variables?: TVariables,
  options?: RequestInit['headers'],
): (() => Promise<TData>) => {
  return async () => {
    const parameters = new URLSearchParams({
      query: query.replace(/\s\s+/g, ' '),
      variables: JSON.stringify(variables),
    })
    const response = await fetch(`/api/graphql?${parameters.toString()}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...options,
      },
    })
    const json = await response.json()

    if (json.errors) {
      const { message } = json.errors[0] || {}
      throw new Error(message || 'Error…')
    }

    return json.data
  }
}
