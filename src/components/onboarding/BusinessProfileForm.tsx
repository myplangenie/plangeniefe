"use client";

import { useState } from "react";
import { Controller, Control } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

type Props = {
  control: Control<any>;
  onContinue: (tools: string[]) => void;
  onBack?: () => void;
};

const BusinessProfileForm = ({ control, onContinue, onBack }: Props) => {
  const [tools, setTools] = useState<string[]>([]);

  const toggleTool = (tool: string) => {
    setTools((prev) =>
      prev.includes(tool) ? prev.filter((t) => t !== tool) : [...prev, tool]
    );
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-14">
        <div>
          <div className="size-[40px] rounded-[6px] bg-[#EDAE40] flex items-center justify-center">
            <div className="size-[10px] rounded-[6px] bg-white"></div>
          </div>
        </div>
        <div>
          <h4 className="text-xl font-black capitalize text-[#050506]">Business Profile</h4>
        </div>
      </div>

      <form>
        {/* Business name */}
        <div className="mb-4 form-group">
          <label className="text-black font-black text-sm mb-1 block">
            What is the name of your business or idea?
          </label>
          <Controller
            name="businessName"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                placeholder="Name of your business/idea"
                className="border border-solid border-[#66666680]"
              />
            )}
          />
        </div>

        {/* Business stage */}
        <div className="mb-4 form-group">
          <label className="text-black font-black text-sm mb-1 block">
            What stage is your business in?
          </label>
          <Controller
            name="businessStage"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="border border-solid border-[#66666680] w-full py-7">
                  <SelectValue placeholder="Select stage" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pre-launch">Pre-launch</SelectItem>
                  <SelectItem value="startup">Startup</SelectItem>
                  <SelectItem value="growth">Growth</SelectItem>
                  <SelectItem value="established">Established</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>

        {/* Industry */}
        <div className="mb-4 form-group">
          <label className="text-black font-black text-sm mb-1 block">
            What industry are you in?
          </label>
          <Controller
            name="industry"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="border border-solid border-[#66666680] w-full py-7">
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="nonprofit">Nonprofit</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>

        {/* Location */}
        <div className="mb-4 form-group">
          <label className="text-black font-black text-sm mb-1 block">
            Where is your business based?
          </label>
          <div className="grid grid-cols-2 gap-3">
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="border border-solid border-[#66666680] w-full py-7">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="ng">Nigeria</SelectItem>
                    <SelectItem value="gh">Ghana</SelectItem>
                    <SelectItem value="ke">Kenya</SelectItem>
                    <SelectItem value="za">South Africa</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />

            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="border border-solid border-[#66666680] w-full py-7">
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="city-1">City 1</SelectItem>
                    <SelectItem value="city-2">City 2</SelectItem>
                    <SelectItem value="city-3">City 3</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
        </div>

        {/* Venture type */}
        <div className="mb-4 form-group">
          <label className="text-black font-black text-sm mb-1 block">
            Is this a for-profit, nonprofit, or hybrid venture?
          </label>
          <Controller
            name="ventureType"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="border border-solid border-[#66666680] w-full py-7">
                  <SelectValue placeholder="Select from dropdown" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="for-profit">For-profit</SelectItem>
                  <SelectItem value="nonprofit">Nonprofit</SelectItem>
                  <SelectItem value="hybrid">Hybrid</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>

        {/* Team size */}
        <div className="mb-4 form-group">
          <label className="text-black font-black text-sm mb-1 block">
            How many people are on your team?
          </label>
          <Controller
            name="teamSize"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="border border-solid border-[#66666680] w-full py-7">
                  <SelectValue placeholder="Select team size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Just me</SelectItem>
                  <SelectItem value="2-5">2 - 5</SelectItem>
                  <SelectItem value="6-20">6 - 20</SelectItem>
                  <SelectItem value="21-50">21 - 50</SelectItem>
                  <SelectItem value="51-200">51 - 200</SelectItem>
                  <SelectItem value="200+">200+</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>

        {/* Funding */}
        <div className="mb-4 form-group">
          <label className="text-black font-black text-sm mb-1 block">
            Are you looking for funding or investment?
          </label>
          <Controller
            name="funding"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="border border-solid border-[#66666680] w-full py-7">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>

        {/* Tools chips */}
        <div className="mb-4 form-group">
          <label className="text-black font-black text-sm mb-2 block">
            Do you use any of these tools today?
          </label>
          <div className="flex flex-wrap gap-3">
            {["Quickbooks", "Stripe", "Notion", "Xero", "Hubspot", "Trello"].map(
              (tool) => {
                const selected = tools.includes(tool);
                return (
                  <Button
                    key={tool}
                    type="button"
                    variant={selected ? "secondary" : "outline"}
                    size="sm"
                    className={`rounded-[6px] px-7 py-5 border border-solid border-[#CFD9E0] ${selected ? "bg-[#EDAE400D] border-accent" : ""}`}
                    onClick={() => toggleTool(tool)}
                  >
                    {tool}
                  </Button>
                );
              }
            )}
          </div>
        </div>

        {/* Connect tools */}
        <div className="mb-4 form-group">
          <label className="text-black font-black text-sm mb-1 block">
            Would you like to connect Plan Genie with these tools?
          </label>
          <Controller
            name="connectTools"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="border border-solid border-[#66666680] w-full py-7">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div className="flex justify-end gap-3">
          {onBack && (
            <Button
              type="button"
              variant="outline"
              onClick={onBack}
              className="w-max h-[3.5rem] rounded-[6px] !px-10 mt-14 mb-7 flex gap-2 items-center"
            >
              <FaArrowLeftLong />
              Back
            </Button>
          )}
          <Button
            type="button"
            onClick={() => onContinue(tools)}
            className="bg-accent w-max h-[3.5rem] rounded-[6px] !px-10 mt-14 mb-7 flex gap-2 items-center"
          >
            Continue
            <FaArrowRightLong />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BusinessProfileForm;
