import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Impressed by the <span className="text-purple">projects and skills</span> showcased here?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Let&apos;s connect and discuss how I can contribute to your team.
        </p>
        <a href="mailto:prodanrobert123@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

    </footer>
  );
};

export default Footer;
