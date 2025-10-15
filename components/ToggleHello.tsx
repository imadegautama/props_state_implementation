import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export type ToggleHelloProps = {
  initialVisible?: boolean;
  showLabel?: string;
  hideLabel?: string;
  message?: string;
  onToggle?: (visible: boolean) => void;
};

export default function ToggleHello({
  initialVisible = false,
  showLabel = "Tampilkan",
  hideLabel = "Sembunyikan",
  message = "Hello World",
  onToggle,
}: ToggleHelloProps) {
  const [visible, setVisible] = useState<boolean>(initialVisible);

  const toggle = () => {
    setVisible((prev) => {
      const next = !prev;
      onToggle?.(next);
      return next;
    });
  };

  return (
    <View style={styles.container}>
      <Button title={visible ? hideLabel : showLabel} onPress={toggle} />
      {visible ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    alignItems: "center",
  },
  message: {
    fontSize: 18,
    fontWeight: "600",
  },
});
