import { GiHeavyCollar, GiTakeMyMoney } from "react-icons/gi";

const Donate = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className=" border space-y-12 bg-[#553739] rounded-2xl">
        <div className="relative">
          <img
            className="rounded-t-2xl"
            src="https://i.ibb.co/bsfsG1d/donate1.jpg"
            alt=""
          />
          <h2 className=" absolute top-4 text-xl text-white rounded-full left-2 bg-[#5B5857] pb-2 pt-2 px-6">
            SOCIAL
          </h2>
          <div className="absolute bg-white py-1 px-4 pl-2 text-white rounded-full  w-2/3 left-[13%]">
            <div className="flex bg-[#9C914F] py-1 px-4  rounded-full items-center justify-between">
              <p>COLLECTED</p> <p>90%</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="px-5  text-white">
            <h2 className="text-xl font-bold mb-3">Emergency Relief Fund</h2>
            <p>
              Supporting those in crisis, our Emergency Relief Fund provides
              vital assistance when it's needed most, offering hope and help in
              times of adversity.
            </p>
            <p className="my-5 flex items-center gap-2">
              <GiHeavyCollar /> Collected : $10,000
            </p>
            <p className=" flex items-center gap-2">
              <GiTakeMyMoney /> Target : $11,000
            </p>
            <button className="btn w-full my-6 transition-all hover:-translate-y-3 bg-[#955E42] border-none rounded-full text-xl text-white hover:bg-white hover:text-[#955E42] font-semibold">
              DONATE NOW
            </button>
          </div>
        </div>
      </div>
      <div className=" border space-y-12 bg-[#553739] rounded-2xl">
        <div className="relative">
          <img
            className="rounded-t-2xl"
            src="https://i.ibb.co/LPXYjxT/donate2.jpg"
            alt=""
          />
          <h2 className=" absolute top-4 text-xl text-white rounded-full left-2 bg-[#5B5857] pb-2 pt-2 px-6">
            SOCIAL
          </h2>
          <div className="absolute bg-white py-1 px-4 pl-2 text-white rounded-full  w-2/3 left-[13%]">
            <div className="flex bg-[#9C914F] py-1 px-4  rounded-full items-center justify-between">
              <p>COLLECTED</p> <p>80%</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="px-5  text-white">
            <h2 className="text-xl font-bold mb-3">
              Education Access Initiative
            </h2>
            <p>
              Empowering futures through education, our Access Initiative opens
              doors to learning for all, ensuring equal opportunities and
              nurturing bright minds for a better tomorrow.
            </p>
            <p className="my-5 flex items-center gap-2">
              <GiHeavyCollar /> Collected : $11,000
            </p>
            <p className=" flex items-center gap-2">
              <GiTakeMyMoney /> Target : $9,000
            </p>
            <button className="btn w-full my-6 transition-all hover:-translate-y-3 bg-[#955E42] border-none rounded-full text-xl text-white hover:bg-white hover:text-[#955E42] font-semibold">
              DONATE NOW
            </button>
          </div>
        </div>
      </div>
      <div className=" border space-y-12 bg-[#553739] rounded-2xl">
        <div className="relative">
          <img
            className="rounded-t-2xl"
            src="https://i.ibb.co/KsHZ2mj/donate3.jpg"
            alt=""
          />
          <h2 className=" absolute top-4 text-xl text-white rounded-full left-2 bg-[#5B5857] pb-2 pt-2 px-6">
            SOCIAL
          </h2>
          <div className="absolute bg-white py-1 px-4 pl-2 text-white rounded-full  w-2/3 left-[13%]">
            <div className="flex bg-[#9C914F] py-1 px-4  rounded-full items-center justify-between">
              <p>COLLECTED</p> <p>65%</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="px-5  text-white">
            <h2 className="text-xl font-bold mb-3">
              Healthcare Outreach Program
            </h2>
            <p>
              Our Healthcare Outreach Program extends a helping hand to those in
              need, providing essential medical support and promoting wellness
              within our community.
            </p>
            <p className="my-5 flex items-center gap-2">
              <GiHeavyCollar /> Collected : $14,000
            </p>
            <p className=" flex items-center gap-2">
              <GiTakeMyMoney /> Target : $7,000
            </p>
            <button className="btn w-full my-6 transition-all hover:-translate-y-3 bg-[#955E42] border-none rounded-full text-xl text-white hover:bg-white hover:text-[#955E42] font-semibold">
              DONATE NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;

//

//
