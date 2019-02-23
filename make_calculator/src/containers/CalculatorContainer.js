import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';
import NumBtn from '../components/NumBtn';
import PlusBtn from '../components/PlusBtn';
import Result from '../components/ResultBtn';

class CalculatorContainer extends Component {
    render() {
        // reducerとactionにpropsを渡す。
        const { calculator , actions } = this.props;
        return (
            <div>
                <div>
                    <NumBtn n={1} onClickFunc={() => actions.onNumClick(1)} />
                    <NumBtn n={2} onClickFunc={() => actions.onNumClick(2)} />
                    <NumBtn n={3} onClickFunc={() => actions.onNumClick(3)} />
                </div>
                <div>
                    <NumBtn n={4} onClickFunc={() => actions.onNumClick(4)} />
                    <NumBtn n={5} onClickFunc={() => actions.onNumClick(5)} />
                    <NumBtn n={6} onClickFunc={() => actions.onNumClick(6)} />
                </div>
                <div>
                    <NumBtn n={7} onClickFunc={() => actions.onNumClick(7)} />
                    <NumBtn n={8} onClickFunc={() => actions.onNumClick(8)} />
                    <NumBtn n={9} onClickFunc={() => actions.onNumClick(9)} />
                </div>
                <div>
                    <NumBtn n={0} onClickFunc={() => actions.onNumClick(0)} />
                    <PlusBtn onClickFunc={() => actions.onPlusClick() } />
                </div>
                {/* stateをresultに渡して更新する */}
                <Result result={calculator.showingResult ? calculator.resultValue : calculator.inputValue} />
            </div>
        );
    }
}

const updateState = (state, ownProps) => ({
    calculator: state.calculator,
});

function mapDispatch(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
    };
}

export default connect(updateState, mapDispatch)(CalculatorContainer);