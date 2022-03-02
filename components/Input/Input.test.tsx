import { render } from "@testing-library/react";
import { Input } from "@/components";

it("matches snapshot", () => {
  const utils = render(<Input />);
  expect(utils.container).toMatchSnapshot();
});
