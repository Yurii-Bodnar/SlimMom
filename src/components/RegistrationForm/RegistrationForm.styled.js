import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px 20px 0 20px;
`;
export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.21;
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 40px;

  color: ${p => p.theme.colors.orange};
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* &:nth-child(1) {
    margin-bottom: 20px;
  } */
  /* &:nth-child(even) {
    margin-bottom: 60px;
  } */
`;
export const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.21;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.black};
  text-align: unset;
  padding: 20px 0 20px 0;
  /* margin-bottom: 20px; */

  &::placeholder {
    font-family: ${p => p.theme.fonts.main};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.xs};
    line-height: 1.21;
    letter-spacing: 0.04em;
    margin-bottom: 20px;

    color: ${p => p.theme.colors.grey};
  }
  &:focus {
    outline: none;
  }
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
`;
export const Btn = styled.button`
  width: 182px;
  background: ${p => p.theme.colors.orange};
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  border: none;

  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.21;
  text-align: center;
  letter-spacing: 0.04em;

  padding: 13px 0 13px 0;

  color: ${p => p.theme.colors.white};
`;
export const LinkLogin = styled(NavLink)`
  width: 182px;
  background: ${p => p.theme.colors.white};
  outline: 2px solid ${p => p.theme.colors.orange};
  border-radius: 30px;

  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.21;
  text-align: center;
  letter-spacing: 0.04em;

  padding: 11px 0 11px 0;

  color: #fc842d;
`;
