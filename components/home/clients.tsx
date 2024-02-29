import UseEmblaCarousel from "embla-carousel-react";

const Clients = () => {
  const [emblaRef] = UseEmblaCarousel();

  const clients = [
    {
      name: "Ecowatt",
      img: "/images/partners/ecowatt.webp",
      url: "https://www.ecowatt.ma",
    },
    {
      name: "Taqaunivers",
      img: "/images/partners/taqaunivers.webp",
      url: "https://www.taqaunievrs.ma",
    },
    {
      name: "Mafatih Arahma",
      img: "/images/partners/mafatih-rahma.webp",
    },
    {
      name: "Ecotaqa",
      img: "/images/partners/ecotaqa.webp",
      url: "https://www.ecotaqa.ma",
    },
    {
      name: "IES",
      img: "/images/partners/ies.webp",
    },
  ];

  return (
    <section className="container font-oxanium">
      <div className="space-y-10">
        {/* Heading */}
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

        {/* Content */}
        <div ref={emblaRef} className="embla [--slide-size:20%]">
          <div className="embla__container">
            {clients.map((client, idx) => (
              <div key={idx} className="embla__slide">
                <div className="mx-auto flex aspect-square items-center">
                  <a href={client.url} target="_blank">
                    <img
                      src={client.img}
                      className="rounded-full object-cover"
                      alt={client.name}
                    />
                  </a>
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
