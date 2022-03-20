import { render } from "@testing-library/react";

import { FontWeight, Theme } from "@/foundations";
import Button from "./Button";
import { Primary, Secondary } from "./Button.stories";

describe("Button Test >", () => {
  describe("Primary Button >", () => {
    it("Default >", () => {
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

  describe("Secondary Button >", () => {
    it("Default >", () => {
      const { getByRole } = render(<Button {...Secondary.args} />);
      const secondaryButton = getByRole("button");

      expect(secondaryButton).toHaveStyle(
        `color: ${Theme.ButtonTextColor.secondary}`
      );
      expect(secondaryButton).toHaveStyle(
        `background-color: ${Theme.ButtonBgColor.secondary};`
      );
      expect(secondaryButton).toHaveStyle(
        `border: 1px solid ${Theme.borderColor.primary}`
      );
      expect(secondaryButton).toHaveStyle(`font-weight: ${FontWeight.regular}`);
    });
  });
});
