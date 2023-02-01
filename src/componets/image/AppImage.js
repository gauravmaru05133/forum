import React, { Component } from 'react';
import { Image } from "react-native";
import FastImage from 'react-native-fast-image';
import PropTypes from 'prop-types';

//const Image = createImageProgress(FastImage);

const AppImage = ({ source, style, resizeMode, resizeMethod, loadingStyle, blurRadius, tintColor }) => {

    const renderError = () => {
        console.log("image not load:")
    }

    return (
        <FastImage
            source={source}
            // indicatorProps={
            //     loadingStyle != undefined ? loadingStyle :
            //         {
            //             size: 50,
            //             borderWidth: 0,
            //             color: Colors.mainColor,
            //             unfilledColor: Colors.mainColor
            //         }}
            resizeMode={resizeMode != undefined ? resizeMode : 'cover'}
            resizeMethod={resizeMethod != undefined ? resizeMethod : 'resize'}
            style={style}
            imageStyle={style}
            renderError={renderError}
            tintColor={tintColor != undefined ? tintColor : ''}
        />
    )

    /*return (
        <Image
            source={source}
            indicatorProps={
                loadingStyle != undefined ? loadingStyle :
                    {
                        size: 50,
                        borderWidth: 0,
                        color: Colors.mainColor,
                        unfilledColor: Colors.mainColor
                    }}
            resizeMode={resizeMode != undefined ? resizeMode : 'cover'}
            resizeMethod={resizeMethod != undefined ? resizeMethod : 'resize'}
            style={style}
            imageStyle={style}
            renderError={renderError}
            tintColor={tintColor != undefined ? tintColor : ''}
        />
    );*/
}

AppImage.propTypes = {
    source: PropTypes.object,
};

export default AppImage;