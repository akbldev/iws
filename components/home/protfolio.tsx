const Protfolio = () => {
  return (
    <section className="container font-oxanium">
      <div className="space-y-10">
        <div className="space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-primary-dark">
              OUR LATEST WORK
            </h2>
            <h5 className="text-3xl font-medium">
              Our <strong className="highlight text-4xl">Portfolio</strong>
            </h5>
          </div>
          <p>
            Here are a few projects we worked on recently for clients worldwide.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-10">
          {Array.from({ length: 9 }, (_, idx) => (
            <div key={idx} className="aspect-square bg-primary-lighter"></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Protfolio;
