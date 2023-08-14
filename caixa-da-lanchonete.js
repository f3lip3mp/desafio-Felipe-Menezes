class CaixaDaLanchonete {
    constructor() {
        this.produtos = {
            cafe: {nome: "Café", preco: 3.00 },
            chantily: {nome: "Chantily (extra do Café)", preco: 1.50 },
            suco: {nome: "Suco Natural", preco: 6.20 },
            sanduiche: {nome: "Sanduíche", preco: 6.50 },
            queijo: {nome: "Queijo (extra do Sanduíche)", preco: 2.00 },
            salgado: {nome: "Salgado", preco: 7.25 },
            combo1: {nome: "1 Suco e 1 Sanduíche", preco: 9.50 },
            combo2: {nome: "1 Café e 1 Sanduíche", preco: 7.50 }
            // Adicione outros produtos aqui
        };
    }

}

export { CaixaDaLanchonete };
