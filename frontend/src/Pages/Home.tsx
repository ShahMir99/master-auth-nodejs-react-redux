import ColorBackground from "@/components/ColorBackground";
import GradientSection from "@/components/GradientSection";
import HorizontalSlider from "@/components/HorizontalSlider";
import MarqueeSection from "@/components/MarqueeSection";
import PricingSection from "@/components/PricingSection";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <main className="pt-[80px] flex flex-col">
      {/* Div of first section */}
      <section className="w-full mt-16">
        <div className="relative mx-auto mb-8 max-w-[872px]">
          <motion.div
            className="flex flex-col"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ColorBackground />
            <div className="z-20 flex flex-col space-y-6">
              <h1 className="text-6xl font-semibold text-center leading-[70px]">
                <span>What will you
                 {" "}<span className="bg-clip-text text-transparent bg-custom-gradient">design</span> {" "}today?
                </span>
              </h1>
              <p className="text-center text-[24px] text-neutral-600 font-light">
                Canva makes it easy to create and share professional designs.
              </p>
              <Button variant="custom" className="mx-auto py-6 px-8">Start Designing</Button>
            </div>
          </motion.div>
        </div>
        <HorizontalSlider />
        <PricingSection />
        <MarqueeSection />
        <GradientSection />

      </section>
    </main>
  );
};

export default Home;
