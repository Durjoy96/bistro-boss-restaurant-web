import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <>
      <section className="main-container bg-featured-img bg-blend-overlay bg-black/40 pb-20 mt-12 md:mt-20 lg:mt-32 bg-fixed flex flex-col justify-center">
        <SectionTitle title="Our Featured" subtitle="check it out" />
        <div className="mx-auto flex items-center gap-8">
          <div className="max-w-md">
            <img src={featuredImg} alt="" />
          </div>
          <div className="max-w-lg">
            <p className="text-white/90">
              March 20, 2023 WHERE CAN I GET SOME? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Error voluptate facere, deserunt
              dolores maiores quod nobis quas quasi. Eaque repellat recusandae
              ad laudantium tempore consequatur consequuntur omnis ullam maxime
              tenetur
            </p>
            <button className="btn btn-outline outline-none border-b-4 border-white mt-4">
              Read more
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Featured;
