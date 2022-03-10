import React from "react";

import {
  Header,
  Hgroup,
  Greeting,
  Username,
  Email,
  Message,
  Button,
} from "./NavHeader.styled";
import { Icon, Typography, Logo } from "@/components";

import type { NavHeaderProps } from "@/components/Navbar/Navbar.types";

const NavHeader = ({ isLogin, user }: NavHeaderProps) => {
  return (
    <Header>
      {isLogin && user ? (
        <Hgroup>
          <Greeting>
            <Username size="h1" weight="bold" color="primary">
              {user.name + " "}
            </Username>
            <Typography size="h1" weight="bold" color="black">
              님 <br />
              반가워요!
            </Typography>
          </Greeting>
          <Email size="sub2" weight="regular" color="darkest">
            {user.email}
          </Email>
        </Hgroup>
      ) : (
        <Hgroup>
          <Logo symbol wordmark={false} height={40} />
          <Message size="body1" color="dark" weight="regular">
            <strong>로그인</strong>하시면 모이다를 <br />
            편리하게 이용하실 수 있어요!
          </Message>
        </Hgroup>
      )}

      {/* TODO: Button 컴포넌트 교체 */}
      <Button>
        <Typography size="sub3" weight="bold" color="white">
          새로운 모임 만들기
        </Typography>
        <Icon name="chevron-right" size={18} color="white" />
      </Button>
    </Header>
  );
};

export default NavHeader;
