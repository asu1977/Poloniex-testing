import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PairDitail extends Component {

    render() {
        const { pair, data} = this.props;
        if (!pair) {
            return (
                <p>Выберите пару</p>
            )
        }
    
        return (
            <div>
                <div>
                    <p>{pair}</p>              
                </div>
                <div>
                    {data.high24hr} Высшая цена за сутки
                </div>
                <div>
                    {data.low24hr} Низшая цена за сутки
                </div>
            </div>
        )
    }
}


PairDitail.propTypes = {
    pair: PropTypes.string,
    data: PropTypes.object,
};

export default PairDitail;