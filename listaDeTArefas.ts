// Cada tarefa tem um título, uma descrição, uma data de vencimento e um status
// (por exemplo, “a fazer”, “em andamento”, “concluído”).
// O usuário pode criar uma nova tarefa.
// O usuário pode ver uma lista de todas as suas tarefas.
// O usuário pode alterar o status de uma tarefa.
// O usuário pode excluir uma tarefa.
// Tente implementar isso em TypeScript. Comece definindo a classe para Tarefa e Usuario.
// Em seguida, adicione métodos para criar uma tarefa, visualizar tarefas, alterar o status de uma tarefa e excluir uma tarefa.

enum Status{
    fazer,
    fazendo, 
    feito
}


class Tarefa {
    titulo: string;
    discricao: string;
    dataVenc: Date;
    status: Status;

    constructor(
        titulo: string,
        discricao: string,
        dataVenc: Date,
        status: Status
    ) {
        this.titulo = titulo;
        this.discricao = discricao;
        this.dataVenc = dataVenc;
        this.status = status;
    }
}

class User {
    static ultimoID = 0
    nome: string
    id: number
    tarefa: Tarefa[];

    constructor(nome: string, tarefa: Tarefa[]) {
        this.nome = nome
        this.id = User.proximoId()
        this.tarefa = tarefa;
    }

    static proximoId():number{
        User.ultimoID += 1
        return User.ultimoID
    }

    criarTarefa(
        titulo: string,
        discricao: string,
        dataVenc: Date,
        status: Status
    ) {
        let novaTarefa = new Tarefa(titulo, discricao, dataVenc, status);
        this.tarefa.push(novaTarefa);
    }

    listaDeTarefas():void {
       for(let tarefa of this.tarefa){
        console.log(`Tarefa: ${tarefa.titulo}, Discrição: ${tarefa.discricao}, 
        Data de vencimento: ${tarefa.dataVenc}, Status: ${tarefa.status}`)
       }
     }

     alterarStatus(titulo: string, newStatus: Status): void{
        let tarefa = this.tarefa.find(t => t.titulo === titulo)
            if(tarefa){
                tarefa.status = newStatus
            }else{
                console.log('Tarefa não encontrada')
            }
     }
     excluirTarefa(titulo: string):void{
        let index = this.tarefa.findIndex(t => t.titulo === titulo)
        if(index !== -1){
            this.tarefa.splice(index, 1)
        }else{
            console.log('Tarefa não encontrada')
        }
     }
}


let felip = new User('Felipe', [])

felip.criarTarefa('malhar', 'academia', new Date('21-02-2024'), Status.feito)
felip.criarTarefa('estudar', 'curso', new Date('21-02-2024'), Status.fazer)
felip.criarTarefa('estudar', 'faculdade', new Date('22-02-2024'), Status.fazer)