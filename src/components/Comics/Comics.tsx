import React from 'react'
import { RouteComponentProps } from '@reach/router'
import GridList from 'common/GridList/GridList'
import { useDebounce, useFilters, usePagination } from 'hooks'
import useComics from './useComics'

const Comics: React.FC<RouteComponentProps> = () => {
  const { page, setPage } = usePagination()
  const { filters, setFilter } = useFilters()
  const debouncedSearch = useDebounce(filters.search, 750)

  const charactersQuery = useComics({
    orderBy: 'title',
    page,
    titleStartsWith: !!debouncedSearch ? debouncedSearch : null
  })

  return (
    <GridList
      title="Comics"
      page={page}
      setPage={setPage}
      resourceQuery={charactersQuery}
      setFilter={setFilter}
      filters={filters}
    />
  )
}

export default Comics
