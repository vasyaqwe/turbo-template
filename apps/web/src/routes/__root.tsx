import { Outlet, createRootRoute, Link } from "@tanstack/react-router"
import { buttonVariants } from "@acme/ui/button"

export const Route = createRootRoute({
   component: RootComponent,
   notFoundComponent: () => {
      return <NotFound />
   },
})

function NotFound() {
   return (
      <div className="not-found">
         <h1 className="font-bold">404</h1>
         <Link className={buttonVariants()}>Back to home</Link>
      </div>
   )
}

function RootComponent() {
   return <Outlet />
}
