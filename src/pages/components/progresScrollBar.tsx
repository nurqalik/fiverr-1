import { motion, useScroll, useSpring } from "framer-motion";

const ProgressScrollBar = () => {
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
    </>
  );
};

export default ProgressScrollBar;
