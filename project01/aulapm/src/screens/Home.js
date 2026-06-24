import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { AULAS } from '../mocks/aulas'; // Importando o mock

export default function HomeScreen({ navigation }) {
  // HOOK 1: useState - Guarda a lista que será exibida
  const [dados, setDados] = useState([]);
  // HOOK 2: useState - Controla se está carregando (efeito visual)
  const [loading, setLoading] = useState(true);

  // HOOK 3: useEffect - Roda quando a tela abre
  useEffect(() => {
    // Simulando um atraso de rede de 2 segundos
    setTimeout(() => {
      setDados(AULAS);
      setLoading(false);
    }, 2000);
  }, []);

  const alternarConclusao = (id) => {
    // Mapeia o array atual e inverte o status apenas do item clicado
    const novaLista = dados.map(item => {
      if (item.id === id) {
        return { ...item, concluida: !item.concluida };
      }
      return item;
    });
    setDados(novaLista);
  };
const selecionarAula = (item) => {
    alternarConclusao(item.id);
    navigation.navigate('Detalhes', { aulaSelecionada: item });
  };

  if (loading) {
    return (
      <View style={styles.container}><ActivityIndicator size="large" color="#0000ff" /></View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minhas Aulas</Text>
      <FlatList
        data={dados}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => selecionarAula(item)}>
            <View style={styles.item}>
              <Text>{item.titulo}</Text>
              <Text>{item.concluida ? "✅" : "⏳"}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, marginTop: 40 },
  item: {
    flexDirection: 'row', justifyContent: 'space-between',
    backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 10
  }
});