import { render } from "@testing-library/react";
import { FixedButton } from "@/components/Buttons";

it("matches snapshot", () => {
  const utils = render(<FixedButton />);
  expect(utils.container).toMatchSnapshot();
});
