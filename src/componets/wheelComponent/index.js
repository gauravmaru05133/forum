import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import SpinWheelComponent from "../spinWheelComponent";

const participants = [
  "%10",
  "%20",
  "%30",
  "%40",
  "%50",
  "%60",
  "%70",
  "%90",
  "%100",
  "FREE",
];
class WheelComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      winnerValue: null,
      winnerIndex: null,
      started: false,
    };
    this.child = null;
  }

  buttonPress = () => {
    this.setState({
      started: true,
    });
    this.child._onPress();
  };

  render() {
    const wheelOptions = {
      rewards: participants,
      knobSize: 20,
      borderWidth:11,
      borderColor: "#000",
      innerRadius: 36,
      duration: 6000,
      backgroundColor: "transparent",
      textAngle: "horizontal",
      knobSource: require("../../assets/images/knob.png"),
      onRef: (ref) => (this.child = ref),
    };
    return (
      <View style={styles.container}>
        {/* <StatusBar barStyle={"light-content"} /> */}
        <SpinWheelComponent
          options={wheelOptions}
          getWinner={(value, index) => {
            this.setState({ winnerValue: value, winnerIndex: index });
          }}
        />
        {/* {!this.state.started && (
          <View style={styles.startButtonView}>
            <TouchableOpacity
              onPress={() => this.buttonPress()}
              style={styles.startButton}>
              <Text style={styles.startButtonText}>Spin to win!</Text>
            </TouchableOpacity>
          </View>
        )} */}
        {this.state.winnerIndex != null && (
          <View style={styles.winnerView}>
            <Text style={styles.winnerText}>
              You win {participants[this.state.winnerIndex]}
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.setState({ winnerIndex: null });
                this.child._tryAgain();
              }}
              style={styles.tryAgainButton}
            >
              <Text style={styles.tryAgainText}>TRY AGAIN</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}
export default WheelComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: '#E74C3C'   
  },
  startButtonView: {
    position: "absolute",
  },
  startButton: {
    backgroundColor: "rgba(0,0,0,.5)",
    marginTop: 50,
    padding: 5,
  },
  startButtonText: {
    fontSize: 50,
    color: "#fff",
    fontWeight: "bold",
  },
  winnerView: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  tryAgainButton: {
    padding: 10,
  },
  winnerText: {
    fontSize: 30,
  },
  tryAgainButton: {
    padding: 5,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  tryAgainText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});
