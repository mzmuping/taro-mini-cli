/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconJiahao = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M851.968 503.808 532.48 503.808 532.48 188.416c0-12.288-8.192-20.48-20.48-20.48S491.52 176.128 491.52 188.416l0 319.488L172.032 507.904c-12.288 0-20.48 8.192-20.48 20.48s8.192 20.48 20.48 20.48L491.52 548.864l0 319.488c0 12.288 8.192 20.48 20.48 20.48s20.48-8.192 20.48-20.48l0-319.488 319.488 0c12.288 0 20.48-8.192 20.48-20.48S864.256 503.808 851.968 503.808z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconJiahao.defaultProps = {
  size: 18,
};

IconJiahao = React.memo ? React.memo(IconJiahao) : IconJiahao;

export default IconJiahao;
