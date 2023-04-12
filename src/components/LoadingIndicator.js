import React from 'react';
import { CircularProgress } from '@material-ui/core';

const LoadingIndicator = () => {
    return (
        <div className="loading_indicator">
            <CircularProgress />
        </div>
    );
};

export default LoadingIndicator;