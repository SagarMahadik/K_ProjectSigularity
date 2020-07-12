import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import DoneIconImage from 'img/piatto/ok-hand.gif';

function DoneIcon() {
  return (
    <Fragment>
      <div style={{ position: 'absolute', top: '250px', left: '150px' }}>
        <img src={DoneIconImage} style={{ height: '100px', width: '100px' }} />
      </div>
    </Fragment>
  );
}

export default DoneIcon;
