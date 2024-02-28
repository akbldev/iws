const Services = () => {
  const services = [
    {
      label: "Branding",
      icon: "/icons/branding.svg",
      description:
        "A logo is the symbol of your brand and represents the value you provide to your customers.Whether you need a new logo or want to update an existing mark, we help communicate what's most important.",
    },
    {
      label: "Web development",
      icon: "/icons/web-dev.svg",
      description:
        "Our team of developers and engineers are experienced with responsive websites, web apps  and server APIs. They will create backend and frontend applications using the top notch modern tech stack",
    },
    {
      label: "Marketing & Social Media",
      icon: "/icons/marketing.svg",
      description:
        "A successful event starts with a good marketing strategy. We create branded promotional materials to connect with customers",
    },
    {
      label: "UI/UX Design",
      icon: "/icons/ui-ux.svg",
      description:
        "Our team of UI and UX Specialists work to design both original and creative interfaces matching the functional specifications of your app or website.",
    },
    {
      label: "ERP / CRM",
      icon: "/icons/crm.svg",
      description:
        "Mobile apps we deliver are robust, performant and scalable. We develop native mobile apps on the most popular platforms (Android and iOS) in line with the latest UX trends, as well as cross platform",
    },
    {
      label: "Editing videos",
      icon: "/icons/video-editing.svg",
      description:
        "Increase leads, brand awareness, and social media presence with a compelling video. We create videos to promote your business, reach new customers, and drive website traffic.",
    },
  ];

  return (
    <section className="container font-oxanium">
      <div className="space-y-10">
        <div className="space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-primary-dark">
              WHAT WE DO
            </h2>
            <h5 className="text-3xl font-medium">
              Our <strong className="highlight text-4xl">Services</strong>
            </h5>
          </div>
          <p>From small to big projects, here&apos;s how we can help...</p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {services.map((service) => (
            <div
              key={service.label}
              className="bg-gradient-to-t from-primary-dark to-transparent p-px"
            >
              <div className="h-full space-y-4 bg-background p-6 text-center">
                <img
                  src={service.icon}
                  className="mx-auto h-16"
                  alt={service.label}
                />
                <h6 className="text-lg">
                  <strong>{service.label}</strong>
                </h6>
                <p className="text-balance">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
