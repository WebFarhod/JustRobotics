import { HeroImage } from "../constants/Icon";

const Hero = () => {
  return (
    <section className="bg-black bg-[url(/images/HeroBackgrounImg.png)] w-full relative overflow-hidden font-display z-20 xl:shadow-[0px_18px_127px_0px_#000] pb-[13px] lg:pb-[60px] rounded-b-[30px]">
      <div className="bg-white inline-block p-[15px] lg:p-[50px] rounded-[15px] lg:rounded-[30px] w-[235px] sm:w[320px] md:w-[450px] lg:w-[650px] mt-[31px] ml-[21px] sm:ml-[35px] lg:mt-[50px] lg:ml-[53px]">
        <h3 className="font-semibold text-[32px] md:text-[50px] xl:text-[84px] leading-[30px] lg:leading-[1]">
          JustRobotics
        </h3>
        <h4 className="w-[150px] sm:w-auto font-medium text-[16px] md:text-[26px] xl:text-[40px] leading-[16px] md:leading-[26px] xl:leading-[42px] mt-[5px]">
          твой проводник в мир технологий и искусства
        </h4>
        <p className="w-[150px] sm:w-auto font-normal text-[14px] lg:text-[20px] leading-[16px] xl:leading-[1] tracking-[0] md:mt-[40px] xl:mt-[79px] mt-[5px]">
          получите бесплатное первое занятие
        </p>
        <button className="uppercase font-[Involve] font-bold text-[14px] xl:text-2xl leading-[1] tracking-[0] rounded-lg bg-black text-[#FFE001] py-[8px] px-[5px] xl:py-[15px] xl:px-[45px] mt-[6px]">
          Перейти к курсам
        </button>
      </div>
      <img
        className="absolute w-[185px] sm:w-[250px] md:w-auto h-[200px] sm:h-[200px]  md:h-[250px] lg:h-[400px] xl:h-auto object-cover bottom-0 right-0 overflow-visible"
        src={HeroImage}
        alt=""
      />
    </section>
  );
};

export default Hero;
