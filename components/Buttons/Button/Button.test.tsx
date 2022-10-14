import { render } from '@testing-library/react'

import { Color, FontWeight } from '@/foundations'

import Button from './Button'
import { Primary, Secondary } from './Button.stories'

describe('Button Test >', () => {
  describe('Primary Button >', () => {
    it('Default >', () => {
      const { getByRole } = render(<Button {...Primary.args} />)
      const primaryButton = getByRole('button')

      expect(primaryButton).toHaveStyle(`color: ${Color.blue200}`)
      expect(primaryButton).toHaveStyle(`background-color: ${Color.blue200};`)
      expect(primaryButton).toHaveStyle(`border: 1px solid ${Color.blue200}`)
      expect(primaryButton).toHaveStyle(`font-weight: ${FontWeight.bold}`)
    })

    it('Disabled >', () => {
      const { getByRole } = render(<Button {...Primary.args} disabled={true} />)
      const primaryDisabledButton = getByRole('button')

      expect(primaryDisabledButton).toHaveStyle(`color: ${Color.gray400}`)
      expect(primaryDisabledButton).toHaveStyle(
        `background-color: ${Color.gray200}`
      )
      expect(primaryDisabledButton).toHaveStyle(
        `border: 1px solid ${Color.gray200}`
      )
      expect(primaryDisabledButton).toBeDisabled()
    })

    it('Loading >', () => {
      const { getByRole } = render(<Button {...Primary.args} loading={true} />)
      const primaryLoadingButton = getByRole('button')

      expect(primaryLoadingButton).toHaveStyle(
        `background-color: ${Color.blue200};`
      )
      expect(primaryLoadingButton).toHaveStyle(
        `border: 1px solid ${Color.blue200}`
      )
      expect(primaryLoadingButton.firstChild?.nodeName).toBe('DIV')
    })
  })

  describe('Secondary Button >', () => {
    it('Default >', () => {
      const { getByRole } = render(<Button {...Secondary.args} />)
      const secondaryButton = getByRole('button')

      expect(secondaryButton).toHaveStyle(`color: ${Color.blue200}`)
      expect(secondaryButton).toHaveStyle(`background-color: ${Color.white};`)
      expect(secondaryButton).toHaveStyle(`border: 1px solid ${Color.blue200}`)
      expect(secondaryButton).toHaveStyle(`font-weight: ${FontWeight.regular}`)
    })

    it('Disabled >', () => {
      const { getByRole } = render(
        <Button {...Secondary.args} disabled={true} />
      )
      const secondaryDisabledButton = getByRole('button')

      expect(secondaryDisabledButton).toHaveStyle(`color: ${Color.gray400}`)
      expect(secondaryDisabledButton).toHaveStyle(
        `background-color: ${Color.white}`
      )
      expect(secondaryDisabledButton).toHaveStyle(
        `border: 1px solid ${Color.gray400}`
      )
      expect(secondaryDisabledButton).toBeDisabled()
    })

    it('Loading >', () => {
      const { getByRole } = render(
        <Button {...Secondary.args} loading={true} />
      )
      const secondaryLoadingButton = getByRole('button')

      expect(secondaryLoadingButton).toHaveStyle(
        `background-color: ${Color.white};`
      )
      expect(secondaryLoadingButton).toHaveStyle(
        `border: 1px solid ${Color.blue200}`
      )
      expect(secondaryLoadingButton.firstChild?.nodeName).toBe('DIV')
    })
  })
})
