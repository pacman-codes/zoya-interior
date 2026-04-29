import Link from "next/link";

type Props = {
  locale?: "ru" | "en";
};

export function Footer({ locale }: Props) {
  return (
    <footer className="w-full px-6 pb-10 pt-6">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-5 text-[var(--tone-muted)]">
        <div className="flex items-center gap-5">
          <Link
            href="https://t.me/Zoya2278"
            target="_blank"
            rel="noreferrer"
            aria-label="Telegram"
            className="footer-social-link"
          >
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21.5 3.5L2.8 10.6c-1.2.5-1.2 1.3-.2 1.6l4.8 1.5 11-6.9c.5-.3.9-.1.5.2l-9 8.1-.3 4.8c.4 0 .6-.2.8-.4l2-2 4.1 3c.8.4 1.3.2 1.5-.7l3.3-15.6c.3-1.2-.5-1.8-1.5-1.3z" />
            </svg>
          </Link>

          <Link
            href="https://max.ru/u/f9LHodD0cOJwT-J-QAOH5ri9kUlcTR399VTyLNt07qfZxWc4L1thLDpZs1k"
            target="_blank"
            rel="noreferrer"
            aria-label="Max"
            className="footer-social-link footer-social-text"
          >
            Max
          </Link>

          <Link
            href="https://www.instagram.com/zoyamaskinadesign?igsh=amJ6ejNlZ2t2NG1o"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="footer-social-link"
          >
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 4a6 6 0 100 12 6 6 0 000-12zm0 2.2a3.8 3.8 0 110 7.6 3.8 3.8 0 010-7.6zm6.5-2.3a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
            </svg>
          </Link>
        </div>

        <div className="text-center text-sm leading-relaxed">
          <Link href="tel:+79881425888" className="block text-[var(--tone-dark)] hover:opacity-70">
            +7 988 142 5888
          </Link>
          <Link href="mailto:vidmiaan@gmail.com" className="block hover:text-[var(--tone-dark)]">
            vidmiaan@gmail.com
          </Link>
        </div>
      </div>
    </footer>
  );
}
