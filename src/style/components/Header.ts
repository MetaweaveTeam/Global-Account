import { AppBar, Button, IconButton } from '@material-ui/core';
import styled from 'styled-components';
import { colors, transition } from '../../constants';

const AppBarS = styled(AppBar)`
  ${transition}
  background-color: ${({ theme }) => theme.bodyBackground};
  color: ${({ theme }) => theme.text};
  border-bottom: 1px solid ${({ theme }) => theme.purpleInvert};
`;

const AppBarBottomS = styled(AppBarS)`
  ${transition}
  border-top: 1px solid ${({ theme }) => theme.purpleInvert};
  top: auto;
  bottom: 0;
`;

const FormS = styled('form')`
  flex: 1;
  display: flex;
  padding-left: 15px;
  padding-right: 15px;
  max-width: 1000px;

  @media only screen and (max-width: 724px){
    padding: 0;
  }
`;

const InputS = styled('input').attrs(props => ({
  className: props.className,
  spellCheck: false
}))`
  &.cropped {
    border-radius: 0px;
    border: 0;
    height: 45px;
    padding-left: 8px;
  }

  ${transition}
  border: 1px solid ${colors.purple[0]};
  border-right: 0;
  flex: 1;
  background-color: ${({theme}) => theme.postBackground};
  color: ${({theme}) => theme.text};
  padding: 10px 15px 10px 20px;
  height: 47px;
  font-family: Arial;
  font-size: larger;
  border-radius: 25px 0px 0px 25px;
  &:hover {
    border-color: ${({theme}) => theme.greenInvert};
  }
  &:focus {
    outline: none;
  }
  @media only screen and (max-width: 724px){
    font-size: medium;
  }
`;

const InputButtonS = styled('div')`
  ${transition}
  border: 1px solid ${colors.purple[0]};
  background-color: ${({theme}) => theme.postBackground};
  padding-right: 25px;
  padding-left: 20px;
  height: 47px;
  line-height: 47px;
  font-size: larger;
  border-radius: 0px 25px 25px 0px;
  cursor: pointer;
  vertical-align: middle;
  &:hover{
    border-color: ${colors.purple[2]};
    background-color: ${({theme}) => theme.purpleInvert}11;
  }
`;

const LoginButtonS = styled(Button)`
  ${transition}
  color: ${colors.purple[0]};
  &:hover {
    color: ${colors.purple[2]};
  }
`;

const IconButtonS = styled(IconButton)`
  ${transition}
  color: ${({ theme }) => theme.text};
`;

export {AppBarS, AppBarBottomS, FormS, InputS, InputButtonS, LoginButtonS, IconButtonS};