import { useLocalSearchParams } from "expo-router";
import { Image, Text, View, StyleSheet } from "react-native";

// import "lodash";

export default function ModalScreen() {
  const { file } = useLocalSearchParams();
  console.log("file", file);
  // /Users/evanbacon/Library/Developer/CoreSimulator/Devices/9B01E470-2A96-4C4B-8E7C-8A2141EB54AB/data/Containers/Data/Application/8C840AB3-70AD-40D8-82DA-2CA61D1C01F4/tmp/com.bacon.jun8-Inbox/RPReplay_Final1714081844-C9957061-4E8D-4181-BAD3-6786618BF5D3.MP4
  return (
    <View style={styles.container}>
      {file != null && typeof file === "string" && (
        <Image
          source={{ uri: file }}
          style={{
            backgroundColor: "blue",
            borderRadius: 12,
            width: 200,
            height: 200,
          }}
        />
      )}

      <Text>File: "{file}"</Text>
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
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
