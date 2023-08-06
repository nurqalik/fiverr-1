import { type NextPage } from "next";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { motion, useScroll, useSpring } from "framer-motion";

const Home: NextPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
    <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-blue-500 origin-[0%]" style={{ scaleX }} />
      
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
          <div className="flex flex-col md:flex-row justify-center items-center">
            <input
              type="text"
              className="my-4 md:mr-4 w-64 md:w-80 rounded-full border border-blue-700 p-2 pl-8"
              placeholder="Lorem ipsum dolor sit amet"
            />
            <button className="w-36 rounded-full bg-blue-700 text-white">
              <p className="p-4">Subscribe</p>
            </button>
          </div>
        </div>
        <div className="mx-auto md:my-40 flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <div className="mx-4 md:mx-20">
              <h1 className="mx-10 text-center md:text-start mb-4 md:mb-0 md:mx-0 md:ml-20 md:mt-9 text-2xl md:text-4xl font-bold">
                Lorem ipsum dolor sit amet consectetur. <br />
                Consequat porta.
              </h1>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="mx-20">
              <p className="text-2xl text-center md:text-start font-bold text-blue-800">Sposor</p>
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
          <p className="text-2xl text-center font-bold py-4 visible md:invisible">Category</p>
        <div className="flex flex-row justify-center">
          <button className="mx-8 invisible md:visible"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/> </svg></button>
          <ul className="flex flex-col md:flex-row">
            <li className="mx-4 rounded-lg hover:bg-blue-800 hover:text-white px-4 py-2 text-center">Time Management</li>
            <li className="mx-4 rounded-lg hover:bg-blue-800 hover:text-white px-4 py-2 text-center">Energy</li>
            <li className="mx-4 rounded-lg hover:bg-blue-800 hover:text-white px-4 py-2 text-center">Goal Setting</li>
            <li className="mx-4 rounded-lg hover:bg-blue-800 hover:text-white px-4 py-2 text-center">Genomics</li>
            <li className="mx-4 rounded-lg hover:bg-blue-800 hover:text-white px-4 py-2 text-center">Focus</li>
            <li className="mx-4 rounded-lg hover:bg-blue-800 hover:text-white px-4 py-2 text-center">Efficiency</li>
            <li className="mx-4 rounded-lg hover:bg-blue-800 hover:text-white px-4 py-2 text-center">Technology</li>
          </ul>
          <button className="mx-8 invisible md:visible"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/> </svg></button>
        </div>
        </div>
        <div>
        <div className="flex flex-col items-center">
          <div className="flex flex-row mb-2 mx-60">
            <img src="car6.jpg" alt="" className="w-96 h-60 mx-6" />
            <div className="mx-6">
              <div className="flex flex-row items-center">
              <h1 className="text-slate-500 px-2">Topic Name</h1>
              <button className="rounded-full bg-blue-400 w-2 h-2" disabled></button>
              <h1 className="text-slate-500 px-2">1 jun 2023</h1>
              </div>
            <h1 className="px-2 font-bold text-2xl">Lorem Ipsum dolor sit amet consectetur. Porta velit</h1>
            </div>
          </div>
          <hr className="bg-slate-400 border w-2/3 h-1 mb-2"/>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-row mb-2 mx-60">
            <img src="car6.jpg" alt="" className="w-96 h-60 mx-6" />
            <div className="mx-6">
              <div className="flex flex-row items-center">
              <h1 className="text-slate-500 px-2">Topic Name</h1>
              <button className="rounded-full bg-blue-400 w-2 h-2" disabled></button>
              <h1 className="text-slate-500 px-2">1 jun 2023</h1>
              </div>
            <h1 className="px-2 font-bold text-2xl">Lorem Ipsum dolor sit amet consectetur. Porta velit</h1>
            </div>
          </div>
          <hr className="bg-slate-400 border w-2/3 h-1 mb-2"/>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-row mb-2 mx-60">
            <img src="car6.jpg" alt="" className="w-96 h-60 mx-6" />
            <div className="mx-6">
              <div className="flex flex-row items-center">
              <h1 className="text-slate-500 px-2">Topic Name</h1>
              <button className="rounded-full bg-blue-400 w-2 h-2" disabled></button>
              <h1 className="text-slate-500 px-2">1 jun 2023</h1>
              </div>
            <h1 className="px-2 font-bold text-2xl">Lorem Ipsum dolor sit amet consectetur. Porta velit</h1>
            </div>
          </div>
          <hr className="bg-slate-400 border w-2/3 h-1 mb-2"/>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-row mb-2 mx-60">
            <img src="car6.jpg" alt="" className="w-96 h-60 mx-6" />
            <div className="mx-6">
              <div className="flex flex-row items-center">
              <h1 className="text-slate-500 px-2">Topic Name</h1>
              <button className="rounded-full bg-blue-400 w-2 h-2" disabled></button>
              <h1 className="text-slate-500 px-2">1 jun 2023</h1>
              </div>
            <h1 className="px-2 font-bold text-2xl">Lorem Ipsum dolor sit amet consectetur. Porta velit</h1>
            </div>
          </div>
          <hr className="bg-slate-400 border w-2/3 h-1 mb-2"/>
        </div>
        </div>
      </div>
      
    </>
  );
};

export default Home;
