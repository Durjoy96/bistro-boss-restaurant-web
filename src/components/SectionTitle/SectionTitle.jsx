const SectionTitle = ({ title, subtitle }) => {
  return (
    <>
      <div className="max-w-sm mx-auto text-center pb-12 pt-20">
        <p className="text-yellow-500 text-xl">{subtitle}</p>
        <h2 className="uppercase text-4xl text-neutral-800 py-5 border-y-4 mt-4">
          {title}
        </h2>
      </div>
    </>
  );
};

export default SectionTitle;
