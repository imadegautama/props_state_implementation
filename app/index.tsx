import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import TextSubmit from "../components/TextSubmit";
import ToggleHello from "../components/ToggleHello";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* 1) Toggle via component */}
      <View style={styles.card}>
        <Text style={styles.subtitle}>ToggleHello Component</Text>
        <ToggleHello
          initialVisible={false}
          showLabel="Tampilkan"
          hideLabel="Sembunyikan"
          message="Hello World"
        />
      </View>

      {/* 2) Text submit via component */}
      <View style={styles.card}>
        <Text style={styles.subtitle}>TextSubmit Component</Text>
        <TextSubmit placeholder="Masukkan teks" submitLabel="Submit" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    gap: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    gap: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  hello: {
    fontSize: 18,
    fontWeight: "600",
  },
  output: {
    fontSize: 16,
  },
});
