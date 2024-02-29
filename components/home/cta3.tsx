import { Button } from "../ui/button";

const Cta3 = () => {
  return (
    <section className="bg-[linear-gradient(to_right_bottom,hsla(var(--primary-dark),.90),hsla(var(--primary-dark),.90)),url('/images/cta3-bg.webp')] bg-center">
      <div className="container flex items-center justify-between py-14 font-oxanium text-background">
        <div className="space-y-3">
          <h5 className="text-3xl">
            Start To Build Your <strong className="highlight">Awesome</strong>{" "}
            Websites & Apps
          </h5>
          <h6>
            Create Lovely & Smart Websites & Apps Faster! Ready To Work With Us?
          </h6>
        </div>
        <div>
          <Button
            size="xl"
            variant="background"
            className="rounded-xl font-bold"
          >
            Start a Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cta3;
