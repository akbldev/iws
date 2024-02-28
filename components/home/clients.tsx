import UseEmblaCarousel from "embla-carousel-react";

const Clients = () => {
  const [emblaRef] = UseEmblaCarousel();

  const clients = [
    {
      img: "/images/testimonial-1.jpg",
    },
    {
      img: "/images/testimonial-1.jpg",
    },
    {
      img: "/images/testimonial-1.jpg",
    },
    {
      img: "/images/testimonial-1.jpg",
    },
    {
      img: "/images/testimonial-1.jpg",
    },
    {
      img: "/images/testimonial-1.jpg",
    },
  ];

  return (
    <section className="container font-oxanium">
      <div className="space-y-10">
        <div className="space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-primary-dark">
              TRUSTED CLIENT
            </h2>
            <h5 className="text-3xl font-medium">
              Our <strong className="highlight text-4xl">Happy Clients</strong>
            </h5>
          </div>
          <p>
            Here are a few projects we worked on recently for clients worldwide.
          </p>
        </div>
        <div ref={emblaRef} className="embla [--slide-size:20%]">
          <div className="embla__container">
            {clients.map((client, idx) => (
              <div key={idx} className="embla__slide p-6">
                <div className="mx-auto aspect-square h-32 rounded-full border-4 bg-gray-100 shadow-xl">
                  <img
                    src={client.img}
                    className="rounded-full object-cover"
                    alt={client.img}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
