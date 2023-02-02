import { View, Modal, StyleSheet } from "react-native";
import React from "react";
import CommonText from "../../componets/commonText";
import CommonView from "../../componets/commonView";
import AppButton from "../../componets/AppButton";
import Heading from "../heading";
import strings from "../../utils/strings";
import { fontSizes } from "../../utils/variables";

const CommonModal = ({ openCommonModal, setOpenCommonModal }) => {
  const okayBtnHandler = () => {
    try {
      openCommonModal?.onOkPress();
    } catch (error) {
      console.log("Error in common modal", error);
    }

    setOpenCommonModal({
      isVisible: false,
      message: "",
      heading: "",
      showBtnText: "",
    });
  };

  return (
    <Modal
      animationType="slide"
      visible={openCommonModal?.isVisible}
      statusBarTranslucent={true}
      transparent
    >
      <View style={styles.container}>
        <CommonView style={styles.innerContainer}>
          <View style={styles.wrapContainer}>
            <View style={styles.modalHeader}>
              <Heading
                heading={openCommonModal.heading || strings.commonModalHeading}
              />
              {openCommonModal?.subHeading && (
                <CommonText
                  text={openCommonModal?.subHeading}
                  style={styles.subHeading}
                />
              )}
            </View>
            {openCommonModal.children ? (
              openCommonModal?.children
            ) : (
              <>
                <View style={styles.centerText}>
                  <CommonText
                    showText={openCommonModal?.message}
                    fontSize={16}
                    regular
                    customstyles={{ textAlign: "center" }}
                  />
                </View>
              </>
            )}
            {openCommonModal.isButton && (
              <AppButton
                style={{ marginVertical: 20 }}
                labelStyle={styles.btnStyle}
                title={
                  openCommonModal.showBtnText
                    ? openCommonModal?.showBtnText
                    : "Okay"
                }
                actionClick={okayBtnHandler}
              />
            )}
          </View>
        </CommonView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(196,196,196,0.8)",
  },
  innerContainer: {
    width: "100%",
    alignSelf: "center",
    position: "absolute",
    bottom: 0,
  },
  wrapContainer: {
    width: "90%",
    alignSelf: "center",
    paddingVertical: 20,
  },
  centerText: {
    marginVertical: 50,
    alignSelf: "center",
  },
  subHeading: {
    fontSize: fontSizes.extraExtraSmall,
    marginVertical: 0,
  },
  modalHeader: {
    marginBottom: 15,
  },
  btnStyle: {
    fontSize: fontSizes.tiny,
  },
});

export default CommonModal;
