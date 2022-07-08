    /* No java script é muito difícil organizar ideias, é uma folha em branco
    que você tem que ter muito claro o que você vai fazer. */
//toggle faz a mesma função do modal só que em uma linha, ele liga ou desliga se existe a classe ele tira, e o se não ele adiciona.
 const Modal = {
    open(){
        // abrir modal
      // adicionar a class active ao modal
        document.querySelector('.modal-overlay').classList.add('active')
    },
    close(){
        // fechar o modal
        // remover a class active do modal
        document.querySelector('.modal-overlay').classList.remove('active')  
    }
}
    
    //Faça anotações comentários no código das coisas que você precisa fazer


    const Transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021',
    },
    {
        id: 2,
        description: 'Website',
        amount: 500000,
        date: '23/01/2021',
    },
    {
        id: 3,
        description: 'internet',
        amount: -20000,
        date: '23/01/2021',
    }]


const Transaction = {
    incomes(){
        // somar as entradas
    },
    expenses(){
        // somar as saídas
    },
    total(){
    // soma as entradas menos as saídas
    }
}    

//se vc souber pesquisar no google exatamente oq vc quer fazer, vai encontrar
// soluções prontas para vc usar. Mais é muito importante anotar oq vc vai fazer.
// se não está muito claro oq vc vai fazer, e vc pesquisa conforme voce vai pesquisando 
// o seu vocabulário vai aumentando e você vai conseguir lidar encontrar exatamente oq vc quer fazer.
// voce vai se um melhor programador conforme você vai sendo um melhor pesquisador
//faça uma funcionalidade que faça só uma coisa 


const DOM = {
    addTransaction(transaction, index){
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction()
    },
    innerHTMLTransaction() {

        const html = `
        <tr>
            <td class="description">${transaction.description}</td>
            <td class="expense">${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
            <img src="./assets/minus.svg" alt="remover transação">
            </td>
        </tr>
        `
        return html
    }
}

DOM.addTransaction(transactions[0])