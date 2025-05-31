import React, { useRef, useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { CgOrganisation, CgProfile } from "react-icons/cg";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from "emailjs-com";
import Alert, { AlertError } from "./Alert";

const Contact = () => {
  const [formLoading, setFormLoading] = useState({
    loading: false,
    sentMessage: "",
  });
  const formRef = useRef();
  const serviceId = import.meta.env.VITE_DOG_SERVICE_ID;
  const templateId = import.meta.env.VITE_DOG_TEMPLETE_ID;
  const userId = import.meta.env.VITE_DOG_USER_ID;

  function sendMessage(e) {
    setFormLoading({ loading: true, sentMessage: "" });
    e.preventDefault;
    emailjs.sendForm(serviceId, templateId, formRef.current, userId).then(
      (result) => {
        console.log(result?.text);
        setFormLoading({ loading: false, sentMessage: "done" });
        // alert();
        setTimeout(() => {
          setFormLoading({ loading: false, sentMessage: "" });
        }, 5000);
      },
      (error) => {
        console.log(error);
        setFormLoading({ loading: false, sentMessage: "failed" });

        // alert();
        setTimeout(() => {
          setFormLoading({ loading: false, sentMessage: "" });
        }, 5000);
      }
    );
  }

  return (
    <div id="contact">
      <div className="py-22 md:my-10 ">
        <div className=" flex flex-col  items-center justify-center ">
          <div className="fixed top-[14px] md:top-[17vh] z-40">
            {formLoading?.sentMessage == "done" && (
              <Alert text="Your message has been sent!" />
            )}
            {formLoading?.sentMessage == "failed" && (
              <AlertError text="Message Not Sent!, try again after a while" />
            )}
          </div>
          <div className=" px-4 py-8 flex flex-col gap-y-10 items-center justify-center w-full   ">
            <span className="text-2xl font-normal tracking-wider py-5 lg:py-0 hero-font text-center ">
              Let's Get in Touch.
            </span>
            <form ref={formRef} action={sendMessage} className="w-[100%]">
              <fieldset className="fieldset  border-base-300 rounded-box p-4 w-full border">
                <legend className="fieldset-legend text-sm">Contact me</legend>

                <label htmlFor="name" className="label pt-5">
                  Name
                </label>
                <span className="flex items-center relative">
                  <CgProfile className="text-xl font-light absolute right-[12px] z-[999]" />
                  <input
                    type="text"
                    name="name"
                    id="name"
                    maxLength="30"
                    pattern=".{1, 30}"
                    title="Maximum 30 characters allowed"
                    className="input rounded-lg pe-[42px]  focus:outline-0 w-full"
                    placeholder="Enter your name..."
                    required
                  />
                </span>

                <label htmlFor="emailAddress" className="label pt-3">
                  Email
                </label>
                <span className="flex items-center relative">
                  <MdOutlineEmail className="text-xl font-light absolute right-[12px]  z-[999]" />
                  <input
                    type="email"
                    name="emailAddress"
                    id="emailAddress"
                    className="input rounded-lg pe-[42px]  focus:outline-0 w-full"
                    placeholder="Enter your email..."
                    required
                  />
                </span>

                <label htmlFor="organization" className="label pt-3">
                  Organization
                </label>
                <span className="flex items-center relative">
                  <CgOrganisation className="text-xl font-light absolute right-[12px]  z-[999]" />
                  <input
                    type="text"
                    name="organization"
                    id="organization"
                    className="input rounded-lg pe-[42px]  focus:outline-0 w-full"
                    placeholder="Enter your organization..."
                    required
                  />
                </span>

                <label htmlFor="phoneNumber" className="label pt-3">
                  Phone Number
                </label>
                <span className="flex items-center relative">
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    minLength="11"
                    pattern="^\+?[1-9]\d{1,14}$"
                    // pattern="\d{11,}"
                    //   pattern="^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{3}[-.\s]?\d{4}$"
                    title="Enter a valid phone number with country code (e.g. +1234567890)"
                    className=" input rounded-lg pe-[42px] focus:outline-0 w-full"
                    placeholder="+234 567 890 1234"
                    required
                  />
                  <BsTelephone className="text-xl font-light absolute right-[12px] z-[999]" />
                </span>

                <label htmlFor="message" className="label pt-3">
                  Message
                </label>
                <span className="flex items-center relative">
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    className="textarea focus:outline-0 w-full"
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </span>

                <button
                  className="btn btn-primary my-4 w-full "
                  disabled={formLoading?.loading}
                >
                  {formLoading?.loading ? (
                    <span className="w-8 h-8 border-4 border-primary-content border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    "Send message"
                  )}
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
