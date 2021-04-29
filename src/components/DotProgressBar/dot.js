import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const Dot = ({ isLight, selected }) => {
    let backgroundColor;
    if (isLight) {
        backgroundColor = selected ? '#347AF0' : 'rgba(0, 0, 0, 0.3)';
    } else {
        backgroundColor = selected ? '#347AF0' : 'rgba(255, 255, 255, 0.5)';
    }
    return (
        <View
            style={{
                ...styles.dot,
                backgroundColor,
            }}
        />
    );
};

Dot.propTypes = {
    isLight: PropTypes.bool.isRequired,
    selected: PropTypes.bool.isRequired,
};

const styles = {
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 3,
    },
};

export default Dot;