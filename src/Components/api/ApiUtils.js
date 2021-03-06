import axios from "axios";

export function request(options, headers) {
  let defaultHeaders = {
    'Content-Type': 'application/json;charset=UTF-8'
  };

  defaultHeaders = Object.assign(defaultHeaders, headers);

  if (sessionStorage.getItem("accessToken")) {
    defaultHeaders['Authorization'] = 'Bearer ' + sessionStorage.getItem("accessToken");
  }

  const defaults = {headers: defaultHeaders, baseURL: "/api"};
  options = Object.assign({}, defaults, options);

  return axios(options);
}