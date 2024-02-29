import About from "@/components/home/about";
import Clients from "@/components/home/clients";
import Contact from "@/components/home/contact";
import Cta from "@/components/home/cta";
import Cta2 from "@/components/home/cta2";
import Cta3 from "@/components/home/cta3";
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
      <Cta3 />
      <Clients />
      <Contact />
    </div>
  );
};

export default HomePage;
