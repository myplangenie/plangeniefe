"use client";

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
import { FaArrowRightLong } from "react-icons/fa6";

type Props = {
  control: Control<any>;
  onContinue: () => void;
};

const UserProfileForm = ({ control, onContinue }: Props) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-14">
        <div>
          <div className="size-[40px] rounded-[6px] bg-[#EDAE40] flex items-center justify-center">
            <div className="size-[10px] rounded-[6px] bg-white"></div>
          </div>
        </div>
        <div>
          <h4 className="text-xl font-black capitalize text-[#050506]">User profile</h4>
        </div>
      </div>

      <form action="">
        <div className="mb-4 form-group">
          <label className="text-black font-black text-sm mb-1 block">
            What&apos; your full name?
          </label>
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                className="border border-solid border-[#66666680]"
              />
            )}
          />
        </div>
        <div className="mb-4 form-group">
          <label className="text-black font-black text-sm mb-1 block">
            What&apos;s your role in the business?
          </label>
          <Controller
            name="role"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="border border-solid border-[#66666680] w-full py-7">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="owner">Owner</SelectItem>
                  <SelectItem value="founder">Founder</SelectItem>
                  <SelectItem value="manager">Manager</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>
        <div className="mb-4 form-group">
          <label className="text-black font-black text-sm mb-1 block">
            Have you built a business plan before?
          </label>
          <Controller
            name="builtPlanBefore"
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
        <div className="mb-4 form-group">
          <label className="text-black font-black text-sm mb-1 block">
            What best describes your planning goal today?
          </label>
          <Controller
            name="planningGoal"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="border border-solid border-[#66666680] w-full py-7">
                  <SelectValue placeholder="Select goal" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="start">Start a business</SelectItem>
                  <SelectItem value="improve">Improve existing business</SelectItem>
                  <SelectItem value="invest">Seek investment</SelectItem>
                  <SelectItem value="learn">Learn planning</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>
        <div className="mb-4 form-group">
          <label className="text-black font-black text-sm mb-1 block">
            Would you like to include personal life planning later?
          </label>
          <Controller
            name="includePersonalPlanning"
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
        <Button
          type="button"
          onClick={onContinue}
          className="bg-accent w-max py-7 rounded-[6px] ml-auto !px-10 mt-14 mb-7 flex gap-2 items-center"
        >
          Continue
          <FaArrowRightLong />
        </Button>
      </form>
    </div>
  );
};

export default UserProfileForm;

