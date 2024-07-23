import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import MiniCard from "./MiniCard";

type Props = {
  data: {
    id: number;
    title: string;
    description: string;
    image: string;
  }[];
};

const SwiperSlideCard = ({ data }: Props) => {
  return (
    <Swiper
      scrollbar={{ hide: true }}
      modules={[Scrollbar]}
      className="mySwiper w-full h-[550px]"
      centeredSlides={true}
      slidesPerView={1.3}
      spaceBetween={30}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id} className="block h-full select-none">
          <div className="w-full h-full flex flex-col bg-mute/30 rounded-xl overflow-hidden">
            <div className="w-full h-[50%] flex-0">
              <img
                src={"/godaddy-clone/media/images/" + item.image}
                className="w-full h-full object-cover"
              />
            </div>
            <MiniCard
              description={item.description}
              title={item.title}
              className="flex-1"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSlideCard;
