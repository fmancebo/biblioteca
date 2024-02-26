// Considere um sistema de gerenciamento de biblioteca. Aqui estão alguns requisitos:

// Cada livro tem um título, autor, número de páginas e um identificador único.
// Cada usuário tem um nome, endereço, data de nascimento e um conjunto de livros que eles pegaram emprestado.
// A biblioteca tem um conjunto de livros disponíveis e um conjunto de usuários registrados.
// Um usuário pode pegar um livro emprestado se o livro estiver disponível na biblioteca.
// Um usuário pode devolver um livro que eles pegaram emprestado.
// Tente implementar isso em TypeScript. Comece definindo os tipos ou classes para Livro, Usuario e Biblioteca. 
// Em seguida, adicione métodos para pegar um livro emprestado e devolver um livro.



class Livro{
    static ultimoId = 0
    titulo:string
    autor: string
    paginas: number
    id: number

    constructor(
        titulo: string,
        autor: string,
        paginas:number
    ){
        this.titulo = titulo
        this.autor = autor
        this.paginas = paginas
        this.id = Livro.getProximoId()
    }

    static getProximoId() {
        Livro.ultimoId += 1
        return Livro.ultimoId
    }

}

interface End{
    cidade:string
    bairro:string
    numero:number
}
enum Genero{
    masc,
    fem
}

class Usuario{
    nome:string
    endereco:End
    dataNasc: string
    livros: Livro[]
    gender: Genero

    constructor(
        nome:string,
        endereco:End,
        dataNasc: string,
        livros: Livro[],
        gender: Genero
    ){
        this.nome = nome
        this.endereco = endereco
        this.dataNasc = dataNasc
        this.livros = []
        this.gender = gender
    }

}

class Biblioteca{
    livros:Livro[]
    usuario: Usuario[]

    constructor(livros: Livro[], usuario: Usuario[]) {
        this.livros = livros;
        this.usuario = usuario;
    }
    
    adicionarLivro(livros: Livro[]):void {
        for (let livro of livros) {
            this.livros.push(livro);
        }
    }
    

    adicionarUsuario(usuario: Usuario[]):void{
        for(let usuario of usuarios){
        this.usuario.push(usuario)
        }
    }
    

    pegarLivro(livro: Livro, usuario: Usuario):void {
        // Encontre o índice do livro na lista de livros da biblioteca
        const index = this.livros.findIndex(l => l.id === livro.id);   //Este é um método de array que aceita uma função de callback e retorna o índice do primeiro elemento no array que satisfaz a condição fornecida pela função de callback. Se nenhum elemento satisfizer a condição, ele retorna -1.
    
        // Verifique se o livro está disponível na biblioteca
        if (index !== -1) {   //(index === 1) significa que esta presente e o usuario pode pegalo
            // Adicione o livro à lista de livros do usuário
            usuario.livros.push(livro);
    
            // Remova o livro da lista de livros da biblioteca
            this.livros.splice(index, 1);
        } else {
            console.log('Livro não disponível');
        }
    }
    devolveLivro(livro: Livro, usuario: Usuario): void{
        const index = this.livros.findIndex(l => l.id === livro.id);  //variavel criada denovo pois aquela esta naquele escopo
        if (index !== -1) {
            usuario.livros.splice(index,1)
            this.livros.push(livro)
            console.log('Livro devolvido!')
        }else{
            console.log("Livro não encontrado na lista de livros do usuário")
        }

    }
}

let biblioteca = new Biblioteca([], []);

let livro1 = new Livro('terror no mar', 'napoleao', 200)
let livro2 = new Livro('terror na floresta', 'napoleao', 220)
let livro3 = new Livro('terror na cidade', 'napoleao', 210)



let endereco1: End = {
    cidade: 'Nova Friburgo',
    bairro: 'Braunes',
    numero:192
}



let felipe = new Usuario('Felipe', endereco1, '09/02/1992', [], Genero.masc)
let nat = new Usuario('Nat', endereco1, '24/12/1990', [], Genero.masc)
let beni = new Usuario('Beni', endereco1, '30/09/2019', [], Genero.masc)


let livros = [livro1, livro2, livro3];
let usuarios = [felipe, nat, beni]




biblioteca.adicionarLivro(livros);
biblioteca.adicionarUsuario(usuarios);

