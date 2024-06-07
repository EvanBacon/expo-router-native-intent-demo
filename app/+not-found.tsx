import { Link, Stack, useLocalSearchParams, usePathname } from "expo-router";
import { StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";

export default function NotFoundScreen() {
  // file://Users/evanbacon/Library/Developer/CoreSimulator/Devices/9B01E470-2A96-4C4B-8E7C-8A2141EB54AB/data/Containers/Data/Application/8C840AB3-70AD-40D8-82DA-2CA61D1C01F4/tmp/com.bacon.jun8-Inbox/RPReplay_Final1714081844-C9957061-4E8D-4181-BAD3-6786618BF5D3.MP4
  const pathname = usePathname();
  console.log("file", pathname);
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View style={styles.container}>
        <Text style={styles.title}>This screen doesn't exist.</Text>

        <Link href="/" style={styles.link}>
          <Text style={styles.linkText}>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
