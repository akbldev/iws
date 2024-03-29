const About = () => {
  const services = [
    "Branding",
    "Graphic Design",
    "Web Developement",
    "ERP/CRM",
    "UI/UX Design",
    "Marketing & Social Media",
    "Editing Videos",
  ];

  const images = [
    "/images/about/about-1.webp",
    "/images/about/about-3.webp",
    "/images/about/about-4.webp",
    "/images/about/about-2.webp",
  ];

  return (
    <section className="container flex items-center gap-10">
      <div className="grid flex-1 grid-cols-2 gap-6 overflow-hidden">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="aspect-square overflow-hidden rounded-br-xl rounded-tl-xl bg-primary-lighter"
          >
            <img
              src={img}
              alt="About IWS"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="flex-1 space-y-6 font-oxanium">
        <div>
          <h2 className="font-semibold text-primary-dark">ABOUT IWS</h2>
          <h5 className="font-medium">
            We Are a{" "}
            <strong className="highlight text-xl">
              Creative Software Company
            </strong>
          </h5>
        </div>
        <p>
          We&apos;re an awesome company and we do awesome stuff. You can tell
          that by our awesome services. Notice how often I use the word awesome?
          That&apos;s how awesome we are. But all jokes aside, we&apos;d love to
          meet you. There&apos;s probably something we can do for you.
        </p>

        <div className="space-y-2">
          <span>We create:</span>
          <ul className="space-y-1">
            {services.map((item, idx) => (
              <li key={idx}>
                <span
                  className="
                  relative
                  mr-5
                  after:absolute
                  after:top-1/2
                  after:aspect-square
                  after:-translate-y-1/2
                  after:rounded-full
                  after:bg-primary-light
                  after:p-1
                  after:text-[5px]
                  after:text-primary-lighter
                  after:content-['</>']
                  "
                ></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p>
          We create basically everything. We create everything necessary for you
          to run and promote your business. We worked with Agencies, Small
          Startups, Big Startups, Manufacturing Plants and much more. All of
          these experiences culminated in vast amounts of Expertise and Skills,
          that we keep polishing. Growth never stops after all.
        </p>
      </div>
    </section>
  );
};

export default About;
