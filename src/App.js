import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Routes, Route, useLocation } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";

import { Header, Footer, Loading, ScrollToTop } from "./components";

// import Pages Components
import {
  Home,
  Contact,
  AllProjects,
  Projects,
  SingleProject,
  Page404,
} from "./pages";

import { projects } from "./data/main";

function App() {
  const location = useLocation();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setLoading(false);
    }, 2500);
  }, []);

  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

  const animations = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.5, ...transition },
    },
    exit: { opacity: 0 },
  };

  return (
    <React.Fragment>
      {isLoading ? (
        <Loading />
      ) : (
        <AnimatePresence exitBeforeEnter initial={false}>
          <ScrollToTop>
            <motion.div
              variants={animations}
              initial="initial"
              animate="animate"
              exit="exit"
              className="app__container"
            >
              <Header />

              <Routes key={location.pathname} location={location}>
                <Route path="/" element={<Home />} />

                <Route path="projects" element={<AllProjects />}>
                  <Route
                    path="all"
                    index
                    element={<Projects projects={projects} />}
                  />
                  <Route
                    path=":projectId"
                    element={<SingleProject projects={projects} />}
                  />
                </Route>
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<Page404 />} />
              </Routes>
              <Toaster position="top-center" reverseOrder={false} />
              <Footer />
            </motion.div>
          </ScrollToTop>
        </AnimatePresence>
      )}
    </React.Fragment>
  );
}

export default App;
