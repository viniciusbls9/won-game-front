import { Heading, TextField } from 'components'
import * as S from './styles'

const FormProfile = () => (
  <S.Wrapper>
    <Heading lineBottom color="black" size="small">
      My profile
    </Heading>

    <S.Form>
      <TextField
        name="name"
        placeholder="Name"
        label="Name"
        initialValue="John Doe"
      />

      <TextField
        name="email"
        type="email"
        placeholder="Email"
        initialValue="johndoe@gmail.com"
        label="E-mail"
        disabled
      />
    </S.Form>
  </S.Wrapper>
)

export default FormProfile
