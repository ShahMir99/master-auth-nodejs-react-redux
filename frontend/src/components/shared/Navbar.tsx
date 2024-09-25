import LogoutButton from "../auth/LogoutButton";
import { HiOutlineChevronDown } from "react-icons/hi2";
import {
  IoClipboardOutline,
  IoCreateOutline,
  IoEaselOutline,
  IoImageOutline,
  IoVideocamOutline,
} from "react-icons/io5";
import { BiLogoMeta } from "react-icons/bi";
import { GoSearch } from "react-icons/go";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isClick, setIsClicked] = useState(false);
  const [showSearchMenu, setShowSearchMenu] = useState(false);

  const divRef = useRef<HTMLDivElement>(null);

  const handleOnClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setShowSearchMenu(true);
    }, 300);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        setIsClicked(false);
        setShowSearchMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-[70px] bg-white shadow-[0px_2px_4px_-1px_rgba(57,76,96,.15)] z-50">
      <header className="py-3 px-6">
        <div className="w-full flex items-center">
          <img
            src="/images/logo2.svg"
            alt="logo"
            className="w-[90px] h-[50px] object-contain p-1"
          />
          <div className="flex-1 ml-4 mr-[20px] relative">
            <nav>
              <ul className="flex items-center">
                <li
                  className="flex flex-col justify-center list-none relative"
                  aria-hidden="false"
                >
                  <div>
                    <div />
                    <Button variant="ghost" role="button">
                      <span className="flex items-center gap-2">
                        <span className="text-sm font-normal text-neutral-800">
                          Design spotlight
                        </span>
                        <span>
                          <HiOutlineChevronDown className="h-4 w-4 shrink-0" />
                        </span>
                      </span>
                    </Button>
                  </div>
                </li>
                <li
                  className="flex flex-col justify-center list-none relative"
                  aria-hidden="false"
                >
                  <div>
                    <div />
                    <Button variant="ghost" role="button">
                      <span className="flex items-center gap-2">
                        <span className="text-sm font-normal text-neutral-800">
                          Business
                        </span>
                        <span>
                          <HiOutlineChevronDown className="h-4 w-4 shrink-0" />
                        </span>
                      </span>
                    </Button>
                  </div>
                </li>
                <li
                  className="flex flex-col justify-center list-none relative"
                  aria-hidden="false"
                >
                  <div>
                    <div />
                    <Button variant="ghost" role="button">
                      <span className="flex items-center gap-2">
                        <span className="text-sm font-normal text-neutral-800">
                          Education
                        </span>
                        <span>
                          <HiOutlineChevronDown className="h-4 w-4 shrink-0" />
                        </span>
                      </span>
                    </Button>
                  </div>
                </li>
                <li
                  className="flex flex-col justify-center list-none relative"
                  aria-hidden="false"
                >
                  <div>
                    <div />
                    <Button variant="ghost" role="button">
                      <span className="flex items-center gap-2">
                        <span className="text-sm font-normal text-neutral-800">
                          Plans and pricing
                        </span>
                        <span>
                          <HiOutlineChevronDown className="h-4 w-4 shrink-0" />
                        </span>
                      </span>
                    </Button>
                  </div>
                </li>
                <li
                  className="flex flex-col justify-center list-none relative"
                  aria-hidden="false"
                >
                  <div>
                    <div />
                    <Button variant="ghost" role="button">
                      <span className="flex items-center gap-2">
                        <span className="text-sm font-normal text-neutral-800">
                          Learn
                        </span>
                        <span>
                          <HiOutlineChevronDown className="h-4 w-4 shrink-0" />
                        </span>
                      </span>
                    </Button>
                  </div>
                </li>
              </ul>
            </nav>
          </div>

          <div
            className={`relative mx-auto ${isClick ? "min-w-[360px]" : "min-w-[300px]"} transition-all duration-200 ease-out`}
            ref={divRef}
            onClick={handleOnClick}
          >
            <div
              className={`border border-[#171d2433] ${!isClick && "hover:border-[#35475a]"} rounded-tl-md rounded-tr-md w-full flex items-center px-2 ${
                showSearchMenu
                  ? "rounded-bl-none rounded-br-none"
                  : "rounded-bl-md rounded-br-md"
              }`}
            >
              <div className="shrink-0 mr-2">
                <GoSearch className="h-5 w-5 text-neutral-900" />
              </div>
              <div className="flex-1">
                <Input
                  className="h-full w-full border-none p-2 focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder="Search thousands of templates"
                />
              </div>
            </div>
            {showSearchMenu && (
              <div className="w-full bg-white shadow-lg border border-[#171d2433] absolute top-[38px] rounded-bl-md rounded-br-md z-50">
                <ul className="flex flex-col p-[1px]" role="list">
                  <li className="list-none py-2 px-4 hover:bg-neutral-200/50 cursor-pointer">
                    <div className=" flex items-center justify-start gap-3 ">
                      <IoClipboardOutline className="h-5 w-5" />
                      <p className="text-sm">Doc</p>
                    </div>
                  </li>
                  <li className="list-none py-2 px-4 hover:bg-neutral-200/50 cursor-pointer">
                    <div className=" flex items-center justify-start gap-3 ">
                      <IoCreateOutline className="h-5 w-5" />
                      <p className="text-sm">Whiteboard</p>
                    </div>
                  </li>
                  <li className="list-none py-2 px-4 hover:bg-neutral-200/50 cursor-pointer">
                    <div className=" flex items-center justify-start gap-3 ">
                      <IoEaselOutline className="h-5 w-5" />
                      <p className="text-sm">Presenatation</p>
                    </div>
                  </li>
                  <li className="list-none py-2 px-4 hover:bg-neutral-200/50 cursor-pointer">
                    <div className=" flex items-center justify-start gap-3 ">
                      <BiLogoMeta className="h-5 w-5" />
                      <p className="text-sm">Logo</p>
                    </div>
                  </li>
                  <li className="list-none py-2 px-4 hover:bg-neutral-200/50 cursor-pointer">
                    <div className=" flex items-center justify-start gap-3 ">
                      <IoVideocamOutline className="h-5 w-5" />
                      <p className="text-sm">Video</p>
                    </div>
                  </li>
                  <li className="list-none py-2 px-4 hover:bg-neutral-200/50 cursor-pointer">
                    <div className=" flex items-center justify-start gap-3 ">
                      <IoImageOutline className="h-5 w-5" />
                      <p className="text-sm">Zoom virtual background</p>
                    </div>
                  </li>
                  <li className="list-none py-2 px-3">
                    <div className="flex flex-col gap-3">
                      <h1 className="text-base font-medium text-neutral-800">
                        Suggested Templates
                      </h1>
                      <div className="grid grid-cols-3 gap-2">
                        {[...Array(3)].fill(0).map((_,i) => (
                          <div className="w-full h-[100px] bg-black overflow-hidden relative rounded-md">
                            <img
                              src={`/images/img${i+1}.jpg`}
                              alt="img"
                              className="w-full h-full object-cover cursor-pointer scale-[1] hover:scale-[1.08] transition-all duration-200"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="flex items-center gap-4 mx-4">
            <LogoutButton />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
