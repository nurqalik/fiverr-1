import { motion } from "framer-motion";
import { NextPage } from "next";
import { useRouter } from "next/router";

const Topic: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <div className="container mx-auto mt-20 items-center">
        <div className="flex flex-col items-center justify-center">
          <motion.div className="text-base font-semibold text-slate-700"
          initial={{ opacity: 1, y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}>
            Topic Name
          </motion.div>
          <motion.div className="mb-2 max-w-xs md:max-w-4xl text-center text-2xl md:text-6xl font-bold"
          initial={{ opacity: 1, y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}>
            Lorem ipsum dolor sit amet consectetur.
          </motion.div>
          <motion.div className="my-2 flex flex-row"
          initial={{ opacity: 1, y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}>
            <div className="h-8 md:h-10 w-8 md:w-10 rounded-full border border-solid border-slate-400 object-cover">
              <img src="../profile.png" className="w-full object-cover" alt="" />
            </div>
            <div className="mx-4 flex flex-col">
              <div className="text-xs">Author Name</div>
              <a href="/" className="text-xs text-blue-500">
                @Twitter
              </a>
            </div>
          </motion.div>
        </div>
        <div className="container mx-auto">
          <div className="mx-16 md:mx-80 mt-5 flex flex-col">
            <h1 className="text-center md:text-left text-lg md:text-4xl font-semibold">Title content</h1>
            <p className="my-2 md:my-4 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <img
              src="../car6.jpg"
              className="w-full rounded-lg object-fill"
              alt=""
            />
            <p className="my-2 md:my-4 text-base">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur?
            </p>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="mx-16 md:mx-80 rounded-lg bg-slate-200">
            <div className="flex flex-col">
              <div className="mx-8 md:mx-16 mt-8 mb-2 flex flex-row items-center">
                <button className="h-6 w-6 rounded-full bg-blue-600" disabled>
                  <p className="text-base font-semibold text-white">i</p>
                </button>
                <div className="mx-2 text-base md:text-xl font-bold">Lorem ipsul dolor:</div>
              </div>
              <p className="mx-8 md:mx-16 text-sm md:text-base mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="mx-16 md:mx-80 mt-5">
            <p className="text-sm md:text-base">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur?
            </p>
          </div>
        </div>
        <div className="container mx-auto mb-40">
          <div className="mx-16 md:mx-80 flex flex-col">
            <div className="text-xl md:text-4xl font-bold my-4">Content Title 2</div>
            <div className="text-sm md:text-base mb-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur?
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <div className="text-base md:text-xl font-bold text-blue-400">DATE:</div>
                <p className="font-semibold text-xs md:text-base">3 oct. 2023</p>
              </div>
              <div className="flex flex-col">
                <div className="text-base md:text-xl font-bold text-blue-400">SHARE:</div>
                <p className="font-semibold text-xs md:text-base">copy the link</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topic;
