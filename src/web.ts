import { WebPlugin } from '@capacitor/core';

import type { OpenGmapsRequest, OpenGmapsResponse } from '.';
import type { OpenGmapsPlugin } from './definitions';

export class OpenGmapsWeb extends WebPlugin implements OpenGmapsPlugin {
  async openNavigation(request: OpenGmapsRequest): Promise<OpenGmapsResponse> {
    console.log('openNavigation', request);
    return { result: true };
  }
}
