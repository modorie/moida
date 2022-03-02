import { render } from "@testing-library/react";
import { Typography } from "@/components";

it("matches snapshot", () => {
  const utils = render(<Typography />);
  expect(utils.container).toMatchSnapshot();
});
