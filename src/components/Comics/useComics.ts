import { PaginatedQueryResult, QueryKey, usePaginatedQuery } from 'react-query'
import api from 'api'
import { ComicsResponse, QueryParams } from 'interfaces'

interface Params extends QueryParams {
  titleStartsWith?: string | null
}

const getComics = async (_: QueryKey, params?: Params): Promise<ComicsResponse> => {
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

export default function useComics(params?: Params): PaginatedQueryResult<ComicsResponse> {
  return usePaginatedQuery(['comics', params], getComics)
}
