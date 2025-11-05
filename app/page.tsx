import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between gap-12 md:gap-16 lg:flex-row-reverse lg:px-16 lg:pt-12">
      {/* HERO IMAGE */}
      <div className="relative w-full max-w-[480px]">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet="/image-hero-desktop.png"
          />
          <Image
            src="/image-hero-mobile.png"
            alt="Team collaborating remotely"
            width={480}
            height={640}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
            priority
            className="h-auto w-full object-contain"
          />
        </picture>
      </div>

      {/* TEXT CONTENT */}
      <section className="space-y-12 md:space-y-14">
        <div className="flex flex-col items-center justify-between gap-6 px-6 text-center md:max-w-[664px] md:gap-8 lg:max-w-[488px] lg:items-start lg:gap-12 lg:px-0 lg:text-left">
          <h1 className="text-4xl leading-[100%] font-bold tracking-[-1px] text-[#151515] md:text-[4rem] lg:text-[5rem]">
            Make remote work
          </h1>

          <p className="text-base leading-[155%] font-medium tracking-normal text-[#686868] md:text-lg">
            Get your team in sync, no matter your location. Streamline processes, create team
            rituals, and watch productivity soar.
          </p>

          <Button
            type="button"
            size="lg"
            className="bg-[#151515] text-base leading-[155%] font-bold tracking-[-0.25px] text-[#FAFAFA] transition-transform duration-300 ease-in-out hover:scale-105 focus-visible:ring-2 focus-visible:ring-[#151515] md:text-lg"
          >
            Learn more
          </Button>
        </div>

        {/* CLIENT LOGOS */}
        <div className="flex flex-wrap items-center justify-center gap-6 px-6 md:justify-between md:px-10 lg:px-0">
          <Image
            src="/client-databiz.svg"
            alt="Databiz"
            width={81}
            height={14}
            loading="lazy"
            className="h-auto w-[81px] md:w-[114px]"
          />
          <Image
            src="/client-audiophile.svg"
            alt="Audiophile"
            width={52}
            height={26}
            loading="lazy"
            className="h-auto w-[52px] md:w-[73px]"
          />
          <Image
            src="/client-maker.svg"
            alt="Maker"
            width={58}
            height={11}
            loading="lazy"
            className="h-auto w-[58px] md:w-[83px]"
          />
          <Image
            src="/client-meet.svg"
            alt="Meet"
            width={58}
            height={17}
            loading="lazy"
            className="h-auto w-[58px] md:w-[83px]"
          />
        </div>
      </section>
    </main>
  );
}
