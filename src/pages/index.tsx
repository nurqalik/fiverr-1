import { type NextPage } from "next";
import Navbar from "./components/navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
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
      </div>
    </>
  );
};

export default Home;
