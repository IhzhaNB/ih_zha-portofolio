import { aboutItems } from "@/data/data";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 border-t border-neutral-200">
      <div className="container space-y-14">
        {/* Content */}
        <div className="space-y-3">
          {/* title */}
          <div className="text-4xl lg:text-7xl font-bold flex items-center font-poppins">
            <span>Ab</span>
            <Image
              src="/images/about-icon.png"
              alt="About Image"
              width={512}
              height={512}
              className="size-9 lg:size-16 inline-block shrink-0 translate-y-1 lg:translate-y-2"
            />
            <span>ut me</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            dignissimos blanditiis vero adipisci, illum autem! Magnam officiis,
            esse laborum veritatis rem repellat adipisci maxime reiciendis sunt
            sed, quod nihil nobis ab exercitationem eaque porro veniam impedit
            fugit explicabo nostrum a, velit culpa at architecto. Beatae aperiam
            adipisci fugit commodi ullam, ipsa, alias magnam atque assumenda
            unde sit architecto? Voluptatem, dolore.
          </p>
        </div>

        {/* Wrapper */}
        <div className="border-t border-neutral-300">
          {aboutItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center gap-8 border-b border-neutral-300 py-2"
            >
              {/* Icon */}
              <div className="size-24 flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={512}
                  height={512}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* content */}
              <div className="">
                <h3 className="text-4xl font-bold uppercase">{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
