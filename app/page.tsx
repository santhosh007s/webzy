import Hero from "@/components/sections/hero";
import NavBar from "@/components/elements/navbar";
import ContactUs from "@/components/sections/contactus";
import TestimonialsSection from "@/components/sections/test";

export default function Home() {
  return (
    <>
      <div className="self-center">
        <NavBar />
        <Hero />
        <div className="flex flex-col gap-52 md:gap-15 px-10 lg:px-50">
          <div className="mt-[-100px] md:mt-[-80px]">
            <div className="mt-[50%]">
              <div className="text-4xl text-center text-3xl md:text-5xl lg:text-6xl font-bold">Contact us</div>
              <div className="mt-[4%]">
                <ContactUs />
              </div>
              <div>
                <TestimonialsSection/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
