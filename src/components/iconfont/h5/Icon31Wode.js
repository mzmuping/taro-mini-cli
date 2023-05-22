/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Icon31Wode = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M899.640668 897.714805c-7.238868-108.132766-60.680011-208.738092-146.610102-276.03173l-5.16565-3.568269-0.047072 0.069585c-4.88731-2.988054-10.458189-4.586458-16.192797-4.586458-19.701714 0-31.458479 9.498328-31.458479 25.411763 0 9.266038 4.285606 17.975397 11.477402 23.882943l-0.080841 0.13917 4.562922 3.266393c72.065316 51.518351 112.638383 129.652895 120.584356 232.273111l0.084934 1.119497c-0.071631 0.862647-0.116657 1.731434-0.116657 2.612501 0 17.340947 14.058181 31.400151 31.400151 31.400151 16.759709 0 30.449499-13.131065 31.350009-29.665647l0.624217 0L899.640668 897.714805zM798.515502 371.795794c0-156.107407-128.529305-283.119149-286.524712-283.119149s-286.525736 127.011742-286.525736 283.119149c0 84.110653 37.19104 162.570609 102.377692 216.660528-117.01711 62.452377-194.688097 181.588755-203.479321 313.118394l-0.36225 5.482875c-0.007163 0.113587-0.016373 0.226151-0.022513 0.340761l-0.032746 0.499373 0.019443 0c-0.008186 0.267083-0.019443 0.533143-0.019443 0.802272 0 14.702863 11.918447 26.622334 26.622334 26.622334 14.702863 0 26.622334-11.918447 26.622334-26.622334 0-0.26913-0.01228-0.535189-0.019443-0.802272l0.553609 0 0.417509-5.467525c9.647731-124.997875 88.871073-234.450706 202.112184-279.552927 33.809013 15.705704 85.420485 32.060183 131.714857 32.060183 42.889833 0 84.540442-9.451256 124.198673-28.307719l29.048593-16.863063 23.720238-15.566534C758.567675 539.996634 798.515502 458.919061 798.515502 371.795794zM511.989767 597.931115c-126.247332 0-228.949412-101.461833-228.949412-226.157833 0-124.673487 102.701057-226.111784 228.949412-226.111784 126.259612 0 228.972948 101.438297 228.972948 226.111784C740.961692 496.469282 638.249379 597.931115 511.989767 597.931115z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

Icon31Wode.defaultProps = {
  size: 18,
};

export default Icon31Wode;
