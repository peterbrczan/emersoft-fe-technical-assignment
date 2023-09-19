export class HttpClient {
  static async get<T = any>(endpoint: string, config?: RequestInit): Promise<T> {
    return await this.request<T>('GET', endpoint, config);
  }

  static async request<T = any>(method: string, endpoint: string, config?: RequestInit): Promise<T> {
    const response = await fetch(endpoint, { ...config, method });

    if (!response.ok) {
      throw new Error(`Failed with status: ${response.status}`);
    }

    return (await response.json()) as T;
  }
}
