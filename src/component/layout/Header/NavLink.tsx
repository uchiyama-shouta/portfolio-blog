import type { ReactNode, VFC } from "react";
import Link from "next/link";

type Props = {
  url: string;
  children: ReactNode;
};

export const NavLink: VFC<Props> = (props) => {
  return (
    <li className="hidden pr-7 last:pr-0 hover:underline hover:opacity-60 sm:inline-block">
      <Link href={props.url} prefetch={false}>
        <a>{props.children}</a>
      </Link>
    </li>
  );
};
