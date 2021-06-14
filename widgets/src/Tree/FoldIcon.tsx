import React, { useState } from 'react';
import styled from 'styled-components';

const FoldButton = styled.button`
  outline: none;
  padding: 0;
  background-color: white;
  width: 20px;
  height: 20px;
  background: white;
  color: #000000;
  border-radius: unset;
  margin-right: 24px;
`;

export default ({ onToggle }: FoldIconProps) => {
  const [show, setShow] = useState<boolean>(false);
  const handleClick = () => {
    setShow(!show);
    onToggle(!show);
  };
  return (
    <div>
      <FoldButton onClick={handleClick}>
        { show ? '-' : '+' }
      </FoldButton>
    </div>
  );
};

interface FoldIconProps {
  onToggle: Function;
}
