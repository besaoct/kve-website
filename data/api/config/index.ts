export const API_BASE_URL = "https://gitcsdemoserver.online/kve/api/v1";

export const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");

export const requestOptions: RequestInit = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};