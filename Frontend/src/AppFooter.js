import React from 'react';

export const AppFooter = (props) => {

    return (
        <div className="layout-footer">
            <img src={props.layoutColorMode === 'light' ? 'assets/layout/images/logo.png' : 'assets/layout/images/logo.png'} alt="logo" height="20" className="mr-2" />
            by
            <span className="font-medium ml-2">Microtech Data Indonesia</span>
        </div>
    );
}
