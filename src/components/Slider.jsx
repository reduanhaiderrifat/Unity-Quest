import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
const Slider = () => {
  return (
    <div className="   overflow-hidden">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" relative">
            <img
              className="flex h-[400px] md:h-[600px] lg:h-[750px] xl:h-[750px] w-full  justify-center opacity-80"
              src="https://i.ibb.co/HNw1CdH/flood.jpg"
              alt=""
            />
            <div className=" absolute top-[20%] lg:top-[30%] mx-[20%]">
              <h2 className="text-2xl text-white lg:text-5xl hover:text-black">
                Building Hope: Mobilizing Volunteers for Flood Relief in
                Bangladesh
              </h2>
              <p className=" text-white font-semibold text-sm md:text-lg lg:text-xl xl:text-2xl hover:text-black">
                Volunteer for Bangladesh (VBD), the youth wing of JAAGO
                Foundation, has come forward and stood beside them with the
                support of the volunteers in Gaibandha district. They have
                distributed various essential items including dry food among the
                villagers. They also provided them with the necessary
                information to combat floods and how they should seek emergency
                support.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="flex h-[400px] md:h-[600px] lg:h-[750px] xl:h-[750px] w-full justify-center opacity-80"
              src="https://i.ibb.co/mbsD8mx/slider2.jpg"
              alt=""
            />
            <div className=" absolute top-[20%] lg:top-[30%] mx-[20%] space-y-4">
              <h2 className="text-2xl text-white lg:text-5xl hover:text-black">
                Your YES makes all the difference!
              </h2>
              <p className=" text-white font-semibold text-sm md:text-lg lg:text-xl xl:text-2xl hover:text-black">
                When you say yes to these children, you say yes to their
                futures. God has big plans for the thousands of children we
                serve, and He wants to use YOU to help make those plans possible
                Will you give a gift and change a life?
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="flex  h-[400px] md:h-[600px] lg:h-[750px] xl:h-[750px] w-full  justify-center opacity-80"
              src="https://i.ibb.co/NtZ3rTF/slider3.jpg"
              alt=""
            />
            <div className=" absolute top-[20%] lg:top-[30%] mx-[20%]">
              <h2 className="text-2xl text-white lg:text-5xl hover:text-black">
                Wildlife & Animal Care Volunteer Abroad Programs
              </h2>
              <p className=" text-white font-semibold text-sm md:text-lg lg:text-xl xl:text-2xl hover:text-black">
                Do you want to volunteer with animals abroad or play a pivotal
                role in preserving wildlife around the world? International
                Volunteer HQ’s Wildlife volunteer opportunities and Animal Care
                programs allow volunteers to support local initiatives that
                protect endangered species, preserve their natural environment
                and help improve the quality of life for abandoned or rescued
                animals.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <img
              className="flex  h-[400px] md:h-[600px] lg:h-[750px] xl:h-[750px] w-full justify-center opacity-80"
              src="https://i.ibb.co/Rj9Nh9K/boold.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
