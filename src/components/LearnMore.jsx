import { GiCornerFlag } from "react-icons/gi";

const LearnMore = () => {
  return (
    <div className="grid grid-cols-1 lg:flex mx-4 gap-4">
      <div className="lg:w-1/2 relative">
        <img
          className="h-[700px] rounded-3xl"
          src="https://i.ibb.co/crP4CQz/extra1.jpg"
          alt=""
        />
        <div className="absolute bottom-56 md:right-0 lg:right-3 bg-[#955E42] rounded-2xl text-white p-9">
          <div className="flex gap-4">
            <GiCornerFlag size={35} />
            <div className="space-y-2">
              <h2 className="text-xl">We're Making A Difference</h2>
              <p>
                Making a tangible difference,
                <br /> one community at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 space-y-8">
        <div className="flex gap-3">
          <p>-------------</p>
          <h4 className=" font font-medium">ABOUT US</h4>
        </div>
        <h1 className="text-4xl font-bold">
          Learn More About Our Mission, Values, And The Impact We've Made.
        </h1>
        <ul>
          <li>
            <strong>Integrity:</strong> We uphold the highest ethical standards
            in all our endeavors.
          </li>
          <li>
            <strong>Compassion:</strong> We approach our work with empathy and
            understanding.
          </li>
          <li>
            <strong>Innovation:</strong> We continuously seek new and creative
            solutions to address challenges.
          </li>
          <li>
            <strong> Collaboration:</strong> We believe in the power of
            partnerships and working together for greater impact.
          </li>
          <li>
            <strong>Inclusivity:</strong> We embrace diversity and strive to
            ensure everyone's voices are heard.
          </li>
        </ul>
        <div className="grid grid-cols-1 md:flex gap-4">
          <div className="">
            <p className="text-4xl font-bold text-[#955E42]">
              365 <sup>+</sup>
            </p>
            <div className="">
              <h1 className="text-xl font-bold">Charity Events Done</h1>
              <p>
                Our annual gala fundraiser gathers supporters for an evening of
                elegance, while community service days, walks/runs, and benefit
                concerts engage volunteers, promote health, and raise funds for
                our cause.
              </p>
            </div>
          </div>
          <img
            className="w-56 h-44 rounded-2xl"
            src="https://i.ibb.co/THp4jLM/donate.jpg"
            alt=""
          />{" "}
        </div>
        <button className="btn bg-[#553739] hover:bg-[#955E42] rounded-full hover:-translate-y-2 transition-all text-white px-12">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default LearnMore;
