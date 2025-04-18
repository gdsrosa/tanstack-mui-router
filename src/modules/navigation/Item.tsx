import { SxProps, Typography } from "@mui/material"
import { ReactNode } from "react"

function Item({ children, sx }: { children: ReactNode; sx?: SxProps }) {
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
      }}
      padding={1}
      borderRadius={1}
      color="secondary.main"
      component="div"
    >
      {children}
    </Typography>
  )
}
export default Item
