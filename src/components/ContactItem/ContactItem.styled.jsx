import styled from '@emotion/styled';

export const ContactItemBtn = styled.button`
  height: 25px;
  width:100px;
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

export const ContactListLink = styled.a`
color: currentColor;
  transition: scale 250ms linear, background-color 250ms linear,
    color 250ms linear;

  :hover,
  :focus {
  scale:1.1;
  }
`;
