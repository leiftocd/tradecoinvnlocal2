import { useState } from 'react';
import BenefitContainerT from "./benefitContainerT/benefitContainerT.jsx";
import BenefitContainerB from "./benefitContainerB/benefitContainerB.jsx";
import Grow from '../../../../public/grow.png';
import '../benefit/benefit.css';

function Benefit() {
    const [activeBox, setActiveBox] = useState(null);

    const handleBoxClick = (id) => {
        setActiveBox((prev) => (prev === id ? null : id)); 
    };

    return (
        <section id='benefit'>
            <div className="flex flex-col mx-[auto] px-[3rem] gap-[3rem] max-w-[108rem] bene">
                <div className="inline-flex items-center justify-center max-md:items-start max-md:justify-center">
                    <div className="flex pt-[5px]">
                        <img src={Grow} alt="grow" className="min-w-[30px] max-h-[30px]" />
                    </div>
                    <span className="benefit-tit text-[2.5vw] text-white uppercase font-bold text-center">
                        Quyền lợi thành viên TradeCoinVN
                    </span>
                    <div className="flex pt-[5px]">
                        <img src={Grow} alt="grow" className="min-w-[30px] max-h-[30px]" />
                    </div>
                </div>
                <div className="flex flex-col gap-[2rem] max-sm:gap-[1rem]">
                    <BenefitContainerT activeBox={activeBox} onBoxClick={handleBoxClick} />
                    <BenefitContainerB activeBox={activeBox} onBoxClick={handleBoxClick} />
                </div>
            </div>
        </section>
    );
}

export default Benefit;