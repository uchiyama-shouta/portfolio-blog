import type { VFC } from "react";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import { useDrawer } from "src/hooks/useDrawer";
import { Navigation } from "src/component/layout/Header/Navigation";

export const Header: VFC = () => {
  const { handleOpen } = useDrawer();
  return (
    <header className="mb-10 border-b border-gray-400">
      <div className="flex justify-between items-center mx-auto w-4/5 h-14">
        <div>
          <h1 className="text-2xl hover:opacity-60 hover:cursor-pointer">
            <Link href="/" prefetch={false}>
              しょうたのブログ
            </Link>
          </h1>
        </div>
        <div>
          <Navigation />
          <MdMenu onClick={handleOpen} size="1.5em" className="sm:hidden" />
        </div>
      </div>
    </header>
  );
};
