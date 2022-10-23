import styled from '@emotion/styled';

export const ContactListBox = styled.ul`
margin: 0 auto;
width: 400px;
display: grid;
flex-direction: column;
margin-top: 20px;
`;

export const ContactListItem = styled.li`
display: flex;
justify-content: space-between;
margin-bottom: 20px;
`;

export const ContactListText = styled.p`
  margin-bottom: 10px;
`;

export const ContactListBtn = styled.button`
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
  }
`;
