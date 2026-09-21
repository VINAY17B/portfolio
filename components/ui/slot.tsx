import * as React from 'react'

export const Slot = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ children, ...props }, ref) => {
    if (React.isValidElement(children)) {
      return React.cloneElement(children, {
        ...props,
        ...children.props,
        ref,
      } as React.HTMLAttributes<HTMLElement> & { ref?: React.Ref<HTMLElement> })
    }

    return <span ref={ref} {...props}>{children}</span>
  },
)

Slot.displayName = 'Slot'
