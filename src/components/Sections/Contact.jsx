import { EarthCanvas } from "../Canvas";
import { styles } from "../../styles";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Loader2 } from "lucide-react";

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.05,
    rootMargin: "200px",
  });

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    await e.preventDefault();

    setLoading(true);

    try {
      if (!form.name || !form.email) {
        alert("Please fill in your name and email");
        return;
      }

      await emailjs.send(
        import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Tommy",
          from_email: form.email,
          to_email: "itsTomLie@gmail.com",
          message: form.message,
        },
        { publicKey: import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY }
      );

      setLoading(false);

      setForm({
        name: "",
        email: "",
        message: "",
      });

      alert("Thank you. I will get back to you as soon as possible");
    } catch (error) {
      setLoading(false);

      console.log(error);

      alert("Something went wrong, please try again");
    }
  };

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
            className={`p-10 w-full max-w-xl bg-surface rounded-xl space-y-5 z-10`}
          >
            <div>
              <p className={`${styles.sectionSubText}`}>GET IN TOUCH</p>
              <p
                className={`${styles.sectionHeadText} ${styles.sectionTextGradient}`}
              >
                Contact
              </p>
            </div>
            <form
              action="post"
              ref={formRef}
              className="space-y-5"
              onSubmit={handleSubmit}
            >
              <div className="space-y-2 flex flex-col ">
                <label htmlFor="" className="text-white-primary">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  className="p-4 bg-onSurface rounded-lg outline-none"
                  placeholder="Your name here"
                  required={true}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2 flex flex-col">
                <label htmlFor="" className="text-white-primary">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  className="p-4 bg-onSurface rounded-lg outline-none"
                  placeholder="Your email here"
                  required={true}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2 flex flex-col">
                <label htmlFor="" className="text-white-primary">
                  Your Message
                </label>
                <textarea
                  rows={7}
                  name="message"
                  value={form.message}
                  required={true}
                  className="p-4 bg-onSurface rounded-lg outline-none"
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="bg-onSurface shadow-lg w-full p-2 rounded-lg font-bold text-white-primary flex justify-center"
              >
                {loading ? <Loader2 className="animate-spin" /> : "Send"}
              </button>
            </form>
          </div>
        </>
      )}

      <small className="mt-10">
        Copyright &copy; {new Date().getFullYear()} itsTomLie.my.id
      </small>
    </div>
  );
};

export default Contact;
