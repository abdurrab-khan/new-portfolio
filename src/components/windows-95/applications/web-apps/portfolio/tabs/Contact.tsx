import { z } from "zod";
import React from "react";
import { TabContainer, Frame } from "./Container";
import Input from "@/components/windows-95/common/Input";
import TextArea from "@/components/windows-95/common/TextArea";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email address").optional(),
  subject: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

type FormKeys = keyof z.infer<typeof contactFormSchema> | "sendError";

interface FormFieldProps {
  label: string;
  shortcut: string;
  id: string;
  name: FormKeys;
  type?: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const FormField = ({
  label,
  shortcut,
  id,
  name,
  type = "text",
  placeholder,
  value,
  error,
  onChange,
}: FormFieldProps) => (
  <div className="not-first:mt-5">
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="w-20 shrink-0 font-semibold">
        <span className="underline decoration-black">{shortcut}</span>
        {label}
      </label>
      <div className="flex-1">
        <Input
          id={id}
          name={name}
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          className="h-8 w-full text-sm"
        />
        <div className="h-5">{error && <span className="text-xs text-red-600">{error}</span>}</div>
      </div>
    </div>
  </div>
);

function Contact() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState("");
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [validationError, setValidationError] = React.useState<{
    [K in FormKeys]?: string;
  }>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClear = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setValidationError({ name: "", email: "", subject: "", message: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    const result = contactFormSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: { [K in FormKeys]?: string } = {};
      result.error.issues.forEach((err) => {
        if (err.path.length > 0) {
          const fieldName = err.path[0] as FormKeys;
          fieldErrors[fieldName] = err.message;
        }
      });
      setValidationError(fieldErrors);
      return;
    }

    setIsLoading(true);
    try {
      // TODO: Privately store keys like this instead of hardcoding in frontend
      const sendResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: "service_v6708ki",
          template_id: "template_biyl66w",
          user_id: "vKgUJhwJXb-eqnMEe",
          accessToken: "GtfPgXVh9_VJb7Lb86hkN",
          template_params: {
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message,
          },
        }),
      });

      if (!sendResponse.ok) {
        throw new Error("Failed to send message");
      }

      handleClear();
      setSuccessMessage("Message sent successfully!");
      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    } catch (err) {
      setValidationError({
        sendError: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <TabContainer title="Contact Us">
      <Frame title="Contact Form">
        <form onSubmit={handleSubmit} className="flex flex-col p-3">
          <FormField
            label="ame:"
            shortcut="N"
            id="name"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            error={validationError?.name}
            onChange={handleChange}
          />

          <FormField
            label="-mail:"
            shortcut="E"
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            error={validationError?.email}
            onChange={handleChange}
          />

          <FormField
            label="ubject:"
            shortcut="S"
            id="subject"
            name="subject"
            placeholder="Job Inquiry"
            value={formData.subject}
            error={validationError?.subject}
            onChange={handleChange}
          />

          <div className="mt-5">
            <label htmlFor="message" className="mb-2 block font-semibold">
              <span className="underline decoration-black">M</span>essage:
            </label>
            <div className="h-40">
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                className="h-full w-full text-sm"
              />
            </div>
            <div className="h-5">
              {validationError?.message && (
                <span className="text-xs text-red-600">{validationError.message}</span>
              )}
            </div>
          </div>

          {successMessage && (
            <div className="text-yellow mt-2 flex items-center bg-[#000080] p-2">
              <span className="border-yellow mr-2 border px-1 text-xs">i</span>
              <span className="text-sm font-semibold">{successMessage}</span>
            </div>
          )}

          <div className="mt-2 flex justify-end gap-3">
            <RetroButton type="button" onClick={handleClear} disabled={isLoading}>
              <span className="underline decoration-black">C</span>lear
            </RetroButton>
            <RetroButton type="submit" variant="primary" disabled={isLoading}>
              {isLoading ? (
                <span className="animate-pulse">Sending...</span>
              ) : (
                <>
                  <span className="underline decoration-black">S</span>end
                </>
              )}
            </RetroButton>
          </div>
        </form>
      </Frame>
    </TabContainer>
  );
}

const RetroButton = ({
  onClick,
  type,
  children,
  variant = "default",
  disabled = false,
}: {
  onClick?: () => void;
  type?: "button" | "submit";
  children: React.ReactNode;
  variant?: "default" | "primary";
  disabled?: boolean;
}) => {
  const base =
    "inline-flex h-8 w-24 items-center justify-center border-b-dark-gray border-r-dark-gray border border-t-white border-l-white px-3 text-xs font-semibold";

  let variantClass =
    variant === "primary"
      ? "bg-[#000080] text-yellow hover:bg-[#1e1b4b]"
      : "bg-[#c0c0c0] text-black hover:bg-[#d4d4d4]";

  if (disabled) {
    variantClass =
      variant === "primary"
        ? "bg-[#000080] text-gray-400 opacity-90 cursor-wait"
        : "bg-[#c0c0c0] text-gray-500 opacity-90 cursor-wait";
  }

  return (
    <button
      type={type ?? "button"}
      onClick={onClick}
      disabled={disabled}
      className={base + " " + variantClass}
    >
      {children}
    </button>
  );
};

export default Contact;
