import { render, screen } from "@testing-library/react"
import RoleBy from "./RoleBy"

test('check login button', () => {
  render(<RoleBy />)
 var loginBtn = screen.getByRole('button', {
    name: 'Login'
  })
  expect(loginBtn).toBeInTheDocument()
})
test('check logout button', () => {
  render(<RoleBy />)
 var loginBtn = screen.getByRole('button', {
    name: 'Logout'
  })
  expect(loginBtn).toBeInTheDocument()
})