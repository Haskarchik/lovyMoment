import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [elementPath, setElementPath] = useState('/');

  useEffect(() => {
    if (pathname.includes("/Page")) {
      window.scrollTo(0, 0);
      setElementPath(pathname.slice(6));
  
    } else {
      setTimeout(() => {

        document.getElementById(elementPath).scrollIntoView();
      }, 0);
    }
  }, [pathname]);

  return null;
}
