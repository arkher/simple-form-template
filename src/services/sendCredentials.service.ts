import { ApiDefaultesponse } from "../api/core/http.core";
import { requestApi } from "../api/request";
import { SendCredentialsEndpoint } from "../endpoints";
import { ISendCredentialsEndpointPayload } from "../endpoints/sendCredentials.endpoint";

export const sendCredentialsService = {
  post: async (data: IFormData) => {
    const payload: ISendCredentialsEndpointPayload = data;

    const result = await requestApi<ApiDefaultesponse>(
      SendCredentialsEndpoint.post(payload),
      "api"
    );
    return result.data;
  },
};
