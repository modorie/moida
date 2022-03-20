import { render } from "@testing-library/react";

import { FontWeight, Theme } from "@/foundations";
import Button from "./Button";
import { Primary, Secondary } from "./Button.stories";

describe("Button Test >", () => {
  it("Primary Button >", () => {
    const { getByRole } = render(<Button {...Primary.args} />);
    const primaryButton = getByRole("button");

    expect(primaryButton).toHaveStyle(
      `color: ${Theme.ButtonTextColor.primary}`
    );
    expect(primaryButton).toHaveStyle(
      `background-color: ${Theme.ButtonBgColor.primary};`
    );
    expect(primaryButton).toHaveStyle(
      `border: 1px solid ${Theme.borderColor.primary}`
    );
    expect(primaryButton).toHaveStyle(`font-weight: ${FontWeight.bold}`);
  });
});
