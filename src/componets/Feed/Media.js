import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
} from "react-native";
import { deviceHeight, imageResize, MEDIA_TYPE_INDEX, mediaTypes } from "../../utils/variables";
import AppImage from "../../componets/image/AppImage";
import { isMediaType } from "../../utils/utils";
import PagerView from 'react-native-pager-view';
import { useState } from "react";
import Video from "react-native-video";
import SvgComponent from "../svgIcon/SvgComponent";
import colors from "../../utils/colors";

const Media = ({
    item, index, feedMediaClick, container
}) => {
    const [mediaPage, setMediaPage] = useState(0)

    return (
        <PagerView style={[styles.brand_cell_img, container]}
            onPageSelected={(e) => setMediaPage(e.nativeEvent.position)}
        >
            {/* mItem?.mediaType == mediaTypes.images.includes(mItem?.mediaType) */}
            {item.map((mItem, mIndex) => {
                let isFindMediaType = isMediaType(mItem?.thumbnailType ? mItem?.thumbnailType : mItem?.mediaType)
                return <TouchableOpacity style={{ width: '100%', height: '100%' }}
                    onPress={() => feedMediaClick(mItem)}
                >
                    {isFindMediaType == MEDIA_TYPE_INDEX.IMAGE ?
                        <AppImage
                            style={{ width: undefined, height: undefined, flex: 1 }}
                            source={{ uri: mItem?.thumbnailUrl ? mItem?.thumbnailUrl : mItem?.mediaUrl }}
                            resizeMode={imageResize.cover}
                        /> :
                        <Video
                            style={{ width: undefined, height: undefined, flex: 1 }}
                            paused={true}
                            source={{ uri: mItem.mediaUrl }}
                        />
                    }
                    {mItem?.mediaType == mediaTypes.video && (
                        <View style={{
                            width: '100%', height: '100%', position: 'absolute', 
                            justifyContent: 'center', alignContent: 'center',alignSelf:'center'
                        }}>
                            <View style={{width:60,height:60,backgroundColor:'rgba(255,255,255,0.8)',justifyContent:'center',alignContent:'center',alignItems:'center',borderRadius:40,alignSelf:'center'}}>
                            <SvgComponent
                                id='play_outline'
                                iconColor={colors.black}
                            />
                            </View>
                            
                        </View>
                    )}

                </TouchableOpacity>
            })}
        </PagerView>
    )
}

const styles = StyleSheet.create({
    brand_cell_img: {
        width: '100%', height: deviceHeight * 0.35,
    },
})
export default Media;