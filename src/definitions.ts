export interface OpenGmapsRequest {
  query: string;
}
export interface OpenGmapsResponse {
  result: boolean;
}
export interface OpenGmapsPlugin {
  openNavigation(request: OpenGmapsRequest): Promise<OpenGmapsResponse>;
}
