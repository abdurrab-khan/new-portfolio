import React, { useState } from "react";
import { TabContainer, Frame } from "./Container";
import Input from "@/components/windows-95/common/Input";
import TextArea from "@/components/windows-95/common/TextArea";

const RetroButton = ({
  onClick,
  type,
  children,
  variant = "default",
}: {
  onClick?: () => void;
  type?: "button" | "submit";
  children: React.ReactNode;
  variant?: "default" | "primary";
}) => {
  const base =
    "inline-flex h-8 w-24 items-center justify-center border-b-dark-gray border-r-dark-gray border border-t-white border-l-white px-3 text-xs font-semibold";

  const variantClass =
    variant === "primary"
      ? "bg-[#000080] text-yellow hover:bg-[#1e1b4b]"
      : "bg-[#c0c0c0] text-black hover:bg-[#d4d4d4]";

  return (
    <button type={type ?? "button"} onClick={onClick} className={base + " " + variantClass}>
      {children}
    </button>
  );
};

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClear = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      alert("Name and Message fields are required!");
      return;
    }
    alert(
      "Message simulating sending:\n\nTo: visitor\nName: " +
        formData.name +
        "\nEmail: " +
        formData.email +
        "\nSubject: " +
        formData.subject +
        "\n\n" +
        formData.message,
    );
    handleClear();
  };

  return (
    <TabContainer title="Contact Us">
      <Frame title="Contact Form">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-3">
          <div className="flex items-center gap-3">
            <label htmlFor="name" className="w-20 shrink-0 font-semibold">
              <span className="underline decoration-black">N</span>ame:
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="h-8 text-sm"
            />
          </div>

          <div className="flex items-center gap-3">
            <label htmlFor="email" className="w-20 shrink-0 font-semibold">
              <span className="underline decoration-black">E</span>-mail:
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="h-8 text-sm"
            />
          </div>

          <div className="flex items-center gap-3">
            <label htmlFor="subject" className="w-20 shrink-0 font-semibold">
              <span className="underline decoration-black">S</span>ubject:
            </label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Job Inquiry"
              className="h-8 text-sm"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-semibold">
              <span className="underline decoration-black">M</span>essage:
            </label>
            <div className="h-40">
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                className="h-full text-sm"
              />
            </div>
          </div>

          <div className="mt-2 flex justify-end gap-3">
            <RetroButton type="button" onClick={handleClear}>
              <span className="underline decoration-black">C</span>lear
            </RetroButton>
            <RetroButton type="submit" variant="primary">
              <span className="underline decoration-black">S</span>end
            </RetroButton>
          </div>
        </form>
      </Frame>
    </TabContainer>
  );
}

export default Contact;
