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
    calcularValorDaCompra(formaDePagamento, itens) {
        // Verifica se há itens no carrinho
        if (!itens || itens.length === 0) {
            return "Não há itens no carrinho de compra!";
        }

        let valorTotal = 0;
        
        // Cria uma lista com os códigos dos itens principais
        const itensPrincipais = itens.map(item => item.split(",")[0]);

        // Loop para processar cada item no carrinho
        for (const item of itens) {
            const [codigo, quantidade] = item.split(",");
            const produto = this.produtos[codigo];

            // Verifica se o produto é válido
             if (!produto) {
                return "Item inválido!";
            }

            // Verifica se um item extra está sendo pedido sem o principal
            if ((codigo === "chantily" && !itensPrincipais.includes("cafe")) ||
                (codigo === "queijo" && !itensPrincipais.includes("sanduiche"))) {
                return "Item extra não pode ser pedido sem o principal";
            }
            
            // Calcula o valor total do pedido
            valorTotal += produto.preco * parseInt(quantidade);
        }

        // Formata e retorna o valor total
        const valorFormatado = `R$ ${valorTotal.toFixed(2).replace(".", ",")}`;
        return valorFormatado;
    }
}
export { CaixaDaLanchonete };
