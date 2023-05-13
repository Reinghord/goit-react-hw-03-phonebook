import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 400px;
`;

export const Label = styled.label`
  text-align: center;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const FieldStyled = styled(Field)`
  padding: 10px;
  width: 75%;
  margin-inline: auto;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  padding: 20px;
  background-color: aquamarine;
  border: 1px solid black;
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  text-align: center;
  background-color: bisque;
`;
