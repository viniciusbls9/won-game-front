import { useState, InputHTMLAttributes, ReactNode } from 'react'

import * as S from './styles'

export type TextFieldProps = {
  onInput?: (value: string) => void
  label?: string
  labelFor?: string
  initialValue?: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  label,
  labelFor = '',
  initialValue = '',
  icon,
  iconPosition = 'left',
  onInput,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInput && onInput(newValue)
  }

  return (
    <S.Wrapper>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Input
          iconPosition={iconPosition}
          type="text"
          onChange={onChange}
          value={value}
          {...props}
        />
      </S.InputWrapper>
    </S.Wrapper>
  )
}

export default TextField
