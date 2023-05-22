/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconGou = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M506.0096 16.49664C228.71552 16.49664 3.92704 241.27488 3.92704 518.57408c0 277.2736 224.78848 502.07232 502.07232 502.07232s502.07232-224.79872 502.07232-502.07232c0-277.2992-224.78848-502.07744-502.0672-502.07744z m269.12256 369.54112l-312.40704 312.40192a33.4592 33.4592 0 0 1-47.32928 0l-156.20096-156.20096a33.46432 33.46432 0 0 1 0-47.32928 33.46944 33.46944 0 0 1 47.3344 0l132.53632 132.5312 288.73216-288.73728a33.46944 33.46944 0 1 1 47.3344 47.3344z m0 0"
        fill={getIconColor(color, 0, '#272636')}
      />
    </Svg>
  );
};

IconGou.defaultProps = {
  size: 18,
};

IconGou = React.memo ? React.memo(IconGou) : IconGou;

export default IconGou;
