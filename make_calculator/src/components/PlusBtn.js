// ただプラスボタンを表示するためのボタンを表示する
import React from 'react';
import PropTypes from 'prop-types';

const PlusBtn = ({ onClickFunc }) => (
    <button onClick={ onClickFunc }>+</button>
);

PlusBtn.propTypes = {
  onClickFunc: PropTypes.func.isRequired,
};

export default PlusBtn;