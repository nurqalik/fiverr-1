import { motion } from "framer-motion";
import { NextPage } from "next";

const Topics: NextPage = () => {
  return (
    <>
      <div className="mx-auto items-center bg-slate-200">
        <div className="container mx-auto flex flex-col justify-center md:mb-40">
          <motion.h1
            className="my-4 mt-20 bg-gradient-to-r from-blue-400 to-blue-800 bg-clip-text text-center text-4xl font-bold text-transparent md:mt-40 md:text-6xl"
            initial={{ opacity: 0, y: -100 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Topic Name
          </motion.h1>
          <motion.p
            className="font-base md:text-normal mb-10 px-10 text-center text-sm text-slate-600 md:mb-0 md:px-44"
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
        <motion.div className="container mx-auto my-4 flex flex-col items-center md:w-fit md:bg-white">
          <motion.div
            className="mx-4 mb-2 mt-8 flex flex-col items-center md:flex-row"
            transition={{ delay: 0.5 }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ y: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <img
              src="car6.jpg"
              alt=""
              className="h-52 w-72 justify-center rounded-xl md:mx-6 md:my-0 md:h-60 md:w-96 md:rounded-none"
            />
            <div className="my-4 flex max-w-sm flex-col">
              <h1 className="px-16 pb-2 text-center text-xl font-bold md:px-2 md:text-left ">
                Lorem Ipsum Dolor Sit Amet consectetur. Porta velit
              </h1>
              <p className="px-16 text-center text-slate-400 md:px-2 md:text-left">
                1 jun 2023
              </p>
            </div>
          </motion.div>
          <hr className="invisible my-2 h-1 w-2/3 justify-center border bg-slate-400 md:visible" />
          <motion.div
            className="mx-4 mb-2 mt-8 flex flex-col items-center md:flex-row"
            transition={{ delay: 0.5 }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ y: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <img
              src="car6.jpg"
              alt=""
              className="h-52 w-72 justify-center rounded-xl md:mx-6 md:my-0 md:h-60 md:w-96 md:rounded-none"
            />
            <div className="my-4 flex max-w-sm flex-col">
              <h1 className="px-16 pb-2 text-center text-xl font-bold md:px-2 md:text-left ">
                Lorem Ipsum Dolor Sit Amet consectetur. Porta velit
              </h1>
              <p className="px-16 text-center text-slate-400 md:px-2 md:text-left">
                1 jun 2023
              </p>
            </div>
          </motion.div>
          <hr className="invisible my-2 h-1 w-2/3 justify-center border bg-slate-400 md:visible" />
          <motion.div
            className="mx-4 mb-2 mt-8 flex flex-col items-center md:flex-row"
            transition={{ delay: 0.5 }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ y: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <img
              src="car6.jpg"
              alt=""
              className="h-52 w-72 justify-center rounded-xl md:mx-6 md:my-0 md:h-60 md:w-96 md:rounded-none"
            />
            <div className="my-4 flex max-w-sm flex-col">
              <h1 className="px-16 pb-2 text-center text-xl font-bold md:px-2 md:text-left ">
                Lorem Ipsum Dolor Sit Amet consectetur. Porta velit
              </h1>
              <p className="px-16 text-center text-slate-400 md:px-2 md:text-left">
                1 jun 2023
              </p>
            </div>
          </motion.div>
          <hr className="invisible my-2 h-1 w-2/3 justify-center border bg-slate-400 md:visible" />
          <motion.div
            className="mx-4 mb-2 mt-8 flex flex-col items-center md:flex-row"
            transition={{ delay: 0.5 }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ y: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <img
              src="car6.jpg"
              alt=""
              className="h-52 w-72 justify-center rounded-xl md:mx-6 md:my-0 md:h-60 md:w-96 md:rounded-none"
            />
            <div className="my-4 flex max-w-sm flex-col">
              <h1 className="px-16 pb-2 text-center text-xl font-bold md:px-2 md:text-left ">
                Lorem Ipsum Dolor Sit Amet consectetur. Porta velit
              </h1>
              <p className="px-16 text-center text-slate-400 md:px-2 md:text-left">
                1 jun 2023
              </p>
            </div>
          </motion.div>
          <hr className="invisible my-2 h-1 w-2/3 justify-center border bg-slate-400 md:visible" />
        </motion.div>
      </div>
    </>
  );
};

export default Topics;
