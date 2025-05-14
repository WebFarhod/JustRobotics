import { useState } from "react";

import {
  DownIcon,
  HeaderAbout,
  HeaderContact,
  HeaderCourse,
  HeaderHome,
  HeaderLogo,
  HeaderMenu,
  HeaderX,
} from "../constants/Icon";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [menu, setMenu] = useState(false);
  const [language, setLanguage] = useState<"ru" | "uz">("uz");

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const toggleDropdownMenu = () => setIsOpenMenu((prev) => !prev);
  const toggleMenu = () => setMenu((prev) => !prev);

  return (
    <header className="max-w-[1440px] mx-auto px-[15px] md:px-[40px] lg:px-[80px] py-[23px] border-y-[14px] border-y-[#FFE000] bg-black flex items-center justify-between font-display relative z-[21]">
      <img className="h-[111px] w-[111px]" src={HeaderLogo} alt="" />
      <div className="flex items-center">
        <ul className="hidden xl:flex gap-[50px] items-center text-white font-normal text-2xl leading-[1] tracking-[0]">
          <li>
            <a href="#home" className="hover:text-[#F0D625]">
              Главная
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-[#F0D625]">
              О нас
            </a>
          </li>
          <div className="relative inline-block text-left">
            <div>
              <button
                onClick={toggleDropdown}
                className="inline-flex justify-center items-center gap-[5px] w-full rounded-[25px] border border-[#F0D625]  text-[#F0D625] py-[9px] px-[22px]"
              >
                Курсы
                <img className="w-[15px] h-[15px]" src={DownIcon} alt="" />
              </button>
            </div>

            {isOpen && (
              <div className=" absolute left-0 z-30 mt-2 w-[300px] origin-top-right ">
                <div className="p-1 flex flex-col gap-[9px] bg-black/70 rounded-3xl">
                  <a
                    href="#home"
                    className="rounded-[25px] border border-[#F0D625]  text-[#F0D625] py-[7px] px-[20px]"
                  >
                    Bosh sahifa
                  </a>
                  <a
                    href="#services"
                    className="rounded-[25px] border border-[#F0D625]  text-[#F0D625] py-[7px] px-[20px]"
                  >
                    Xizmatlar
                  </a>
                  <a
                    href="#contact"
                    className="rounded-[25px] border border-[#F0D625]  text-[#F0D625] py-[7px] px-[20px]"
                  >
                    Aloqa
                  </a>
                </div>
              </div>
            )}
          </div>

          <li>
            <a href="#contact" className="hover:text-[#F0D625]">
              Контакты
            </a>
          </li>
        </ul>

        <button className="hidden md:inline-block h-auto py-[15px] px-[54px] bg-[#FFE000] font-bold text-2xl leading-[1] tracking-[0] rounded-[7px] shadow-[0px_0px_32px_0px_#FFE000] ml-[47px]">
          Позвонить
        </button>

        <div className="flex items-center ml-[30px]">
          <button
            onClick={() => setLanguage("ru")}
            className={`inline-block h-auto px-[28px] py-[12px] rounded-[14px] border text-[22px] font-normal leading-[1] tracking-[0] transition-all
          ${
            language === "uz"
              ? "bg-[#F0D625] text-white border border-[#033538]"
              : "text-[#F0D625] border-transparent"
          }`}
          >
            RU
          </button>

          <button
            onClick={() => setLanguage("uz")}
            className={`inline-block  h-auto px-[28px] py-[12px] rounded-[14px] border text-[22px] leading-[1] tracking-[0] font-normal transition-all
          ${
            language === "ru"
              ? "bg-[#F0D625] text-white border border-[#033538]"
              : "text-[#F0D625] border-transparent"
          }`}
          >
            UZ
          </button>
          <button
            className="block xl:hidden"
            onClick={() => {
              toggleMenu();
            }}
          >
            {menu ? (
              <img className="w-[35px] h-[35px]" src={HeaderX} alt="" />
            ) : (
              <img className="w-[35px] h-[35px]" src={HeaderMenu} alt="" />
            )}
          </button>
        </div>
      </div>
      {menu && (
        <div className="block xl:hidden w-full absolute bg-black top-[170px] left-0 border-[15px] border-[#FFE000] p-[20px]">
          <ul className="flex flex-col text-white font-normal text-2xl leading-[1] tracking-[0]">
            <li>
              <a
                href="#home"
                className="h-[60px] hover:text-[#F0D625] flex gap-[9px] items-center border-b border-b-white"
              >
                <img src={HeaderHome} alt="" />
                Главная
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="h-[60px] hover:text-[#F0D625] flex gap-[9px] items-center border-b border-b-white"
              >
                <img src={HeaderAbout} alt="" />О нас
              </a>
            </li>
            <li>
              <p
                className="flex justify-between items-center border-b border-b-white"
                onClick={toggleDropdownMenu}
              >
                <span className="flex gap-[9px] items-center">
                  <img src={HeaderCourse} alt="" />
                  Курсы
                </span>
                <img className="w-[15px] h-[15px] mr-3" src={DownIcon} alt="" />
              </p>

              {isOpenMenu && (
                <div>
                  <a
                    href="#"
                    className="flex items-center gap-3 h-[60px] hover:text-[#F0D625] pl-15 border-b border-b-white"
                  >
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    Робототехника
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 h-[60px] hover:text-[#F0D625] pl-15 border-b border-b-white"
                  >
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    Английский
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 h-[60px] hover:text-[#F0D625] pl-15 border-b border-b-white"
                  >
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    Живопись для детей
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 h-[60px] hover:text-[#F0D625] pl-15 border-b border-b-white"
                  >
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    Живопись для взрослых
                  </a>
                </div>
              )}
            </li>

            <li>
              <a
                href="#contact"
                className="h-[60px] hover:text-[#F0D625] flex gap-[9px] items-center border-b border-b-white"
              >
                <img src={HeaderContact} alt="" />
                Контакты
              </a>
            </li>
          </ul>
          <button className="inline-block md:hidden h-auto py-[15px] px-[54px] bg-[#FFE000] font-bold text-2xl leading-[1] tracking-[0] rounded-[7px] shadow-[0px_0px_32px_0px_#FFE000] mt-5">
            Позвонить
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
