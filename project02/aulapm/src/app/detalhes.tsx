import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
export default function Detalhes() {
  const router = useRouter();
  const imageReact = require("../../assets/images/android-icon-foreground.png");
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Tela de detalhes</Text>
      <Text style={styles.subtitle}>
        Aqui você aprendeu a navegar para outra tela usando uma pilha de navegação.
      </Text> */}
      <TouchableOpacity style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.linkButton} onPress={() => router.push("/")}>
        <Text style={styles.linkText}>Ir para a tela inicial</Text>
      </TouchableOpacity>
      <Image source={imageReact} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#f9fafb",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#4b5563",
  },
  button: {
    backgroundColor: "#16a34a",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 12,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  linkButton: {
    marginTop: 12,
    paddingVertical: 8,
  },
  linkText: {
    color: "#2563eb",
    fontWeight: "600",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});
