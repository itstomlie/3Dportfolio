import { useEffect, useRef } from "react";

const useIntersectionObserver = (callback, options) => {
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry.target.id);
        }
      });
    }, options);

    return () => {
      observer.current.disconnect();
    };
  }, [callback, options]);

  const observe = (element) => {
    if (element) observer.current.observe(element);
  };

  const unobserve = (element) => {
    if (element) observer.current.unobserve(element);
  };

  return { observe, unobserve };
};

export default useIntersectionObserver;
