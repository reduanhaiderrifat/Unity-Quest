import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
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
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" relative">
            <img
              className="flex h-[400px] md:h-[600px] lg:h-[750px] xl:h-[750px] w-full  justify-center opacity-80"
              src="https://i.ibb.co/GJR3gpM/slider1.jpg"
              alt=""
            />
            <div className=" absolute top-[8%] lg:top-[30%] mx-[20%]">
              <p className=" text-white font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl hover:text-black">
                Healthcare in Gaza faces significant challenges due to limited
                resources and strained infrastructure. With a population of
                nearly 2 million people, communal tensions and economic
                downturns further exacerbate the situation. Collaborative
                efforts, often relying on public funding and international aid,
                aim to address these pressing healthcare needs.
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
            <div className=" absolute top-[8%] lg:top-[30%] mx-[20%]">
              <p className=" text-white font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl hover:text-black">
                Donating to support healthcare in Gaza is crucial for addressing
                urgent medical needs in the region. With limited resources and
                strained infrastructure, the population of nearly 2 million
                people faces significant challenges accessing essential
                healthcare services. Your donation can make a meaningful
                difference by providing medical supplies, equipment, and support
                for healthcare facilities, helping to save lives and improve the
                well-being of those in need.
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
            <div className=" absolute top-[8%] lg:top-[30%] mx-[20%]">
              <p className=" text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold hover:text-black">
                Animal care involves ensuring the well-being and welfare of
                animals through proper nutrition, shelter, healthcare, and
                companionship. This includes providing a safe and clean
                environment, regular veterinary check-ups, appropriate exercise,
                and social interaction. Animal care also encompasses responsible
                ownership practices, such as spaying and neutering, vaccination,
                and training, to promote the health and happiness of pets and
                other animals.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="flex  h-[400px] md:h-[600px] lg:h-[750px] xl:h-[750px] w-full justify-center opacity-80"
              src="https://i.ibb.co/g4CzxN2/slider4.jpg"
              alt=""
            />
            <div className=" absolute top-[8%] lg:top-[30%] mx-[20%]">
              <p className=" text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold hover:text-black">
                Social volunteering involves dedicating one's time and efforts
                to serve and support various social causes and community
                initiatives without financial compensation. Volunteers engage in
                activities such as assisting vulnerable populations, organizing
                events, fundraising, advocacy, and providing support to
                individuals or groups in need. Social volunteers play a crucial
                role in fostering positive change, promoting social cohesion,
                and making a meaningful impact on society.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
