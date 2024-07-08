import { EarthCanvas } from "./canvas";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.05,
    rootMargin: "200px",
  });

  return (
    <div
      id="contact"
      ref={ref}
      className={`viewport-block ${styles.bigPaddingXY} bg-primary h-full w-full flex flex-col items-center`}
    >
      {inView && (
        <>
          <motion.div className="w-full md:h-[550px] h-[350px]">
            <EarthCanvas />
          </motion.div>
          <div
            className={`p-10 w-full max-w-xl bg-black-100 rounded-xl space-y-5 z-10`}
          >
            <div>
              <p className={`${styles.sectionSubText}`}>GET IN TOUCH</p>
              <p className={`${styles.sectionHeadText} text-white-100`}>
                Contact.
              </p>
            </div>
            <form action="post" className="space-y-5">
              <div className="space-y-2 flex flex-col ">
                <label htmlFor="" className="text-white-100">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="p-4 bg-tertiary rounded-lg outline-none"
                  placeholder="Tommy Lie"
                />
              </div>
              <div className="space-y-2 flex flex-col">
                <label htmlFor="" className="text-white-100">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="p-4 bg-tertiary rounded-lg outline-none"
                  placeholder="itsTomLie@gmail.com"
                />
              </div>
              <div className="space-y-2 flex flex-col">
                <label htmlFor="" className="text-white-100">
                  Your Message
                </label>
                <textarea
                  rows={7}
                  name="message"
                  className="p-4 bg-tertiary rounded-lg outline-none"
                />
              </div>
              <button
                type="submit"
                className="bg-tertiary shadow-lg w-full p-2 rounded-lg font-bold text-white-100"
              >
                Send
              </button>
            </form>
          </div>
        </>
      )}

      <small className="mt-10">
        Copyright &copy; {new Date().getFullYear()} itsTomLie.com
      </small>
    </div>
  );
};

export default Contact;
