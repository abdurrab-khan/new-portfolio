import React, { useState } from "react";
import TabContainer from "./TabContainer";
import Button from "../../../../common/Button";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    // Add logic to actually send email here if needed (e.g., EmailJS, Formspree)
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  const inputClasses =
    "w-full bg-white px-2 py-1 outline-none border-2 border-t-gray-600 border-l-gray-600 border-b-gray-300 border-r-gray-300 shadow-[1px_1px_0px_white_bottom,1px_1px_0px_white_right] focus:bg-[#000080] focus:text-white mb-4";

  return (
    <TabContainer titleImagePath="/assets/windows-95/applications/web-apps/portfolio/contact-title.png">
      <div className="flex h-full flex-col justify-start pb-4">
        <form onSubmit={handleSubmit} className="mx-auto w-full max-w-lg p-2">
          <div className="mb-2">
            <label htmlFor="name" className="mb-1 block text-sm font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={inputClasses}
              required
            />
          </div>

          <div className="mb-2">
            <label htmlFor="email" className="mb-1 block text-sm font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={inputClasses}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="mb-1 block text-sm font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={`${inputClasses} resize-none`}
              required
            />
          </div>

          <div className="flex justify-end">
            <div className="h-8 w-24">
              <Button type="submit">Send</Button>
            </div>
          </div>
        </form>
      </div>
    </TabContainer>
  );
}

export default Contact;
