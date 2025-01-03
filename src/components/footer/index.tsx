import { Fragment, JSX } from "react";
import Link from "next/link";
export default function Footer(): JSX.Element {
    return (
      <div className="attribution text-center text-[12px] lg:text-sm mt-4 text-white">
        Challenge by{' '}
        <Link
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#3e52a3] underline"
        >
          Frontend Mentor
        </Link>
        . Coded by{' '}
        <Link
          href="https://rebekahshaw.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#3e52a3] underline"
        >
          Rebekah Shaw
        </Link>
        .
      </div>
    );
  }