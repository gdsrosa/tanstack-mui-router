import { Icon, IconOwnProps, SxProps } from "@mui/material"

interface CustomIconProps extends IconOwnProps {
  id: string
  sx?: SxProps
}

function CustomIcon({ id, sx, color }: CustomIconProps) {
  return (
    <Icon color={color} sx={{ ...sx }}>
      {id}
    </Icon>
  )
}

export default CustomIcon
