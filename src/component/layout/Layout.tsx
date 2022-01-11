import type { ReactNode, VFC } from "react";
import { Aside } from "src/component/layout/Aside/Aside";
import { Drawer } from "src/component/layout/Drawer/Drawer";
import { DrawerList } from "src/component/layout/Drawer/DrawerList";
import { Footer } from "src/component/layout/Footer/Footer";
import { Header } from "src/component/layout/Header/Header";

type Props = {
  children: ReactNode;
};

export const Layout: VFC<Props> = (props) => {
  return (
    <>
      <Header />
      <div className="block mx-auto w-3/4 sm:flex sm:justify-between">
        <main>{props.children}</main>
        <Aside />
      </div>
      <Footer />
      <Drawer>
        <DrawerList />
      </Drawer>
    </>
  );
};
