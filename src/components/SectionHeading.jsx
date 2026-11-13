import Reveal from './Reveal';

export default function SectionHeading({ index, eyebrow, title, subtitle, align = 'left' }) {
  const center = align === 'center';
  return (
    <Reveal className={`mb-12 sm:mb-16 ${center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}`}>
      <p className={`mb-4 flex items-center gap-3 ${center ? 'justify-center' : ''}`}>
        <span className="flex h-7 items-center rounded-full bg-lavender/70 px-3 text-[11px] font-semibold tracking-wider text-iris-deep">
          {index}
        </span>
        <span className="eyebrow">{eyebrow}</span>
      </p>
      <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-[2.6rem]">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-plum-soft sm:text-[17px]">{subtitle}</p>}
    </Reveal>
  );
}
