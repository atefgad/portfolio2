import { Hero, TopProjects, Services, Testimonials } from "../../components";

import { motion } from "framer-motion";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const animations = {
  initial: { opacity: 0, y: 250 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ...transition },
  },
  exit: { opacity: 0, y: 0 },
};

export default function Home() {
  return (
    <motion.div variants={animations} initial="initial" animate="animate">
      <Hero />
      <TopProjects />
      <Services />
      <Testimonials />
    </motion.div>
  );
}
