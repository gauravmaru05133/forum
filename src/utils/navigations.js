import Constant from "../constant";

//navigate to screen
export const navigationToScreen = (screenName,props)=>{
    if(props!=undefined){
        Constant.navigation.navigate(screenName,props)
    }else{
        console.log("navigation >>",Constant.navigation)
        Constant.navigation.navigate(screenName)
    }
}

//push to screen
export const pushToScreen = (screenName,props)=>{
    if(props!=undefined){
        Constant.navigation.push(screenName,props)
    }else{
        Constant.navigation.push(screenName)
    }
}

export const goBackScreen = ()=>{
    Constant.navigation.goBack()
}

export const toggleBar = ()=>{
    Constant.navigation.toggleDrawer()
}