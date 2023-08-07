import { motion } from "framer-motion";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

const Topic: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <div className="container mx-auto mt-20 items-center">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            className="text-base font-semibold text-slate-700"
            initial={{ opacity: 1, y: -100 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Topic Name
          </motion.div>
          <motion.div
            className="mb-2 max-w-xs text-center text-2xl font-bold md:max-w-4xl md:text-6xl"
            initial={{ opacity: 1, y: -100 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Lorem ipsum dolor sit amet consectetur.
          </motion.div>
          <motion.div
            className="my-2 flex flex-row"
            initial={{ opacity: 1, y: -100 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="h-8 w-8 rounded-full border border-solid border-slate-400 object-cover md:h-10 md:w-10">
              <img
                src="../profile.png"
                className="w-full object-cover"
                alt=""
              />
            </div>
            <div className="mx-4 flex flex-col">
              <div className="text-xs">Author Name</div>
              <Link href="/" className="text-xs text-blue-500">
                @Twitter
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="container mx-auto">
          <div className="mx-16 mt-5 flex flex-col md:mx-80">
            <h1 className="text-center text-lg font-semibold md:text-left md:text-4xl">
              Title content
            </h1>
            <p className="my-2 text-sm md:my-4 md:text-base">
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
            <p className="my-2 text-sm md:my-4 md:text-base">
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
        <div className="container mx-auto bg-slate-200 md:bg-white">
          <div className="mx-16 rounded-lg bg-slate-200 md:mx-80">
            <div className="flex flex-col">
              <div className="mb-2 mt-8 flex flex-row items-center md:mx-16">
                <button className="h-6 w-6 rounded-full bg-blue-600" disabled>
                  <p className="text-base font-semibold text-white">i</p>
                </button>
                <div className="mx-2 text-base font-bold md:text-xl">
                  Lorem ipsul dolor:
                </div>
              </div>
              <p className="mb-8 text-sm md:mx-16 md:text-base">
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
          <div className="mx-16 mt-5 md:mx-80">
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
          <div className="mx-16 flex flex-col md:mx-80">
            <div className="my-4 text-xl font-bold md:text-4xl">
              Content Title 2
            </div>
            <div className="mb-4 text-sm md:text-base">
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
                <div className="text-base font-bold text-blue-400 md:text-xl">
                  DATE:
                </div>
                <p className="text-xs font-semibold md:text-base">
                  3 oct. 2023
                </p>
              </div>
              <div className="flex flex-col">
                <div className="text-base font-bold text-blue-400 md:text-xl">
                  SHARE:
                </div>
                <p className="text-xs font-semibold md:text-base">
                  copy the link
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topic;
