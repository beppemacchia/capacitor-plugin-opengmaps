declare module '@capacitor/core' {
  interface PluginRegistry {
    OpenGmaps: OpenGmapsPlugin;
  }
}

export interface OpenGmapsPlugin {
  openNavigation(request: OpenGmapsRequest): Promise<OpenGmapsResponse>;
}

export interface OpenGmapsRequest {
  query: string;
}

export interface OpenGmapsResponse {
  result: boolean;
}
