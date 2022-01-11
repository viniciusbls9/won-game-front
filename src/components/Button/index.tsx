import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
  ReactNode,
  forwardRef,
  ForwardRefRenderFunction
} from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  minimal?: boolean
  icon?: ReactNode
  as?: ElementType
} & ButtonTypes

const Button: ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  { children, size = 'medium', fullWidth = false, icon, minimal, ...props },
  ref
) => (
  <S.Wrapper
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    minimal={minimal}
    ref={ref}
    {...props}
  >
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default forwardRef(Button)
