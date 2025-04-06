import { Icon, IconOwnProps, SxProps } from "@mui/material"

interface CustomIconProps extends IconOwnProps {
  id: string
  sx: SxProps
}

function CustomIcon({ id, sx }: CustomIconProps) {
  return (
    <Icon color="secondary" sx={{ ...sx }}>
      {id}
    </Icon>
  )
}

export default CustomIcon
