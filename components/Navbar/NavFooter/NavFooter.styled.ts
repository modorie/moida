import styled from "styled-components";

import Text from "@/components/Text";
import { TypoStyle } from "@/components/Typography";

export const Layout = styled.div`
  padding: 30px 0;
`;

export const Title = styled(Text)`
  margin: 0 0 10px 0;
`;

export const ItemBox = styled.ul`
  margin: 0 0 63px 0;
  padding: 0;
`;

export const Logout = styled.a`
  text-decoration-color: ${({ theme }) => theme.color.gray500};
`;
