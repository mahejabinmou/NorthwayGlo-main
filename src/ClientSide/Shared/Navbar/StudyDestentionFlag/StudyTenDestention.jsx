/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { distensionInfo } from "../../../../Constants/exports"
import { LazyLoadImage } from "react-lazy-load-image-component"

const StudyTenDestention = ({
    setIsDropdown2Open,
    setOpen = () => {},
    isMobile = false,
}) => {
    const handleNavigate = () => {
        setIsDropdown2Open(false)
        if (isMobile) setOpen(false)
        // return
    }
    return (
        <div
            className=" grid lg:grid-cols-5 z-50 grid-cols-1 ml-5 mb-2 lg:mb-0 lg:ml-0 lg:gap-10 justify-items-start 
"
        >
            {distensionInfo.map((country) => (
                <Link
                    key={country.id}
                    className="flex items-center justify-center flex-wrap bg-white cursor-pointer"
                    to={`/studyDistention?country=${country.country}`}
                    onClick={(e) =>
                        handleNavigate(
                            e,
                            `/studyDistention?country=${country.country}`
                        )
                    }
                >
                    <LazyLoadImage
                        src={country.flag}
                        className="h-[20px] w-[28px]"
                        alt={country.country}
                    />
                    <p className="text-[#1E1E1E] text-[16px] font-bold ml-[15px]">
                        {country.country}
                    </p>
                </Link>
            ))}
        </div>
    )
}

export default StudyTenDestention
