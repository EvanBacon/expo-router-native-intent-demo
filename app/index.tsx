import { Text, View, Share, Image, StyleSheet } from "react-native";

import TouchableBounce from "react-native/Libraries/Components/Touchable/TouchableBounce";

import { Asset } from "expo-asset";

const DEMO_IMAGE = require("@/assets/images/router.jpg");

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Go to a Photo in files and press{" "}
        <Text style={{ fontSize: 16, fontWeight: "medium", opacity: 0.8 }}>
          {"\n"}
          Share {">"} Open In {">"} This App
        </Text>
      </Text>

      <View />

      <Text style={{ fontSize: 16, fontWeight: "medium", opacity: 0.8 }}>
        Or tap this photo to share it to this app
      </Text>
      <TouchableBounce
        onPress={async () => {
          Share.share({
            url: (await Asset.fromModule(DEMO_IMAGE).downloadAsync()).localUri!,
          });
        }}
      >
        <Image
          source={DEMO_IMAGE}
          style={{ borderRadius: 12, width: 200, height: 200 }}
        />
      </TouchableBounce>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
