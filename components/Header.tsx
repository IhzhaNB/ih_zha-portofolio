import Image from "next/image";
import Link from "next/link";
import CustomLink from "./CustomLink";

export default function Header() {
  return (
    <header className="w-full sticky top-0 left-0 z-50 pb-1 pt-2 border-b border-gray-100 bg-white/60 backdrop-blur-2xl">
      {/* Mobile Menu */}
      <nav className="container flex items-center justify-between gap-8.5 lg:hidden">
        <Link href="/">
          <Image
            src="/images/people.svg"
            alt="logo"
            width={47}
            height={47}
            className="object-cover"
          />
        </Link>
        {/* nav links */}
        <div className="flex items-center gap-5 sm:gap-7">
          <CustomLink
            href="#projects"
            label="Projects"
            className="uppercase font-semibold"
          />
          <CustomLink
            href="#about"
            label="About"
            className="uppercase font-semibold"
          />
        </div>
      </nav>

      {/* Lg Menu */}
      <nav className="container lg:flex items-center justify-center gap-8.5 hidden">
        <CustomLink
          href="#projects"
          label="Projects"
          className="uppercase font-semibold"
        />

        {/* Logo */}
        <Link href="/">
          <Image src="/images/people.svg" alt="logo" width={47} height={47} />
        </Link>
        <CustomLink
          href="#about"
          label="About"
          className="uppercase font-semibold"
        />
      </nav>
    </header>
  );
}
