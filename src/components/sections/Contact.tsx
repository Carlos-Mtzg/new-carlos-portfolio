"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Mail, MoveRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";
import { contactLinks } from "@/lib/data/contact";

const iconMap: Record<string, IconType | LucideIcon> = {
  linkedin: FaLinkedin,
  github: FaGithub,
  mail: Mail,
};

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup
    .string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

type FormData = yup.InferType<typeof schema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit = ({ name, email, message }: FormData) => {
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(
      `From: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.open(
      `mailto:carlos.mtzg2004@gmail.com?subject=${subject}&body=${body}`,
    );
    reset();
  };

  return (
    <section
      className="relative min-h-screen timeline-view animate-blurred-fade-in animate-range-[entry_10%_contain_30%]"
      id="contact"
    >
      <div className="relative z-10 flex min-h-screen max-w-5xl flex-col justify-center px-12 py-24 md:px-24 lg:px-32">
        <span className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-light-purple/30 bg-light-purple/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-light-purple">
          <span className="h-1.5 w-1.5 rounded-full bg-dark-purple" />
          Contact
        </span>

        <h2 className="mb-4 text-3xl font-bold tracking-tight text-text md:text-4xl">
          Let&apos;s work together
        </h2>
        <p className="mb-12 max-w-md text-base leading-relaxed text-text/60">
          Open to full-time roles, freelance projects, and collaborations. Reach
          out through any of these channels or drop me a message below.
        </p>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-3">
            {contactLinks.map(({ label, value, url, icon, description }) => {
              const Icon = iconMap[icon];
              return (
                <a
                  key={label}
                  href={url}
                  target={icon !== "mail" ? "_blank" : undefined}
                  rel={icon !== "mail" ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-xl border border-light-purple/10 bg-light-purple/5 p-4 transition-colors duration-300 hover:border-light-purple/20 hover:bg-light-purple/8"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-light-purple/15 bg-light-purple/5 text-dark-purple transition-colors duration-200 group-hover:border-dark-purple/30 group-hover:bg-dark-purple/10">
                    {Icon && <Icon size={18} />}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium uppercase tracking-widest text-light-purple/60">
                      {description}
                    </p>
                    <p className="truncate text-sm font-medium text-text/80 transition-colors duration-200 group-hover:text-text">
                      {value}
                    </p>
                  </div>
                  <span className="text-light-purple/30 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-dark-purple">
                    <MoveRight size={15} />
                  </span>
                </a>
              );
            })}
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="flex flex-col gap-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium uppercase tracking-widest text-light-purple/60">
                  Name
                </label>
                <input
                  {...register("name")}
                  placeholder="Write your name"
                  className="rounded-lg border border-light-purple/15 bg-light-purple/5 px-4 py-2.5 text-sm text-text placeholder:text-text/30 outline-none transition-colors duration-200 focus:border-dark-purple/50 focus:bg-light-purple/8"
                />
                {errors.name && (
                  <p className="text-xs text-red-400">{errors.name.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium uppercase tracking-widest text-light-purple/60">
                  Email
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Write your email"
                  className="rounded-lg border border-light-purple/15 bg-light-purple/5 px-4 py-2.5 text-sm text-text placeholder:text-text/30 outline-none transition-colors duration-200 focus:border-dark-purple/50 focus:bg-light-purple/8"
                />
                {errors.email && (
                  <p className="text-xs text-red-400">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium uppercase tracking-widest text-light-purple/60">
                Message
              </label>
              <textarea
                {...register("message")}
                rows={5}
                placeholder="Tell me about your project..."
                className="resize-none rounded-lg border border-light-purple/15 bg-light-purple/5 px-4 py-2.5 text-sm text-text placeholder:text-text/30 outline-none transition-colors duration-200 focus:border-dark-purple/50 focus:bg-light-purple/8"
              />
              {errors.message && (
                <p className="text-xs text-red-400">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="mt-2 rounded-lg border border-dark-purple/40 bg-dark-purple/10 px-6 py-2.5 text-sm font-medium text-dark-purple transition-colors duration-200 hover:border-dark-purple/60 hover:bg-dark-purple/20"
            >
              {isSubmitSuccessful ? "Message sent" : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
