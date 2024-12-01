import { useEffect, useState, useRef } from "react"
import "./NotFound.css"

const NotFound = () => {
    const [theme, setTheme] = useState("dark")
    const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 })
    const leftEyeRef = useRef(null)
    const rightEyeRef = useRef(null)

    const toggleTheme = () => {
        const root = document.documentElement

        if (theme === "dark") {
            root.style.setProperty("--notfound-bg-color", "#fff")
            root.style.setProperty("--notfound-text-color", "#000")
            setTheme("light")
        } else {
            root.style.setProperty("--notfound-bg-color", "#050505")
            root.style.setProperty("--notfound-text-color", "#fff")
            setTheme("dark")
        }
    }

    useEffect(() => {
        const handleMouseMove = (event) => {
            const { clientX, clientY } = event
            setEyePosition({ x: clientX, y: clientY })
        }

        window.addEventListener("mousemove", handleMouseMove)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])

    const calculatePupilPosition = (eyeRef) => {
        if (!eyeRef?.current) return { x: 0, y: 0 }

        const rect = eyeRef.current.getBoundingClientRect()
        const eyeCenterX = rect.left + rect.width / 2
        const eyeCenterY = rect.top + rect.height / 2

        const dx = eyePosition.x - eyeCenterX
        const dy = eyePosition.y - eyeCenterY

        const angle = Math.atan2(dy, dx)
        const maxDistance = rect.width / 4 // Limit movement radius

        const x =
            Math.cos(angle) *
            Math.min(maxDistance, Math.sqrt(dx * dx + dy * dy))
        const y =
            Math.sin(angle) *
            Math.min(maxDistance, Math.sqrt(dx * dx + dy * dy))

        return { x, y }
    }

    return (
        <main className="flex items-center justify-center min-h-screen bg-[var(--notfound-bg-color)] text-[var(--notfound-text-color)]">
            <div className="flex flex-col items-center gap-8 text-center">
                {/* Eyes Section */}
                <div className="flex gap-1">
                    <div
                        ref={leftEyeRef}
                        className="w-20 h-20 bg-[var(--notfound-primary-color)] rounded-full flex items-center justify-center relative"
                    >
                        <div
                            className="w-8 h-8 bg-[var(--notfound-eye-pupil-color)] rounded-full absolute"
                            style={{
                                transform: `translate(${
                                    calculatePupilPosition(leftEyeRef).x
                                }px, ${
                                    calculatePupilPosition(leftEyeRef).y
                                }px)`,
                            }}
                        />
                    </div>
                    <div
                        ref={rightEyeRef}
                        className="w-20 h-20 bg-[var(--notfound-primary-color)] rounded-full flex items-center justify-center relative"
                    >
                        <div
                            className="w-8 h-8 bg-[var(--notfound-eye-pupil-color)] rounded-full absolute"
                            style={{
                                transform: `translate(${
                                    calculatePupilPosition(rightEyeRef).x
                                }px, ${
                                    calculatePupilPosition(rightEyeRef).y
                                }px)`,
                            }}
                        />
                    </div>
                </div>

                {/* Heading Section */}
                <div>
                    <h1 className="text-4xl font-bold text-[var(--notfound-primary-color)]">
                        Looks like you're lost
                    </h1>
                    <p className="mt-2 text-xl font-light">404 error</p>
                </div>

                {/* Button Section */}
                <a
                    href="/"
                    aria-label="back to home"
                    className="px-6 py-3 border border-[var(--notfound-primary-color)] rounded-lg shadow-md text-lg font-light transition-all duration-300 hover:bg-[var(--notfound-primary-color)] hover:text-white"
                >
                    Back to home
                </a>

                {/* Theme Switcher */}
                <button
                    onClick={toggleTheme}
                    className="absolute top-10 right-10 text-[var(--notfound-primary-color)] text-2xl"
                    aria-label="Toggle theme"
                >
                    {theme === "dark" ? "☀️" : "🌙"}
                </button>
            </div>
        </main>
    )
}

export default NotFound
