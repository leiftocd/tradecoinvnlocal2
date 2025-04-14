/* eslint-disable react/prop-types */
import BenefitBox from "../../../../components/benefitBox/benefitBox.jsx";
import ImgOne from '../../../../../public/benefit/01.png';
import ImgTwo from '../../../../../public/benefit/02.png';
import ImgThree from '../../../../../public/benefit/03.png';

function BenefitContainerT({ activeBox, onBoxClick }) {
    return (
        <>
            <div className="flex gap-[1rem] flex-[1] beneB-res">
                <BenefitBox 
                    id="1"
                    spanText="01"
                    srcImg={ImgOne}
                    titleText="Tỉ lệ kèo thắng cao"
                    activeBox={activeBox}
                    onBoxClick={onBoxClick}
                />
                <BenefitBox
                    id="2"
                    spanText="02"
                    srcImg={ImgTwo}
                    titleText="Đội ngũ Trader #1 Việt Nam #6 Toàn thế giới"
                    activeBox={activeBox}
                    onBoxClick={onBoxClick}
                />
                <BenefitBox 
                    id="3"
                    spanText="03"
                    srcImg={ImgThree}
                    titleText="Nhóm tín hiệu Free, không thu phí"
                    activeBox={activeBox}
                    onBoxClick={onBoxClick}
                />
            </div>
        </>
    );
}

export default BenefitContainerT;