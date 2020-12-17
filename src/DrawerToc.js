import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ListIcon from '@material-ui/icons/List'
import IconButton from '@material-ui/core/IconButton'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
// import ListItemText from '@material-ui/core/ListItemText'

const useStyles = makeStyles({
  drawerButton: {
    backgroundColor: '#fff',
    borderRadius: 0,
    position: 'fixed',
    top: 0,
  },
  drawerIcon: {
    fontSize: '2em',
  },
  list: {
    width: 250,
    padding: 12,
  },
  listHeader: {
    textAlign: 'center',
  }
})

export default function TemporaryDrawer() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const toggleDrawer = open => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setOpen(open)
  }

  return (
    <>
      <IconButton
        className={classes.drawerButton}
        aria-label="table-of-contents"
        onClick={toggleDrawer(true)}
      >
        <ListIcon className={classes.drawerIcon} />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <List className={classes.list}>
          <h2 className={classes.listHeader}>Table of Contents</h2>
          <ListItem><a href="#introduction" onClick={toggleDrawer(false)}>Introduction</a></ListItem>
          <ListItem><a href="#global-view" onClick={toggleDrawer(false)}>A Global View</a></ListItem>
          <ListItem><a href="#drilling-down" onClick={toggleDrawer(false)}>Drilling Down</a></ListItem>
          <ListItem><a href="#sharing" onClick={toggleDrawer(false)}>Sharing With Collaborators</a></ListItem>
          <ListItem><a href="#embed" onClick={toggleDrawer(false)}>Embed JBrowse 2 in Your App</a></ListItem>
          <ListItem><a href="#conclusion" onClick={toggleDrawer(false)}>Conclusion</a></ListItem>
        </List>
      </Drawer>
    </>
  )
}
