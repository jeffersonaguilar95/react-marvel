import React from 'react'
import {
  Box,
  GridList as MaterialGridList,
  GridListTile,
  GridListTileBar,
  InputBase,
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { RouteComponentProps } from '@reach/router'
import { PaginatedQueryResult } from 'react-query'
import { useWidth } from 'hooks'
import * as Types from 'interfaces'
import Pagination from '../Pagination/Pagination'
import GridListSkeleton from '../GridListSkeleton/GridListSkeleton'
import useStyles from './useStyles'

const COLS_BY_WIDTH = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 5,
  xl: 6
}

interface Props {
  title: string
  page: number
  setPage: React.ComponentState
  resourceQuery: PaginatedQueryResult<Types.MarvelResponse>
  filters: Types.Filters
  setFilter: Types.SetFilter
  displayKey: string
}

const GridList: React.FC<RouteComponentProps & Props> = ({
  title,
  page,
  setPage,
  resourceQuery,
  filters,
  setFilter,
  displayKey
}) => {
  const classes = useStyles()
  const currentWidth = useWidth()
  const gridCols = COLS_BY_WIDTH[currentWidth] || 3

  const handlePaginationChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page)
  }

  const handleSearchChange = (event: React.ChangeEvent<Types.FilterInputElement>) => {
    const {
      target: { name, value }
    } = event
    setFilter(name, value)
    setPage(1)
  }

  return (
    <Box display="flex" flexDirection="column" bgcolor="background.paper" pb={4}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            {title}
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              name="search"
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
              value={filters.search}
              onChange={handleSearchChange}
            />
          </div>
        </Toolbar>
      </AppBar>
      {resourceQuery.isFetching ? (
        <GridListSkeleton cols={gridCols} rows={3} cellHeight={210} />
      ) : (
        <React.Fragment>
          <MaterialGridList cellHeight={210} cols={gridCols}>
            {(resourceQuery.resolvedData?.results as Array<Types.MarvelResource>).map(
              (item: Types.MarvelResource, index: number) => (
                <GridListTile key={`${item.modified}-${index}`}>
                  <img alt={item.thumbnail.path} src={`${item.thumbnail.path}.${item.thumbnail.extension}`} />
                  <GridListTileBar title={item[displayKey as keyof Types.MarvelResource]} />
                </GridListTile>
              )
            )}
          </MaterialGridList>
          <Pagination
            total={resourceQuery.resolvedData?.total}
            limit={resourceQuery.resolvedData?.limit}
            onChange={handlePaginationChange}
            page={page}
          />
        </React.Fragment>
      )}
    </Box>
  )
}

export default GridList
