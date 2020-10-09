import { usePaginatedQuery } from 'react-query'
import api from 'api'
import { CommonQueryParams } from 'types'

interface Params extends CommonQueryParams {
  events?: string
  nameStartsWith?: string | null
}

const getCharacters = async (key: string, params?: Params) => {
  try {
    const {
      data: { data }
    } = await api.get('/characters', {
      params
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
