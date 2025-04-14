import BannerImgLeft from '../../../../public/bannerLeft.png'
import BannerImgRight from '../../../../public/bannerRight.png'
import BannerLogo from '../../../../public/bannerlogo.png'
import BannerContentBg from '../../../../public/bannerContentBg.png'
import WebsiteImg from '../../../../public/website.png'
import YoutubeImg from '../../../../public/ytb.png'
import TwitterImg from '../../../../public/x.png'
import BannerBtn from '../../../components/bannerBtn.jsx'
function Banner() {
  return (
    <>
    <section >
        <div className='banner flex flex-col relative -mb-[1px] mx-[auto]
        max-sm:py-[2.8rem]  max-sm:px-[0] max-sm:gap-[2rem]' 
         >
            <div className=" mx-[auto] res-img">
                <img src={BannerLogo} alt="" className=' max-w-[100%]' loading='lazy'/>
            </div>
            <div className=" flex w-full justify-center
            max-sm:gap-[3rem]
            ">
                <div className=' banner-img w-full flex items-center max-w-[22%] 
                max-sm:hidden
                '>
                    <img src={BannerImgLeft} alt="banner" className=' w-full ' loading='lazy'/>
                </div>
                <div className=" flex items-center justify-center flex-col gap-[1rem] px-[0] mx-[auto] max-w-1/2
                max-sm:px-[0] res-w" >
                    <div className='  flex flex-col items-center
                    max-sm:gap-[1rem]  max-sm:px-[0rem] m-mb-1'>
                        <div className="whitespace-pre-line inline-block text-[#00E9EC] text-center 
                            [webkit-text-stroke-width:1px] [webkit-text-stroke-color:#00E9EC] leading-[100%]
                            text-[4vw] font-[700] -tracking-[1px] uppercase text-shadow-glow font-roboto
                            max-sm:text-[3.5rem] max-sm:px-[0] max-sm:-tracking-[1px] max-sm:text-neon" >
                                Cộng đồng Crypto
                                top 1 Việt Nam
                        </div>
                        <div className=' max-w-[14.7rem] hidden w-full items-center resMImg max-sm:flex '>
                            <img src={BannerImgLeft} alt="banner" className=' w-full' loading='lazy'/>
                        </div>
                    </div>
                    <div className='flex w-full items-center justify-center gap-[0]
                    max-sm:gap-[2rem] '>
                        <div className='w-full flex flex-col items-center justify-center gap-[1.5rem]  px-[1rem] 
                        max-sm:gap-[1rem] max-sm:px-[0] '>
                            <div className='flex items-center justify-center w-full max-sm:px-[1.5rem_0]' 
                            >
                                <img src={BannerContentBg} alt="" className='imgBannerPc max-w-[100%]' loading='lazy'/>
                            </div>
                            <div className=' flex flex-col w-full gap-[1rem] items-center pr-[5%] mid
                            max-sm:gap-[1rem] max-sm:px-[0]'>
                                <BannerBtn slug={'link-telegram-channel'}
                                    text="Channel Telegram TradeCoinVN"
                                    className=" bannerBtn flex items-center justify-center max-w-[27.5rem] max-xl:max-w-[26.5rem] 
                                    "
                                    spanBtn="textBtn  
                                    "
                                />
                        
                                <BannerBtn href={'https://www.facebook.com/groups/tradervietnam'}   text="Group Facebook TradeCoinVN" 
                                    className=" bannerBtn flex items-center justify-center max-w-[26.5rem] 
                                    "
                                    spanBtn="textBtn  
                                     "
                                />
                        
                                <BannerBtn slug={'link-telegram-support'}  text="Liên Hệ Support TradeCoinVN" 
                                    className=" bannerBtnLast  py-[1rem] flex items-center justify-center max-w-[26.5rem] 
                                    " 
                                    spanBtn=" textBtnLast "
                                />
                            </div>
                        </div>
                        <div className='flex flex-col gap-[1.6rem] w-full h-[100%] items-center justify-center
                        max-sm:hidden'>
                            <a href="https://tradecoinvn.net/" className=' w-full flex max-w-[76%]'>
                                <img src={WebsiteImg} alt="" className=' w-full max-w-[40rem]'  />
                            </a>
                            <a href="https://www.youtube.com/@tradecoinvn_media" className=' max-w-[76%] flex w-full'>
                                <img src={YoutubeImg} alt="" className=' w-full max-w-[40rem]' />
                            </a>
                            <a href="https://x.com/TCVNcommunity" className='  flex w-full max-w-[76%]'>
                                <img src={TwitterImg} alt="" className=' w-full max-w-[40rem]' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className=" banner-img w-full flex items-center max-w-[22%] 
                max-sm:hidden
                ">
                    <img src={BannerImgRight} alt="banner" className=' w-full ' loading='lazy'/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Banner
