import type { VFC } from "react";
import { NavLink } from "src/component/layout/Header/NavLink";

export const Navigation: VFC = () => {
  return (
    <nav>
      <ul>
        <NavLink url="/">ホーム</NavLink>
        <NavLink url="/about">このブログについて</NavLink>
      </ul>
    </nav>
  );
};
