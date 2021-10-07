import axios from "axios";

const baseURL = `https://shikimori.one/api/`;

const headers = () => {
  return {
    "User-Agent": "AnimeStars",
  };
};

export async function postRequest(url: string, data: Object) {
  return axios({ url, method: "post", baseURL, headers: headers(), data });
}

export async function getRequest(url: string, data?: Object) {
  return axios({
    url,
    method: "get",
    baseURL,
    headers: headers(),
    params: data,
  });
}

export async function putRequest(url: string, data: Object) {
  return axios({ url, method: "put", baseURL, headers: headers(), data });
}

export async function patchRequest(url: string, data: Object) {
  return axios({ url, method: "patch", baseURL, headers: headers(), data });
}

export async function patchWithoutDataRequest(url: string, data: Object) {
  return axios({ url, method: "patch", baseURL, headers: headers(), ...data });
}

export async function deleteWithoutDataRequest(url: string, data: Object) {
  return axios({ url, method: "delete", baseURL, headers: headers(), data });
}

export async function deleteRequest(url: string, data?: Object) {
  return axios({
    url,
    method: "delete",
    baseURL,
    headers: headers(),
    params: data,
  });
}
