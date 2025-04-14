/* eslint-disable react/prop-types */
import BenefitBox from "../../../../components/benefitBox/benefitBox.jsx";
import ImgFour from '../../../../../public/benefit/04.png';
import ImgFive from '../../../../../public/benefit/05.png';
import ImgSix from '../../../../../public/benefit/06.png';

function BenefitContainerB({ activeBox, onBoxClick }) {
    return (
        <>
            <div className="flex gap-[1rem] flex-[1] beneT-res">
                <BenefitBox 
                    id="4"
                    spanText="04"
                    srcImg={ImgFour}
                    titleText="Cập nhật tin tức thị trường crypto tốc độ tên lửa"
                    activeBox={activeBox}
                    onBoxClick={onBoxClick}
                />
                <BenefitBox 
                    id="5"
                    spanText="05"
                    srcImg={ImgFive}
                    titleText="Tri ân đến cộng đồng với những phần quà độc quyền"
                    activeBox={activeBox}
                    onBoxClick={onBoxClick}
                />
                <BenefitBox 
                    id="6"
                    spanText="06"
                    srcImg={ImgSix}
                    titleText="Tham gia hệ sinh thái social trader #1 Việt Nam"
                    activeBox={activeBox}
                    onBoxClick={onBoxClick}
                />
            </div>
        </>
    );
}

export default BenefitContainerB;