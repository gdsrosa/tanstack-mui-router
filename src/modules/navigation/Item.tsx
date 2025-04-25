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
        display: "flex",
        alignItems: "center",
        "&:hover, &:focus": {
          backgroundColor: "primary.light",
          color: "secondary.main",
          transition: "0.2s ease-in",
          borderRadius: 1,
          width: "100%",
        },
      }}
      paddingY={1}
      color="secondary.main"
      component="span"
    >
      {withIcon && iconId ? (
        <CustomIcon id={iconId} sx={{ paddingRight: 1 }} />
      ) : null}
      {children}
    </Typography>
  )
}
export default Item
