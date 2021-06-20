import { useState, useEffect } from "react";

const useWidth = (ref, prop = "clientWidth") => {
  const [width, setWidth] = useState(null);
  useEffect(() => {
    console.log("useEffect called");
    setWidth(ref.current[prop]);
    const handleResize = () => setWidth(ref.current[prop]);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [ref, prop]);
  return width;
};

export default useWidth;
