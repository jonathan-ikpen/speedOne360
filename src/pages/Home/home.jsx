import { useState, useEffect, useRef } from "react";
import "../../index.css";

import { HomeBtn } from "../../components/Buttons/buttons";

const h4styles = "font-bold text-[18px] text-black-3";

const Home = () => {
  return (
    <main className="">
      <Hero />
    </main>
  );
};

const Hero = () => {
  const url = "";

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="pt-[48px] max-w-[944px] flex flex-col justify-center items-center">
      <h1 className="text-[52px] font-bold  text-[#eceded] mb-[32px] text-center leading-[54px] ">
        SpeedOne<span className="text-main_tint">360</span>
      </h1>

      <div className="flex flex-col justify-center items-center max-w-[620px]">
        <p
          className="text-[20px] text-[#89949e] text-center mb-[32px] "
          data-reveal-delay="400"
        >
          We provide Fast, Reliable, Affordable and Unlimited internet services.
          connect once, and get beautiful results forever.
        </p>
        <div className="flex flex-col gap-6 justify-center items-center w-[100%] mmm:flex-row ">
          <HomeBtn
            url={"/register"}
            name={"Register"}
            new_class={
              "bg-main_tint border-main_tint hover:bg-main_tint hover:border-main_tint"
            }
          />
          <HomeBtn
            url={"https://t.me/SpeedOne360"}
            name={"Contact us"}
            new_class={
              "bg-[#25282C] border-[#25282C] hover:bg-[#2a2d32] hover:border-[#2a2d32]"
            }
          />
        </div>
      </div>

      <HeroImg />
    </div>
  );
};

const HeroImg = ({ width = "" }) => {
  const [play, setPlay] = useState(false);
  const ref = useRef(null);
  const playBtn = useRef(null);

  const handlePlay = () => {
    setPlay(!play);

    if (play) {
      ref.current.play();
      playBtn.current.style.opacity = "0";
    }
    if (!play) {
      ref.current.pause();
      playBtn.current.style.opacity = "1";
    }
  };

  return (
    <section className="pt-8 flex items-center justify-center flex-col ">
      <div className="flex justify-center items-center mt-[64px]">
        {/* <img src={imgPath} alt="" width={width} /> */}
        {/* poster="" preload="auto" */}
        <video
          id="video"
          preload="auto"
          poster="src/assets/poster3.png"
          ref={ref}
        >
          <source
            src="https://res.cloudinary.com/jonathan-ikpen/video/upload/v1675685960/speedOne360/video_2023-02-06_13-07-51_spl70s.mp4"
            type="video/mp4"
          />
        </video>
        {/* data-state="play" */}
        <div
          id="video-controls"
          className="absolute w-fit rounded-[50%] "
          ref={playBtn}
        >
          <button
            id="playpause"
            className=" border-green-100 p-[8px] rounded-full flex items-center justify-center gap-[8px] bg-main_tint "
            onClick={() => handlePlay()}
          >
            <span
              height="40px"
              width="40px"
              className="p-[8px] rounded-full flex justify-center items-center gap-[8px] text-[#89949e]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                height="40px"
                width="40px"
              >
                <path d="M133 440a35.37 35.37 0 01-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0135.77.45l247.85 148.36a36 36 0 010 61l-247.89 148.4A35.5 35.5 0 01133 440z"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
