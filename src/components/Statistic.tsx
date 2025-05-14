import StatisticItem from "./StatisticItem";

const Statistic = () => {
  return (
    <section className="xl:h-[258px] py-[30px] xl:px-[15px] md:px-[40px] lg:px-[80px] font-display relative z-10">
      <div className="flex flex-wrap gap-[10px] justify-center  xl:gap-0 xl:flex-nowrap xl:justify-between bg-transparent xl:relative xl:top-[-92px]">
        <StatisticItem count="300+" text="Довольных студентов" />
        <StatisticItem count="25+" text="Преподавателей" />
        <StatisticItem count="60+" text="групп" />
      </div>
    </section>
  );
};

export default Statistic;
