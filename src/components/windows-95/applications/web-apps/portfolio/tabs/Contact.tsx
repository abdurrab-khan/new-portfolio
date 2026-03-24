import React, { useState } from "react";
import TabContainer from "./TabContainer";
import Input from "@/components/windows-95/common/Input";
import TextArea from "@/components/windows-95/common/TextArea";

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

  return (
    <TabContainer title="Contact Us">
      <div className="flex w-full flex-col gap-4 p-4 text-sm text-black">
        <div className="border-b-dark-gray border-r-dark-gray rounded-sm border-2 border-t-white border-l-white bg-[#c0c0c0] p-px">
          <div className="border-t-dark-gray border-l-dark-gray border-r-light-gray border-b-light-gray rounded-sm border-2 bg-white">
            <div className="border-b-dark-gray flex items-center justify-between border-b-2 bg-linear-to-b from-[#000080] to-[#1e1b4b] px-2 py-1">
              <div className="flex min-w-0 items-center gap-2">
                <div className="flex items-center gap-1">
                  <span className="h-2.5 w-2.5 rounded-sm bg-[#808080]" />
                  <span className="h-2.5 w-2.5 rounded-sm bg-[#ffff00]" />
                  <span className="h-2.5 w-2.5 rounded-sm bg-[#00aa00]" />
                </div>
                <span className="text-yellow truncate text-xs font-bold">SEND AN E-MAIL</span>
              </div>
              <span className="text-yellow text-[10px] font-bold opacity-90">95</span>
            </div>

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
          </div>
        </div>
      </div>
    </TabContainer>
  );
}

export default Contact;
