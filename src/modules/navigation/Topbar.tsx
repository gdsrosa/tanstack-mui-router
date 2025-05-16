import { CustomIcon } from "@/components/CustomIcon"
import { SLink } from "@/components/Link"
import {
  AppBar,
  IconButton,
  ListSubheader,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material"
import { MouseEvent, useState } from "react"

function Topbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar position="sticky" sx={{ padding: "8px" }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <CustomIcon
          id="currency_exchange"
          color="info"
          sx={{ height: 25, width: 25, paddingLeft: 3 }}
        />
        <Typography
          component="h1"
          fontWeight="bold"
          fontSize={20}
          paddingLeft={2}
          color="common.white"
        >
          TBD
        </Typography>
        <Toolbar>
          <IconButton onClick={handleMenu}>
            <CustomIcon id="menu" sx={{ color: "common.white" }} />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem>
              <SLink to="/">Home</SLink>
            </MenuItem>
            <ListSubheader>Debts</ListSubheader>

            <MenuItem>
              <SLink to="/debts/create">Create</SLink>
            </MenuItem>
            <MenuItem sx={{ paddingLeft: 2 }}>
              <SLink to="/debts">View</SLink>
            </MenuItem>
          </Menu>
        </Toolbar>
      </Stack>
    </AppBar>
  )
}

export default Topbar
