import { Dimensions } from "react-native";
import { showMessage } from "react-native-flash-message";
import { NUMBER_REGX } from "./variables"

const sizeDenominator = 850;

// get window size
export function windowSize() {
    return Dimensions.get('window');
}


//responsive size get for screenwise
export function responsiveSize(fontSize) {
    const { width, height } = windowSize();
    return (Math.sqrt((height * height) + (width * width)) * (fontSize / sizeDenominator));
}


// only number allowed
export const onlyNumberAllowed = (val) => {
    let valM = ''

    if (NUMBER_REGX.test(val)) {
        valM = val
    } else {
        valM = ''
    }
    return valM
} 

//phone number formate
export const phoneNumberFormate = (str) => {
    let cleaned = ('' + str).replace(/\D/g, '');
    //let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    let match = cleaned.match(/^(\d{5})(\d{5})$/);
    if (match) {
      return match[1] + ' ' + match[2]
    };
    return null
}


//show flash message
export const showFlashMessage = (type, msg) => {
    showMessage({
        message: msg,
        type: type ? type : 'default'
    })
}
