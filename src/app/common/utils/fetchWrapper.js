import storageUtil from "./storageUtil";

const fetchWrapper = (path, options) => {
  return new Promise((resolve, reject) => {
    const requestOptions = {
      body:
        options?.body instanceof FormData
          ? options?.body
          : JSON.stringify(options?.body),
      method: options?.method || "GET",
      headers: options?.headers || {}
    };
    const parseJSON = (response) => {
      return new Promise((resolv, rej) =>
        response
          .json()
          .then((json) => {
            resolv({
              status: response.status,
              ok: response.ok,
              json,
            });
          })
          .catch((err) => {
            rej(response);
          })
      );
    };
    fetch(path, requestOptions)
      .then(parseJSON)
      .then((response) => {
        if (response.ok) {
          return resolve(response.json);
        }
        if (response.status === 401) {
          storageUtil.setItem("user", undefined);
          window.location.reload();
          return reject({
            message: "Your login session expired. Please login again",
          });
        }
        return reject(response.json);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default fetchWrapper;
