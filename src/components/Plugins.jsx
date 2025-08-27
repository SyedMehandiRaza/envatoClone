"use client";

import Image from "next/image";

const plugins = [
  {
    name: "Zoom Meeting & Google Meet",
    image: "https://eduma.thimpress.com/wp-content/uploads/2024/03/zoom-meet-new.png",
  },
  {
    name: "Elementor",
    image: "https://eduma.thimpress.com/wp-content/uploads/2024/03/elementor-new.png",
  },
  {
    name: "H5P",
    image: "https://eduma.thimpress.com/wp-content/uploads/2024/03/h5p-new.png",
  },
  {
    name: "Woocommerce",
    image: "https://eduma.thimpress.com/wp-content/uploads/2024/03/woo-new.png",
  },
  {
    name: "Slider Revolution",
    image: "https://eduma.thimpress.com/wp-content/uploads/2024/03/revoslide-new.png",
  },
];

export default function Plugins() {
  return (
    <section className="w-full bg-[#0E1936] text-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center mt-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
          Stunning Plugins Integrated
        </h2>
        <p className="text-sm md:text-base text-white/80 mb-12">
          Only the most suitable plugins are integrated into Eduma to help users build powerful and fully functional education websites.
        </p>

        {/* Plugins */}
        {/* <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 max-w-4xl">
          {plugins.map((plugin, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="rounded-full border-12 border-[#2a335c]  w-28 h-28 md:w-32 md:h-32 flex items-center justify-center bg-[#121b3a] shadow-lg">
                <Image
                  src={plugin.image}
                  alt={plugin.name}
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              <p className="mt-3 text-sm md:text-base font-medium leading-tight">
                {plugin.name}
              </p>
            </div>
          ))}
        </div> */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 max-w-4xl mx-auto mt-6">
  {plugins.map((plugin, i) => (
    <div key={i} className="flex flex-col items-center text-center">
      <div className="relative rounded-full border-12 border-[#2a335c] w-28 h-28 md:w-32 md:h-32 bg-[#121b3a] shadow-lg">
        <Image
          src={plugin.image}
          alt={plugin.name}
          width={120}
          height={120}
          className="object-contain"
        />
      </div>
      <p className="mt-3 text-sm md:text-base font-medium leading-tight">
        {plugin.name}
      </p>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
