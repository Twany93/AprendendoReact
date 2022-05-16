// a ideia é que todo requisição seja interceptada pelo axios
import axios from 'axios';

// preciso inicializar o axios através da criação de um objeto
export const api= axios.create({
    baseURL:'https://bloggeneration.herokuapp.com'
    // substituir com o link do deploy
})

// regra de negócio já está funcionando para cadastro
export const cadastroUsuario = async(url:any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data)
}

// requisição login
export const login = async(url:any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data.token)
}
// url : concatenação de baseURL + / URL de login(/usuarios/logar)
// função setDado: vai receber a resposta da nossa api, ou seja, um objeto json contendo os dados do usuário e o token, utilizado para autentificar o usuário
//  dentro da setDado(resposta.data) já contem os dados, o nome do usário, a senha e o token

// requisição para buscar minhas postagens ou temas
// get : porque eu quero verificar um dado já existente/armazenado
export const busca = async(url:any, setDado: any, header:any) => {
    const resposta = await api.get(url, header)
    setDado(resposta.data)
}