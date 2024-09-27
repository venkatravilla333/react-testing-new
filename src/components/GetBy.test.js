import { render, screen } from "@testing-library/react"
import GetBy from "./GetBy"

test('render sachin', () => {
  render(<GetBy />)
  var text = screen.getByText('sachin')
  expect(text).toBeInTheDocument()

})