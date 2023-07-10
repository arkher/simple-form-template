import { methods } from "../api/core/http.core";
import { EndpointConfig } from "../api/request";

export interface ISendCredentialsEndpointPayload {
  name: string;
  email: string;
  password: string;
}
export const SendCredentialsEndpoint = {
  post(data: ISendCredentialsEndpointPayload): EndpointConfig {
    return {
      method: methods.post,
      data,
      path: `/valid-passwords/results`,
    };
  },
};
