import { motion } from "framer-motion";
import { NextPage } from "next";

const Topics: NextPage = () => {
  return (
    <>
      <div className="mx-auto items-center bg-slate-200">
        <div className="container mx-auto mb-10 md:mb-40 flex flex-col justify-center">
          <motion.h1 className="my-4 mt-10 md:mt-40 bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-center text-4xl md:text-6xl font-bold text-transparent"
          initial={{ opacity: 1, y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}>
            Topic Name
          </motion.h1>
          <motion.p className="font-base text-sm md:text-normal px-10 md:px-44 text-center text-slate-600"
          initial={{ opacity: 1, y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.7 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </motion.p>
        </div>
        <motion.div className="container mx-auto my-4 flex flex-col md:w-fit md:bg-white items-center">
          <motion.div className="flex flex-col items-center md:flex-row mb-2 mx-4 mt-8"
          transition={{ delay: 0.5 }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ y: 0 }}
          whileInView={{ opacity: 1 }}>
            <img
              src="car6.jpg"
              alt=""
              className="h-40 w-72 justify-center rounded-xl md:mx-6 md:my-0 md:h-60 md:w-96 md:rounded-none"
            />
            <div className="flex flex-col my-4 max-w-sm">
              <h1 className="font-bold text-xl px-16 md:px-2 text-center md:text-left pb-2 ">Lorem Ipsum Dolor Sit Amet consectetur. Porta velit</h1>
              <p className="text-slate-400 text-center md:text-left px-16 md:px-2">1 jun 2023</p>
            </div>
          </motion.div>
          <hr className="invisible my-2 h-1 w-2/3 border bg-slate-400 md:visible justify-center" />
          <motion.div className="flex flex-col items-center md:flex-row mb-2 mx-4 mt-8"
          transition={{ delay: 0.5 }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ y: 0 }}
          whileInView={{ opacity: 1 }}>
            <img
              src="car6.jpg"
              alt=""
              className="h-40 w-72 justify-center rounded-xl md:mx-6 md:my-0 md:h-60 md:w-96 md:rounded-none"
            />
            <div className="flex flex-col my-4 max-w-sm">
              <h1 className="font-bold text-xl px-16 md:px-2 text-center md:text-left pb-2 ">Lorem Ipsum Dolor Sit Amet consectetur. Porta velit</h1>
              <p className="text-slate-400 text-center md:text-left px-16 md:px-2">1 jun 2023</p>
            </div>
          </motion.div>
          <hr className="invisible my-2 h-1 w-2/3 border bg-slate-400 md:visible justify-center" />
          <motion.div className="flex flex-col items-center md:flex-row mb-2 mx-4 mt-8"
          transition={{ delay: 0.5 }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ y: 0 }}
          whileInView={{ opacity: 1 }}>
            <img
              src="car6.jpg"
              alt=""
              className="h-40 w-72 justify-center rounded-xl md:mx-6 md:my-0 md:h-60 md:w-96 md:rounded-none"
            />
            <div className="flex flex-col my-4 max-w-sm">
              <h1 className="font-bold text-xl px-16 md:px-2 text-center md:text-left pb-2 ">Lorem Ipsum Dolor Sit Amet consectetur. Porta velit</h1>
              <p className="text-slate-400 text-center md:text-left px-16 md:px-2">1 jun 2023</p>
            </div>
          </motion.div>
          <hr className="invisible my-2 h-1 w-2/3 border bg-slate-400 md:visible justify-center" />
          <motion.div className="flex flex-col items-center md:flex-row mb-2 mx-4 mt-8"
          transition={{ delay: 0.5 }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ y: 0 }}
          whileInView={{ opacity: 1 }}>
            <img
              src="car6.jpg"
              alt=""
              className="h-40 w-72 justify-center rounded-xl md:mx-6 md:my-0 md:h-60 md:w-96 md:rounded-none"
            />
            <div className="flex flex-col my-4 max-w-sm">
              <h1 className="font-bold text-xl px-16 md:px-2 text-center md:text-left pb-2 ">Lorem Ipsum Dolor Sit Amet consectetur. Porta velit</h1>
              <p className="text-slate-400 text-center md:text-left px-16 md:px-2">1 jun 2023</p>
            </div>
          </motion.div>
          <hr className="invisible my-2 h-1 w-2/3 border bg-slate-400 md:visible justify-center" />
        </motion.div>
      </div>
    </>
  );
};

export default Topics;
