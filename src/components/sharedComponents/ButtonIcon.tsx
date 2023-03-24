import React from 'react';
import { Button } from 'react-bootstrap';

const ButtonIcon = ({
  Icon,
  size,
  className,
  onClick,
}: {
  Icon: React.ElementType;
  size?: string;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <Button className='mx-2' onClick={onClick}>
      <Icon size={size ?? '1em'} className={`${className}`} />
    </Button>
  );
};

export default ButtonIcon;
