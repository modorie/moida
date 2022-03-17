import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { Primary, Secondary } from "./Button.stories";

test("Primary 버튼을 렌더링", () => {
  render(<Button {...Primary.args} />);
  expect(screen.getByRole("button")).toHaveTextContent("text");
});

test("Secondary 버튼을 렌더링", () => {
  render(<Button {...Secondary.args} />);
  expect(screen.getByRole("button")).toHaveTextContent("text");
});
