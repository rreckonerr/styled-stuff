import React from "react";
import Layout from "../layouts/Main";
import LoginForm from "../components/LoginForm";
import styled from "styled-components";

const LoginWrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  display: block;
  text-align: center;
`;

const LoginPage = () => {
  return (
    <Layout>
      <LoginWrapper>
        <LoginForm />
      </LoginWrapper>
    </Layout>
  );
};

export default LoginPage;
