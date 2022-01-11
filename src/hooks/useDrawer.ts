import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { MouseEventHandler, useCallback, useEffect } from "react";
import { drawerAtom } from "src/atom/drawerAtom";

export const useDrawer = () => {
  const [isOpen, setIsOpen] = useAtom(drawerAtom);
  const router = useRouter();
  const handleClose = useCallback(() => setIsOpen(false), [setIsOpen]);
  const handleOpen: MouseEventHandler<SVGElement> = useCallback(
    () => setIsOpen(true),
    [setIsOpen],
  );

  useEffect(() => {
    handleClose();
  }, [router.pathname]);

  return {
    isOpen,
    handleClose,
    handleOpen,
  };
};
