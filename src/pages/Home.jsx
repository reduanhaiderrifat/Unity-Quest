import Donate from "../components/Donate";
import LearnMore from "../components/LearnMore";
import Slider from "../components/Slider";
import VolunteerNeedCard from "../components/VolunteerNeedCard";

const Home = () => {
  return (
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
            Volunteering is not just about giving your time; it's about making a
            meaningful impact in the lives of others and in your community. It's
            about coming together, regardless of our differences, to create
            positive change and address important issues.
          </p>
        </div>
        <div className="overflow-hidden">
          <VolunteerNeedCard />
        </div>
      </section>
      <section className="mt-14 lg:mt-44">
        <LearnMore />
      </section>
      <section className="mt-14 lg:mt-44">
        <h2 className="text-3xl mb-16 font-bold text-center">
          Make A Difference Today By <br /> Donating To Our Cause.
        </h2>
        <Donate />
      </section>
    </div>
  );
};

export default Home;
