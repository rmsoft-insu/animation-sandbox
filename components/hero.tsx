import { Spotlight } from "@/components/ui/spotlight";

export const Hero = () => {
  return (
    <>
      <div className="pb-20 pt-36">
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
    </>
  );
};
