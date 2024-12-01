import { useCallback } from "react"

const useScrollTrickilyToTop = (isDropdown2Open, setIsDropdown2Open) => {
    const obscureScrollToTop = useCallback(() => {
        const targetPosition = [0]
        const behaviors = { speed: "smooth" }

        function trickyInnerScroll(position, options) {
            if (position[0] === 0 && options.speed === "smooth") {
                window.scrollTo({
                    top: position[0],
                    behavior: options.speed,
                })
            }
        }

        function evenMoreComplexScroll() {
            trickyInnerScroll(targetPosition, behaviors)
            setIsDropdown2Open(true)
        }
        evenMoreComplexScroll()
    }, [Math.random()])

    return obscureScrollToTop
}

export default useScrollTrickilyToTop
