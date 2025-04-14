import { useState } from "react";
import { Card } from "../../../components/Card/Card";
import { Slide } from "../../../components/Slide/Slide";
import "swiper/css/free-mode";
import { FreeMode, Autoplay } from "swiper/modules";
import "./market.css";

function Market() {
  const exchanges = [
    {
      title: "BingX",
      img: "/bingX.png",
      link: "https://bingx.com/en/accounts/invite/VR26GG",
    },
    {
      title: "Hashkey",
      img: "/hashkey.png",
      link: "https://global.hashkey.com/en-US/register/invite?invite_code=qCpvZR",
    },
    {
      title: "OKX",
      img: "/okx.png",
      link: "https://www.okx.com/vi/join/81726041",
    },
    {
      title: "MEXC",
      img: "/mexc.png",
      link: "https://www.mexc.com/vi-VN/register?inviteCode=mexc-121eFA",
    },
    {
      title: "ByBit",
      img: "/byBit.png",
      link: "https://www.bybitglobal.com/en/sign-up?affiliate_id=19986",
    },
    {
      title: "Binance",
      img: "/binance.png",
      link: "https://accounts.binance.com/vi/register?ref=DCAGBWQ6",
    },
    {
      title: "BitGet",
      img: "/bitget.png",
      link: "https://www.bitget.com/vi/expressly?channelCode=TradeCoinVietnam&vipCode=gcr2&languageType=4",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="market">
      <div className="w-full h-full mx-[auto] flex py-[3rem_0] justify-center max-w-[108rem] px-[3rem] market-res max-sm:px-[2rem]">
        <div className="warpper-content gap-[2rem] flex market-res">
          <div className="col-left">
            <div className="w-full relative">
              <div className="pt-[18rem]" />
              <div>
                <h2 className="text-[4.48rem] font-bold leading-[1.3] mb-[0.5em] text-white">
                  LÀM QUEN THỊ TRƯỜNG BẰNG CÁCH TẠO TÀI KHOẢN SÀN GIAO DỊCH
                </h2>
              </div>
              <div className="w-full flex flex-row gap-[5rem] justify-center market-col_res">
                <div className="p-[0_1.5rem_3rem] ">
                  <div className="pt-[15vw]" />
                  <div className="relative">
                    <Card
                      img="/bingX.png"
                      title="Đăng kí tài khoản BingX"
                      description="Mã giới thiệu: 19986"
                      slug="BingX"
                    />
                    <img
                      className="absolute aspect-square max-w-[16.4rem] -top-[50%] -translate-x-1/2 translate-y-1/2 left-[-5%]"
                      src="/smoker.png"
                    />
                  </div>
                  <div>
                    <Card
                      img="/hashkey.png"
                      title="Đăng kí tài khoản Hashkey"
                      description="Mã giới thiệu: 19986"
                      slug="Hashkey"
                    />
                  </div>
                </div>
                <div className="p-[0_1.5rem_3rem]">
                  <div className="pt-[5vw]" />
                  <div>
                    <Card
                      img="/okx.png"
                      title="Đăng kí tài khoản OKX"
                      description="Mã giới thiệu: 19986"
                      slug="OKX"
                    />
                  </div>
                  <div>
                    <Card
                      img="/mexc.png"
                      title="Đăng kí tài khoản MEXC"
                      description="Mã giới thiệu: 19986"
                      slug="MEXC"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-right">
            <div className="w-full">
              <div className="p-[0_1.5rem_3rem]">
                <div className="relative">
                  <Card
                    img="/byBit.png"
                    title="Đăng kí tài khoản ByBit"
                    description="Mã giới thiệu: 19986"
                    slug="ByBit"
                  />
                </div>
                <div>
                  <Card
                    img="/binance.png"
                    title="Đăng kí tài khoản Binance"
                    description="Mã giới thiệu: 19986"
                    slug="Binance"
                  />
                </div>
                <div>
                  <Card
                    img="/bitget.png"
                    title="Đăng kí tài khoản BitGet"
                    description="Mã giới thiệu: 19986"
                    slug="BitGet"
                  />
                </div>
                <div>
                  <img src="./build.png" alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* Responsive */}
          <div className="market-slide">
            <h2 className="text-[3.36rem] font-bold leading-[1.3] mb-[1.68rem] text-white">
              LÀM QUEN THỊ TRƯỜNG BẰNG CÁCH TẠO TÀI KHOẢN SÀN GIAO DỊCH
            </h2>
            <div className="relative w-full p-[0_15px_30px] mket">
              <img
                className="absolute aspect-square max-w-[18%] -top-[2rem] -left-[2.5rem] z-10 left-img"
                src="/smoker.png"
              />
              <Slide.Root
                slidesPerView={2.4}
                spaceBetween={10}
                freeMode={true}
                modules={[FreeMode, Autoplay]}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                className="slide-content"
              >
                {exchanges.map((exchange, index) => (
                  <Slide.Item key={index}>
                    <div className="p-[1rem]">
                      <Card
                        img={exchange.img}
                        title={`Đăng kí tài khoản ${exchange.title}`}
                        description="Mã giới thiệu: 19986"
                        slug={exchange.title}
                        className={index === activeIndex ? "active" : ""}
                      />
                    </div>
                  </Slide.Item>
                ))}
              </Slide.Root>
              <div className="w-full flex justify-end">
                <img className="max-w-[12.5rem] h-[12.5rem]" src="./build.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Market;