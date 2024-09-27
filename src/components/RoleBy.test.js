import { render, screen } from "@testing-library/react"
import RoleBy from "./RoleBy"

test('check render login button', () => {
  render(<RoleBy />)
 var loginBtn = screen.getByRole('button', {
    name: 'Login'
  })
  expect(loginBtn).toBeInTheDocument()
})