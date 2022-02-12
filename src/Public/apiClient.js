import axios from "axios";

const instance = axios.create({
  baseURL: "https://newsapi.org",
  timeout: 600000,
  responseType: "json",
});

var headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "*",
};

const request = (method, url, data) => {
  return new Promise((resolve, reject) => {
    (() => {
      if (method === "get") {
        return instance.request({
          url,
          method,
          params: data,
          headers: headers,
        });
      } else {
        return instance.request({
          url,
          method,
          data,
          headers: headers,
        });
      }
    })()
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};

export default {
  get: (endpoint, data) => {
    return request("get", endpoint, data);
  },
  post: (endpoint, data) => {
    return request("post", endpoint, data);
  },
};
