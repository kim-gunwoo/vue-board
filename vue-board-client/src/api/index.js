import axios from "axios";
const PORT = 4500;
const DOMAIN = `http://localhost:${PORT}`;

const request = (method, url, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    data
  })
    .then(result => {
      return result.data;
    })
    .catch(err => {
      throw err.response;
    });
};

export const board = {
  fetch(id) {
    return id ? request("get", `/board/${id}`) : request("get", "/board");
  },
  create(title) {
    return request("post", "/board", { title });
  },
  update(id, payload) {
    return request("put", `/board/${id}`, payload);
  },
  destroy(id) {
    return request("delete", `/board/${id}`);
  }
};
