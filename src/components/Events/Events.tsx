import React from 'react'
import { RouteComponentProps } from '@reach/router'
import GridList from 'common/GridList/GridList'
import { useDebounce, useFilters, usePagination } from 'hooks'
import useEvents from './useEvents'

const Events: React.FC<RouteComponentProps> = () => {
  const { page, setPage } = usePagination()
  const { filters, setFilter } = useFilters()
  const debouncedSearch = useDebounce(filters.search, 750)

  const eventsQuery = useEvents({
    orderBy: 'name',
    page,
    nameStartsWith: !!debouncedSearch ? debouncedSearch : null
  })

  return (
    <GridList
      title="Events"
      page={page}
      setPage={setPage}
      resourceQuery={eventsQuery}
      setFilter={setFilter}
      filters={filters}
      displayKey="title"
    />
  )
}

export default Events
