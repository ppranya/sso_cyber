import fetchWrapper from "app/common/utils/fetchWrapper";
import configs from "configs";

export const getUserList = async () => {
  return fetchWrapper(`${configs.APIUrl}/employers/user-list`);
};
