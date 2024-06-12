import { FaLocationArrow } from "react-icons/fa";
import { MagicButton } from "./ui/magic-button";
import { socialMedia } from "@/data";

export const Footer = () => {
  return (
    <>
      <footer id="contact" className="mb-[100px] w-full pb-10 md:mb-5">
        <div className="flex flex-col items-center">
          <h1 className="heading lg:max-w-[45vw]">
            Ready to take <span className="text-purple">your</span> digital
            presence to the next level?
          </h1>
          <p className="my-5 text-center text-white-200 md:mt-10">
            Reach out tome today and let&apos; discuss how I can help you
            achieve your goals.
          </p>
          <a href="mailto:insu@insu.com">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between md:flex-row">
          <p className="text-sm font-light md:text-base md:font-normal">
            Copyright &copy; 2024 Insu
          </p>
          <div className="flex items-center gap-6 md:gap-3">
            {socialMedia.map((profile) => (
              <div
                key={profile.id}
                className="flex size-10 cursor-pointer items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 saturate-100 backdrop-blur-lg backdrop-filter"
              >
                <img
                  src={profile.img}
                  alt="profile image"
                  width={20}
                  height={20}
                />
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};
