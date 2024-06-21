import { SelectedPage, ClassType } from "./Navbar/SHARED/type";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import Class from "./Class";
import { motion } from "framer-motion";
import Htext from "./Navbar/SHARED/Htext";

const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A maxime, maiores consequatur, eum laborum, doloremque nihil tempore esse ex adipisci inventore quibusdam enim animi corporis eligendi voluptatibus nam! Corrupti, quia!",
        image: image1,
    },
    {
        name: "Yoga Classes",
        description: "Experience the calm and flexibility with our Yoga classes.",
        image: image2,
    },
    {
        name: "Ab Core Classes",
        description: "Strengthen your core with our specialized Ab Core classes designed to give you a strong and stable midsection.",
        image: image3,
    },
    {
        name: "Adventure Classes",
        description: "Join our Adventure classes for an exciting and challenging workout that pushes your limits.",
        image: image4,
    },
    {
        name: "Fitness Classes",
        description: "Get fit and stay healthy with our comprehensive Fitness classes.",
        image: image5,
    },
    {
        name: "Training Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A maxime, maiores consequatur, eum laborum, doloremque nihil tempore esse ex adipisci inventore quibusdam enim animi corporis eligendi voluptatibus nam! Corrupti, quia!",
        image: image6,
    },
];

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
    return (
        <section id="ourclasses" className="w-full bg-primary-100 py-14">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
            >
                <motion.div
                    className="mx-auto w-5/6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div className="md:w-3/5">
                        <Htext>OUR CLASSES</Htext>
                        <p className="py-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A maxime, maiores consequatur, eum laborum, doloremque nihil tempore esse ex adipisci inventore quibusdam enim animi corporis eligendi voluptatibus nam! Corrupti, quia!
                        </p>
                    </div>
                </motion.div>
                <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                    <ul className="w-[2800px] whitespace-nowrap">
                        {classes.map((item: ClassType, index) => (
                            <Class
                                key={`${item.name} -${index}`}
                                name={item.name}
                                description={item.description}
                                image={item.image}
                            />
                        ))}
                    </ul>
                </div>
            </motion.div>
        </section>
    );
};

export default OurClasses;
