/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconJilu = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M263.7906378 739.26406548l9.51835315-211.11219104L563.98485165 113.00524213l200.86165689 140.57875378-291.16398135 416.12287366-209.89188939 69.55719591z m69.80125626-190.85518313l-4.88120672 104.94594469 106.41030668-35.38874878 244.79251747-349.49440182-100.79691896-70.77749757-245.52469847 350.71470348z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M373.6666013 551.29611613l205.0668165-285.40903863 33.69497004 24.21078533-205.06925709 285.40903867zM89.77561793 764.64634045h729.74040602v61.0150841H89.77561793z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconJilu.defaultProps = {
  size: 18,
};

IconJilu = React.memo ? React.memo(IconJilu) : IconJilu;

export default IconJilu;
