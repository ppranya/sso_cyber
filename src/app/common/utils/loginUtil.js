import storageUtil from "./storageUtil";

export const isLoggedIn = () => {
  const user = storageUtil.getItem("user");
  if (user) {
    return true;
  }
  return false;
};
