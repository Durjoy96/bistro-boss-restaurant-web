import PageHeroSection from "../../components/PageHeroSection/PageHeroSection";
import heroImg from "../../assets/menu/banner3.jpg";

const OurMenu = () => {
  return (
    <>
      <section className="">
        <PageHeroSection
          img={heroImg}
          title="Our Menu"
          subtitle="Would you like to try a dish?"
        />
      </section>
    </>
  );
};

export default OurMenu;
