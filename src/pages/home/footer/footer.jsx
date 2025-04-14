import { useState } from "react"
import Popup from '../../../components/popup/popup.jsx'
import { Link } from "react-router-dom";
function Footer() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose  = () => setIsOpen(false);
  return (
    <section id="Footer" className='w-full flex items-center justify-center mx-[auto] py-[2rem_4rem]
    '>
        <div className=' max-w-[108rem] w-full flex justify-start items-center gap-[4rem] footer-res max-sm:gap-[3rem]'>
            <div className="f-top w-full flex justify-start flex-col gap-[8rem] px-[1rem]
            max-sm:gap-[3rem] max-sm:px-[0]">
                <span className='f-span_res text-[2vw] font-bold text-white w-full' > 
                    Đăng ký để nhận tin tức 
                    mới nhất của chúng tôi.
                </span>
                <div className=' flex flex-col gap-[2rem]'>
                    <p className=' text-white text-[16px] max-w-[50%] max-sm:max-w-full max-sm:text-center'>Nắm bắt sức mạnh biến đổi 
                    của tiền điện tử</p>
                    <div className=' flex gap-[.5rem] max-sm:justify-center max-sm:items-center-center max-sm:gap-[1rem]'>
                        <Link to="/" className='relative group border-solid border-[#cccccc] border-[2px] rounded-[50%] p-[2px] w-[3rem] h-[3rem flex items-center justify-center]
                        hover:bg-[#2478ba] cursor-pointer hover:border-0'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='object-cover'>
                                <path fill="#fff" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"/>
                            </svg>
                            <span className="absolute bottom-[150%] -left-[100%] right-[50%] mx-auto w-max px-2 py-2 text-white bg-gray-900 rounded-md opacity-0 group-hover:opacity-100 transition">
                                Follow on Facebook
                            </span>
                        </Link>
                        <Link to="/" className='relative group border-solid border-[#cccccc] border-[2px] rounded-[50%] p-[2px] w-[3rem] h-[3rem] flex items-center justify-center
                        hover:bg-[#2478ba] cursor-pointer hover:border-0'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className=' object-cover'>
                                <path fill="#fff" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1M12 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0a5 5 0 0 1-10 0" clipRule="evenodd"/>
                            </svg>
                            <span className="absolute bottom-[150%] -left-[100%] right-[50%] mx-auto w-max px-2 py-2 text-white bg-gray-900 rounded-md opacity-0 group-hover:opacity-100 transition">
                                Follow on Instagram
                            </span>
                        </Link>
                        <Link  to="/" className='relative group border-solid border-[#cccccc] border-[2px] rounded-[50%] p-[2px] w-[3rem] h-[3rem] flex items-center justify-center
                        hover:bg-[#000000] cursor-pointer hover:border-0'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd" 
                            className='object-cover'>
                                <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="#fff" d="M14 2a2 2 0 0 1 2 2a3.004 3.004 0 0 0 2.398 2.94a2 2 0 0 1-.796 3.92A7 7 0 0 1 16 10.325V16a6 6 0 1 1-7.499-5.81a2 2 0 0 1 .998 3.873A2.002 2.002 0 0 0 10 18a2 2 0 0 0 2-2V4a2 2 0 0 1 2-2"/></g>
                            </svg>
                            <span className="absolute bottom-[150%] -left-[100%] right-[50%] mx-auto w-max px-2 py-2 text-white bg-gray-900 rounded-md opacity-0 group-hover:opacity-100 transition">
                                Follow on TikTok
                            </span>
                        </Link>
                        <Link to="/" className='relative group border-solid border-[#cccccc] border-[2px] rounded-[50%] p-[2px] w-[3rem] h-[3rem] flex items-center justify-center
                        hover:bg-[#2478ba] cursor-pointer hover:border-0'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='object-cover'>
                                <path fill="#fff" d="M22.213 5.656a8.4 8.4 0 0 1-2.402.658A4.2 4.2 0 0 0 21.649 4c-.82.488-1.719.83-2.655 1.015a4.182 4.182 0 0 0-7.126 3.814a11.87 11.87 0 0 1-8.621-4.37a4.17 4.17 0 0 0-.566 2.103c0 1.45.739 2.731 1.86 3.481a4.2 4.2 0 0 1-1.894-.523v.051a4.185 4.185 0 0 0 3.355 4.102a4.2 4.2 0 0 1-1.89.072A4.185 4.185 0 0 0 8.02 16.65a8.4 8.4 0 0 1-6.192 1.732a11.83 11.83 0 0 0 6.41 1.88c7.694 0 11.9-6.373 11.9-11.9q0-.271-.012-.541a8.5 8.5 0 0 0 2.086-2.164"/>
                            </svg>
                            <span className="absolute bottom-[150%] -left-[200%] -right-[50%] mx-auto w-max px-2 py-2 text-white bg-gray-900 rounded-md opacity-0 group-hover:opacity-100 transition">
                                Follow on Twitter
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='f-bot flex w-full justify-between flex-col gap-[5rem] max-lg:gap-[4rem] max-md:gap-[3rem] max-sm:gap-[2rem]'>
                <div className='btn-footer flex items-center w-full justify-center'>
                    <button onClick={handleOpen} className= ' rounded-[10px] bg-[rgba(28,28,28,.7)] shadow-[inset_2px_10px_20px_rgba(255,255,255,0.2)] backdrop-blur-[38.85px] border-2 border-[#00E9EC] hover:bg-gradient-to-r from-[rgba(17,93,242,0.48)] to-[rgba(0,233,236,0.48)] cursor-pointer px-[2.4rem] py-[2rem] flex items-center gap-[1rem] max-lg:px-[1.6rem] max-lg:py-[1.2rem]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" color="white">
                            <g fill="white" fillRule="evenodd">
                            <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M19.777 4.43a1.5 1.5 0 0 1 2.062 1.626l-2.268 13.757c-.22 1.327-1.676 2.088-2.893 1.427c-1.018-.553-2.53-1.405-3.89-2.294c-.68-.445-2.763-1.87-2.507-2.884c.22-.867 3.72-4.125 5.72-6.062c.785-.761.427-1.2-.5-.5c-2.302 1.738-5.998 4.381-7.22 5.125c-1.078.656-1.64.768-2.312.656c-1.226-.204-2.363-.52-3.291-.905c-1.254-.52-1.193-2.244-.001-2.746z"/></g>
                        </svg>
                        <span className=" text-white text-[16px] font-bold 
                        max-lg:text-[1.4rem]">Liên hệ Support TradeCoinVN</span>
                    </button>
                </div>
                <div className=' flex justify-between gap-[6rem] 
                max-lg:gap-[4rem] max-md:gap-[2rem] max-sm:justify-evenly'>
                    <div className='flex flex-col gap-[1rem] p-[0_15px_30px]
                    max-md:p-0'>
                        <span className=' text-white text-[2rem]
                        max-lg:text-[1.6rem] '>Support</span>
                        <ul className=' mt-[1rem] text-white text-[1.6rem] 
                        max-lg:text-[1.4rem] '>
                            <li className='list-none'>Documentation</li>
                            <li className='list-none'>Contact</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-[1rem] p-[0_15px_30px]
                        max-md:p-0
                    '>
                        <span className=' text-white text-[2rem]
                        max-lg:text-[1.6rem]
                        '>Company</span>
                        <ul className=' mt-[1rem] text-white text-[1.6rem]'>
                            <li className='list-none'>About Us</li>
                            <li className='list-none'>Blog</li>
                            <li className='list-none'>Services</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-[1rem] p-[0_15px_30px] 
                    max-md:p-0'>
                        <span className=' text-white text-[2rem]
                        max-lg:text-[1.6rem]
                        '>Legal</span>
                        <ul className=' mt-[1rem] text-white text-[1.6rem]'>
                            <li className='list-none'>Privacy</li>
                            <li className='list-none'>Terms</li>
                            <li className='list-none'>Partners</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {isOpen && 
        <Popup />}
        <div className={`overlay ${isOpen ? 'active' : ''}`}
            onClick={handleClose}>
        </div>
    </section>
    
  )
}

export default Footer
