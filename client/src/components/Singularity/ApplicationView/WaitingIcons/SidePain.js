import React, { Fragment } from 'react';
import sidePainImage from 'img/piatto/icons/sidePain.gif';
import { LogoImage } from 'styles/Singularity/ApplicationStyles/LogoStyles';
const SidePain = () => {
  return (
    <Fragment>
      <div style={{ position: 'absolute', top: '350px', left: '150px' }}>
      <img src={sidePainImage} height="74px" width="115px" />
      </div>
    </Fragment>
  )

};

export default SidePain;