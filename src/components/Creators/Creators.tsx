import React from 'react'
import { RouteComponentProps } from '@reach/router'
import GridList from 'common/GridList/GridList'
import { useDebounce, useFilters, usePagination } from 'hooks'
import useCreators from './useCreators'

const Creators: React.FC<RouteComponentProps> = () => {
  const { page, setPage } = usePagination()
  const { filters, setFilter } = useFilters()
  const debouncedSearch = useDebounce(filters.search, 750)

  const charactersQuery = useCreators({
    orderBy: 'firstName',
    page,
    nameStartsWith: !!debouncedSearch ? debouncedSearch : null
  })

  return (
    <GridList
      title="Creators"
      page={page}
      setPage={setPage}
      resourceQuery={charactersQuery}
      setFilter={setFilter}
      filters={filters}
    />
  )
}

export default Creators
