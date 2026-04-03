import Image from "next/image";

export function HeroSection() {
  return (
    <div className="flex flex-col gap-8">
      {/* Social Proof Badges */}
      <div className="flex items-center gap-6">
        <BadgeWithWreath>
          <div className="flex items-center gap-1.5">
            <Image src="/icons/rating-4-9.svg" alt="4.9" width={36} height={20} />
            <Image src="/icons/star.svg" alt="" width={18} height={17} />
          </div>
          <p className="w-[84px] text-center text-[10px] leading-tight text-ditto-grey-400">
            10000+ ratings on Google
          </p>
        </BadgeWithWreath>

        <BadgeWithWreath>
          <Image
            src="/icons/zerodha-logo.svg"
            alt="Zerodha"
            width={25}
            height={24}
          />
          <p className="text-center text-[10px] leading-tight text-ditto-grey-400">
            Backed by
            <br />
            Zerodha
          </p>
        </BadgeWithWreath>
      </div>

      {/* Headline */}
      <h1 className="max-w-[576px] font-heading text-[40px] font-bold leading-[1.06] tracking-tight text-ditto-black sm:text-[51px]">
        The Ultimate Insurance Buying Experience
      </h1>

      {/* Hero Image */}
      <div className="relative mt-2 w-full max-w-[636px] overflow-hidden rounded-2xl">
        <Image
          src="/images/professional-advice.png"
          alt="Professional Advice — Which life insurance is best for me?"
          width={636}
          height={336}
          className="h-auto w-full"
          priority
        />
      </div>
    </div>
  );
}

function BadgeWithWreath({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-0">
      {/* Left wreath */}
      <Image
        src="/icons/wreath-left.svg"
        alt=""
        width={30}
        height={67}
        className="h-[52px] w-auto"
      />

      {/* Center content */}
      <div className="flex flex-col items-center gap-1.5 px-1">
        {children}
      </div>

      {/* Right wreath (mirrored) */}
      <Image
        src="/icons/wreath-left.svg"
        alt=""
        width={30}
        height={67}
        className="h-[52px] w-auto -scale-x-100"
      />
    </div>
  );
}
