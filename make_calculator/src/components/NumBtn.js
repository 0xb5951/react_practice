// propsに渡された値のボタンを作成する
import React from 'react';
import PropTypes from 'prop-types';

const NumBtn = ({n, onClickFunc}) => (
    <button onClick={onClickFunc}>{n} </button>
);

NumBtn.propTypes = {
    onClickFunc: PropTypes.func.isRequired,
};

export default NumBtn;