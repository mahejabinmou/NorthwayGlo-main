import { Outlet } from "react-router-dom"
import { match } from "path-to-regexp"
import Topbar from "../ClientSide/Shared/Navbar/TopBar"
import Navbar from "../ClientSide/Shared/Navbar/Navbar"
import { knownRoutes } from "../Constants/knowingRoutes"

const Layout = () => {
    const isPathMatch = (path, currentPath) => {
        const matcher = match(path, { decode: decodeURIComponent })
        return matcher(currentPath) !== false
    }

    const isNotFoundPage = !knownRoutes.some((route) =>
        isPathMatch(route, location.pathname)
    )

    console.log("Is Not Found Page:", isNotFoundPage)

    return (
        <div>
            {!isNotFoundPage && (
                <>
                    <Topbar></Topbar>
                    <Navbar></Navbar>
                </>
            )}

            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
