import { render } from '@testing-library/react'

import ThemeProvider from '@/providers/ThemeProvider'
import Theme from '@/styles/theme'

import Button from './Button'
import { Primary, Secondary } from './Button.stories'

const renderOptions = {
  wrapper: ThemeProvider,
}

describe('Button Test >', () => {
  describe('Primary Button >', () => {
    it('Default >', () => {
      const { getByRole } = render(<Button {...Primary.args} />, renderOptions)
      const primaryButton = getByRole('button')

      expect(primaryButton).toHaveStyle(`color: ${Theme.color.white}`)
      expect(primaryButton).toHaveStyle(
        `background-color: ${Theme.color.blue200};`
      )
      expect(primaryButton).toHaveStyle(
        `border: 1px solid ${Theme.color.blue200}`
      )
    })

    it('Disabled >', () => {
      const { getByRole } = render(
        <Button {...Primary.args} disabled={true} />,
        renderOptions
      )
      const primaryDisabledButton = getByRole('button')

      expect(primaryDisabledButton).toHaveStyle(`color: ${Theme.color.gray400}`)
      expect(primaryDisabledButton).toHaveStyle(
        `background-color: ${Theme.color.gray200}`
      )
      expect(primaryDisabledButton).toHaveStyle(
        `border: 1px solid ${Theme.color.gray200}`
      )
      expect(primaryDisabledButton).toBeDisabled()
    })

    it('Loading >', () => {
      const { getByRole } = render(
        <Button {...Primary.args} loading={true} />,
        renderOptions
      )
      const primaryLoadingButton = getByRole('button')

      expect(primaryLoadingButton).toHaveStyle(
        `background-color: ${Theme.color.blue200};`
      )
      expect(primaryLoadingButton).toHaveStyle(
        `border: 1px solid ${Theme.color.blue200}`
      )
      expect(primaryLoadingButton.firstChild?.nodeName).toBe('DIV')
    })
  })

  describe('Secondary Button >', () => {
    it('Default >', () => {
      const { getByRole } = render(
        <Button {...Secondary.args} />,
        renderOptions
      )
      const secondaryButton = getByRole('button')

      expect(secondaryButton).toHaveStyle(`color: ${Theme.color.blue200}`)
      expect(secondaryButton).toHaveStyle(
        `background-color: ${Theme.color.white};`
      )
      expect(secondaryButton).toHaveStyle(
        `border: 1px solid ${Theme.color.blue200}`
      )
    })

    it('Disabled >', () => {
      const { getByRole } = render(
        <Button {...Secondary.args} disabled={true} />,
        renderOptions
      )
      const secondaryDisabledButton = getByRole('button')

      expect(secondaryDisabledButton).toHaveStyle(
        `color: ${Theme.color.gray400}`
      )
      expect(secondaryDisabledButton).toHaveStyle(
        `background-color: ${Theme.color.white}`
      )
      expect(secondaryDisabledButton).toHaveStyle(
        `border: 1px solid ${Theme.color.gray400}`
      )
      expect(secondaryDisabledButton).toBeDisabled()
    })

    it('Loading >', () => {
      const { getByRole } = render(
        <Button {...Secondary.args} loading={true} />,
        renderOptions
      )
      const secondaryLoadingButton = getByRole('button')

      expect(secondaryLoadingButton).toHaveStyle(
        `background-color: ${Theme.color.white};`
      )
      expect(secondaryLoadingButton).toHaveStyle(
        `border: 1px solid ${Theme.color.blue200}`
      )
      expect(secondaryLoadingButton.firstChild?.nodeName).toBe('DIV')
    })
  })
})
