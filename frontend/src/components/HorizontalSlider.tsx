import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

type dataType = {
  title: string;
  imageUrl: string;
  gradient: string;
  textColor?: string;
}[];

const data: dataType = [
  {
    title: "Poster",
    imageUrl: "/images/slider1.jpg",
    gradient: "linear-gradient(180deg, #D4B8FF 0%, #B685FF 100%)",
  },
  {
    title: "Resume",
    imageUrl: "/images/slider2.jpg",
    gradient: "linear-gradient(180deg, #BAECED 0%, #71D9DB 100%)",
  },
  {
    title: "Logos",
    imageUrl: "/images/slider3.jpg",
    gradient: "linear-gradient(180deg, #F5B5AE 0%, #EF8D81 100%)",
  },
  {
    title: "Docs",
    imageUrl: "/images/slider4.jpg",
    gradient: "linear-gradient(180deg, #00C4CC 0%, #0B8C9D 100%)",
  },
  {
    title: "Whiteboards",
    imageUrl: "/images/slider5.jpg",
    gradient: "linear-gradient(180deg, #71CB8C 0%, #348E4F 100%)",
  },
  {
    title: "Presentations",
    imageUrl: "/images/slider6.jpg",
    gradient: "linear-gradient(180deg, #FFDA92 0%, #FFB82E 100%)",
  },
  {
    title: "Social",
    imageUrl: "/images/slider7.jpg",
    gradient: "linear-gradient(180deg, #FF5055 0%, #EB0007 100%)",
    textColor: "white",
  },
  {
    title: "Videos",
    imageUrl: "/images/slider8.jpg",
    gradient: "linear-gradient(180deg, #F8B8FF 0%, #EF95E8 100%)",
  },
  {
    title: "Websites",
    imageUrl: "/images/slider9.jpg",
    gradient: "linear-gradient(180deg, #271E9A 0%, #17125A 100%)",
    textColor: "white",
  },
  {
    title: "Instagram posts",
    imageUrl: "/images/slider10.jpg",
    gradient: "linear-gradient(180deg, #F5B5AE 0%, #EF8D81 100%)",
  },
  {
    title: "Brochures",
    imageUrl: "/images/slider11.jpg",
    gradient: "linear-gradient(180deg, #D4B8FF 0%, #B685FF 100%)",
  },
  {
    title: "Photo editor",
    imageUrl: "/images/slider12.jpg",
    gradient: "linear-gradient(180deg, #F5B5AE 0%, #EF8D81 100%)",
  },
];

const HorizontalSlider = () => {
  
  const [scrollLeft, setScrollLeft] = useState(0);
  const [leftBtnVisible, setLeftBtnVisible] = useState(true);
  const [rightBtnVisible, setRightBtnVisible] = useState(true);

  const scrollDiv = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    const scrollDivCurrent = scrollDiv.current;
    if (scrollDivCurrent) {
      const scrollAmount = 700; // Adjust scroll amount as needed
      const targetScrollLeft =
        direction === "left"
          ? scrollDivCurrent.scrollLeft - scrollAmount
          : scrollDivCurrent.scrollLeft + scrollAmount;

      // Use smooth scrolling
      scrollDivCurrent.scrollTo({
        left: targetScrollLeft,
        behavior: "smooth",
      });
    }
  };


  const updateButtonVisibility = () => {
    const scrollDivCurrent = scrollDiv.current;
    if (scrollDivCurrent) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollDivCurrent;

      // Show/hide left button
      setLeftBtnVisible(scrollLeft > 0);
      // Show/hide right button
      setRightBtnVisible(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    const scrollDivCurrent = scrollDiv.current;
    if (scrollDivCurrent) {
      scrollDivCurrent.scrollLeft = 500;

      const handleScrollEvent = () => {
        setScrollLeft(scrollDivCurrent.scrollLeft);
        updateButtonVisibility();
      };

      scrollDivCurrent.addEventListener("scroll", handleScrollEvent);

      // Clean up the event listener on unmount
      return () => {
        scrollDivCurrent.removeEventListener("scroll", handleScrollEvent);
      };
    }
  }, []);


  return (
    <div className="relative w-full py-4">
      <div className="max-w-full h-full overflow-y-hidden">
        {leftBtnVisible && (
          <div className="w-10 h-10 bg-white rounded-full shadow-md absolute text-black left-10 bottom-36 z-20 flex items-center justify-center">
            <Button
            variant="ghost"
            className="cursor-pointer h-full w-full rounded-full hover:border hover:border-neutral-200"
            onClick={() => handleScroll("left")}
          >
            <LuChevronLeft className="h-5 w-5 shrink-0"/>
          </Button>
          </div>
        )}
        {rightBtnVisible && (
          <div className="w-10 h-10 bg-white rounded-full shadow-md absolute text-black right-10 bottom-36 z-20 flex items-center justify-center">
          <Button
          variant="ghost"
          className="cursor-pointer h-full w-full rounded-full hover:border hover:border-neutral-200"
          onClick={() => handleScroll("right")}
        >
          <LuChevronRight className="h-5 w-5 shrink-0"/>
        </Button>
        </div>
        )}
        <motion.div
          ref={scrollDiv}
          className="flex flex-row py-4 gap-6 px-52 overflow-x-auto hide-scrollbar"
        >
          {data.map((item) => (
            <motion.div
              key={item.title}
              style={{ backgroundImage: item.gradient }}
              className="relative h-60 min-w-[180px] px-5 rounded-md transition-all duration-200 ease-out snap-start overflow-hidden cursor-pointer" // Set overflow-hidden here
              whileHover={{ scale: 1.1 }} // Scale effect on hover
            >
              <div className="flex items-center justify-center pt-8 z-10">
                <button style={{color : item.textColor}} className="absolute top-8 font-semibold text-neutral-800">
                  {item.title}
                </button>
              </div>
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover rounded-md -mt-2"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HorizontalSlider;
