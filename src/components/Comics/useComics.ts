import { usePaginatedQuery } from 'react-query'
import api from 'api'
import { CommonQueryParams } from 'types'

interface Params extends CommonQueryParams {
  titleStartsWith?: string | null
}

const getComics = async (key: string, params?: Params) => {
  try {
    const {
      data: { data }
    } = await api.get('/comics', {
      params
    })

    return data
  } catch (e) {
    throw new Error(e.message)
  }
}

const useComics = (params?: Params) => {
  return usePaginatedQuery(['comics', params], getComics)
}

export default useComics
