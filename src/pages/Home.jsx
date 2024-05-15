import { Helmet } from "react-helmet-async";
import Donate from "../components/Donate";
import LearnMore from "../components/LearnMore";
import Slider from "../components/Slider";
import VolunteerNeedCard from "../components/VolunteerNeedCard";
import { Link } from "react-router-dom";
import Charity from "../components/Charity";
import BestVolunteer from "../components/BestVolunteer";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>UnityQuest-Home</title>
      </Helmet>
      <div className="min-h-[calc(100vh-230px)]">
        <section className="slider">
          <Slider />
        </section>
        <section className="volunteer-card  mt-24">
          <div className="text-center my-12 space-y-5">
            <h2 className="text-3xl font-bold">
              Critical Call for Volunteers: Help Needed Right Away{" "}
            </h2>
            <p className="text-xl">
              Volunteering is not just about giving your time; it's about making
              a meaningful impact in the lives of others and in your community.
              It's about coming together, regardless of our differences, to
              create positive change and address important issues.
            </p>
          </div>
          <div className="overflow-hidden">
            <VolunteerNeedCard />
          </div>
          <div className=" w-full flex justify-center mt-12">
            <Link
              to="/need"
              className="btn w-2/3 md:w-1/3 shadow-black box-shadow  text-xl lg:text-3xl font-bold bg-300% bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient"
            >
              See All Post
            </Link>
          </div>
        </section>
        <section className="mt-20 font-semibold">
          <div className="text-center ">
            <h2 className="text-3xl md:text-5xl">
              <span className="text-green-500">Our best</span> volunteer of
              these year
            </h2>
            <BestVolunteer />
          </div>
        </section>
        <section className="mt-14 lg:mt-44">
          <LearnMore />
        </section>
        <section className="my-24 ">
          <h2 className="text-3xl mb-16 font-bold text-center">
            Discover Our Updates & Charity <br /> News Content.
          </h2>
          <Charity />
        </section>
        <section className="mt-14 lg:mt-44">
          <h2 className="text-3xl mb-16 font-bold text-center">
            Make A Difference Today By <br /> Donating To Our Cause.
          </h2>
          <Donate />
        </section>
      </div>
    </>
  );
};

export default Home;
