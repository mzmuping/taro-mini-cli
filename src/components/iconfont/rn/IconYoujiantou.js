/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconYoujiantou = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1861 1024" width={size} height={size} {...rest}>
      <Path
        d="M1406.687806 2.30034a7.074391 7.074391 0 0 1 10.425419 0l410.500868 424.742735a123.243345 123.243345 0 0 1 0 170.15773l-410.500868 424.463482a7.074391 7.074391 0 0 1-10.425419 0L1293.683712 904.843746a7.632896 7.632896 0 0 1 0-10.704672l269.664629-278.973039c4.654205-4.654205 1.303177-12.752521-5.026541-12.752521H7.26149A7.446728 7.446728 0 0 1 0.000931 594.780618V429.18401a7.446728 7.446728 0 0 1 7.260559-7.446728h1551.06031c6.515887 0 9.587662-8.098316 5.026541-12.845606l-269.664629-278.973039a7.632896 7.632896 0 0 1 0-10.704671L1406.687806 2.30034z"
        fill={getIconColor(color, 0, '#5ED6DB')}
      />
    </Svg>
  );
};

IconYoujiantou.defaultProps = {
  size: 18,
};

IconYoujiantou = React.memo ? React.memo(IconYoujiantou) : IconYoujiantou;

export default IconYoujiantou;
