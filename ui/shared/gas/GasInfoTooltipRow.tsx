import { Box, chakra } from '@chakra-ui/react';
import React from 'react';

import type { GasPriceInfo } from 'types/api/stats';

import { space } from 'lib/html-entities';
import GasPrice from 'ui/shared/gas/GasPrice';

interface Props {
  name: string;
  info: GasPriceInfo | null;
}

const GasInfoTooltipRow = ({ name, info }: Props) => {
  return (
    <>
      <Box>
        <chakra.span color="accent">{ name }</chakra.span>
        { info && info.time && (
          <chakra.span color="text">
            { space }{ (info.time / 1000).toLocaleString(undefined, { maximumFractionDigits: 1 }) }s
          </chakra.span>
        ) }
      </Box>
      <GasPrice data={ info } textAlign="right" color="text"/>
      <GasPrice data={ info } unitMode="secondary" color="red" textAlign="right"/>
    </>
  );
};

export default React.memo(GasInfoTooltipRow);
