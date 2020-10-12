import { usePaginatedQuery, PaginatedQueryResult, QueryKey } from 'react-query'
import api from 'api'
import { QueryParams, CharactersResponse } from 'interfaces'

interface Params extends QueryParams {
  events?: string
  nameStartsWith?: string | null
}

const getCharacters = async (_: QueryKey, params?: Params): Promise<CharactersResponse> => {
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

export default function useCharacters(params?: Params): PaginatedQueryResult<CharactersResponse> {
  return usePaginatedQuery(['characters', params], getCharacters)
}
