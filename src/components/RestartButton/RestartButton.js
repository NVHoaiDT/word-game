import React from 'react';

function RestartButton({handleRestart}) {
  return (
    <button className='btn medium refresh' onClick={handleRestart}>Restart</button>
  );
}

export default RestartButton;
