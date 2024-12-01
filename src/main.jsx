/* eslint-disable react-refresh/only-export-components */
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AppProvider } from "./store/AppContext"
import "./index.css"
import Layout from "./components/Layout"
import NotFound from "./ClientSide/NotFound/NotFound"

// Lazy load components
const Home = React.lazy(() => import("./ClientSide/Home/Home"))
const AboutUs = React.lazy(() => import("./ClientSide/AboutUs/AboutUs"))
const Blogs = React.lazy(() => import("./ClientSide/Blogs/Blogs"))
const SelectPage = React.lazy(() =>
    import("./ClientSide/Distenation/Select/SelectPage")
)
const Service = React.lazy(() => import("./ClientSide/Service/Service"))
const PhotoGallery = React.lazy(() =>
    import("./ClientSide/Gallery/PhotoGallery/PhotoGallery")
)
const VideoGallery = React.lazy(() =>
    import("./ClientSide/Gallery/VideoGallery/VideoGallery")
)
const Distenation = React.lazy(() =>
    import("./ClientSide/Distenation/Distenation")
)
const Distenation2 = React.lazy(() =>
    import("./ClientSide/Distenation2/Distenation2")
)
const StudyDestination = React.lazy(() =>
    import("./ClientSide/Home/StudyDestination/StudyDestination")
)
const ContactUs = React.lazy(() => import("./ClientSide/ContactUs/ContactUs"))
const Blog = React.lazy(() => import("./ClientSide/Blogs/Blog"))

const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-solid border-gray-200"></div>
        </div>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <React.Suspense fallback={<LoadingSpinner />}>
                <Layout />
            </React.Suspense>
        ),
        children: [
            {
                index: true,
                element: (
                    <React.Suspense fallback={<LoadingSpinner />}>
                        <Home />
                    </React.Suspense>
                ),
            },
            {
                path: "about",
                element: (
                    <React.Suspense fallback={<LoadingSpinner />}>
                        <AboutUs />
                    </React.Suspense>
                ),
            },
            {
                path: "blogs",
                element: (
                    <React.Suspense fallback={<LoadingSpinner />}>
                        <Blogs />
                    </React.Suspense>
                ),
            },
            {
                path: "blog/:blogId",
                element: (
                    <React.Suspense fallback={<LoadingSpinner />}>
                        <Blog />
                    </React.Suspense>
                ),
            },
            {
                path: "selectPage",
                element: (
                    <React.Suspense fallback={<LoadingSpinner />}>
                        <SelectPage />
                    </React.Suspense>
                ),
            },
            {
                path: "service",
                element: (
                    <React.Suspense fallback={<LoadingSpinner />}>
                        <Service />
                    </React.Suspense>
                ),
            },
            {
                path: "photo-gallery",
                element: (
                    <React.Suspense fallback={<LoadingSpinner />}>
                        <PhotoGallery />
                    </React.Suspense>
                ),
            },
            {
                path: "video-gallery",
                element: (
                    <React.Suspense fallback={<LoadingSpinner />}>
                        <VideoGallery />
                    </React.Suspense>
                ),
            },
            {
                path: "studyDistention",
                element: (
                    <React.Suspense fallback={<LoadingSpinner />}>
                        <Distenation />
                    </React.Suspense>
                ),
            },
            {
                path: "studyDistention2",
                element: (
                    <React.Suspense fallback={<LoadingSpinner />}>
                        <Distenation2 />
                    </React.Suspense>
                ),
            },
            {
                path: "studyDistentionFlag",
                element: (
                    <React.Suspense fallback={<LoadingSpinner />}>
                        <StudyDestination />
                    </React.Suspense>
                ),
            },
            {
                path: "contactUs",
                element: (
                    <React.Suspense fallback={<LoadingSpinner />}>
                        <ContactUs />
                    </React.Suspense>
                ),
            },
            // 404 Page Route
            {
                path: "*",
                state: { isNotFoundPage: true },
                element: (
                    <React.Suspense fallback={<LoadingSpinner />}>
                        <NotFound />
                    </React.Suspense>
                ),
            },
        ],
    },
])
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AppProvider>
            <RouterProvider router={router} />
        </AppProvider>
    </React.StrictMode>
)
