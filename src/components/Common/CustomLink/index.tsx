import React, { ReactElement } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  activeClass: string;
  nonActiveClass: string;
  defaultClass: string;
  href: string;
  children: React.ReactNode;
}

export default function CustomLink({
  children,
  defaultClass,
  activeClass,
  nonActiveClass,
  href,
}: Props): ReactElement {
  const router = useRouter();
  return (
    <Link href={href} passHref>
      <div
        className={
          router.pathname == href
            ? `${defaultClass} ${activeClass}`
            : `${defaultClass} ${nonActiveClass}`
        }
      >
        {children}
      </div>
    </Link>
  );
}
