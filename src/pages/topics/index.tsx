import { Topic } from "@prisma/client";
import { motion } from "framer-motion";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { api } from "~/utils/api";

const Topics: NextPage = () => {
  const [topic, setTopic] = useState<Topic[]>([])
  api.topic.getAll.useQuery(undefined, {
    onSuccess: (data) => {
      setTopic(
        data.map(
          (item) =>
            ({
              id: item.id,
              title: item.title,
              img: item.img,
              description: item.description,
              date: item.date,
              topicId: item.topicId,
            } as Topic)
        )
      );
    },
  });

  return (
    <>
      <div className="mx-auto items-center bg-slate-200">
        <div className="container mx-auto flex flex-col justify-center md:mb-40">
          <motion.div
            className="mt-20 bg-gradient-to-r font-poppins from-blue-400 to-blue-800 h-24 bg-clip-text text-center text-4xl font-bold text-transparent md:mt-40 md:text-6xl"
            initial={{ opacity: 0, y: -100 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Technology
          </motion.div>
          <motion.p
            className="font-base md:text-normal font-poppins mb-10 px-10 text-center text-sm text-slate-600 md:mb-0 md:px-44"
            initial={{ opacity: 0, y: -100 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.7 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </motion.p>
        </div>
        <motion.div className="container mx-auto flex flex-col items-center md:w-fit md:bg-white">
          {topic.map((item) => (
            <>
            <motion.div
            className="mx-4 mb-2 mt-8 flex flex-col items-center md:flex-row"
            transition={{ delay: 0.5 }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ y: 0 }}
            whileInView={{ opacity: 1 }}
            key={item.id}
          >
            <Image
              src={item.img}
              alt=""
              width={0}
              height={0}
              sizes="100vh"
              className="h-52 w-72 object-cover justify-center rounded-xl md:mx-6 md:my-0 md:h-60 md:w-96 md:rounded-none"
            />
            <Link href={`/topics/${item.id}`} className="my-4 flex max-w-sm flex-col">
              <h1 className="px-16 pb-2 text-center text-xl font-poppins font-bold md:px-2 md:text-left ">
                {item.title}
              </h1>
              <p className="px-16 text-center text-slate-400 font-poppins md:px-2 md:text-left">
                {item.date.toString()}
              </p>
            </Link>
          </motion.div>
          <hr className="invisible my-2 h-1 w-2/3 justify-center border bg-slate-400 md:visible" />
            </>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Topics;
