import useEmblaCarousel from "embla-carousel-react";

const Testimonial = () => {
  const testimonials = [
    {
      fullName: "Ahmed Khamas",
      job: "CTO chez ECOWATT",
      img: "/images/testimonial-1.jpg",
      text: "Here are a few projects we worked on recently for clients worldwide.Here are a few projects we worked on recently for clients worldwide.",
    },
    {
      fullName: "Ahmed Khamas",
      job: "CTO chez ECOWATT",
      img: "/images/testimonial-1.jpg",
      text: "Here are a few projects we worked on recently for clients worldwide.Here are a few projects we worked on recently for clients worldwide.",
    },
  ];

  const [emblaRef] = useEmblaCarousel();

  return (
    <section className="container font-oxanium">
      <div className="space-y-10">
        {/* Heading */}
        <div className="space-y-2 text-center">
          <h2 className="text-xl font-semibold text-primary-dark">
            WHAT PEOPLE SAY ABOUT US
          </h2>
          <h5 className="text-3xl font-medium">
            Our <strong className="highlight text-4xl">Testimonial</strong>
          </h5>
        </div>

        {/* Testimonials */}
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {testimonials.map((testimonial) => (
              <div key={testimonial.fullName} className="embla__slide">
                <div className="my-4 flex w-full items-stretch gap-6 border-r-4 border-primary-dark p-6 shadow-lg">
                  <div className="aspect-square h-24 rounded-full border-4 bg-gray-100 shadow-xl">
                    <img
                      src={testimonial.img}
                      className="rounded-full object-cover"
                      alt={testimonial.fullName}
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p>{testimonial.text}</p>
                    </div>
                    <div>
                      <h3>
                        <strong>{testimonial.fullName}</strong>
                      </h3>
                      <h6 className="font-semibold text-primary">
                        {testimonial.job}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
