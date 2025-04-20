import { SLink } from "@/components/Link"
import { Stack, Typography } from "@mui/material"
import Item from "./Item"

import { CustomIcon } from "@/components/CustomIcon"
import { MENU_ITEMS } from "./constants"

export default function Sidebar() {
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
          Debto
        </Typography>
      </Stack>
      <Stack paddingTop={2}>
        {MENU_ITEMS.map(item => (
          <SLink key={item.id} to={item.to}>
            <Item withIcon iconId={item.iconId}>
              {item.name}
            </Item>
          </SLink>
        ))}
      </Stack>
    </Stack>
  )
}
