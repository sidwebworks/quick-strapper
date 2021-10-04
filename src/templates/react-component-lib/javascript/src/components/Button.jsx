export const Button = props => {
  const { children, ...rest } = props

  return <button {...rest}>{children}</button>
}
