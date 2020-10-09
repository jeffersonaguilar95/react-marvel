import React from 'react'
import { RouteComponentProps } from '@reach/router'
import GridList from 'common/GridList/GridList'
import { useDebounce, useFilters, usePagination } from 'hooks'
import useSeries from './useSeries'

const Series: React.FC<RouteComponentProps> = () => {
  const { page, setPage } = usePagination()
  const { filters, setFilter } = useFilters()
  const debouncedSearch = useDebounce(filters.search, 750)

  const charactersQuery = useSeries({
    orderBy: 'title',
    page,
    titleStartsWith: !!debouncedSearch ? debouncedSearch : null
  })

  return (
    <GridList
      title="Series"
      page={page}
      setPage={setPage}
      resourceQuery={charactersQuery}
      setFilter={setFilter}
      filters={filters}
    />
  )
}

export default Series
