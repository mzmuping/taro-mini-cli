/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconFensiliebiao = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M619.085 273.604H400.597c-22.056 0-40-17.944-40-40v-81.995c0-22.056 17.944-40 40-40h218.488c22.056 0 40 17.944 40 40v81.995c0 22.056-17.944 40-40 40z m-198.488-60h178.488v-41.995H420.597v41.995z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M773.485 888.063h-522.97c-38.598 0-70-31.401-70-70v-572.96c0-38.598 31.402-70 70-70h41.487c16.568 0 30 13.432 30 30s-13.432 30-30 30h-41.487c-5.514 0-10 4.486-10 10v572.96c0 5.514 4.486 10 10 10h522.97c5.514 0 10-4.486 10-10v-572.96c0-5.514-4.486-10-10-10H727.68c-16.568 0-30-13.432-30-30s13.432-30 30-30h45.806c38.599 0 70 31.402 70 70v572.96c-0.001 38.599-31.402 70-70.001 70z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M645.516 724.663c-16.568 0-30-13.432-30-30 0-57.078-46.437-103.515-103.516-103.515-57.079 0-103.515 46.437-103.515 103.515 0 16.568-13.432 30-30 30s-30-13.432-30-30c0-90.162 73.353-163.515 163.515-163.515 90.163 0 163.516 73.353 163.516 163.515 0 16.568-13.432 30-30 30z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <Path
        d="M512 591.148c-62.245 0-112.885-50.64-112.885-112.885 0-62.245 50.64-112.885 112.885-112.885s112.885 50.64 112.885 112.885c0 62.246-50.64 112.885-112.885 112.885z m0-165.77c-29.161 0-52.885 23.724-52.885 52.885 0 29.161 23.724 52.885 52.885 52.885 29.161 0 52.885-23.724 52.885-52.885 0-29.16-23.724-52.885-52.885-52.885z"
        fill={getIconColor(color, 3, '#333333')}
      />
    </Svg>
  );
};

IconFensiliebiao.defaultProps = {
  size: 18,
};

IconFensiliebiao = React.memo ? React.memo(IconFensiliebiao) : IconFensiliebiao;

export default IconFensiliebiao;