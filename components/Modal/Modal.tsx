import { useState } from "react";

import { Text } from "@/components";

import { Overlay, LayoutBox, Layout, Footer, Button } from "./Modal.styled";
import type ModalProps from "./Modal.types";

const Modal = ({ children }: ModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const onClickClose = () => setIsModalOpen(false);

  if (!isModalOpen) return <></>;
  return (
    <>
      <Overlay />
      <LayoutBox>
        <Layout>
          <Text
            as="div"
            size="sub3"
            weight="bold"
            color="gray900"
            whiteSpace="pre-wrap"
          >
            {children}
          </Text>
          <Footer>
            <Button onClick={onClickClose}>
              <Text size="sub2" weight="bold" color="blue200">
                확인
              </Text>
            </Button>
          </Footer>
        </Layout>
      </LayoutBox>
    </>
  );
};

export default Modal;
