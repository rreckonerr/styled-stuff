import { RaisedButton, TextButton, hex2Rgba } from "../../styles";
import styled from "styled-components";

const Form = styled.form`
  margin: 0 auto;
  display: inline-block;
`;

const ButtonsWrapper = styled.div``;

const InputsWrapper = styled.div`
  text-align: left;
`

const Input = styled.input`
  width: 100%;
  padding: 0.5em;
  margin: 0.7em 0;

  box-sizing: border-box;
  border: 0.05rem solid ${({theme}) => hex2Rgba(theme.color.primaryLight, 0.3)};
  border-radius: 0.25rem;

  &:focus {
    outline: none;
    ${'' /* border: none; */}
    box-shadow: 0 0 0.25rem ${({theme}) => (theme.color.secondary)}
  }
`

const LoginForm = () => (
  <Form onSubmit={e => {e.preventDefault(); return submitFn()}}>
    <InputsWrapper>
      <label htmlFor="login-id">Login</label><br />
      <Input id="login-id" type="text" onChange={loginFn} /><br />
      <label htmlFor="pass-id">Password</label><br />
      <Input id="pass-id" type="password" onChange={passFn} /><br />
    </InputsWrapper>
    <ButtonsWrapper>
      <TextButton type="cancel">Cancel</TextButton>
      <RaisedButton type="submit" secondary>
        Submit
      </RaisedButton>
    </ButtonsWrapper>
  </Form>
);

function submitFn() {}
function loginFn() {}
function passFn() {}

export default LoginForm;
