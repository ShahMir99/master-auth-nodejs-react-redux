import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
  return (
      <div className="w-full py-16">
        <h1 className="text-3xl text-center font-semibold text-neutral-900">
          Trusted by well known companies
        </h1>
        <div className="max-w-[98%] mx-auto h-[80px] my-6 flex items-center marquee_div">
          <Marquee>
            <ul className="max-w-full flex items-center gap-12" role="list">
              {[
                ...Array(6)
                  .fill(0)
                  .map((_, i) => (
                    <li className="px-4">
                      <img
                        src={`/images/brands/brandItem${i + 1}.png`}
                        alt="brand-names"
                        className="min-w-auto h-[55px]"
                      />
                    </li>
                  )),
              ]}
            </ul>
          </Marquee>
        </div>
        <hr className="h-[0.5px] bg-neutral-300 border-0" />
      </div>
  );
};

export default MarqueeSection;
