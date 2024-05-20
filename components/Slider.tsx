"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { AnimeSliderPicturesProps } from "@/constants/types";
import Link from "next/link";

interface Props {
  anime: AnimeSliderPicturesProps;
}

const Slider = ({ anime }: Props) => {
  const backImg = (n) => {
    let el = document.querySelector(".blur_div");
    if (anime[n]?.images?.jpg?.large_image_url) {
      el.style.backgroundImage = `url('${anime[n]?.images?.jpg?.large_image_url}')`;
    }
  };

  useEffect(() => {
    let counter = 0;
    const interval = setInterval(() => {
      let rd = document.getElementsByName("radiobtn");
      for (let i = 0; i < rd.length; i++) {
        if (rd[i].checked === true) {
          counter = i + 1;
          break;
        }
      }
      counter = (counter % 5) + 1;
      backImg(counter - 1);
      document.getElementById("radio" + counter).checked = true;
    }, 5000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [backImg]);

  return (
    <div className="relative w-full h-[40vw] shadow-inner-[0px_-15px_13px_0px_rgba(0,0,0,1)] mb-[40px]">
      <div
        id="imgi"
        style={{
          backgroundImage: `url(${anime[0]?.images?.jpg?.large_image_url})`,
        }}
        className="blur_div absolute w-full h-full bg-cover transition-all duration-1000"
      ></div>
      <div className="outer h-[calc(40vw+100px)] w-full p-[60px_15px_5px_15px] md:p-[60px_80px_25px_80px] backdrop-blur-sm">
        <div className="slider h-full w-full relative overflow-hidden rounded-[20px] hover:shadow-sm hover:shadow-[red] active:translate-y-1 ease-in-out duration-200">
          <div className="slides flex w-[500%] h-full">
            <input
              type="radio"
              name="radiobtn"
              id="radio1"
              defaultChecked
              className="hidden"
            />
            <input
              type="radio"
              name="radiobtn"
              id="radio2"
              className="hidden"
            />
            <input
              type="radio"
              name="radiobtn"
              id="radio3"
              className="hidden"
            />
            <input
              type="radio"
              name="radiobtn"
              id="radio4"
              className="hidden"
            />
            <input
              type="radio"
              name="radiobtn"
              id="radio5"
              className="hidden"
            />

            <Link
              href={`/anime/${anime[0]?.mal_id}`}
              className="slide first w-[1%] h-full transition duration-1000"
            >
              <Image
                src={anime[0]?.images?.jpg?.large_image_url}
                alt="slide1"
                width={900}
                height={800}
                className="img absolute w-full h-full rounded-[20px] transition duration-1000"
              />
            </Link>
            <Link
              href={`/anime/${anime[1]?.mal_id}`}
              className="slide second w-[1%] h-full transition duration-1000"
            >
              <Image
                src={anime[1]?.images?.jpg?.large_image_url}
                alt="slide2"
                width={900}
                height={800}
                className="img absolute w-full h-full rounded-[20px] transition duration-1000"
              />
            </Link>
            <Link
              href={`/anime/${anime[2]?.mal_id}`}
              className="slide third w-[1%] h-full transition duration-1000"
            >
              <Image
                src={anime[2]?.images?.jpg?.large_image_url}
                alt="slide3"
                width={900}
                height={800}
                className="img absolute w-full h-full rounded-[20px] transition duration-1000"
              />
            </Link>
            <Link
              href={`/anime/${anime[3]?.mal_id}`}
              className="slide fourth w-[1%] h-full transition duration-1000"
            >
              <Image
                src={anime[3]?.images?.jpg?.large_image_url}
                alt="slide4"
                width={900}
                height={800}
                className="img absolute w-full h-full rounded-[20px] transition duration-1000"
              />
            </Link>
            <Link
              href={`/anime/${anime[4]?.mal_id}`}
              className="slide fifth w-[1%] h-full transition duration-1000"
            >
              <Image
                src={anime[4]?.images?.jpg?.large_image_url}
                alt="slide5"
                width={900}
                height={800}
                className="img absolute w-full h-full rounded-[20px] transition duration-1000"
              />
            </Link>

            <div className="navbackground absolute w-full top-[93%] flex justify-center items-center">
              <label
                htmlFor="radio1"
                className="manualnav lbl1 border-2 border-white rounded-full p-1 cursor-pointer transition duration-500 mr-5 hover:bg-white"
              ></label>
              <label
                htmlFor="radio2"
                className="manualnav lbl2 border-2 border-white rounded-full p-1 cursor-pointer transition duration-500 mr-5 hover:bg-white"
              ></label>
              <label
                htmlFor="radio3"
                className="manualnav lbl3 border-2 border-white rounded-full p-1 cursor-pointer transition duration-500 mr-5 hover:bg-white"
              ></label>
              <label
                htmlFor="radio4"
                className="manualnav lbl4 border-2 border-white rounded-full p-1 cursor-pointer transition duration-500 mr-5 hover:bg-white"
              ></label>
              <label
                htmlFor="radio5"
                className="manualnav lbl5 border-2 border-white rounded-full p-1 cursor-pointer transition duration-500 hover:bg-white"
              ></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;

{
  /*    import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface SwiperInstance {
    slideNext: () => void;
    slidePrev: () => void;
  }

  const [swiperInstance, setSwiperInstance] = useState<SwiperInstance | null>();

  const goNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const saveSwiperInstance = (swiper: SwiperInstance) => {
    setSwiperInstance(swiper);
  };
  */
}

{
  /* <div classNameName="relative p-10 border h-80 overflow-hidden">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "keyframes",
            stiffness: 260,
            damping: 20,
          }}
          classNameName=""
        >
          <div classNameName="flex absolute z-10 gap-4 p-3 items-center">
            <button
              classNameName="bg-black/80 backdrop-blur-2xl text-white p-2 lg:p-4 rounded-full flex justify-center"
              onClick={goPrev}
              aria-label="go previous slide"
            >
              <BsArrowLeftShort size={20} />
            </button>
            <button
              classNameName="bg-black/80 text-white p-2 lg:p-4 rounded-full flex justify-center"
              onClick={goNext}
              aria-label="go next slide"
            >
              <BsArrowRightShort size={20} />
            </button>
          </div>
          <Swiper
            spaceBetween={20}
            centeredSlides={false}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            classNameName="mySwiper"
            onSwiper={saveSwiperInstance}
          >
            {data?.map((i: []) => (
              <SwiperSlide key={i?.id}>
                <Image
                  src={i?.image.original}
                  alt={`Slider of ${i?.name}`}
                  width={500}
                  height={500}
                  loading="lazy"
                  classNameName="relative aspect-auto"
                />
                <div classNameName="absolute text-white bg-black/50 w-full h-full">
                  <div classNameName="absolute text-left flex gap-3 flex-col bottom-3 pb-4 md:text-4xl p-4 w-[90%]">
                    <h1 classNameName="z-50 truncate 2xl:w-full w-[90%] lg:text-5xl lg:font-bold overflow-hidden">
                      {i?.name}
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.section>
      </div> */
}

{
  /* <Link
  href={`/details/${popular.id}`}
  classNameName="bg-white text-center shadow-lg font-semibold text-black lg:w-44 lg:p-3 2xl:w-52 2xl:p-4 lg:text-2xl lg:mt-8  p-3 w-32 text-sm rounded-lg"
>
  Watch Now
</Link> */
}
