import { render } from "@testing-library/react";
import { Button } from "@/components/Buttons";

it("matches snapshot", () => {
  const utils = render(<Button />);
  expect(utils.container).toMatchSnapshot();
});
