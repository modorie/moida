import { render } from '@testing-library/react'

import { FontWeight, Theme } from '@/foundations'

import Button from './Button'
import { Primary, Secondary } from './Button.stories'

describe('Button Test >', () => {
  describe('Primary Button >', () => {
    it('Default >', () => {
      const { getByRole } = render(<Button {...Primary.args} />)
      const primaryButton = getByRole('button')

      expect(primaryButton).toHaveStyle(
        `color: ${Theme.ButtonTextColor.primary}`
      )
      expect(primaryButton).toHaveStyle(
        `background-color: ${Theme.ButtonBgColor.primary};`
      )
      expect(primaryButton).toHaveStyle(
        `border: 1px solid ${Theme.borderColor.primary}`
      )
      expect(primaryButton).toHaveStyle(`font-weight: ${FontWeight.bold}`)
    })

    it('Disabled >', () => {
      const { getByRole } = render(<Button {...Primary.args} disabled={true} />)
      const primaryDisabledButton = getByRole('button')

      expect(primaryDisabledButton).toHaveStyle(
        `color: ${Theme.textColor.lightest}`
      )
      expect(primaryDisabledButton).toHaveStyle(
        `background-color: ${Theme.ButtonDisableBgColor.primary}`
      )
      expect(primaryDisabledButton).toHaveStyle(
        `border: 1px solid ${Theme.ButtonDisableBorderColor.primary}`
      )
      expect(primaryDisabledButton).toBeDisabled()
    })

    it('Loading >', () => {
      const { getByRole } = render(<Button {...Primary.args} loading={true} />)
      const primaryLoadingButton = getByRole('button')

      expect(primaryLoadingButton).toHaveStyle(
        `background-color: ${Theme.ButtonBgColor.primary};`
      )
      expect(primaryLoadingButton).toHaveStyle(
        `border: 1px solid ${Theme.borderColor.primary}`
      )
      expect(primaryLoadingButton.firstChild?.nodeName).toBe('DIV')
    })
  })

  describe('Secondary Button >', () => {
    it('Default >', () => {
      const { getByRole } = render(<Button {...Secondary.args} />)
      const secondaryButton = getByRole('button')

      expect(secondaryButton).toHaveStyle(
        `color: ${Theme.ButtonTextColor.secondary}`
      )
      expect(secondaryButton).toHaveStyle(
        `background-color: ${Theme.ButtonBgColor.secondary};`
      )
      expect(secondaryButton).toHaveStyle(
        `border: 1px solid ${Theme.borderColor.primary}`
      )
      expect(secondaryButton).toHaveStyle(`font-weight: ${FontWeight.regular}`)
    })

    it('Disabled >', () => {
      const { getByRole } = render(
        <Button {...Secondary.args} disabled={true} />
      )
      const secondaryDisabledButton = getByRole('button')

      expect(secondaryDisabledButton).toHaveStyle(
        `color: ${Theme.textColor.lightest}`
      )
      expect(secondaryDisabledButton).toHaveStyle(
        `background-color: ${Theme.ButtonDisableBgColor.secondary}`
      )
      expect(secondaryDisabledButton).toHaveStyle(
        `border: 1px solid ${Theme.ButtonDisableBorderColor.secondary}`
      )
      expect(secondaryDisabledButton).toBeDisabled()
    })

    it('Loading >', () => {
      const { getByRole } = render(
        <Button {...Secondary.args} loading={true} />
      )
      const secondaryLoadingButton = getByRole('button')

      expect(secondaryLoadingButton).toHaveStyle(
        `background-color: ${Theme.ButtonBgColor.secondary};`
      )
      expect(secondaryLoadingButton).toHaveStyle(
        `border: 1px solid ${Theme.borderColor.primary}`
      )
      expect(secondaryLoadingButton.firstChild?.nodeName).toBe('DIV')
    })
  })
})
