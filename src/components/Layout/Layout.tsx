import * as React from 'react'
import clsx from 'clsx'
import { useTheme } from '@material-ui/core/styles'
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  SvgIconProps
} from '@material-ui/core'
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Group as GroupIcon,
  Event as EventIcon,
  Receipt as ReceiptIcon,
  SupervisedUserCircle as SupervisedUserCircleIcon,
  Timeline as TimelineIcon
} from '@material-ui/icons'
import { Link, RouteComponentProps } from '@reach/router'
import useStyles from './useStyles'

type Section = {
  name: string
  path: string
  Icon: React.ComponentType<SvgIconProps>
}

const SECTIONS: Section[] = [
  {
    name: 'Characters',
    path: 'characters',
    Icon: GroupIcon
  },
  {
    name: 'Events',
    path: 'events',
    Icon: EventIcon
  },
  {
    name: 'Comics',
    path: 'comics',
    Icon: ReceiptIcon
  },
  {
    name: 'Creators',
    path: 'creators',
    Icon: SupervisedUserCircleIcon
  },
  {
    name: 'Series',
    path: 'series',
    Icon: TimelineIcon
  }
]

const Layout: React.FC<RouteComponentProps> = ({ children }) => {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            React Marvel - Jefferson
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {SECTIONS.map(({ name, path, Icon }, index) => (
            <ListItem button key={`${name}-${index}`} component={Link} to={path}>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Box display="flex" flexDirection="column">
          {children}
        </Box>
      </main>
    </div>
  )
}

export default Layout
