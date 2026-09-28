import Eyebrow from './Eyebrow';
import Reveal from './Reveal';

export default function LayerIntro({ eyebrow, title, desc }: { eyebrow: string; title: string; desc: string }) {
  return (
    <div className="mb-10 grid gap-6 md:mb-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:gap-[70px]">
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-3 max-w-[760px] font-sora text-[clamp(32px,4.2vw,54px)] font-bold leading-[1.04] tracking-tightest">
          {title}
        </h2>
      </Reveal>
      <Reveal delay={0.1} className="lg:justify-self-end">
        <p className="max-w-[590px] text-[16px] leading-[1.7] text-muted md:text-[17px]">{desc}</p>
      </Reveal>
    </div>
  );
}
