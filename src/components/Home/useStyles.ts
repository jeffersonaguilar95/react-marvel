import { makeStyles } from '@material-ui/core/styles'
import { WindowSize } from 'hooks/useWindowSize'

// This could be an interface in the future with multiple props
type IProps = WindowSize

const useStyles = makeStyles({
  root: {
    height: '100%',
    backgroundImage: ({ width }: IProps) => {
      if (width) {
        return `url("https://images.unsplash.com/photo-1588497859490-85d1c17db96d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=${width}")`
      }
      return ''
    }
  }
})

export default useStyles
