interface IProps {
  count: string;
  text: string;
}
const StatisticItem = (data: IProps) => {
  return (
    <div className="min-w-[100px] w-[195px] sm:w-[250px] xl:w-[398px] xl:h-[369px] py-[25px] xl:pt-[127px] rounded-[15px] xl:rounded-[30px] bg-[#F0D625] flex flex-col items-center shadow-[0px_0px_15px_0px_#F0D625] xl:shadow-[0px_0px_30px_0px_#F0D625] ">
      <h2 className="font-semibold text-[32px] md:text-[60px] xl:text-[120px] leading-[1] tracking-[0] text-center">
        {data.count}
      </h2>
      <p className=" font-semibold text-[12px] md:text-[20px] xl:text-[40px] leading-[42px] tracking-[0] text-center">
        {data.text}
      </p>
    </div>
  );
};

export default StatisticItem;
