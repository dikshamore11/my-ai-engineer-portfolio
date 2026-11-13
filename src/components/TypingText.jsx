import { useEffect, useState } from 'react';

/** Types and deletes each phrase in turn, with a blinking caret. */
export default function TypingText({ words, typeSpeed = 65, deleteSpeed = 35, hold = 1700 }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce) {
      setText(word);
      const t = setTimeout(() => setIndex((i) => i + 1), hold * 1.5);
      return () => clearTimeout(t);
    }

    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), hold);
      return () => clearTimeout(t);
    }
    if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => i + 1);
      return undefined;
    }
    const t = setTimeout(
      () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
      deleting ? deleteSpeed : typeSpeed,
    );
    return () => clearTimeout(t);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, hold]);

  return (
    <>
      <span className="sr-only">{words.join(', ')}</span>
      <span aria-hidden="true">
        <span className="font-semibold text-iris-deep">{text}</span>
        <span className="ml-0.5 inline-block h-[1.05em] w-[2px] translate-y-[0.18em] animate-pulse rounded bg-lilac" />
      </span>
    </>
  );
}
