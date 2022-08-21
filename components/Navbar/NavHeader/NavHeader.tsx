import { Icon, Text, Logo } from "@/components";
import type { NavHeaderProps } from "@/components/Navbar/Navbar.types";

import { Header, Hgroup, Greeting, Message, Button } from "./NavHeader.styled";

const NavHeader = ({ isLogin, user }: NavHeaderProps) => {
  return (
    <Header>
      {isLogin && user ? (
        <Hgroup>
          <Greeting>
            <Text as="strong" size="h1" weight="bold" color="blue200">
              {user.name + " "}
            </Text>
            <Text as="span" size="h1" weight="bold" color="black">
              님 <br />
              반가워요!
            </Text>
          </Greeting>
          <Text as="h2" size="sub2" weight="regular" color="gray900">
            {user.email}
          </Text>
        </Hgroup>
      ) : (
        <Hgroup>
          <Logo symbol wordmark={false} height={40} />
          <Text as="h2" size="body1" color="gray700" weight="regular">
            <strong>로그인</strong>하시면 모이다를 <br />
            편리하게 이용하실 수 있어요!
          </Text>
        </Hgroup>
      )}

      {/* TODO: Button 컴포넌트 교체 */}
      <Button>
        <Text size="sub3" weight="bold" color="white">
          새로운 모임 만들기
        </Text>
        <Icon name="chevron-right" size={18} color="white" />
      </Button>
    </Header>
  );
};

export default NavHeader;
