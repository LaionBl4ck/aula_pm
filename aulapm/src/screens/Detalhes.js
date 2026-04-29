import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function DetalhesScreen({ route }) {
    // Aqui pegamos o título que a Home enviou
    const { aulaSelecionada } = route.params;

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.texto}>Bem-vindo à aula de:</Text>
            <Text style={styles.titulo}>{aulaSelecionada.titulo}</Text>

            {aulaSelecionada.id === "3" && (
                <View style={styles.tutorialContainer}>
                    <Text style={styles.passoTitulo}>1. Instalação (A Base)</Text>
                    <Text style={styles.passoTexto}>Nenhum projeto nasce com navegação. Sempre precisa rodar o comando:</Text>
                    <Text style={styles.code}>npm install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context</Text>
                    <Text style={styles.passoTitulo}>2. O Mapa no App.js (Configuração)</Text>
                    <Text style={styles.passoTexto}>O App.js deixa de ter botões e textos e passa a ter apenas a lista de "quais telas existem no meu app".</Text>
                    <Text style={styles.passoTexto}>NavigationContainer: Envolve tudo.</Text>
                    <Text style={styles.passoTexto}>Stack.Navigator: Cria a pilha.</Text>
                    <Text style={styles.passoTexto}>Stack.Screen: Registra cada tela com um nome e o componente (arquivo).</Text>
                    <Text style={styles.passoTitulo}>3. O "GPS" na Tela de Origem (navigation)</Text>
                    <Text style={styles.passoTexto}>Toda tela registrada no mapa ganha a prop {"{navigation}"}. Para mudar de tela, usamos:</Text>
                    <Text style={styles.passoTexto}> navigation.navigate('NomeDaTela', {"{malaDeDados}"})</Text>
                    <Text style={styles.passoTexto}>Importante: O "NomeDaTela" tem que ser idêntico ao nome registrado no App.js. Se escreveu com letra maiúscula lá, tem que ser igual aqui.</Text>
                    <Text style={styles.passoTitulo}>4. A "Mala" na Tela de Destino (route)</Text>
                    <Text style={styles.passoTexto}>A tela que recebe o usuário ganha a prop {"{route}"}. Para ler o que veio na viagem, usamos:</Text>
                    <Text style={styles.code}>const {"{chave}"} = route.params;</Text>
                    <Text style={styles.passoTexto}>A regra de ouro: O nome da chave (a etiqueta da mala) deve ser o mesmo usado no passo anterior.</Text>
                </View>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    texto: { fontSize: 18, color: '#666' },
    titulo: { fontSize: 24, fontWeight: 'bold', color: '#000' },
    scrollContainer: {
        padding: 20,
        paddingBottom: 50, // Importante: dá um espaço extra no fim para não colar na borda
        backgroundColor: '#f5f5f5',
    },
    tutorialContainer: {
        marginTop: 20,
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderLeftWidth: 5,
        borderLeftColor: '#007bff', // Uma bordinha azul lateral para destacar
    },
    passoTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#007bff',
        marginTop: 15,
        marginBottom: 5,
    },
    passoTexto: {
        fontSize: 14,
        color: '#444',
        lineHeight: 20, // Dá espaço entre as linhas, facilita a leitura
        marginBottom: 10,
    },
    code: {
        fontFamily: 'monospace', // Se o celular tiver, dá cara de código
        backgroundColor: '#eee',
        padding: 2,
        borderRadius: 4,
        color: '#d63384', // Cor rosa estilo documentação
    }
});