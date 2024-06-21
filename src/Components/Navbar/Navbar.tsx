import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/evogym.png";
import Link from "./Link";
import { SelectedPage } from "./SHARED/type";
import useMediaQuery from "../HOOKs/useMediaQuery";
import ActionButton from "./SHARED/ActionButton";

type Props = {
  topOfPage:boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage, topOfPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggle, setIsMenuToggle] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const navbarBackground = topOfPage ? "" : "bg-primary-100  drop-shadow"

  return (
    <nav>
      <div className=  {` ${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6 `}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* {logo div left} */}
            <img src={Logo} alt="Logo" />

            {/* right side-links */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                {/* right side-sign in */}

                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                   <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggle(!isMenuToggle)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* mobile menu */}
      {!isAboveMediumScreens && isMenuToggle && (

        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                <div className="flex justify-end p-12">
                <button
                
                onClick={() => setIsMenuToggle(!isMenuToggle)}
              >
                <XMarkIcon className="h-6 w-6 text-gray-400" />
              </button>
                </div>
                {/* menu list */}
                <div className="ml-[33%] flex flex-col gap-10">
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;