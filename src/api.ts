import axios from 'axios'

const LIMIT_COUNT = 18

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public'
})

api.interceptors.request.use(function (config) {
  const {
    params: { page, ...restParams }
  } = config
  return {
    ...config,
    params: {
      ...restParams,
      offset: (page - 1) * LIMIT_COUNT,
      limit: LIMIT_COUNT,
      apikey: process.env.REACT_APP_API_KEY,
      hash: process.env.REACT_APP_API_HASH,
      ts: process.env.REACT_APP_API_TS
    }
  }
})

export default api
