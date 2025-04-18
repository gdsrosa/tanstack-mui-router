import { SLink } from "@/components/Link"
import { Stack } from "@mui/material"
import Item from "./Item"

import { MENU_ITEMS } from "./constants"

export default function Sidebar() {
  return (
    <Stack>
      <Stack paddingTop={2}>
        {MENU_ITEMS.map(item => (
          <SLink key={item.id} to={item.to}>
            <Item>{item.name}</Item>
          </SLink>
        ))}
      </Stack>
    </Stack>
  )
}
