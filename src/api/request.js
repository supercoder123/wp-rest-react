import axios from "axios"

export const request = (url) => {
  return axios({
    baseURL: "https://uat.upstox.com/wp-json/wp/v2/",
    url,
  })
}
