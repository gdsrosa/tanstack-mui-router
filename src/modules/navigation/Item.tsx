import { CustomIcon } from "@/components/CustomIcon"
import { SxProps, Typography } from "@mui/material"
import { ReactNode } from "react"

type ItemProps = {
  children: ReactNode
  sx?: SxProps
  withIcon?: boolean
  iconId?: string
}

function Item({ children, sx, withIcon, iconId }: ItemProps) {
  return (
    <Typography
      sx={{
        ...sx,
        cursor: "pointer",
        "&:hover, &:focus": {
          backgroundColor: "secondary.main",
          color: "primary.main",
          transition: "0.2s ease-in",
        },
        display: "flex",
        alignItems: "center",
      }}
      padding={1}
      borderRadius={1}
      color="secondary.main"
      component="div"
    >
      {withIcon && iconId ? (
        <CustomIcon id={iconId} sx={{ paddingRight: 1 }} />
      ) : null}
      {children}
    </Typography>
  )
}
export default Item
