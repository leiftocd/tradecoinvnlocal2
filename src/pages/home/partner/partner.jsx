import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FreeMode, Autoplay } from "swiper/modules";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import { Slide } from "../../../components/Slide/Slide";
import './partner.css'
import { useRef, useState } from "react";

const Partner = () => {
  const swiperRef = useRef(null);
  const [slidesConfig, setSlidesConfig] = useState({
    slidesPerView: 4.3,
    spaceBetween: 0,
    
    
  });
  useIsomorphicLayoutEffect(() => {
    const updateSlidesConfig = () => {
      if (window.innerWidth <= 900 && window.innerWidth > 600) {
        setSlidesConfig({ slidesPerView: 3.3, spaceBetween: 10 });
      } else if (window.innerWidth >= 600) {
        setSlidesConfig({ slidesPerView: 4.3, spaceBetween: 0 });
      } else {
        setSlidesConfig({ slidesPerView: 3.3, spaceBetween: 0 });
      }

      swiperRef.current?.swiper?.update();
    };

    updateSlidesConfig();
    window.addEventListener("resize", updateSlidesConfig); 
    return () => window.removeEventListener("resize", updateSlidesConfig); 
  }, []);
  return (
    <section id="partner">
        <div className="w-full h-full mx-[auto] flex py-[3rem] justify-center max-w-[108rem] max-sm:py-[3rem_1.5rem] ">
        <div className="warpper-content w-full flex flex-wrap gap-[3rem]">
          <div className="w-full mb-[2rem] max-sm:mb-[1rem]">
            <h2 className="text-center text-6xl text-white font-bold]">
              CHÚNG TÔI CÓ QUAN HỆ ĐỐI TÁC VỚI
            </h2>
          </div>
          <div className="slide-res w-full p-[0_1.5rem_3rem] glow-slide">
            <div className="p-[20px] w-full relative">
              <h3 className="text-[2rem] text-white font-bold text-center my-[1rem]">
                Exchange Partners
              </h3>
              <Slide.Root
                {...slidesConfig}
                grabCursor={true}
                modules={[FreeMode, Autoplay]}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                navigation={{
                  nextEl: ".swiper-button-next-1",
                  prevEl: ".swiper-button-prev-1",
                  uniqueNavElements: true,
                }}
                breakpoints={{
                  1000: {
                    slidesPerView: 3.3,
                    spaceBetween: 0,
                  },

                  1025: {
                    slidesPerView: 4.3,
                    spaceBetween: 0,
                  },
                }}
                className="slide-content"
              >
                <Slide.Item>
                  <div className="slide-item">
                    <img
                      className="h-full w-full object-fit max-w-[20rem] max-h-[20rem]"
                      src="/slide/img11.png"
                      alt=""
                    />
                  </div>
                </Slide.Item>

                <Slide.Item>
                  <div className="slide-item">
                    <img
                      className="h-full w-full object-fit max-w-[20rem] max-h-[20rem]"
                      src="/slide/img12.png"
                      alt=""
                    />
                  </div>
                </Slide.Item>
                <Slide.Item>
                  <div className="slide-item">
                    <img
                      className="h-full w-full object-fit max-w-[20rem] max-h-[20rem]"
                      src="/slide/img13.png"
                      alt=""
                    />
                  </div>
                </Slide.Item>
                <Slide.Item>
                  <div className="slide-item">
                    <img
                      className="h-full w-full object-fit max-w-[20rem] max-h-[20rem]"
                      src="/slide/img14.png"
                      alt=""
                    />
                  </div>
                </Slide.Item>
                <Slide.Item>
                  <div className="slide-item">
                    <img
                      className="h-full w-full object-fit max-w-[20rem] max-h-[20rem]"
                      src="/slide/img15.png"
                      alt=""
                    />
                  </div>
                </Slide.Item>
                <Slide.Item>
                  <div className="slide-item">
                    <img
                      className="h-full w-full object-fit max-w-[20rem] max-h-[20rem]"
                      src="/slide/img16.png"
                      alt=""
                    />
                  </div>
                </Slide.Item>
                <Slide.Item>
                  <div className="slide-item">
                    <img
                      className="h-full w-full object-fit max-w-[20rem] max-h-[20rem]"
                      src="/slide/img17.png"
                      alt=""
                    />
                  </div>
                </Slide.Item>
              </Slide.Root>
              <button className="swiper-button-prev-1 rounded-full ">
                <IoIosArrowBack className="w-full h-full object-cover fill-white" />
              </button>
              <button className="swiper-button-next-1 rounded-full">
                <IoIosArrowForward className="w-full h-full object-cover fill-white" />
              </button>
            </div>
          </div>

          <div className="slide-res w-full p-[0_1.5rem_3rem] glow-slide">
            <div className="p-[20px] w-full relative">
              <h3 className="text-[2rem] text-white font-bold text-center my-[1rem]">
                Partners
              </h3>
              <Slide.Root
                {...slidesConfig}
                grabCursor={true}
                modules={[FreeMode, Autoplay]}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                navigation={{
                  nextEl: ".swiper-button-next-2",
                  prevEl: ".swiper-button-prev-2",
                  uniqueNavElements: true,
                }}
                className="slide-content"
              >
                <Slide.Item>
                  <div className="slide-item">
                    <img
                      className="h-full w-full object-fit max-w-[20rem] max-h-[20rem]"
                      src="/slide/img21.png"
                      alt=""
                    />
                  </div>
                </Slide.Item>

                <Slide.Item>
                  <div className="slide-item">
                    <img
                      className="h-full w-full object-fit max-w-[20rem] max-h-[20rem]"
                      src="/slide/img22.png"
                      alt=""
                    />
                  </div>
                </Slide.Item>
                <Slide.Item>
                  <div className="slide-item">
                    <img
                      className="h-full w-full object-fit max-w-[20rem] max-h-[20rem]"
                      src="/slide/img23.png"
                      alt=""
                    />
                  </div>
                </Slide.Item>
                <Slide.Item>
                  <div className="slide-item">
                    <img
                      className="h-full w-full object-fit max-w-[20rem] max-h-[20rem]"
                      src="/slide/img24.png"
                      alt=""
                    />
                  </div>
                </Slide.Item>
                <Slide.Item>
                  <div className="slide-item">
                    <img
                      className="h-full w-full object-fit max-w-[20rem] max-h-[20rem]"
                      src="/slide/img25.png"
                      alt=""
                    />
                  </div>
                </Slide.Item>
                <Slide.Item>
                  <div className="slide-item">
                    <img
                      className="h-full w-full object-fit max-w-[20rem] max-h-[20rem]"
                      src="/slide/img26.png"
                      alt=""
                    />
                  </div>
                </Slide.Item>
                <Slide.Item>
                  <div className="slide-item">
                    <img
                      className="h-full w-full object-fit max-w-[20rem] max-h-[20rem]"
                      src="/slide/img27.png"
                      alt=""
                    />
                  </div>
                </Slide.Item>
                <Slide.Item>
                  <div className="slide-item">
                    <img
                      className="h-full w-full object-fit max-w-[20rem] max-h-[20rem]"
                      src="/slide/img28.png"
                      alt=""
                    />
                  </div>
                </Slide.Item>
                <Slide.Item>
                  <div className="slide-item">
                    <img
                      className="h-full w-full object-fit max-w-[20rem] max-h-[20rem]"
                      src="/slide/img29.png"
                      alt=""
                    />
                  </div>
                </Slide.Item>
                <Slide.Item>
                  <div className="slide-item">
                    <img
                      className="h-full w-full object-fit max-w-[20rem] max-h-[20rem]"
                      src="/slide/img30.png"
                      alt=""
                    />
                  </div>
                </Slide.Item>
              </Slide.Root>
              <button className="swiper-button-prev-2 rounded-full ">
                <IoIosArrowBack className="w-full h-full object-cover fill-white" />
              </button>
              <button className="swiper-button-next-2 rounded-full">
                <IoIosArrowForward className="w-full h-full object-cover fill-white" />
              </button>
            </div>
          </div>
        </div>
        </div>
    </section>
  );
};

export default Partner;
