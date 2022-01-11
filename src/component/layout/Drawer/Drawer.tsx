import type { ReactNode, VFC } from "react";
import { memo } from "react";
import {
  Drawer as ChakraDrawer,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import { useDrawer } from "src/hooks/useDrawer";

type Props = {
  children: ReactNode;
};

export const Drawer: VFC<Props> = memo(({ children }) => {
  const { isOpen, handleClose } = useDrawer();
  return (
    <ChakraDrawer
      isOpen={isOpen}
      onClose={handleClose}
      placement="left"
      size="xs"
    >
      <DrawerContent>{children}</DrawerContent>
      <DrawerOverlay />
    </ChakraDrawer>
  );
});
