import { RaisedButton, TextButton, hex2Rgba } from "../../styles";
import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  display: inline-block;

  width: 30%;
  margin: 1em 0;
  padding: 2em 2em 0.2em 2em;

  border-radius: 0.25rem;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`

const Form = styled.form`
  margin: 0 auto;
  display: inline-block;
  width: 100%;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1em 0;
`;

const InputsWrapper = styled.div`
  text-align: left;
`

const Input = styled.input`
  width: 100%;
  padding: 0.6em;
  margin: 0.6em 0;

  box-sizing: border-box;
  border: 0.05rem solid ${({theme}) => hex2Rgba(theme.color.primaryLight, 0.3)};
  border-radius: 0.25rem;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);

  &:focus {
    outline: none;
    ${'' /* border: none; */}
    box-shadow: 0 0 0.25rem ${({theme}) => (theme.color.secondary)}
  }
`

const InputHelper = styled.span`
  display: block;
  font-size: 75%;
  margin-top: -0.25em;
  margin-bottom: 0.6em;
`

const LoginForm = () => (
  <Container>
    <Form onSubmit={e => {e.preventDefault(); return submitFn()}}>
      <InputsWrapper>
        <label htmlFor="login-id">Login</label><br />
        <Input id="login-id" type="text" onChange={loginFn} /><br />
        <InputHelper>* login should be blabla characters and longer</InputHelper>
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
  </Container>
);

function submitFn() {}
function loginFn() {}
function passFn() {}

export default LoginForm;
