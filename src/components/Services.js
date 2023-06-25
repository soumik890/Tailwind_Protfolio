import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "Front end",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci fugit iste voluptas accusamus, voluptates nam perspiciatis! Sed iste ea sunt earum accusamus debitis officiis ipsam natus neque illo, totam vitae.",
    link: "Learn more",
  },
  {
    name: "Back end",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci fugit iste voluptas accusamus, voluptates nam perspiciatis! Sed iste ea sunt earum accusamus debitis officiis ipsam natus neque illo, totam vitae.",
    link: "Learn more",
  },
  {
    name: "Mobile development",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci fugit iste voluptas accusamus, voluptates nam perspiciatis! Sed iste ea sunt earum accusamus debitis officiis ipsam natus neque illo, totam vitae.",
    link: "Learn more",
  },
  {
    name: "Research",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci fugit iste voluptas accusamus, voluptates nam perspiciatis! Sed iste ea sunt earum accusamus debitis officiis ipsam natus neque illo, totam vitae.",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat
           mix-blend-lighten mb-12 lg:mb-0"
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="h2 text-accent mb-6 ">What I do</h2>
            <h3 className="h4 max-w-[455px] mb-18">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Possimus, neque cupiditate laboriosam animi fuga sit, sunt
              excepturi voluptate eligendi inventore quidem eos ipsum, itaque
              adipisci asperiores? Aperiam expedita quisquam illum.
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          <motion.div
            className="flex-1"
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div>
              {services.map((item, index) => {
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {item.name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a className="text-gradient text-sm" href="#">
                        {item.link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
