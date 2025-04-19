import { CustomIcon } from "@/components/CustomIcon"
import { SLink } from "@/components/Link"
import {
  AppBar,
  IconButton,
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
          sx={{ height: 25, width: 25 }}
        />
        <Typography
          component="h1"
          fontWeight="bold"
          fontSize={20}
          paddingLeft={2}
          color="secondary.main"
        >
          Debto
        </Typography>
        <Toolbar>
          <IconButton onClick={handleMenu}>
            <CustomIcon id="menu" />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
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
            <MenuItem>
              <SLink to="/debts">Debts</SLink>
            </MenuItem>
          </Menu>
        </Toolbar>
      </Stack>
    </AppBar>
  )
}

export default Topbar
