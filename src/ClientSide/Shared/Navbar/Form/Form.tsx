import React, { useEffect, useState } from "react";
import { MdArrowRightAlt } from "react-icons/md";

const Form = ({ setIsModalOpen, isModalOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    destination: "",
    coaching: "",
    agree: false,
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(formData); // Handle form submit here
    // Close modal after submission
    setIsModalOpen(false);
  };
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);
  return (
    <div>
      <form onSubmit={handleSubmit} className="">
        {/* Name Field */}
        <div className="mb-[24px]">
          <label
            htmlFor="name"
            className="block mb-[10px] text-[16px] leading-[24px] font-normal font-helvetica text-[#1E1E1E]"
          >
            Name*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full pl-[20px]  bg-[#F5F5F5] outline-none py-[13px] border rounded-lg text-[16px] leading-[24px] font-normal font-helvetica text-[#1E1E1E]/[.6]"
            placeholder="Your Full Name"
            required
          />
        </div>
        {/* Email Field */}
        {/* <div className="mb-[24px]">
                    <label
                        htmlFor="email"
                        className="block mb-[10px] text-[16px] leading-[24px] font-normal font-helvetica text-[#1E1E1E]"
                    >
                        Email*
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-[20px]  bg-[#F5F5F5] outline-none py-[13px] border rounded-lg text-[16px] leading-[24px] font-normal font-helvetica text-[#1E1E1E]/[.6] "
                        placeholder="Email Address"
                        required
                    />
                </div> */}

        {/* Phone Number Field */}
        <div className="mb-[24px]">
          <label
            htmlFor="phone"
            className="block mb-[10px] text-[16px] leading-[24px] font-normal font-helvetica text-[#1E1E1E]"
          >
            Phone Number*
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full pl-[20px]  bg-[#F5F5F5] outline-none py-[13px] border rounded-lg text-[16px] leading-[24px] font-normal font-helvetica text-[#1E1E1E]/[.6]"
            placeholder="Phone Number"
            required
          />
        </div>
        {/* City Dropdown */}
        {/* <div className="mb-[24px]">
                    <label
                        htmlFor="city"
                        className="block mb-[10px] text-[16px] leading-[24px] font-normal font-helvetica text-[#1E1E1E]"
                    >
                        Your City*
                    </label>
                    <select
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full pl-[20px]  bg-[#F5F5F5] outline-none py-[13px] border rounded-lg text-[16px] leading-[24px] font-normal font-helvetica text-[#1E1E1E]/[.6]"
                        required
                    >
                        <option value="">Please Select</option>
                        <option value="City 1">City 1</option>
                        <option value="City 2">City 2</option>
                        <option value="City 3">City 3</option>
                    </select>
                </div> */}

        {/* Preferred Destination Dropdown */}
        <div className="mb-[24px]">
          <label
            htmlFor="destination"
            className="block mb-[10px] text-[16px] leading-[24px] font-normal font-helvetica text-[#1E1E1E]"
          >
            Desired Country*
          </label>
          <select
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className="w-full pl-[20px]  bg-[#F5F5F5] outline-none py-[13px] border rounded-lg text-[16px] leading-[24px] font-normal font-helvetica text-[#1E1E1E]/[.6]"
            required
          >
            <option value="">Please Select</option>
            <option value="Destination 1">Destination 1</option>
            <option value="Destination 2">Destination 2</option>
            <option value="Destination 3">Destination 3</option>
          </select>
        </div>
        {/* Coaching Dropdown */}
        {/* <div className="">
          <label
            htmlFor="coaching"
            className="block mb-[10px] text-[16px] leading-[24px] font-normal font-helvetica text-[#1E1E1E]"
          >
            Are you looking for coaching?
          </label>
          <select
            id="coaching"
            name="coaching"
            value={formData.coaching}
            onChange={handleChange}
            className="w-full pl-[20px]  bg-[#F5F5F5] outline-none py-[13px] border rounded-lg text-[16px] leading-[24px] font-normal font-helvetica text-[#1E1E1E]/[.6]"
          >
            <option value="">Please Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div> */}
        {/* Agreement Checkbox */}
        {/* <div className="mb-[50px] mt-[26px]">
          <label className="inline-flex items-center  text-[#1E1E1E] custom-checkbox">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="mr-2 rounded-lg checked:text-emerald-800"
              required
            />
            <span className="checkmark"></span>I agree to the
            <span className="text-[#F6941E] ml-[5px]">
              {"    "}
              terms & conditions
            </span>
          </label>
        </div> */}
        {/* Submit Button */}
        <button
          type="submit"
          className=" bg-white flex justify-center text-[#F6941E] border border-[#F6941E] items-center hover:bg-[#F6941E] hover:text-white py-2 px-4 
                      font-helvetica text-[18px] leading-[23px] font-bold "
        >
          Submit <MdArrowRightAlt className="ml-2" size={32} />
        </button>
      </form>
    </div>
  );
};

export default Form;
