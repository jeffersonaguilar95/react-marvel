import { usePaginatedQuery } from 'react-query'
import api from 'api'

type Params = {
  page: number
  events?: string
  orderBy?: string
  limit?: string | number
  nameStartsWith?: string | null
}

const getCharacters = async (key: string, params?: Params) => {
  try {
    const {
      data: { data }
    } = await api.get('/characters', {
      params: {
        ...params
      }
    })

    return data
  } catch (e) {
    throw new Error(e.message)
  }
}

const useCharacters = (params?: Params) => {
  return usePaginatedQuery(['characters', params], getCharacters)
}

export default useCharacters
