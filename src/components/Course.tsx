import {
  CourseImage1,
  CourseImage2,
  CourseImage3,
  CourseImage4,
  CourseImage5,
  PlayIcon,
} from "../constants/Icon";
import CourseItem from "./CourseItem";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

const data = [
  { id: "1", image: CourseImage1, text: "Робототехника" },
  { id: "2", image: CourseImage2, text: "Живопись для детей" },
  { id: "3", image: CourseImage3, text: "Живопись для взрослых" },
  { id: "4", image: CourseImage4, text: "Английский язык для детей" },
  { id: "5", image: CourseImage5, text: "Шахмат" },
];
const cardData = [
  { id: 1, title: "Card 1" },
  { id: 2, title: "Card 2" },
  { id: 3, title: "Card 3" },
  { id: 4, title: "Card 4" },
  { id: 5, title: "Card 5" },
  { id: 6, title: "Card 1" },
  { id: 7, title: "Card 2" },
];

const Course = () => {
  return (
    <section className="overflow-hidden bg-[url(/images/CourseBackground2.png)] xl:bg-size-[width_1573px_height_2910px] bg-top-left xl:bg-[right_-15px_top_-700px] font-display px-[15px] py-[30px] md:px-[50px] lg:p-[80px] flex flex-col gap-[30px] md:gap-[50px] lg:gap-[80px]">
      <h2 className="font-bold text-[24px] md:text-[50px] lg:text-[96px] leading-[30px] md:leading-[1] lg:leading-[100px] tracking-[0] text-center text-[#F0D625]">
        Авторские кусы от JustRobotics
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[9px] sm:gap-[20px] lg:gap-[50px] justify-items-stretch justify-center">
        {data.map((item, index) => (
          <CourseItem image={item.image} text={item.text} index={index} />
        ))}
      </div>

      <div className="w-full ">
        <h5 className="font-bold text-[23px] leading-[32px] tracking-[0] uppercase ">
          отзывы
        </h5>
        <div className="overflow-hidden">
          <Swiper
            spaceBetween={30}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="w-full max-w-[1240px] mt-8 !overflow-visible"
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              800: {
                slidesPerView: 3,
              },

              1200: {
                slidesPerView: 4,
              },
              1440: {
                slidesPerView: 5,
              },
            }}
          >
            {cardData.map((_item) => (
              <SwiperSlide key={_item.id} className="!overflow-visible">
                <div className="h-[310px] bg-[#C4C4C4] rounded-[12px] shadow-[0px_0px_40px_0px_#F0D625] flex items-center justify-center cursor-pointer">
                  <div className="rounded-[24px] border border-white inline-block px-[25px] py-[12px]">
                    <img src={PlayIcon} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Course;
