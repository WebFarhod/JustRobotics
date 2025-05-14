interface IProps {
  image: string;
  text: string;
  index: number;
}
const CourseItem = (data: IProps) => {
  return (
    <div
      className={`mx-auto md:max-w-[550px] w-full rounded-[30px] bg-[#F0D625] p-[15px] lg:pt-[45px] lg:pb-[35px] lg:px-[50px] flex flex-col justify-between gap-[115px] items-end shadow-[0px_0px_20px_0px_#F0D625] lg:shadow-[0px_0px_50px_0px_#F0D625]  ${
        data.index % 2 == 1 ? "lg:justify-self-start" : "lg:justify-self-end"
      }`}
    >
      <div className="flex flex-col gap-[21px] w-full">
        <img
          src={data.image}
          alt=""
          className="rounded-[30px] h-[210px] w-full object-cover"
        />
        <h4 className=" font-bold text-[25px] md:text-[30px] lg:text-[40px] leading-[42px] tracking-[0] ">
          {data.text}
        </h4>
      </div>
      <button className="bg-black px-[20px] py-[7px] font-semibold text-[21px] leading-[1] tracking-[0] text-white rounded-full cursor-pointer hover:opacity-80">{`Подробнее о кусе ->`}</button>
    </div>
  );
};

export default CourseItem;
