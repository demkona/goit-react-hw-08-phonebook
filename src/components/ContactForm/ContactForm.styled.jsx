import styled from '@emotion/styled';
import { Form } from 'formik';

export const FormBox = styled(Form)`
display: grid;
justify-content:center;
  width: 600px;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
`;

export const FormLabel = styled.label`
margin: 10px 0px;
  width: 60px;
`;

export const FormInput = styled.input`
  width: 300px;
  height: 20px;
`;

export const FormButton = styled.button`
  display: block;
  margin-top: 20px;
  height: 25px;
  font-size: 12px;
  border-radius: 2px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.08), 0px 4px 4px rgba(0, 0, 0, 0.03),
    1px 4px 6px rgba(0, 0, 0, 0.08);
  transition: scale 250ms linear, background-color 250ms linear,
    color 250ms linear;

  :hover,
  :focus {
    background-color: black;
    color: #e1e4e9;
    scale:1.1;
  }
`;
