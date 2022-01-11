import { useAtom } from "jotai";
import { MouseEventHandler, useCallback } from "react";
import { drawerAtom } from "src/atom/drawerAtom";

export const useDrawer = () => {
  const [isOpen, setIsOpen] = useAtom(drawerAtom);
  const handleClose = useCallback(() => setIsOpen(false), [setIsOpen]);
  const handleOpen: MouseEventHandler<SVGElement> = useCallback(
    () => setIsOpen(true),
    [setIsOpen],
  );

  return {
    isOpen,
    handleClose,
    handleOpen,
  };
};
