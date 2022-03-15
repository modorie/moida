import { render } from "@testing-library/react";
import { FloatingButton } from "@/components/Buttons";

it("matches snapshot", () => {
  const utils = render(<FloatingButton />);
  expect(utils.container).toMatchSnapshot();
});
