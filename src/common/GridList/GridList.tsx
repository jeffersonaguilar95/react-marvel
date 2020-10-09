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
import ReactQuery from 'react-query'
import { useWidth } from 'hooks'
import * as Types from 'types'
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
  resourceQuery: ReactQuery.PaginatedQueryResult<any>
  filters: Types.Filters
  setFilter: Types.SetFilter
}

const GridList: React.FC<RouteComponentProps & Props> = ({
  title,
  page,
  setPage,
  resourceQuery,
  filters,
  setFilter
}) => {
  const classes = useStyles()
  const currentWidth = useWidth()
  const gridCols = COLS_BY_WIDTH[currentWidth] || 3
  const { isFetching, resolvedData } = resourceQuery

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
      <AppBar position="static" color="transparent">
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
      {isFetching ? (
        <GridListSkeleton cols={gridCols} rows={3} />
      ) : (
        <React.Fragment>
          <MaterialGridList cellHeight={225} cols={gridCols}>
            {resolvedData.results.map((item: any, index: number) => (
              <GridListTile key={`${item.img}-${index}`}>
                <img
                  src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  alt={item.name || item.title}
                />
                <GridListTileBar title={item.name || item.title} />
              </GridListTile>
            ))}
          </MaterialGridList>
          <Pagination
            total={resolvedData.total}
            limit={resolvedData.limit}
            onChange={handlePaginationChange}
            page={page}
          />
        </React.Fragment>
      )}
    </Box>
  )
}

export default GridList
