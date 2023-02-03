import React, {useState} from "react";
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import {} from "./";
import Routes from "./src/navigation/route/routes";
import { configureStore, persistor } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import FlashMessage from "react-native-flash-message";
import SnackContext from "./src/utils/Context/SnackbarContext";

const App = () => {


  const [openCommonModal, setOpenCommonModal] = useState({ isVisible: false, message: "" })

  return (
    <SafeAreaProvider>
      <Provider store={configureStore}>
          <PersistGate persistor={persistor} loading={null}>
            <SafeAreaView
              style={{ flex: 1 }}
              //mode='margin'
              edges={["top", "bottom"]}
            >
              <Routes />
              <FlashMessage position="top" />
            </SafeAreaView>
          </PersistGate>
        </Provider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default App;
