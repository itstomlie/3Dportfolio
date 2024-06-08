import { styles } from "../styles";

const Navbar = () => {
  return (
    <div
      className={`${styles.paddingX} py-6 flex justify-between bg-primary w-full`}
    >
      <div className="flex justify-center items-center gap-3">
        <img src="./logo.svg" alt="logo" className="w-8" />
        <h1 className="text-white text-lg font-bold">Tommy Lie | Portfolio</h1>
      </div>
      <div className="flex space-x-10">
        <p className="text-lg font-medium text-secondary">About</p>
        <p className="text-lg font-medium text-secondary">Work</p>
        <p className="text-lg font-medium text-secondary">Contact</p>
      </div>
    </div>
  );
};

export default Navbar;
