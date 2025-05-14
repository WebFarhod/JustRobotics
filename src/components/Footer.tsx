import {
  FooterInstagram,
  FooterTelegram,
  FooterYouTube,
  HeaderLogo,
} from "../constants/Icon";

const Footer = () => {
  return (
    <footer className="bg-[#FFE000] max-w-[1440px] mx-auto px-[15px] md:px-[40px] lg:px-[80px] pt-[10px] pb-[18px]">
      <div className=" grid md-grid-cols-2 lg:grid-cols-3 gap-[30px] lg:gap-[140px]">
        <div>
          <img className=" w-[70px] h-[70px]" src={HeaderLogo} alt="" />
          <p className="font-bold font-[Roboto] text-[14px] leading-[22px] tracking-normal mt-[15px]">
            SLOGAN lLorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex gap-[14px] mt-[20px]">
            <img src={FooterTelegram} alt="" />
            <img src={FooterYouTube} alt="" />
            <img src={FooterInstagram} alt="" />
          </div>
        </div>
        <div className="font-[Involve] mt-[16px]">
          <h3 className="font-bold text-[26px] leading-[1.4] tracking-normal">
            Курсы
          </h3>
          <div className="flex flex-col gap-[10px]">
            <p className="font-normal text-[20px] leading-[1.3] tracking-normal">
              Работотехника
            </p>
            <p className="font-normal text-[20px] leading-[1.3] tracking-normal">
              Английский для взрослых
            </p>
            <p className="font-normal text-[20px] leading-[1.3] tracking-normal">
              Английский для детей
            </p>
            <p className="font-normal text-[20px] leading-[1.3] tracking-normal">
              Шахмат
            </p>
            <p className="font-normal text-[20px] leading-[1.3] tracking-normal">
              Живопись
            </p>
          </div>
        </div>
        <div className="font-[Involve] mt-[16px]">
          <h3 className="font-bold text-[26px] leading-[1.4] tracking-normal">
            Контакты
          </h3>
          <div className="flex flex-col gap-[10px]">
            <p className="font-normal text-[20px] leading-[1.3] tracking-normal">
              Телеграм
            </p>
            <p className="font-normal text-[20px] leading-[1.3] tracking-normal">
              Инстаграм
            </p>
            <p className="font-normal text-[20px] leading-[1.3] tracking-normal">
              Ютюб
            </p>
          </div>
        </div>
      </div>

      <p className="font-[Involve] font-semibold text-[14px] leading-[1] tracking-[0] mt-[22px]">
        Ideallux.com © 2000-2024, All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
