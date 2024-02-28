import About from "@/components/home/about";
import Cta from "@/components/home/cta";
import Cta2 from "@/components/home/cta2";
import Hero from "@/components/home/hero";
import Protfolio from "@/components/home/protfolio";
import Services from "@/components/home/services";
import Testimonial from "@/components/home/testimonial";

const HomePage = () => {
  return (
    <div className="space-y-20">
      <Hero />
      <About />
      <Cta />
      <Services />
      <Protfolio />
      <Cta2 />
      <Testimonial />
    </div>
  );
};

export default HomePage;
