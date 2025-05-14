// components/YandexMap.tsx
// import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const YandexMap = () => {
  return (
    <section className="h-[490px] md:h-[600px] pb-[30px] md:pb-[40px] lg:pb-[80px]">
      <iframe
        src="https://yandex.uz/map-widget/v1/?ll=66.974376%2C39.658146&z=16&pt=66.974376,39.658146,pm2rdm"
        width="100%"
        height="100%"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default YandexMap;
