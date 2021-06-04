import { isLoggedInVer, isDarkModeVar } from "../apollo";
import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.fontColor};
`;

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

const Login = () => (
  <Container>
    <Title>Login</Title>
    <button onClick={() => isLoggedInVer(true)}>Log in Now</button>
    <button onClick={() => isDarkModeVar(true)}>DarkMode</button>
    <button onClick={() => isDarkModeVar(false)}>LightMode</button>
  </Container>
);
export default Login;
