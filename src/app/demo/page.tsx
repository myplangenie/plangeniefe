"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DisplayLayout from "@/components/layout/displayLayout";

import MainHeroImg from "@/images/hero/main.png";

import { FaCheck } from "react-icons/fa6";
import { toast } from "sonner";
import HeroImage from "@/components/pages/home/HeroImage";
import Image from "next/image";
import LogoCarousel from "@/components/pages/home/LogoCarousel";

const RequestDemo = () => {
  const schema = useMemo(
    () =>
      yup.object({
        name: yup.string().trim().required("Enter a valid name."),
        email: yup
          .string()
          .trim()
          .email("Enter a valid email address.")
          .required("Enter a valid email address."),
        phone: yup.string().optional(),
        company: yup.string().optional(),
        requirement: yup.string().optional(),
        subscribe: yup.boolean().optional(),
        offering: yup.string().optional(),
      }),
    []
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      requirement: "",
      subscribe: false,
      offering: "",
    },
    mode: "onBlur",
  });

  const onSubmit = (data: any) => {
    setSubmitting(true);
    setMessage("");
    fetch("/api/request-demo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        if (!res.ok) throw new Error((await res.json()).error || "Failed");
        setMessage("Thank you! We'll be in touch shortly.");
        toast.success("Demo request sent successfully");
        setTimeout(() => {
          if (typeof window !== "undefined") window.location.reload();
        }, 1500);
      })
      .catch((err) => {
        const msg = err?.message || "Something went wrong.";
        setMessage(msg);
        toast.error(msg);
      })
      .finally(() => setSubmitting(false));
  };

  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <DisplayLayout>
      {/* SEO metadata for Demo page */}
      {/* Next also reads static metadata below. */}
      <section className="relative hero-bg [#F4F7F2] pt-28 pb-24 px-5 md:px-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-12 items-center">
            {/* Left - Heading and imagery */}
            <div className="md:col-span-6">
              <h1 className="text-white font-bold font-manrope text-3xl sm:text-5xl md:text-5xl leading-tight tracking-tight">
                Get a Free 30-Minute
                <br /> Personalized Demo
              </h1>
              <div className="mt-10 md:mt-20">
                <div className="block md:hidden">
                  <Image
                    src={MainHeroImg}
                    alt="alt main"
                    width={1000}
                    quality={100}
                    height={1000}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="hidden md:block">
                  <HeroImage variant="compact" />
                </div>
              </div>
              <p className="mt-4 text-sm md:text-lg text-white font-manrope max-w-xl leading-loose md:mb-5">
                Get a guided tour with our experts to explore the
                platform&apos;s features, pricing, and more tailored to your
                business needs. See it in action and discover its potential for
                your team.
              </p>
              <ul className="text-xs sm:text-sm opacity-80 mb-5 hidden md:flex flex-col text-white gap-4 flex-wrap">
                <li className="flex items-center font-manrope text-base gap-2">
                  <div className="rounded-full size-[18px] bg-[#5B6364] flex items-center justify-center">
                    <FaCheck className="text-[10px] text-accent" />
                  </div>{" "}
                  Actionable plans built in minutes
                </li>
                <li className="flex items-center font-manrope text-base gap-2">
                  <div className="rounded-full size-[18px] bg-[#5B6364] flex items-center justify-center">
                    <FaCheck className="text-[10px] text-accent" />
                  </div>{" "}
                  Expert-level strategy guidance
                </li>
                <li className="flex items-center font-manrope text-base gap-2">
                  <div className="rounded-full size-[18px] bg-[#5B6364] flex items-center justify-center">
                    <FaCheck className="text-[10px] text-accent" />
                  </div>{" "}
                  Trusted by top business leaders
                </li>
              </ul>
            </div>

            {/* Right - Form card */}
            <div className="md:col-span-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-8 shadow-sm">
                <h2 className="text-xl md:text-2xl font-manrope text-black mb-6">
                  Request Your Free Demo
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  {/* Name */}
                  <div className="mb-4">
                    <label className="block text-[15px] text-[#1a1a1a]/80 mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <Controller
                      name="name"
                      control={control}
                      render={({ field }) => (
                        <Input
                          {...field}
                          type="text"
                          placeholder="Name"
                          className="h-12 rounded-xl border border-[#e5e7eb]"
                        />
                      )}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {/* Email */}
                    <div className="mb-4">
                      <label className="block text-[15px] text-[#1a1a1a]/80 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                          <Input
                            {...field}
                            type="email"
                            placeholder="Email"
                            className="h-12 rounded-xl border border-[#e5e7eb]"
                          />
                        )}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="mb-4">
                      <label className="block text-[15px] text-[#1a1a1a]/80 mb-2">
                        Phone
                      </label>
                      <Controller
                        name="phone"
                        control={control}
                        render={({ field }) => (
                          <Input
                            {...field}
                            type="tel"
                            placeholder="Phone"
                            className="h-12 rounded-xl border border-[#e5e7eb]"
                          />
                        )}
                      />
                    </div>
                  </div>
                  {/* Company */}
                  <div className="mb-4">
                    <label className="block text-[15px] text-[#1a1a1a]/80 mb-2">
                      Company
                    </label>
                    <Controller
                      name="company"
                      control={control}
                      render={({ field }) => (
                        <Input
                          {...field}
                          type="text"
                          placeholder="Company"
                          className="h-12 rounded-xl border border-[#e5e7eb]"
                        />
                      )}
                    />
                  </div>

                  {/* Offering */}
                  <div className="mb-4">
                    <label className="block text-[15px] text-[#1a1a1a]/80 mb-2">
                      Select Offering
                    </label>
                    <Controller
                      name="offering"
                      control={control}
                      render={({ field }) => (
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger className="!h-12 rounded-xl border border-[#e5e7eb] w-full py-4">
                            <SelectValue placeholder="Select Offering" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Plan Genie Lite">
                              Plan Genie Lite
                            </SelectItem>
                            <SelectItem value="Plan Genie Pro">
                              Plan Genie Pro
                            </SelectItem>
                            <SelectItem value="Plan Genie Prime">
                              Plan Genie Prime
                            </SelectItem>
                            <SelectItem value="Plan Genie Life">
                              Plan Genie Life
                            </SelectItem>
                            <SelectItem value="Plan Genie Live Training">
                              Plan Genie Live Training
                            </SelectItem>
                            <SelectItem value="Plan Genie Enterprise">
                              Plan Genie Enterprise
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </div>

                  {/* Requirement */}
                  <div className="mb-4">
                    <label className="block text-[15px] text-[#1a1a1a]/80 mb-2">
                      Requirement
                    </label>
                    <Controller
                      name="requirement"
                      control={control}
                      render={({ field }) => (
                        <textarea
                          {...field}
                          rows={5}
                          placeholder="Tell us a bit about your needs"
                          className="w-full rounded-xl border border-[#e5e7eb] p-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#c7cfd6]"
                        />
                      )}
                    />
                  </div>

                  {/* Subscribe */}
                  {/* <div className="mb-6 flex items-start gap-3">
                    <Controller
                      name="subscribe"
                      control={control}
                      render={({ field }) => (
                        <input
                          id="subscribe"
                          type="checkbox"
                          className="mt-1 size-4 rounded border-[#e5e7eb]"
                          checked={!!field.value}
                          onChange={(e) => field.onChange(e.target.checked)}
                        />
                      )}
                    />
                    <label
                      htmlFor="subscribe"
                      className="text-[14px] text-[#1a1a1a]/80 leading-relaxed"
                    >
                      Please email me updates about the product, including
                      information and free resources.
                    </label>
                  </div> */}

                  {message && (
                    <p className="text-sm mb-3 text-green-700">{message}</p>
                  )}
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full h-12 rounded-xl bg-primary text-white hover:bg-primary/90 disabled:opacity-60"
                  >
                    {submitting ? "Sending…" : "Request Demo"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LogoCarousel />
    </DisplayLayout>
  );
};

export default RequestDemo;
