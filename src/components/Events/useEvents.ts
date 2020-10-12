import { PaginatedQueryResult, QueryKey, usePaginatedQuery } from 'react-query'
import api from 'api'
import { QueryParams, EventsResponse } from 'interfaces'

interface Params extends QueryParams {
  nameStartsWith?: string | null
}

const getEvents = async (_: QueryKey, params?: Params): Promise<EventsResponse> => {
  try {
    const {
      data: { data }
    } = await api.get('/events', {
      params
    })

    return data
  } catch (e) {
    throw new Error(e.message)
  }
}

export default function useEvents(params?: Params): PaginatedQueryResult<EventsResponse> {
  return usePaginatedQuery(['events', params], getEvents)
}
