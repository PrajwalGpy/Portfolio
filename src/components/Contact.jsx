import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { BiSend } from "react-icons/bi";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message) {
      errors.message = "Message is required";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    } else {
      setIsSent(true);

      emailjs
        .send(
          "service_4akz84v",
          "template_he5ziwu",
          formData,
          "5aTIfmsKwWCrryBjn"
        )
        .then((response) => {
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.error(error.text);
          toast.error("Something went wrong, Please try again!");
        })
        .finally(() => {
          setIsSent(false);
        });
    }
  };

  return (
    <div className="p-4 lg:w-3/4" id="contact">
      <Toaster />
      <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
        Let's Connect
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex space-x-4">
          <div className="lg:w-1/2">
            <input
              type="text"
              id="name"
              name="name" // Ensure name is set for binding
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="mb-8 w-full appearance-none border border-stone-50/30 rounded-lg py-2 px-3 text-stone-50/30 bg-transparent focus:border-stone-50/30 focus:outline-none focus:border-stone-400"
            />
            {errors.name && (
              <p className="text-rose-800 text-sm">{errors.name}</p>
            )}
          </div>
          <div className="lg:w-1/2">
            <input
              type="email"
              id="email"
              name="email" // Ensure name is set for binding
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="mb-8 w-full appearance-none border border-stone-50/30 rounded-lg py-2 px-3 text-stone-50/30 bg-transparent focus:border-stone-50/30 focus:outline-none focus:border-stone-400"
            />
            {errors.email && (
              <p className="text-rose-800 text-sm">{errors.email}</p>
            )}
          </div>
        </div>
        <div className="mb-4">
          <textarea
            id="message"
            name="message" // Ensure name is set for binding
            value={formData.message} // Fixed value binding
            onChange={handleChange}
            placeholder="Message"
            className="mb-8 w-full appearance-none border border-stone-50/30 rounded-lg py-2 px-3 text-stone-50/30  text-sm bg-transparent focus:outline-none focus:border-stone-400"
            rows="6"
          />
          {errors.message && (
            <p className="text-rose-800 text-sm">{errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          className={`mb-8 w-full rounded border border-stone-50/30 bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-300 ${
            isSent ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={isSent}
        >
          <div className="flex items-center justify-center gap-2">
            {isSent ? "Sending...." : "Send"}
            <BiSend />
          </div>
        </button>
      </form>
    </div>
  );
}

export default Contact;
