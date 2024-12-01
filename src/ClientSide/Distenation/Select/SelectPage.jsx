import { LazyLoadImage } from "react-lazy-load-image-component"
import Navbar from "../../Shared/Navbar/Navbar"

const SelectPage = () => {
    // Set "India" as the default hovered office

    const officeData = [
        {
            flag: "https://i.ibb.co.com/r7zXt7q/image-19-66dec9e568f2d.webp",
            name: "USA",
        },
        {
            flag: "https://i.ibb.co.com/LQ5xHsS/image-19-1-66dec9ed167f9.webp",
            name: "Ireland",
        },
        {
            flag: "https://i.ibb.co.com/G3KFKGj/image-19-2-66dec9f207e3f.webp",
            name: "Europe",
        },
        {
            flag: "https://i.ibb.co.com/q93xmvx/image-19-3-66dec9f6d95e8.webp",
            name: "Canada",
        },
        {
            flag: "https://i.ibb.co.com/wshxT0Z/image-19-4-66dec9fba2e6e.webp",
            name: "Australia",
        },

        {
            flag: "https://i.ibb.co.com/r7zXt7q/image-19-66dec9e568f2d.webp",
            name: "USA",
        },
        {
            flag: "https://i.ibb.co.com/LQ5xHsS/image-19-1-66dec9ed167f9.webp",
            name: "Ireland",
        },
        {
            flag: "https://i.ibb.co.com/G3KFKGj/image-19-2-66dec9f207e3f.webp",
            name: "Europe",
        },
        {
            flag: "https://i.ibb.co.com/q93xmvx/image-19-3-66dec9f6d95e8.webp",
            name: "Canada",
        },
        {
            flag: "https://i.ibb.co.com/wshxT0Z/image-19-4-66dec9fba2e6e.webp",
            name: "Australia",
        },
    ]

    const handleMouseEnter = (name) => {
        setHoveredOffice(name)
    }

    const handleMouseLeave = () => {
        setHoveredOffice(null)
    }

    return (
        <div className="">
            <div className="  sectionGap  bg-white">
                <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-5 xl:gap-[23px]  lg:gap-[5px]">
                    {officeData.map((office) => (
                        <div
                            key={office.name}
                            onMouseEnter={() => handleMouseEnter(office.name)}
                            onMouseLeave={handleMouseLeave}
                            className="py-5 flex items-center justify-center
            bg-white"
                        >
                            <div className="flex items-center gap-2">
                                <LazyLoadImage
                                    src={office.flag}
                                    alt={`Flag of ${office.name}`}
                                />
                                <p>{office.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SelectPage
