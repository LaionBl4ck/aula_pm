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
            {aulaSelecionada.id === "4" && (
                <View style={styles.tutorialContainer}>
                    <Text style={styles.passoTitulo}>1. Escolha a API e o endpoint</Text>
                    <Text style={styles.passoTexto}>Antes de codar, defina qual URL vai fornecer os dados. Exemplo: uma API de usuários, produtos ou filmes.</Text>
                    <Text style={styles.code}>https://jsonplaceholder.typicode.com/users</Text>

                    <Text style={styles.passoTitulo}>2. Crie os estados da tela</Text>
                    <Text style={styles.passoTexto}>Use useState para guardar a lista, controlar carregamento e tratar erros.</Text>
                    <Text style={styles.code}>{"const [dados, setDados] = useState([]);"}</Text>
                    <Text style={styles.code}>{"const [loading, setLoading] = useState(true);"}</Text>
                    <Text style={styles.code}>{"const [erro, setErro] = useState(null);"}</Text>

                    <Text style={styles.passoTitulo}>3. Busque os dados no useEffect</Text>
                    <Text style={styles.passoTexto}>A chamada da API normalmente acontece quando a tela abre. Assim, você evita disparar a requisição várias vezes.</Text>
                    <Text style={styles.code}>{"useEffect(() => {"}</Text>
                    <Text style={styles.code}>{"  carregarDados();"}</Text>
                    <Text style={styles.code}>{"}, []);"}</Text>

                    <Text style={styles.passoTitulo}>4. Faça a requisição</Text>
                    <Text style={styles.passoTexto}>Você pode usar fetch ou axios. O importante é transformar a resposta em JSON e salvar no estado.</Text>
                    <Text style={styles.code}>{"const resposta = await fetch(url);"}</Text>
                    <Text style={styles.code}>{"const json = await resposta.json();"}</Text>
                    <Text style={styles.code}>{"setDados(json);"}</Text>

                    <Text style={styles.passoTitulo}>5. Trate loading e erro</Text>
                    <Text style={styles.passoTexto}>Enquanto os dados não chegam, mostre ActivityIndicator. Se algo falhar, exiba uma mensagem simples para o usuário.</Text>
                    <Text style={styles.code}>{"if (loading) return <ActivityIndicator />;"}</Text>
                    <Text style={styles.code}>{"if (erro) return <Text>{erro}</Text>;"}</Text>

                    <Text style={styles.passoTitulo}>6. Renderize os dados na tela</Text>
                    <Text style={styles.passoTexto}>Depois que a lista chegar, mostre os itens com FlatList ou map. Cada item pode virar um card, linha ou bloco visual.</Text>
                    <Text style={styles.code}>{"<FlatList data={dados} renderItem={...} />"}</Text>

                    <Text style={styles.passoTitulo}>7. Exemplo de fluxo completo</Text>
                    <Text style={styles.passoTexto}>A lógica final fica: carregar na montagem, salvar no estado, tratar falhas e exibir os dados ao usuário.</Text>
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