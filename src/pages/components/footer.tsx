import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <motion.footer
        className="mt-20 w-full bg-slate-200"
        transition={{ delay: 0.5 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto pb-2 md:pb-4">
          <div className="mx-6 flex flex-row md:mx-56">
            <div className="mx-4 mt-10 w-[40%] text-left md:mt-20 md:w-[70%]">
              <motion.h1
                transition={{ delay: 0.5 }}
                initial={{ opacity: 1, y: 100 }}
                animate={{ y: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-3 flex flex-row md:mb-2"
              >
                <p className="text-bold text-sm font-bold text-blue-800 md:text-2xl">
                  W
                </p>
                <p className="text-bold  text-sm font-bold text-black md:text-2xl">
                  eb
                </p>
                <p className="text-bold text-sm font-bold text-blue-800 md:text-2xl">
                  S
                </p>
                <p className="text-bold  text-sm font-bold text-black md:text-2xl">
                  ite
                </p>
              </motion.h1>
              <motion.p
                transition={{ delay: 1 }}
                initial={{ opacity: 1, y: 100 }}
                animate={{ y: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-xs text-slate-600 md:text-base"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </motion.p>
            </div>
            <div className="mx-4 mt-10 w-[30%] text-left md:mt-20 md:w-[15%]">
              <motion.h1
                transition={{ delay: 0.5 }}
                initial={{ opacity: 1, y: 100 }}
                animate={{ y: 0 }}
                whileInView={{ opacity: 1 }}
                className="mb-3 text-sm font-semibold text-slate-700 md:mb-5 md:text-base"
              >
                About Us
              </motion.h1>
              <motion.ul
                transition={{ delay: 1 }}
                initial={{ opacity: 1, y: 100 }}
                animate={{ y: 0 }}
                whileInView={{ opacity: 1 }}
              >
                <li className="text-xs text-slate-600">Our Team</li>
                <li className="text-xs text-slate-600">Pitch a Story</li>
                <li className="text-xs text-slate-600">Our Resources</li>
                <li className="text-xs text-slate-600">Privacy</li>
                <li className="text-xs text-slate-600">Polygraph Sutid</li>
              </motion.ul>
            </div>
            <div className="mx-4 mt-10 w-[30%] text-left md:mt-20 md:w-[15%]">
              <motion.h1
                transition={{ delay: 0.5 }}
                initial={{ opacity: 1, y: 100 }}
                animate={{ y: 0 }}
                whileInView={{ opacity: 1 }}
                className="mb-3 text-sm font-semibold text-slate-700 md:mb-5 md:text-base"
              >
                Follow Us
              </motion.h1>
              <motion.ul
                transition={{ delay: 1 }}
                initial={{ opacity: 1, y: 100 }}
                animate={{ y: 0 }}
                whileInView={{ opacity: 1 }}
              >
                <li className="text-xs text-slate-600">Twitter</li>
                <li className="text-xs text-slate-600">Instagram</li>
                <li className="text-xs text-slate-600">Facebook</li>
                <li className="text-xs text-slate-600">Youtube</li>
                <li className="text-xs text-slate-600">Tiktok</li>
                <li className="text-xs text-slate-600">Mastodon</li>
                <li className="text-xs text-slate-600">RSS</li>
              </motion.ul>
            </div>
          </div>
          <div className="mt-4 w-full bg-slate-200 md:mt-14">
            <p className="text-center text-sm md:text-base">
              SiteName &copy;2023. All rights reserved
            </p>
          </div>
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;
