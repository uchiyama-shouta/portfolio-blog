import { ReactNode, VFC } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDrawer } from "src/hooks/useDrawer";

type Props = {
  children: ReactNode;
};

export const Drawer: VFC<Props> = ({ children }) => {
  const { isOpen, handleClose } = useDrawer();
  return (
    <Transition show={isOpen}>
      <Dialog
        className="overflow-hidden fixed inset-0 z-40 lg:hidden"
        onClose={handleClose}
      >
        <Transition.Child
          enter="transition-opacity ease-in-out duration-250"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-in-out duration-250"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="absolute inset-0 z-30 bg-gray-500 opacity-40" />
        </Transition.Child>
        <Transition.Child
          className="flex absolute inset-0 z-40 pointer-events-none"
          enter="transition ease duration-250 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease duration-250 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="flex-1 min-w-0 max-w-[250px] bg-white">{children}</div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};
