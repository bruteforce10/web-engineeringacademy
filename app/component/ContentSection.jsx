"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IoIosCheckbox } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";

const ContentSection = ({ data }) => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const formattedValue = value.toLocaleString("id-ID");

  useEffect(() => {
    const timer = setInterval(() => {
      if (value < 8700 && isInView) {
        setValue((prevValue) => prevValue + 50);
      }
    }, 1);

    return () => {
      clearInterval(timer);
    };
  }, [isInView, value]);

  return (
    <section
      ref={ref}
      id="isidatabase"
      className="mt-24 relative bg-custom-secondary max-lg:px-8 pt-16 pb-32 w-full"
    >
      <div className="text-center space-y-4">
        <h3 className="text-xl font-medium mx-auto max-md:text-sm text-custom-secondary w-fit rounded-sm bg-white px-4 py-1 ">
          {data.subTitle}
        </h3>
        <h1 className="text-4xl max-md:text-xl max-md:text-center font-semibold tracking-tight uppercase text-white">
          {data.title}
        </h1>
      </div>
      <div className="lg:mt-20 mt-10 max-w-[1250px] px-8  mx-auto flex justify-center flex-wrap gap-16">
        {data.listContent.map((item, index) => {
          return (
            <div key={index}>
              <Image
                src={"/feature/" + (index + 1) + ".webp"}
                alt="logo"
                width={600}
                height={600}
                className="object-fill h-[300px]  w-auto "
              />
              <p className="text-white/70 leading-relaxed mt-4 max-w-[300px] mb-4 line-clamp-3 hover:line-clamp-none">
                {item.description}
              </p>
              <Accordion type="single" collapsible>
                <AccordionItem value={`item-${index + 1}`}>
                  <AccordionTrigger className="text-white/70 uppercase text-lg">
                    Isi bisa dilihat
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul>
                      {item.list.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="text-lg group cursor-pointer hover:underline"
                          >
                            <IoIosCheckbox className="inline mr-2 text-lg group-hover:text-custom-primary" />
                            {item}
                          </li>
                        );
                      })}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          );
        })}
      </div>
      <div className="mt-20 text-center text-white space-y-4">
        <h3 className="md:text-3xl text-xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-custom-primary to-[#1A4AFA]">
          Total File Yang Akan Anda Dapatkan
        </h3>
        <AnimatePresence>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
            exit={{ opacity: 0 }}
            className="text-8xl  font-bold"
          >
            {formattedValue}+
          </motion.h1>
        </AnimatePresence>
        <p className="text-xl opacity-80">Dan masih akan terus bertambah ...</p>
      </div>
      <Image
        src={"/lancip-1.svg"}
        alt="logo"
        width={320}
        className="absolute bottom-0 inset-x-0 mx-auto"
        height={320}
      />
    </section>
  );
};

export default ContentSection;
