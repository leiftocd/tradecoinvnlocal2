/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination} from "swiper/modules";
import { forwardRef } from "react";

const SwiperRoot = forwardRef(
  (
    {
      className,
      slidesPerView = 1,
      spaceBetween = 0,
      modules = [Navigation, Pagination],
      children,
      ...props
    },
    ref
  ) => (
    <Swiper
      ref={ref}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      modules={modules}
      className={className}
      {...props}
    >
      {children}
    </Swiper>
  )
);

SwiperRoot.displayName = Swiper.displayName;

const SwiperItem = forwardRef(({ className, children, ...props }, ref) => {
  console.log({ ...props });
  return (
    <SwiperSlide ref={ref} className={className} {...props}>
      {children}
    </SwiperSlide>
  );
});
SwiperItem.displayName = SwiperSlide.displayName;
const Slide = {
  Root: SwiperRoot,
  Item: SwiperItem,
};

export { Slide };
