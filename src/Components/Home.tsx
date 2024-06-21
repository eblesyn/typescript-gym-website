import { SelectedPage } from "./Navbar/SHARED/type";
import ActionButton from "./Navbar/SHARED/ActionButton";
import HomePage from "@/assets/HomePageText.png";
import HomeGraphic from "@/assets/HomePageGraphic.png";
import RedBull from "@/assets/SponsorRedBull.png";
import Forbes from "@/assets/SponsorForbes.png";
import Fortune from "@/assets/SponsorFortune.png";
import useMediaQuery from "./HOOKs/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

    return (
        <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
            {/* Image and text */}
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
                className="md:flex mx-auto w-5/6 h-5/6 items-center justify-center"
            >
                {/* Text section */}
                <div className="z-10 mt-32 md:basis-3/5">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        className="md:-mt-20"
                    >
                        <div className="relative">
                            <div className="md:before:content-evolvetext before:absolute before:-top-20 before:-left-20 before:z-[-1]">
                                <img src={HomePage} alt="Home Page Text" />
                            </div>
                        </div>
                        <p className="mt-8 text-md">
                            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the Body Shapes That you Dream of. Get Your Dream Body Now.
                        </p>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        className="mt-8 flex items-center gap-8"
                    >
                        <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                        <AnchorLink
                            className="text-sm font-bold text-primary-500 underline"
                            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                            href={`#${SelectedPage.ContactUs}`}
                        >
                            <p>Learn More</p>
                        </AnchorLink>
                    </motion.div>
                </div>
                {/* Image section */}
                <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-end">
                    <img src={HomeGraphic} alt="Home Graphic" />
                </div>
            </motion.div>
            {/* Sponsors */}
            {isAboveMediumScreens && (
                <div className="h-[150px] w-full bg-primary-100 py-10">
                    <div className="mx-auto w-5/6">
                        <div className="flex w-3/5 items-center justify-between gap-8">
                            <img src={RedBull} alt="Red Bull Sponsor" />
                            <img src={Forbes} alt="Forbes Sponsor" />
                            <img src={Fortune} alt="Fortune Sponsor" />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Home;
