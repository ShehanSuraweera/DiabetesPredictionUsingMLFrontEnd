"use client";

import Image from "next/image";
import { useState } from "react";
import contactImage from "../../images/contact/contact.svg";
import { Input, Textarea } from "@nextui-org/react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form data:", formData);
  };

  return (
    <div className="px-8 pb-12 m-0 overflow-hidden lg:pb-44 lg:px-36">
      <div className="flex flex-col w-full gap-2 mt-20 sm:mb-12">
        <h1 className="text-2xl font-bold">Reach Out to Us</h1>
        <p>
          Have questions or feedback? Fill out the form below, and we'll get
          back to you as soon as possible!
        </p>
      </div>
      <div className="flex flex-col items-center justify-between gap-12 mt-2 mb-2 lg:flex-row">
        <div className="flex flex-col w-full gap-12">
          <form className="flex flex-col w-full gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col justify-between w-full sm:gap-4 sm:flex-row">
              <div className="flex flex-col w-full ">
                <Input
                  id="name"
                  labelPlacement="outside"
                  size="lg"
                  label="Name"
                  type="text"
                  name="name"
                  required={true}
                  className="w-full text-base font-medium "
                  value={formData.name}
                  onChange={handleChange}
                  color="success"
                />
              </div>
              <div className="flex flex-col w-full ">
                <Input
                  id="email"
                  labelPlacement="outside"
                  size="lg"
                  label="Email"
                  type="email"
                  name="email"
                  required={true}
                  className="w-full text-base font-medium "
                  value={formData.email}
                  onChange={handleChange}
                  color="success"
                />
              </div>
            </div>
            <div className="flex flex-col w-full sm:col-span-2">
              <Input
                id="subject"
                labelPlacement="outside"
                size="lg"
                label="Subject"
                type="text"
                name="subject"
                required={true}
                className="text-base font-medium "
                value={formData.subject}
                onChange={handleChange}
                color="success"
              />
            </div>
            <div className="flex flex-col w-full">
              <Textarea
                size="lg"
                id="message"
                name="message"
                label="Message"
                value={formData.message}
                onChange={handleChange}
                color="success"
                key="flat"
                variant="flat"
                labelPlacement="outside"
                placeholder="Enter your message"
                className="w-full col-span-12 mt-5 mb-6 md:col-span-6 md:mb-10"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-4 py-2 text-base text-white bg-green-600 border-none rounded-full cursor-pointer w-44 lg:w-60 hover:bg-green-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className=" flex justify-center items-center mt-0 lg:mt-[-50px] w-full max-w-[600px]">
          <Image
            src={contactImage}
            alt=""
            className="w-full h-auto max-w-full"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
