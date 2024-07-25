class SearchParamsServerContext {
  state: Record<string, string> | null = null

  public setParams(params: Record<string, string>) {
    this.state = params
  }

  public getParams() {
    return this.state
  }
}

export const searchParamsServerContext = new SearchParamsServerContext()
