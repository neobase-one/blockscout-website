import { chakra, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

import IconSvg from 'ui/shared/IconSvg';

const TokenLogoPlaceholder = ({ className }: { className?: string }) => {
  const color = useColorModeValue('gray.400', 'gray.200');

  return (
    <IconSvg
      className={ className }
      fontWeight={ 600 }
      bgColor="divider"
      color={ color }
      borderRadius="base"
      name="token-placeholder"
      transitionProperty="background-color,color"
      transitionDuration="normal"
      transitionTimingFunction="ease"
    />
  );
};

export default chakra(TokenLogoPlaceholder);
