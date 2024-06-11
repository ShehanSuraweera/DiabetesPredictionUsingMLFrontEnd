"use client";

import Image from "next/image";
import { useState } from "react";
import contactImage from "../../images/contact/contact.svg";

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
    <div className="m-0 px-8 pb-12 overflow-hidden">
      <div className="flex flex-col gap-12 mt-20 mb-12">
        <h1 className="text-2xl font-bold">Reach Out to Us</h1>
        <p>
          Have questions or feedback? Fill out the form below, and we'll get
          back to you as soon as possible!
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mt-24 mb-28">
        <div className="flex-1 flex flex-col gap-12">
          <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col lg:flex-row justify-between gap-5">
              <div className="flex-1 flex flex-col mb-4">
                <label htmlFor="name" className="font-bold mb-1">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-2 pl-5 border-none bg-green-300 h-7 rounded-full text-base"
                />
              </div>
              <div className="flex-1 flex flex-col mb-4">
                <label htmlFor="email" className="font-bold mb-1">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-2 pl-5 border-none bg-green-300 h-7 rounded-full text-base"
                />
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="subject" className="font-bold mb-1">
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="p-2 pl-5 border-none bg-green-300 h-7 rounded-full text-base"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="message" className="font-bold mb-1">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="p-2 pl-5 border-none bg-green-300 rounded-lg text-base resize-vertical min-h-[100px]"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="py-2 px-4 w-36 border-none rounded-full bg-green-600 text-white text-base cursor-pointer hover:bg-green-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="flex-1 flex justify-center items-center mt-0 lg:mt-[-50px]">
          <Image
            src={contactImage}
            alt=""
            className="w-full max-w-full h-auto"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
