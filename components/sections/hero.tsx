// import SimpleServices from "@/components/elements/simpleservice";

// export default function Hero() {
//   return (
//     <section className="relative bg-[#0e0e0e] text-white min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
//       {/* Background Grid */}
//       <div
//         className="absolute inset-0 z-0 pointer-events-none"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
//           backgroundSize: "32px 32px",
//         }}
//       />

//       {/* Hero Content */}
//       <div className="relative z-10 text-center max-w-3xl">
//         {/* Badge */}
//         <div className="mt-[-px] sm:mt-1.5 inline-block rounded-full bg-[#1a1a1a] sm:px-4 sm:py-1 px-2 py-1 text-sm text-white border border-neutral-700">
//           <span className="inline-block rounded-full bg-[#131316] px-1 py-1 mr-2">
//             {/* Added margin-right */}
//             🔥
//           </span>
//           Webzy studios welcomes you
//         </div>

//         {/* Heading */}
//         <div className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
//           <h1>
//             Crafting Digital Masterpieces <br />
//             <span className="text-gray-300">that Speak Your Brand’s Story</span>
//           </h1>
//         </div>

//         {/* Subheading */}
//         <p className="text-gray-400 mb-8 text-base sm:text-lg">
//           We craft stunning websites that don’t just look good — they build
//           trust, drive results, and turn visitors into loyal clients. Whether
//           you’re a startup or a brand ready to scale, we’ve got your digital
//           back.
//         </p>

//         {/* Buttons */}
//         <div className="flex justify-center gap-4">
//           <button className="px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition">
//             Let’s Build Your Site
//           </button>
//           <button className="px-6 py-3 rounded-md bg-neutral-800 hover:bg-neutral-700 text-white font-medium transition">
//             Our works
//           </button>
//         </div>

//         {/* Services Tags */}
//         <div className="mt-10 flex flex-wrap justify-center gap-2">
//           {[
//             "UI Design",
//             "UX Design",
//             "Webflow Development",
//             "Social Media Design",
//             "Visual Interaction",
//             "Product Design",
//             "Custom Development",
//             "Graphic Design",
//           ].map((tag) => (
//             <span
//               key={tag}
//               className="text-sm bg-[#1a1a1a] border border-neutral-700 px-4 py-2 rounded-full text-white"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>

//         {/* Client Logos */}
//         {/* <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-60">
//           <img src="/logos/eventbrite.svg" alt="eventbrite" className="h-6" />
//           <img src="/logos/zapier.svg" alt="zapier" className="h-6" />
//           <img src="/logos/smeg.svg" alt="smeg" className="h-6" />
//           <img
//             src="/logos/surveymonkey.svg"
//             alt="SurveyMonkey"
//             className="h-6"
//           />
//           <img src="/logos/doordash.svg" alt="DoorDash" className="h-6" />
//         </div> */}
//         <div className="sm:w-full sm:max-w-5xl w-full max-w-5xl ">
//           <SimpleServices />
//         </div>
//       </div>
//     </section>
//   );
// }

import SimpleServices from "@/components/elements/simpleservice";

export default function Hero() {
  return (
    <section className="relative bg-[#0e0e0e] text-white min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-3xl">
        {/* Badge */}
        <div
          className="sm:mt-[14%] mt-[3%] inline-block rounded-full bg-[#1a1a1a] 
    px-2 py-[2px] text-xs sm:px-4 sm:py-1 sm:text-sm 
    text-white border border-neutral-700"
        >
          <span
            className="inline-block rounded-full bg-[#131316] 
      px-[4px] py-[2px] mr-1 text-xs sm:px-1 sm:py-1 sm:mr-2 sm:text-sm"
          >
            🔥
          </span>
          Webzy studios welcomes you
        </div>
        {/* Heading */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight mt-[2%]">
            Crafting Digital Masterpieces <br />
            <span className="text-gray-300">that Speak Your Brand’s Story</span>
          </h1>
        </div>

        {/* Subheading */}
        <div className="mb-8">
          {/* For mobile */}
          {/* <p className="text-gray-400 text- leading-relaxed max-w-xs mx-auto px-4 sm:hidden text-center">
            We craft stunning websites that don’t <br />just look good they build trust, drive<br />
            results,and turn visitors into loyal clients.
          </p> */}
          <p className="text-gray-400 text-sm leading-relaxed max-w-[90vw] mx-auto px-4 sm:hidden text-center">
            We craft stunning websites that don’t just look good  they build
            trust, drive results, and turn visitors into loyal clients.
          </p>

          {/* For tablet and up */}
          <p className="text-gray-400 text-sm sm:text-lg hidden sm:block">
            We craft stunning websites that don’t just look good — they build
            trust, drive results, and turn visitors into loyal clients. Whether
            you’re a startup or a brand ready to scale, we’ve got your digital
            back.
          </p>
        </div>

        {/* Buttons */}
        <div className="mb-10 flex justify-center gap-4 flex-wrap">
          <button className="px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition">
            Let’s Build Your Site
          </button>
          <button className="px-6 py-3 rounded-md bg-neutral-800 hover:bg-neutral-700 text-white font-medium transition">
            Our works
          </button>
        </div>

        {/* Services Tags */}
        <div className="mb-16 flex flex-wrap justify-center gap-2">
          {[
            "UI Design",
            "UX Design",
            "Webflow Development",
            "Social Media Design",
            "Visual Interaction",
            "Product Design",
            "Custom Development",
            "Graphic Design",
          ].map((tag) => (
            <span
              key={tag}
              className="text-sm bg-[#1a1a1a] border border-neutral-700 px-4 py-2 rounded-full text-white"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Simple Services Section */}
        <div className="sm:w-full sm:max-w-5xl w-full max-w-5xl">
          <SimpleServices />
        </div>
      </div>
    </section>
  );
}
