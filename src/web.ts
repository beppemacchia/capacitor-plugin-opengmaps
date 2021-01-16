import { WebPlugin, registerWebPlugin } from '@capacitor/core';
import { OpenGmapsPlugin, OpenGmapsRequest, OpenGmapsResponse } from './definitions';

export class OpenGmapsWeb extends WebPlugin implements OpenGmapsPlugin {
  constructor() {
    super({
      name: 'OpenGmaps',
      platforms: ['web'],
    });
  }

  async openNavigation(options: OpenGmapsRequest): Promise<OpenGmapsResponse> {
    console.log(options);
    return {
      result: true
    };
  }

}

const OpenGmaps = new OpenGmapsWeb();

export { OpenGmaps };

registerWebPlugin(OpenGmaps);
