import { WebPlugin, registerWebPlugin } from '@capacitor/core';
import { OpenGmapsPlugin } from './definitions';

export class OpenGmapsWeb extends WebPlugin implements OpenGmapsPlugin {
  constructor() {
    super({
      name: 'OpenGmaps',
      platforms: ['web'],
    });
  }

  async openMaps(): Promise<{ appName: string }> {
    return { appName: "" };
  }

}

const OpenGmaps = new OpenGmapsWeb();

export { OpenGmaps };

registerWebPlugin(OpenGmaps);
