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
          <h2 className="text-3xl font-bold">Volunteer Needs Now </h2>
          <p className="text-xl">
            Volunteering is not just about giving your time; it's about making a
            meaningful impact in the lives of others and in your community. It's
            about coming together, regardless of our differences, to create
            positive change and address important issues.
          </p>
        </div>
        <VolunteerNeedCard />
      </section>
    </div>
  );
};

export default Home;
