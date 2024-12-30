const PageHeroSection = ({ img, title, subtitle }) => {
  return (
    <>
      <div
        className="hero min-h-screen bg-fixed"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        {/* <div className="hero-overlay bg-opacity-60"></div> */}
        <div className="hero-content text-neutral-content text-center bg-neutral-900/70 px-72 py-36">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">{subtitle}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageHeroSection;
