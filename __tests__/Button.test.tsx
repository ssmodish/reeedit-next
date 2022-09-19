import { render } from '@testing-library/react'

import { Button } from '@/components/Button/Button'

describe('Button test case', () => {
  it('Render check', () => {
    const onClick = jest.fn()
    const { asFragment } = render(<Button onClick={onClick}>Button</Button>)
  })
})
