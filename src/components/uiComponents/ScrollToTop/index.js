import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop(Propse) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return <React.Fragment>{Propse.children}</React.Fragment>;
}

export default ScrollToTop;
