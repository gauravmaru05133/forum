import {
    View,
    StyleSheet,
    Platform,
    TouchableOpacity,
    ScrollView, BackHandler, Pressable
} from "react-native";
import { dateOrTimeFormate, deviceHeight, deviceWidth, fontSizes, imageResize } from "../../utils/variables";
import SvgComponent from "../../componets/svgIcon/SvgComponent";
import CommonText from "../../componets/commonText";
import colors from "../../utils/colors";
import fonts from "../../assets/fonts";
import images from "../../assets/images";
import AppImage from "../../componets/image/AppImage";
import { Divider } from "react-native-paper";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { convertSecondToHHMMSS, removeHtmTag } from "../../utils/utils";
import ReadMore from "@fawazahmed/react-native-read-more";
import appStyles from "../../utils/commonStyle";
import { useEffect, useRef, useState } from "react";
import moment from "moment";
import { goBackScreen, navigationToScreen } from "../../utils/navigations";
import Media from "../../componets/Feed/Media";
import screenName from "../../utils/screenName";
import Video from "react-native-video";
import Orientation from "react-native-orientation";
import { Slider } from "@miblanchard/react-native-slider";
import { onProgress } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import Loader from "../../componets/Loader";

const VideoPlayer = ({ route }) => {
    const videoRef = useRef(null)
    const [url, setUrl] = useState('')
    const [videoDuration, setVideoDuration] = useState()
    const [currentTime, setCurrentTime] = useState()
    const [videoDurInt, setVideoDurInt] = useState(0)
    const [currentTimeInt, setCurrentTimeInt] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const [isOverlays, setOverlays] = useState(true)
    const [isLoading, setIsLoading] = useState(true)


    function handleBackButtonClick() {
        videoRef?.current?.seek(0)
        setIsPaused(true)
        goBackScreen()
        Orientation.lockToPortrait()
        return true
    }

    useEffect(() => {
        if (isOverlays) {
            setTimeout(() => {
                setOverlays(false)
            }, 2000)
        } else {

        }
    }, [isOverlays])


    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
        Orientation.lockToLandscapeLeft()
        setUrl(route?.params?.item?.mediaUrl)
        return () => {
            BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick);
        };
    }, [])

    const onProgressCell = (time) => {
        const { currentTime } = time
        const progress = currentTime / videoDuration
        setCurrentTime(convertSecondToHHMMSS(currentTime))
        setCurrentTimeInt(currentTime)
    }

    //on slider change
    const onSliderChange = (time) => {
        const seconds = time * videoDurInt
        setCurrentTimeInt(time)
        videoRef.current?.seek(seconds)
    }

    //Controller status
    const onControllerShow = () => {
        setOverlays(true)
    }
    return (
        <View style={{ flex: 1, backgroundColor: colors.black }}>
            {isLoading ? <Loader 
            color={colors.white}
            container={{width:'100%',height:'100%',alignSelf: 'center',justifyContent: 'center'}}
            /> :
                null
            }
            <Pressable style={{ flex: 1, }}
                onPress={() => onControllerShow()}>
                <Video
                    ref={videoRef}
                    source={{ uri: url }}
                    style={{
                        width: '100%', height: '100%', alignSelf: 'center',
                        justifyContent: 'center', alignContent: 'center', alignContent: 'center'
                    }}
                    paused={isPaused}
                    resizeMode='cover'
                    //repeat={true}
                    onLoadStart={() => setIsLoading(true)}
                    onLoad={(data) => {
                        console.log("on_load")
                        setIsLoading(false)
                        const secs = data.duration % 60
                        console.log("duration >>>>>>", convertSecondToHHMMSS(secs))
                        setVideoDuration(convertSecondToHHMMSS(secs))
                        setVideoDurInt(data.duration)
                    }}
                    onProgress={(e) => {
                        console.log("on_load_progress")
                        onProgressCell(e)
                    }}
                />
                <View style={{
                    flex: 1, position: 'absolute',
                    width: '100%', height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    display: isOverlays ? 'flex' : 'none'
                }}>
                    <View style={{ width: '100%', height: 50, flexDirection: 'row' }}>
                        <TouchableOpacity onPress={handleBackButtonClick}>
                            <SvgComponent
                                id={'close'}
                                iconColor={colors.white}
                                width={60}
                                height={60}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>

                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity
                            onPress={() => setIsPaused(!isPaused)}
                        >
                            <SvgComponent
                                id={!isPaused ? 'pause_outline' : 'play_round_outline'}
                                width={150}
                                height={150}
                            />
                        </TouchableOpacity>

                    </View>
                    <View style={{
                        flex: 0.2,
                        paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center'
                    }}>
                        <CommonText
                            text={currentTime}
                            style={styles.video_duration_time}
                            numberOfLines={1}
                        />
                        <View style={{ flex: 1 }}>
                            <Slider
                                value={currentTimeInt}
                                maximumValue={videoDurInt}
                                minimumTrackTintColor={colors.buttonPrimary}
                                containerStyle={{ marginHorizontal: 10 }}
                                trackStyle={{ height: 5 }}
                                thumbStyle={{ backgroundColor: colors.txt_color }}
                                onValueChange={(val) => onSliderChange(val)}
                            />
                        </View>
                        <CommonText
                            text={videoDuration}
                            style={styles.video_duration_time}
                            numberOfLines={1}
                        />
                    </View>
                </View>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    video_duration_time: {
        color: colors.white,
        fontSize: fontSizes.extraExtraSmall,
        fontFamily: fonts.MontserratSemiBold,
    }
})
export default VideoPlayer