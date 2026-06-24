import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Navegação em pilha</Text>
      <Text style={styles.subtitle}>
        Este exemplo mostra uma navegação simples em stack, com uma tela inicial e uma tela de detalhes.
      </Text> */}
      <TouchableOpacity style={styles.button} onPress={() => router.push("/detalhes")}>
        <Text style={styles.buttonText}>Ir para a próxima tela</Text>
      </TouchableOpacity>
      {/* <Text style={styles.tip}>
        Passo 1: crie um Stack no layout. Passo 2: use router.push("/nomeDaTela") para abrir a tela.
      </Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#f5f7fb",
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
    backgroundColor: "#2563eb",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  tip: {
    marginTop: 16,
    textAlign: "center",
    color: "#6b7280",
    fontSize: 14,
  },
});
