import { FaArrowRightLong } from "react-icons/fa6";

const Charity = () => {
  return (
    <div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className=" border space-y-12 hover:shadow-2xl  rounded-2xl">
          <div className="relative overflow-hidden">
            <img
              className="rounded-t-2xl hover:scale-110 transition-all hover:rotate-3 rounded-xl w-full h-72"
              src="https://i.ibb.co/FDH3wDF/vln.jpg"
              alt=""
            />
            <h2 className=" absolute top-4 bg-[#748E54] text-xl rounded-full left-2 text-white pb-2 pt-2 px-6">
              CHARITY
            </h2>
            <div className="absolute  text-white rounded-full  bottom-2 ">
              <div className=" bg-[#553739] py-1 px-4 ">
                <p className=" font-bold text-lg text-center">04</p>{" "}
                <p className="font-bold">December</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="px-5 ">
              <h2 className="text-3xl hover:text-[#955E42] font-bold mb-3">
                A Day In The Life Of A Volunteer
              </h2>
              <p>
                A day in the life of a volunteer begins with a sense of purpose
                at sunrise, as they embark on their mission to make a
                difference. From serving meals to the homeless to teaching in
                underserved communities, their dedication knows no bounds.
              </p>
              <button className="mt-7 flex items-center gap-2 hover:text-black text-[#955E42] ">
                READ MORE{" "}
                <span>
                  <FaArrowRightLong size={20} />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className=" border space-y-12 hover:shadow-2xl rounded-2xl">
          <div className="relative overflow-hidden">
            <img
              className="rounded-t-2xl hover:scale-110 transition-all h-72 w-full hover:rotate-3 rounded-xl"
              src="https://i.ibb.co/ryW6sPp/vln1.jpg"
              alt=""
            />
            <h2 className=" absolute top-4 bg-[#748E54] text-xl rounded-full left-2 text-white pb-2 pt-2 px-6">
              CHARITY
            </h2>
            <div className="absolute  text-white rounded-full  bottom-2 ">
              <div className=" bg-[#553739] py-1 px-4 ">
                <p className=" font-bold text-lg text-center">09</p>{" "}
                <p className="font-bold">May</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="px-5 ">
              <h2 className="text-3xl hover:text-[#955E42] font-bold mb-3">
                How Volunteering Can Transform Your Life
              </h2>
              <p>
                Volunteering is not just about giving; it's also about
                receiving. While volunteers dedicate their time and energy to
                helping others, they often find that the experience transforms
                their own lives in profound ways. Let's explore how volunteering
                can be a catalyst for personal growth, fulfillment, and
                meaningful connections.
              </p>
              <button className="mt-7 flex items-center gap-2 hover:text-black text-[#955E42] ">
                READ MORE{" "}
                <span>
                  <FaArrowRightLong size={20} />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className=" border space-y-12 hover:shadow-2xl rounded-2xl">
          <div className="relative overflow-hidden rounded-xl">
            <img
              className="rounded-t-2xl hover:scale-110 h-72 transition-all w-full hover:rotate-3 rounded-xl"
              src="https://i.ibb.co/3FJBmMD/2148687355.jpg"
              alt=""
            />
            <h2 className=" absolute top-4 bg-[#748E54] text-xl rounded-full left-2 text-white pb-2 pt-2 px-6">
              CHARITY
            </h2>
            <div className="absolute  text-white rounded-full  bottom-2 ">
              <div className=" bg-[#553739] py-1 px-4 ">
                <p className=" font-bold text-lg text-center">06</p>{" "}
                <p className="font-bold">March</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="px-5 ">
              <h2 className="text-3xl hover:text-[#955E42] font-bold mb-3">
                Building Stronger Communities
              </h2>
              <p>
                Strong communities are built on the foundation of collective
                action and shared responsibility. Volunteerism plays a crucial
                role in fostering this sense of unity and empowerment, bringing
                people together to address common challenges and create positive
                change. Let's explore how volunteerism strengthens communities
                by promoting social cohesion, resilience, and inclusivity.
              </p>
              <button className="mt-7 flex items-center gap-2 hover:text-black text-[#955E42] ">
                READ MORE{" "}
                <span>
                  <FaArrowRightLong size={20} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charity;
