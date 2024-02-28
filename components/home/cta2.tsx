import { Button } from "../ui/button";

const Cta2 = () => {
  return (
    <section className="bg-[linear-gradient(to_right_bottom,hsla(var(--primary-dark),.90),hsla(var(--primary-dark),.90)),url('/cta-section-bg-2.jpeg')] bg-center">
      <div className="container space-y-3 py-14 text-center font-oxanium text-background">
        <h5 className="text-xl font-semibold text-primary-lighter">
          WE ARE A BEST COMPANY
        </h5>
        <h6 className="text-3xl">
          Want To <strong className="highlight">See More</strong> ?
        </h6>
        <Button size="xl" variant="secondary" className="rounded-full">
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default Cta2;
