import { Dimensions } from "react-native";
import { showMessage } from "react-native-flash-message";
import { mediaTypes, MEDIA_TYPE_INDEX, NUMBER_REGX } from "./variables"

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

//remove html tag
export const removeHtmTag = (str)=>{
    if ((str===null) || (str===''))
        return false;
    else
        str = str.toString();
    return str.replace( /(<([^>]+)>)/ig, '');
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


// return media type
export const isMediaType = (typeP)=>{
    if(mediaTypes.images.includes(typeP)){
        return MEDIA_TYPE_INDEX.IMAGE
    }else{
        return MEDIA_TYPE_INDEX.VIDEO
    }
}

// add zero
const addZeros = (time) => {
    return (time < 10) ? (`0${time}`) : time
}

export const convertSecondToHHMMSS = (sec)=>{
    let ncurrentTime = Number(sec);
    var h = Math.floor(ncurrentTime / 3600);
    var m = Math.floor(ncurrentTime % 3600 / 60);
    var s = Math.floor(ncurrentTime % 3600 % 60);

    var hDisplay = h > 0 ? h : "0";
    var mDisplay = m > 0 ? m : "0";
    var sDisplay = s > 0 ? s : "0";
    return `${addZeros(hDisplay)}:${addZeros(mDisplay)}:${addZeros(sDisplay)}`
}