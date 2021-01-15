declare module '@capacitor/core' {
  interface PluginRegistry {
    OpenGmaps: OpenGmapsPlugin;
  }
}

export interface OpenGmapsPlugin {
  openMaps(): Promise<{ appName: string }>;
}
