// Considere um sistema de gerenciamento de biblioteca. Aqui estão alguns requisitos:
// Cada livro tem um título, autor, número de páginas e um identificador único.
// Cada usuário tem um nome, endereço, data de nascimento e um conjunto de livros que eles pegaram emprestado.
// A biblioteca tem um conjunto de livros disponíveis e um conjunto de usuários registrados.
// Um usuário pode pegar um livro emprestado se o livro estiver disponível na biblioteca.
// Um usuário pode devolver um livro que eles pegaram emprestado.
// Tente implementar isso em TypeScript. Comece definindo os tipos ou classes para Livro, Usuario e Biblioteca. 
// Em seguida, adicione métodos para pegar um livro emprestado e devolver um livro.


class Livro{
    static ultimoID = 0
    titulo: string
    autor: string
    Npaginas: number
    id: number

    static proximoID(){
        Livro.ultimoID += 1
        return  Livro.ultimoID
    }

    constructor(
        titulo: string,
        autor: string,
        Npaginas: number,
        id: number
    ){
        this.titulo = titulo
        this.autor = autor
        this.Npaginas = Npaginas
        this.id = Livro.proximoID()
    }
}

interface End{
    cidade:string
    bairro:string
    numero:number
} 

class User{
    nome:string
    endereco: End
    dataNasc:Date
    livro: Livro[]

    constructor(
        nome:string,
        endereco: End,
        dataNasc:Date,
        livro: Livro[]
    ){
        this.nome = nome
        this.endereco = endereco
        this.dataNasc = dataNasc
        this.livro = livro
    }
}

class Biblioteca{
    usuario: User[]
    livro: Livro[]
    registroLivros: Livro[]

    constructor(
        usuario: User[],
        livro: Livro[]
    ){
        this.usuario = usuario
        this.livro = livro
        this.registroLivros = [...livro]
    }

    adicionarUser(newUser: User):void{
        this.usuario.push(newUser)  
    }
    adicionarLivro(newLivro: Livro):void{
        this.livro.push(newLivro)
    }
    emprestarLivro(livro: Livro, usuario:User):void{
        let index = this.livro.findIndex(l => l.titulo === livro.titulo)
        if(index !== -1){
            usuario.livro.push(livro)
            this.livro.splice(index ,1)
        }else{
            alert("O livro nao esta presente na biblioteca!")
        }
    }
    verificarLivro(livro: Livro): boolean {
        return this.registroLivros.some(l => l.id === livro.id)
    }

    receberLivro(livro: Livro, usuario:User):void{
        let indexUser = usuario.livro.findIndex(l => l.titulo === livro.titulo)
        if(indexUser !== -1 && this.verificarLivro(livro)){
            this.livro.push(livro)
            usuario.livro.splice(indexUser ,1)
        }else{
            alert("Este livro não faz parte do registro da biblioteca.")
        }
    }

}