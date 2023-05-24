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
