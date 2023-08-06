import { type NextPage } from "next";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { motion, useScroll, useSpring } from "framer-motion";

const Home: NextPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        className="fixed left-0 right-0 top-0 h-[3px] origin-[0%] bg-blue-500"
        style={{ scaleX }}
      />

      <div className="container mx-auto mt-5 md:mt-40">
        <div className="my-10 md:my-40">
          <div className="flex flex-row justify-center">
            <h1 className="text-center text-5xl font-bold md:text-7xl">
              Lorem
            </h1>
            <h1 className="bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text pl-2 text-5xl font-bold text-transparent md:text-7xl">
              {" "}
              Ipsum
            </h1>
          </div>
          <h1 className="text-center text-5xl font-bold md:text-7xl">
            dolor sit amet cectur.
          </h1>
          <p className="m-5 text-center text-sm">
            {" "}
            Lorem ipsum dolor sit amet consectetur. Faucibus elit placerat a sed
            facilisi sed facilisi
          </p>
          <div className="flex flex-col items-center justify-center md:flex-row">
            <input
              type="text"
              className="my-4 w-64 rounded-full border border-blue-700 p-2 pl-8 md:mr-4 md:w-80"
              placeholder="Lorem ipsum dolor sit amet"
            />
            <button className="w-36 rounded-full bg-blue-700 text-white">
              <p className="p-4">Subscribe</p>
            </button>
          </div>
        </div>
        <div className="mx-auto flex flex-col md:my-40 md:flex-row">
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
        </div>
        <div className="container mx-auto my-10">
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
            <ul className="flex flex-col md:flex-row">
              <li className="mx-4 rounded-lg px-4 py-2 text-center hover:bg-blue-800 hover:text-white">
                Time Management
              </li>
              <li className="mx-4 rounded-lg px-4 py-2 text-center hover:bg-blue-800 hover:text-white">
                Energy
              </li>
              <li className="mx-4 rounded-lg px-4 py-2 text-center hover:bg-blue-800 hover:text-white">
                Goal Setting
              </li>
              <li className="mx-4 rounded-lg px-4 py-2 text-center hover:bg-blue-800 hover:text-white">
                Genomics
              </li>
              <li className="mx-4 rounded-lg px-4 py-2 text-center hover:bg-blue-800 hover:text-white">
                Focus
              </li>
              <li className="mx-4 rounded-lg px-4 py-2 text-center hover:bg-blue-800 hover:text-white">
                Efficiency
              </li>
              <li className="mx-4 rounded-lg px-4 py-2 text-center hover:bg-blue-800 hover:text-white">
                Technology
              </li>
            </ul>
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
        </div>
        <div className="container mx-auto my-10 w-full">
          <div className="flex flex-col md:items-center mx-0 md:mx-6">
            <div className="mb-2 flex flex-col md:mx-60 md:flex-row items-center md:items-start justify-center md:justify-start mx-16">
              <img src="car6.jpg" alt="" className="md:mx-6 h-40 w-72 md:h-60 md:w-96 rounded-xl md:rounded-none md:my-0 my-4"/>
              <div className="mx-6 md:mx-0">
                <div className="flex flex-row items-center md:justify-normal md:pl-4 justify-center">
                  <h1 className="px-2 text-slate-500">Topic Name</h1>
                  <button
                    className="h-2 w-2 rounded-full bg-blue-400"
                    disabled
                  ></button>
                  <h1 className="px-2 text-slate-500">1 jun 2023</h1>
                </div>
                <h1 className="px-2 text-2xl font-bold mx-4 md:mx-0 md:text-left text-center">
                  Lorem Ipsum dolor sit amet consectetur. Porta velit
                </h1>
              </div>
            </div>
            <hr className="invisible mb-2 h-1 w-2/3 border bg-slate-400 md:visible" />
          </div>
          <div className="flex flex-col md:items-center mx-0 md:mx-6">
            <div className="mb-2 flex flex-col md:mx-60 md:flex-row items-center md:items-start justify-center md:justify-start mx-16">
              <img src="car6.jpg" alt="" className="md:mx-6 h-40 w-72 md:h-60 md:w-96 rounded-xl md:rounded-none md:my-0 my-4"/>
              <div className="mx-6 md:mx-0">
                <div className="flex flex-row items-center md:justify-normal md:pl-4 justify-center">
                  <h1 className="px-2 text-slate-500">Topic Name</h1>
                  <button
                    className="h-2 w-2 rounded-full bg-blue-400"
                    disabled
                  ></button>
                  <h1 className="px-2 text-slate-500">1 jun 2023</h1>
                </div>
                <h1 className="px-2 text-2xl font-bold mx-4 md:mx-0 md:text-left text-center">
                  Lorem Ipsum dolor sit amet consectetur. Porta velit
                </h1>
              </div>
            </div>
            <hr className="invisible mb-2 h-1 w-2/3 border bg-slate-400 md:visible" />
          </div>
          <div className="flex flex-col md:items-center mx-0 md:mx-6">
            <div className="mb-2 flex flex-col md:mx-60 md:flex-row items-center md:items-start justify-center md:justify-start mx-16">
              <img src="car6.jpg" alt="" className="md:mx-6 h-40 w-72 md:h-60 md:w-96 rounded-xl md:rounded-none md:my-0 my-4"/>
              <div className="mx-6 md:mx-0">
                <div className="flex flex-row items-center md:justify-normal md:pl-4 justify-center">
                  <h1 className="px-2 text-slate-500">Topic Name</h1>
                  <button
                    className="h-2 w-2 rounded-full bg-blue-400"
                    disabled
                  ></button>
                  <h1 className="px-2 text-slate-500">1 jun 2023</h1>
                </div>
                <h1 className="px-2 text-2xl font-bold mx-4 md:mx-0 md:text-left text-center">
                  Lorem Ipsum dolor sit amet consectetur. Porta velit
                </h1>
              </div>
            </div>
            <hr className="invisible mb-2 h-1 w-2/3 border bg-slate-400 md:visible" />
          </div>
          <div className="flex flex-col md:items-center mx-0 md:mx-6">
            <div className="mb-2 flex flex-col md:mx-60 md:flex-row items-center md:items-start justify-center md:justify-start mx-16">
              <img src="car6.jpg" alt="" className="md:mx-6 h-40 w-72 md:h-60 md:w-96 rounded-xl md:rounded-none md:my-0 my-4"/>
              <div className="mx-6 md:mx-0">
                <div className="flex flex-row items-center md:justify-normal md:pl-4 justify-center">
                  <h1 className="px-2 text-slate-500">Topic Name</h1>
                  <button
                    className="h-2 w-2 rounded-full bg-blue-400"
                    disabled
                  ></button>
                  <h1 className="px-2 text-slate-500">1 jun 2023</h1>
                </div>
                <h1 className="px-2 text-2xl font-bold mx-4 md:mx-0 md:text-left text-center">
                  Lorem Ipsum dolor sit amet consectetur. Porta velit
                </h1>
              </div>
            </div>
            <hr className="invisible mb-2 h-1 w-2/3 border bg-slate-400 md:visible" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
