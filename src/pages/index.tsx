import { Topic, Topics } from "@prisma/client";
import { motion } from "framer-motion";
import { type NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { api } from "~/utils/api";

export interface SelectTopic extends Topic {
  topicsName: string;
}

const Home: NextPage = () => {
  const [topics, setTopics] = useState<Topics[]>([]);
  const [topic, setTopic] = useState<SelectTopic[]>([]);
  api.topics.getAll.useQuery(undefined, {
    onSuccess: (data) => {
      setTopics(data);
    },
  });
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
              topicsName: item.topics.name,
            } as SelectTopic)
        )
      );
    },
  });

  return (
    <>
      <div className="container mx-auto mt-5 md:mt-40">
        <div className="my-10 md:my-40">
          <motion.div
            className="flex flex-row justify-center"
            initial={{ opacity: 0, y: -100 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h1 className="text-center text-5xl font-bold md:text-7xl">
              Lorem
            </h1>
            <h1 className="bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text pl-2 text-5xl font-bold text-transparent md:text-7xl">
              {" "}
              Ipsum
            </h1>
          </motion.div>
          <motion.h1
            className="text-center text-5xl font-bold md:text-7xl"
            transition={{ delay: 0.5 }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ y: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            dolor sit amet cectur.
          </motion.h1>
          <motion.p
            className="m-5 text-center text-sm"
            transition={{ delay: 0.6 }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ y: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {" "}
            Lorem ipsum dolor sit amet consectetur. Faucibus elit placerat a sed
            facilisi sed facilisi
          </motion.p>
          <motion.div
            className="flex flex-col items-center justify-center md:flex-row"
            transition={{ delay: 0.7 }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ y: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <input
              type="text"
              className="my-4 w-64 rounded-full border border-blue-700 p-2 pl-8 md:mr-4 md:w-80"
              placeholder="Lorem ipsum dolor sit amet"
            />
            <button className="w-36 rounded-full bg-blue-700 text-white">
              <p className="p-4">Subscribe</p>
            </button>
          </motion.div>
        </div>
        <motion.div
          className="mx-auto flex flex-col md:my-40 md:flex-row"
          transition={{ delay: 0.8 }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ y: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="md:w-1/2">
            <div className="mx-4 md:mx-20">
              <h1 className="mx-10 mb-4 text-center text-2xl font-bold md:mx-0 md:mb-0 md:ml-20 md:mt-9 md:text-start md:text-4xl">
                Lorem ipsum dolor sit amet consectetur. <br />
                Consequat porta.
              </h1>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="mx-20">
              <p className="text-center text-2xl font-bold text-blue-800 md:text-start">
                Sposor
              </p>
              <div className="flex flex-row justify-center md:justify-normal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-20 w-20 p-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-20 w-20 p-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-20 w-20 p-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </div>
              <div className="flex flex-row justify-center md:justify-normal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-20 w-20 p-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-20 w-20 p-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-20 w-20 p-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="container mx-auto my-10"
          transition={{ delay: 0.5 }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ y: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="visible py-4 text-center text-2xl font-bold md:invisible">
            Category
          </p>
          <div className="flex flex-row justify-center">
            <button className="invisible mx-8 md:visible">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                {" "}
                <path
                  fill-rule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />{" "}
              </svg>
            </button>
            <motion.ul className="flex flex-col md:flex-row">
              {topics.map((item) => (
                <motion.li
                  key={item.id}
                  className="mx-4 rounded-lg px-4 py-2 text-center hover:bg-blue-800 hover:text-white"
                  transition={{ delay: 0.5 }}
                  initial={{ opacity: 1, y: -100 }}
                  animate={{ y: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  {item.name}
                </motion.li>
              ))}
            </motion.ul>
            <button className="invisible mx-8 md:visible">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                {" "}
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />{" "}
              </svg>
            </button>
          </div>
        </motion.div>
        <motion.div className="container mx-auto my-10 w-full">
          {topic.map((item) => (
            <motion.div
              key={item.id}
              className="mx-0 flex flex-col md:mx-6 md:items-center"
              transition={{ delay: 0.5 }}
              initial={{ opacity: 0, y: -100 }}
              animate={{ y: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <Link className="mx-16 mb-2 flex flex-col items-center justify-center md:mx-60 md:flex-row md:items-start md:justify-start"
              href={`/topics/${item.id}`}>
                <Image
                  src={item.img}
                  width={0}
                  height={0}
                  sizes="100vh"
                  alt=""
                  className="my-4 h-40 w-72 object-cover rounded-xl md:mx-6 md:my-0 md:h-60 md:w-72 md:rounded-none"
                />
                <div className="mx-6 md:mx-0">
                  <div className="flex flex-row items-center justify-center md:justify-normal">
                    <h1 className="px-2 text-slate-500">{item.topicsName}</h1>
                    <button
                      className="h-2 w-2 rounded-full bg-blue-400"
                      disabled
                    ></button>
                    <h1 className="px-2 text-slate-500">{item.date.getMonth()} {" "}{item.date.getFullYear()}</h1>
                  </div>
                  <h1 className="mx-4 px-2 text-center text-xl font-bold md:mx-0 md:text-left">
                    {item.title}
                  </h1>
                </div>
              </Link>
              <hr className="invisible mb-2 h-1 w-2/3 border bg-slate-400 md:visible" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Home;
