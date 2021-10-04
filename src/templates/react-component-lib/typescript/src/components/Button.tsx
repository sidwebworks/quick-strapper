import React from "react"

interface NativeButton extends React.ComponentPropsWithRef<"button"> {
  label: string
}

export const Button = React.forwardRef<HTMLButtonElement, NativeButton>((props, ref) => {
  const { children, ...rest } = props

  return (
    <button {...rest} ref={ref}>
      {children}
    </button>
  )
})
