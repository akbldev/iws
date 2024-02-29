import { PlayIcon } from "lucide-react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-[linear-gradient(to_right_bottom,hsla(var(--primary-dark),.50),hsla(var(--primary-dark),.50)),url('/images/hero-bg.webp')] bg-cover text-background">
      {/* Main Content */}
      <main className="container space-y-6 pt-24 text-center">
        {/* Text Content */}
        <div className="space-y-10">
          <h1 className="text-6xl">
            Improve your <span className="highlight">Business</span> Today
          </h1>
          <h6 className="text-lg font-light leading-8">
            we help our team build their projects, from idea to startup <br />
            also we create awesome website, apps & brands
          </h6>
        </div>

        {/* CTA buttons */}
        <div className="flex items-center justify-center gap-4">
          <Button variant="secondary" size="lg" className="rounded-full">
            Get Started
          </Button>
          <span>OR</span>
          <button className="group flex items-center gap-4">
            <span className="rounded-full bg-primary-lighter p-2.5 group-hover:bg-primary-light">
              <PlayIcon className="translate-x-0.5 text-primary-dark group-hover:text-background" />
            </span>
            Watch Video
          </button>
        </div>
      </main>
    </div>
  );
};

export default Hero;
