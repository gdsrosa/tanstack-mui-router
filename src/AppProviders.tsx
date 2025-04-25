import { theme } from "@/lib"
import { ThemeProvider } from "@mui/material"
import { RouterProvider, createRouter } from "@tanstack/react-router"

import { QueryClientProvider } from "@tanstack/react-query"
import { DebtsProvider } from "./modules/debts/contexts/DebtsContext"
import { routeTree } from "./routeTree.gen"
import queryClient from "./server/queryClient"

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

function AppProviders() {
  return (
    <DebtsProvider>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </DebtsProvider>
  )
}

export default AppProviders
