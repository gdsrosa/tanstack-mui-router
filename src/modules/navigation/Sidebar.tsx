import { SLink } from "@/components/Link"
import {
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material"
import Item from "./Item"

import { CustomIcon } from "@/components/CustomIcon"
import { useState } from "react"
import { MENU_ITEMS } from "./constants"

export default function Sidebar() {
  const [open, setOpen] = useState(false)

  return (
    <Stack>
      <Stack direction="row" alignItems="center">
        <CustomIcon
          id="currency_exchange"
          color="info"
          sx={{ height: 25, width: 25 }}
        />
        <Typography
          component="h2"
          fontWeight="bold"
          paddingLeft={2}
          color="secondary.main"
        >
          TBD
        </Typography>
      </Stack>
      <List component="nav" sx={{ paddingTop: 2 }}>
        {MENU_ITEMS.map(item => (
          <List key={item.id} component="nav" disablePadding>
            <SLink to={item.to}>
              <ListItemButton
                sx={{ padding: 0 }}
                disableRipple
                onClick={() => {
                  if (item.nesteds) {
                    setOpen(!open)
                  }
                }}
              >
                <ListItemText>
                  <Item withIcon iconId={item.iconId}>
                    {item.name}
                  </Item>
                </ListItemText>
              </ListItemButton>
            </SLink>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List disablePadding>
                {item.nesteds?.map(nested => (
                  <SLink key={nested.id} to={nested.to}>
                    <ListItemButton
                      sx={{ paddingY: 0, paddingX: 2 }}
                      disableRipple
                    >
                      <ListItemText>
                        <Item withIcon iconId={nested.iconId}>
                          {nested.name}
                        </Item>
                      </ListItemText>
                    </ListItemButton>
                  </SLink>
                ))}
              </List>
            </Collapse>
          </List>
        ))}
      </List>
    </Stack>
  )
}
