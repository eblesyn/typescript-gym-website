import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { BenefitType, SelectedPage } from "./Navbar/SHARED/type";
import { motion } from "framer-motion";
import Htext from "./Navbar/SHARED/Htext";
import Benefit from "./Benefit";
import ActionButton from "./Navbar/SHARED/ActionButton";
import Bgraphic from "../assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [ 
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil corrupti dignissimos debitis molestias quis quod"
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil corrupti dignissimos debitis molestias quis quod"
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil corrupti dignissimos debitis molestias"
    },
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
};

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={container}
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            >
                <div className="md:my-5 md:w-3/5">
                    <Htext>MORE THAN JUST A GYM.</Htext>
                    <p className="my-5 text-sm">
                        We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.
                    </p>
                </div>
                {/* Benefits section */}
                <motion.div
                    className="md:flex items-center justify-between gap-8 mt-5"
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </motion.div>
                {/* Graphic and description */}
                <div className="grid grid-cols-1 mt-16 items-center justify-between gap-20 md:mt-28 md:grid-cols-2">
                    <img src={Bgraphic} alt="Benefits Graphic" className="mx-auto" />
                    <div>
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 50 },
                                        visible: { opacity: 1, x: 0.5 }
                                    }}
                                >
                                    <Htext>
                                        MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                        <span className="text-primary-500">FIT.</span>
                                    </Htext>
                                </motion.div>
                            </div>
                        </div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0.5 }
                            }}
                        >
                            <p className="my-5">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet minima doloremque asperiores enim soluta provident laborum delectus repudiandae optio ipsam? Quas minima impedit fugit eligendi fugiat, ea dolorem in nobis!
                            </p>
                            <p className="mb-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nobis distinctio excepturi ex odit qui veritatis maiores aspernatur soluta aut!
                            </p>
                        </motion.div>
                        <div className="relative mt-16">
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default Benefits;
