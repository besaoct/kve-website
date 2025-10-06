export const API_BASE_URL = "https://kve1.gitcsdemoserver.online/api/v1";
export const IMAGE_BASE_URL = "https://kve1.gitcsdemoserver.online/public/";

export const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");

export const requestOptions: RequestInit = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};