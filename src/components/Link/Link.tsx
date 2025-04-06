import { Link } from "@mui/material"

import { createLink } from "@tanstack/react-router"
import { forwardRef } from "react"

const MLink = forwardRef<HTMLAnchorElement>((props, ref) => (
  <Link ref={ref} {...props} underline="none" />
))

const SLink = createLink(MLink)

export default SLink
