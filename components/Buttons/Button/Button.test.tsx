import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { Default } from "./Button.stories";

test("렌더링", () => {
  render(<Button {...Default.args} />);
  expect(screen.getByRole("button")).toHaveTextContent("text");
});
