import axios from "axios";
const token = "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";
const options = { headers: { Authorization: `Bearer ${token}` } };

const prefix = "https://api.github.com";
export function searchUser(username) {
   return axios.get(`${prefix}/search/users`, {
      params: {
         q: username,
      },
      ...options,
   });
}

export function getUser(username) {
   return axios.get(`${prefix}/users/${username}`, {
      ...options,
   });
}

export function getRepo(username) {
   return axios.get(`${prefix}/users/${username}/repos`, {
      ...options,
   });
}
