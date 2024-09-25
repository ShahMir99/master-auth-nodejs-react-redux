import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "../ui/button";

interface PricingBoxProps {
  title?: string;
  description?: string;
  buttonText?: string;
  className?: string;
  isPaid?: boolean;
  forTeam?: boolean;
}

const PricingBox: React.FC<PricingBoxProps> = ({
  title,
  description,
  buttonText,
  className,
  isPaid,
  forTeam,
}) => {
  return (
    <div
      className={cn(
        "w-full p-6 border border-neutral-300 rounded-2xl",
        className
      )}
    >
      <div className="space-y-6">
        <div className="w-full flex items-center justify-between">
          <span className="bg-white text-xs font-medium px-2 rounded-full">
            {forTeam ? "For your team" : "For one person"}
          </span>
          <div className="h-12 w-12">
            {isPaid && (
              <div className="h-full w-full rounded-full bg-white flex items-center justify-center">
                <img
                  src="/images/crown.png"
                  className="w-[35px] h-[35px] object-fill"
                />
              </div>
            )}
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-2xl font-semibold">{title}</h1>
        </div>
      </div>
      <div className="w-full pt-3 h-24">
        <p className="text-sm text-neutral-600">{description}</p>
      </div>
      <div className="pt-2 space-y-2">
        <Button variant="custom" className="w-full">
          {buttonText}
        </Button>
        {forTeam && (
          <Button
            variant="outline"
            className="w-full bg-transparent border border-neutral-300 hover:bg-black/10"
          >
            Contact sales
          </Button>
        )}
      </div>
    </div>
  );
};

export default PricingBox;
