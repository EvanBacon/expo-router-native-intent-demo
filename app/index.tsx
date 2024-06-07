import { Share, Image, StyleSheet, TouchableOpacity } from "react-native";

import TouchableBounce from "react-native/Libraries/Components/Touchable/TouchableBounce";

import { Text, View } from "@/components/Themed";

import { Asset } from "expo-asset";

const img = require("@/assets/images/router.jpg");

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Go to a Photo in files/gallery and press Share {">"} Open In {">"} This
        App
      </Text>

      <TouchableBounce
        onPress={async () => {
          Share.share({
            message: "hey",
            url: (await Asset.fromModule(img).downloadAsync()).localUri!,
          });
        }}
      >
        <Image
          source={img}
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
    gap: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
