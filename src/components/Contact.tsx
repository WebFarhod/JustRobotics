import { useState } from "react";
import {
  ContactLocation,
  ContactPhone,
  ContactTime,
  DownIcon2,
} from "../constants/Icon";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <section className="bg-[url(/images/CourseBackground2.png)] bg-size-[width_100%_height_1325px] bg-[right_0px_top_-400px] px-[15px] md:px-[40px] lg:px-[80px] pb-[30px] lg:pb-[80px] flex flex-col gap-[30px] md:gap-[50px] lg:gap-[80px] font-display">
      <h2 className="font-bold text-[24px] md:text-[50px] xl:text-[96px] leading-[25px] md:leading-[55px] xl:leading-[100px] tracking-normal text-center uppercase text-[#F0D625]">
        получите бесплатный первый урок
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:flex  items-stretch gap-[15px] font-involve-normal">
        <input
          type="text"
          placeholder="Ваше имя"
          className="w-full xl:w-[230px] bg-white py-[15px] px-[30px] rounded-[9px] focus:outline-none focus:ring-2 focus:ring-[#F0D625] font-normal text-2xl leading-[1] tracking-normal placeholder-black/40"
        />
        <input
          type="text"
          placeholder="Номер телефона"
          className="w-full xl:w-[230px] bg-white py-[15px] px-[12px] rounded-[9px] focus:outline-none focus:ring-2 focus:ring-[#F0D625] font-normal text-2xl leading-[1] tracking-normal placeholder-black/40"
        />
        <div
          className={`w-full xl:w-[310px] relative inline-block text-left bg-white rounded-[9px] ${
            isOpen && "rounded-b-none"
          }`}
        >
          <div className="w-full h-full flex items-center">
            <button
              onClick={toggleDropdown}
              className="w-full inline-flex justify-between items-center py-[15px] px-[20px] font-normal text-2xl leading-[1] tracking-normal text-black/40 cursor-pointer"
            >
              Выберете курс
              <img
                className={`w-[27px]  ${isOpen && "rotate-180"}`}
                src={DownIcon2}
                alt=""
              />
            </button>
          </div>

          {isOpen && (
            <div className="w-full xl:w-[310px] absolute left-0 z-30 rounded-b-[9px] bg-white origin-top-right pb-[9px]">
              <div className="px-[20px] flex flex-col gap-[9px]">
                <a
                  href="#home"
                  className=" text-black border-t border-t-[#8D8D8D] py-[16px] font-normal text-[20px] leading-[1] "
                >
                  Работотехника
                </a>
                <a
                  href="#home"
                  className=" text-black border-t border-t-[#8D8D8D] py-[16px] font-normal text-[20px] leading-[1] "
                >
                  Живопись для взрослых
                </a>
                <a
                  href="#home"
                  className=" text-black border-t border-t-[#8D8D8D] py-[16px] font-normal text-[20px] leading-[1] "
                >
                  Живопись для детей
                </a>
                <a
                  href="#home"
                  className=" text-black border-t border-t-[#8D8D8D] py-[16px] font-normal text-[20px] leading-[1] "
                >
                  Шахмат
                </a>
                <a
                  href="#home"
                  className=" text-black border-y border-y-[#8D8D8D] py-[16px] font-normal text-[20px] leading-[1] "
                >
                  Английский
                </a>
              </div>
            </div>
          )}
        </div>
        <input
          type="text"
          placeholder="Возраст"
          className="w-full xl:w-[173px] bg-white py-[15px] px-[12px] rounded-[9px] focus:outline-none focus:ring-2 focus:ring-[#F0D625] font-normal text-2xl leading-[1] tracking-normal placeholder-black/40"
        />
        <button className="bg-[#FFE000] shadow-[0px_0px_30px_0px_#FFE000] font-semibold text-2xl leading-[1] tracking-normal uppercase py-[15px] px-[52px] rounded-[9px]">
          получить
        </button>
      </div>
      <div className="flex justify-stretch gap-[10px] lg:gap-[60px] font-involve-normal">
        <button className="bg-[#FFE000] w-full md:w-auto shadow-[0px_0px_40px_0px_#FFE000] rounded-[9px] font-bold text-[16px] md:text-2xl lg:text-3xl leading-[1] tracking-normal uppercase px-[35px] py-[15px] md:py-[19px] md:px-[64px] cursor-pointer">
          Филиал Ц4
        </button>
        <button className="bg-white w-full md:w-auto shadow-[0px_0px_40px_0px_#FFE000] rounded-[9px] font-bold text-[16px] md:text-2xl lg:text-3xl leading-[1] tracking-normal uppercase px-[35px] py-[15px] md:py-[19px] md:px-[64px] cursor-pointer">
          Филиал Беруни
        </button>
      </div>
      <div className="flex justify-between lg:justify-center lg:gap-[56px] font-involve-normal ">
        <div className="flex gap-[5px] md:gap-4 lg:gap-[24px] items-center ">
          <img
            src={ContactLocation}
            alt=""
            className="w-[20px] md:w-[30px] lg:w-[40px] h-[20px] md:h-[30px] lg:h-[40px]"
          />
          <p className="text-[10px] text-lg md:text-xl lg:text-2xl leading-[1] tracking-normal text-white">
            Адрес Орьентир
          </p>
        </div>
        <div className="flex gap-[5px] md:gap-4 lg:gap-[24px] items-center ">
          <img
            src={ContactTime}
            alt=""
            className="w-[20px] md:w-[30px] lg:w-[40px] h-[20px] md:h-[30px] lg:h-[40px]"
          />
          <p className="text-[10px] text-lg md:text-xl lg:text-2xl leading-[1] tracking-normal text-white">
            График работы
          </p>
        </div>
        <div className="flex gap-[5px] md:gap-4 lg:gap-[24px] items-center ">
          <img
            src={ContactPhone}
            alt=""
            className="w-[20px] md:w-[30px] lg:w-[40px] h-[20px] md:h-[30px] lg:h-[40px]"
          />
          <p className="text-[10px] text-lg md:text-xl lg:text-2xl leading-[1] tracking-normal text-white">
            Номера телефонов
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
