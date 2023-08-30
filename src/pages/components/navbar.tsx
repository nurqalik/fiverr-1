import Link from "next/link";
import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    void animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

    void animate(
      "ul",
      {
        clipPath: isOpen
          ? "inset(0% 0% 0% 0% round 10px)"
          : "inset(10% 50% 90% 50% round 10px)",
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      }
    );

    void animate(
      "li",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
  }, [isOpen, animate]);

  return scope;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

  return (
    <nav
      className="z-0 h-24 max-h-min items-center bg-white md:h-auto md:w-full"
      ref={scope}
    >
      <div className="mx-auto max-w-screen-xl items-center justify-between p-4">
        <div className="flex flex-row justify-between md:items-end">
          <Link
            href={"/"}
            className="items-center p-2 pt-4 text-left font-sans text-3xl font-semibold hover:text-blue-900"
          >
            <div className="flex flex-row">
              <motion.p
                transition={{ delay: 0.5 }}
                initial={{ opacity: 1, y: -100 }}
                animate={{ y: 0, color: "#2c5282" }}
                whileInView={{ color: "#2c5282" }}
                viewport={{ once: true }}
                className="text-black font-poppins"
              >
                W
              </motion.p>
              <motion.p
                transition={{ delay: 0.7 }}
                initial={{ opacity: 1, y: -100 }}
                animate={{ y: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-black font-poppins"
              >
                eb
              </motion.p>
              <motion.p
                transition={{ delay: 0.9 }}
                initial={{ opacity: 1, y: -100 }}
                animate={{ y: 0, color: "#2c5282" }}
                whileInView={{ color: "#2c5282" }}
                viewport={{ once: true }}
                className="text-black font-poppins"
              >
                S
              </motion.p>
              <motion.p
                transition={{ delay: 1.1 }}
                initial={{ opacity: 1, y: -100 }}
                animate={{ y: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-black font-poppins"
              >
                ite
              </motion.p>
            </div>
          </Link>
          <div className="flex w-1/2 flex-col items-end pt-2 md:items-center md:justify-center md:pt-0">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ delay: 0.5 }}
              initial={{ opacity: 1, y: -100 }}
              animate={{ y: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              type="button"
              tabIndex={0}
              className="dropdown dropdown-end sticky top-0 h-10 w-10 rounded-lg p-2 text-sm md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="arrow" style={{ transformOrigin: "50% 55%" }}>
                <svg width="15" height="15" viewBox="0 0 20 20">
                  <path d="M0 7 L 20 7 L 10 16" />
                </svg>
              </div>
            </motion.button>
            <motion.div
              transition={{ delay: 0.5 }}
              initial={{ opacity: 1, y: -100 }}
              animate={{ y: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              tabIndex={0}
              className="relative py-2 md:invisible"
              style={{
                visibility: isOpen ? "visible" : "hidden",
              }}
            >
              <div
                className="absolute right-0 z-10 flex w-40 flex-col items-center rounded-lg border-none p-2"
                style={{
                  backgroundColor: isOpen ? "white" : "transparent",
                  display: isOpen ? "" : "none",
                }}
              >
                <ul
                  className="flex list-none flex-col gap-[10px]"
                  style={{
                    pointerEvents: isOpen ? "auto" : "none",
                    clipPath: "inset(10% %50% 90% 50% round 10px",
                  }}
                >
                  <li className="origin-[-20px 50%] block list-none">
                    <input
                      type="text"
                      className="border-1 mx-4 h-10 w-32 font-poppins rounded-full border border-slate-400 p-4 text-center text-black"
                      placeholder="Search"
                    />
                  </li>
                  <li className="origin-[-20px 50%] block list-none text-center">
                    <Link
                      className="p-2 text-slate-800 font-poppins hover:text-black"
                      href={"/topics"}
                    >
                      Topics
                    </Link>
                  </li>
                  <li className="origin-[-20px 50%] block list-none text-center">
                    <Link
                      className="p-2 text-slate-800 font-poppins hover:text-black"
                      href={"/advertise"}
                    >
                      Advertise
                    </Link>
                  </li>
                  <li className="origin-[-20px 50%] block list-none text-center">
                    <Link
                      className="p-2 text-slate-800 font-poppins hover:text-black"
                      href={"/books"}
                    >
                      Books
                    </Link>
                  </li>
                  <li className="origin-[-20px 50%] block list-none text-center">
                    <Link
                      className="p-2 text-slate-800 font-poppins hover:text-black"
                      href={"/about"}
                    >
                      About Us
                    </Link>
                  </li>
                </ul>{" "}
              </div>
            </motion.div>
            <motion.div
              transition={{ delay: 0.5 }}
              initial={{ opacity: 1, y: -100 }}
              animate={{ y: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="collapse w-auto flex-row rounded-none md:visible md:pt-2.5"
            >
              <input
                type="text"
                className="border-1 rounded-full font-poppins border border-slate-400 p-3 pl-4 w-60 mx-2 text-black"
                placeholder="Search"
              />
              <Link
                className="p-2 text-slate-800 font-poppins hover:text-black"
                href={"/topics"}
              >
                Topics
              </Link>
              <Link
                className="p-2 text-slate-800 font-poppins hover:text-black"
                href={"/advertise"}
              >
                Advertise
              </Link>
              <Link
                className="p-2 text-slate-800 font-poppins hover:text-black"
                href={"/books"}
              >
                Books
              </Link>
              <Link
                className="p-2 text-slate-800 font-poppins hover:text-black"
                href={"/about"}
              >
                About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
