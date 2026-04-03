"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

type InsuranceType = "health" | "term";

export function SchedulingCard() {
  const [activeTab, setActiveTab] = useState<InsuranceType>("health");

  return (
    <div className="w-full max-w-[411px] overflow-hidden rounded-[30px] border border-ditto-grey-50 bg-white shadow-[0px_4px_13px_0px_rgba(0,0,0,0.03)]">
      <div className="p-6">
        {/* Tabs */}
        <div className="flex gap-2">
          <TabButton
            label="Health Insurance"
            active={activeTab === "health"}
            onClick={() => setActiveTab("health")}
          />
          <TabButton
            label="Term Insurance"
            active={activeTab === "term"}
            onClick={() => setActiveTab("term")}
          />
        </div>

        {/* Content */}
        <div className="mt-8">
          <h2 className="font-heading text-[21px] font-medium leading-tight tracking-tight text-ditto-black">
            Earliest Timeslot for{" "}
            {activeTab === "health" ? "Health" : "Term"} Insurance
          </h2>

          {/* Quick Expert Guidance badge */}
          <div className="mt-3 inline-flex items-center gap-2 rounded-2xl bg-ditto-yellow px-4 py-1.5">
            <Image src="/icons/lightning.png" alt="" width={25} height={25} />
            <span className="font-heading text-[17px] font-medium tracking-tight text-ditto-black">
              Quick Expert Guidance
            </span>
          </div>
        </div>

        {/* Date */}
        <div className="mt-10">
          <div className="flex items-center gap-2">
            <Image src="/icons/calendar-date.svg" alt="" width={20} height={20} />
            <span className="font-heading text-[15px] text-[#1a1a1a] opacity-70">Saturday</span>
          </div>
          <p className="mt-2 font-heading text-2xl font-medium tracking-tight text-[#2c2e30]">
            04 Apr, 2026
          </p>
        </div>

        {/* Separator */}
        <div className="my-5 border-t border-dashed border-ditto-grey-50" />

        {/* Time */}
        <div>
          <div className="flex items-center gap-2">
            <Image src="/icons/clock-time.svg" alt="" width={20} height={20} />
            <span className="font-heading text-[15px] text-[#1a1a1a] opacity-70">Best Time</span>
          </div>
          <div className="mt-2 flex items-center gap-3">
            <TimeDisplay time="1:00" period="PM" />
            <ArrowRight className="h-5 w-5 text-[#1a1a1a]" />
            <TimeDisplay time="1:30" period="PM" />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3 px-6 pb-6">
        <button className="flex h-[62px] w-full items-center justify-between rounded-[18px] bg-ditto-blue-dark px-6 font-heading text-xl font-medium text-white shadow-[0px_6px_12px_0px_rgba(30,37,75,0.06)] transition-colors hover:bg-ditto-blue-active">
          <span>Schedule a Free Call</span>
          <Image src="/icons/phone-calendar.svg" alt="" width={21} height={20} />
        </button>
        <button className="flex h-[62px] w-full items-center justify-between rounded-[18px] border border-ditto-grey-50 bg-white px-6 font-heading text-xl font-medium text-ditto-grey-600 shadow-[0px_4px_13px_0px_rgba(0,0,0,0.03)] transition-colors hover:bg-ditto-grey-100">
          <span>Pick preferred time (24 slots)</span>
          <Image src="/icons/calendar-slot.svg" alt="" width={21} height={21} />
        </button>
      </div>
    </div>
  );
}

function TabButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`whitespace-nowrap rounded-full border-2 px-6 py-2.5 text-base font-semibold transition-all ${
        active
          ? "border-ditto-blue-active bg-ditto-blue-bg text-ditto-blue-active"
          : "border-ditto-grey-50 bg-white text-ditto-black hover:border-ditto-grey-400"
      }`}
    >
      {label}
    </button>
  );
}

function TimeDisplay({ time, period }: { time: string; period: string }) {
  return (
    <div className="flex items-baseline gap-1">
      <span className="font-heading text-2xl font-medium text-[#1a1a1a]">{time}</span>
      <span className="font-heading text-[13px] font-medium text-[#1a1a1a]">{period}</span>
    </div>
  );
}
