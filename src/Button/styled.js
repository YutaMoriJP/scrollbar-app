import styled from "styled-components";

export const IconWrapper = styled.article`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  display: flex;
  background: purple;
  border: 0;
  border-radius: 5px;
  color: white;
  gap: 5px;
  :active {
    transform: scale(0.95);
  }
  ${IconWrapper} & {
    ::after {
      content: "";
    }
    background: var(--icon-primary-color);
    color: var(--icon-primary-text-color);
    svg {
      align-self: center;
    }
  }
`;

export default Button;
