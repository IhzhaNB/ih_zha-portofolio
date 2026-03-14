import { RiFileCopyLine } from "@remixicon/react";
import CustomLink from "./CustomLink";
import { linksToCopy1, linksToCopy2 } from "@/data/data";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white h-[60vh] fixed bottom-0 w-full -z-10 pt-16 pb-4 flex flex-col">
      <div className="container space-y-9 flex flex-col h-full">
        {/* Links */}
        <div className="flex items-center justify-between">
          {/* Wraapper */}
          <div className="flex gap-3.5">
            {linksToCopy1.map((link) => (
              <CustomLink key={link.id} label={link.label} href={link.link} />
            ))}
          </div>
          {/* Wraapper */}
          <div className="flex gap-3.5">
            {linksToCopy2.map((link) => (
              <CustomLink key={link.id} label={link.label} href={link.link} />
            ))}
          </div>
        </div>

        {/* Email */}
        <div className="flex items-end justify-between">
          <h4 className="text-4xl sm:text-5xl text-nowrap uppercase font-bold">
            ihzhabaihaqqi05 <br />
            @gmail.com
          </h4>
          <button className="border flex items-center gap-0.5 py-1.5 px-3.5 rounded-full hover:bg-white hover:text-neutral-900 focus:bg-white focus:text-neutral-900 transition-colors font-semibold">
            <RiFileCopyLine />
            copy
          </button>
        </div>
        {/* Info */}
        <p className="border-t border-neutral-900 pt-1.5 mt-auto">
          &copy; {new Date().getFullYear()} Ihzha Nauval. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
