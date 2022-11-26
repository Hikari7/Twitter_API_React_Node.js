import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 36px;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const ContainerTitle = styled.h2`
  color: #14171a;
  font-size: 24px;
`;

export const ContainerSearch = styled.form`
  margin-top: 24px;
  padding: 24px;
  border-radius: 5px;
  background-color: #f2f2f2;
`;

export const FormInput = styled.input`
  border: 0;
  padding: 10px;
  font-size: 1.3em;
  font-family: Arial, sans-serif;
  color: #657786;
  border: solid 1px #ccc;
  margin: 0 0 20px;
  width: 300px;

  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
`;
