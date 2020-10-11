import * as React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Box } from '@material-ui/core'
import { useDebounce, useWindowSize } from 'hooks'
import { WindowSize } from 'hooks/useWindowSize'
import useStyles from './useStyles'

const Home: React.FC<RouteComponentProps> = () => {
  const windowSize = useWindowSize()
  const debouncedWindowSize = useDebounce<WindowSize>(windowSize, 2000)
  const classes = useStyles(debouncedWindowSize)

  return (
    <Box className={classes.root} display="flex" justifyContent="center" alignItems="center">
      {!debouncedWindowSize?.width && (
        <img
          src="https://icon-library.com/images/loading-icon-transparent-background/loading-icon-transparent-background-12.jpg"
          alt="loading"
          width="40wh"
        />
      )}
    </Box>
  )
}

export default Home
