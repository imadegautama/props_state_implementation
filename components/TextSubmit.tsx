import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export type TextSubmitProps = {
  placeholder?: string;
  submitLabel?: string;
  onSubmit?: (text: string) => void;
};

export default function TextSubmit({
  placeholder = "Masukkan teks",
  submitLabel = "Submit",
  onSubmit,
}: TextSubmitProps) {
  const [text, setText] = useState<string>("");
  const [submitted, setSubmitted] = useState<string>("");

  const handleSubmit = () => {
    setSubmitted(text);
    onSubmit?.(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={text}
          onChangeText={setText}
        />
        <Button title={submitLabel} onPress={handleSubmit} />
      </View>
      {submitted ? (
        <Text style={styles.output}>Output: {submitted}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    width: "100%",
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
  output: {
    fontSize: 16,
  },
});
