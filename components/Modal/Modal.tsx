import React, { useState } from "react";

import {
  Overlay,
  LayoutBox,
  Layout,
  Content,
  Footer,
  Button,
} from "./Modal.styled";

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
          <Content size="sub3" weight="bold" color="darkest">
            {children}
          </Content>
          <Footer>
            <Button
              size="sub2"
              weight="bold"
              color="primary"
              onClick={onClickClose}
            >
              확인
            </Button>
          </Footer>
        </Layout>
      </LayoutBox>
    </>
  );
};

export default Modal;
