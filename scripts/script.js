// simulador emprestimo - sem objeto
// let valorEmprestimo = 397; // valor do empréstimo
// let numeroParcelas = 12; // número de parcelas

// for (let i = 0; i < numeroParcelas; i++) {
//     let valorParcela = valorEmprestimo / (numeroParcelas - i); // calcula o valor da parcela atual
//     valorEmprestimo -= valorParcela; // diminui o valor do empréstimo pelo valor da parcela atual
//     console.log(`Parcela ${i + 1}: ${valorParcela.toFixed(2)}`); // exibe o valor da parcela atual
// };

// simulador emprestimo - com objeto
// let emprestimo = {
//     valorEmprestimo: 297, // valor do empréstimo
//     numeroParcelas: 10 // número de parcelas
// };

// for (let i = 0; i < emprestimo.numeroParcelas; i++) {
//     let valorParcela = emprestimo.valorEmprestimo / (emprestimo.numeroParcelas - i); // calcula o valor da parcela atual
//     emprestimo.valorEmprestimo -= valorParcela; // diminui o valor do empréstimo pelo valor da parcela atual
//     console.log(`Parcela ${i + 1}: ${valorParcela.toFixed(2)}`); // exibe o valor da parcela atual
// }

// //simulador - parcelas iguais - juros no valor total
// let emprestimo = {
//     valorEmprestimo: 2500, // valor do empréstimo
//     numeroParcelas: 24, // número de parcelas
//     taxaJuros: 0.02, // taxa de juros
//     limiteParcelasSemJuros: 6 // limite de parcelas sem juros
// };

// // se o número de parcelas for maior que o limite, aplica a taxa de juros ao valor total do empréstimo
// if (emprestimo.numeroParcelas > emprestimo.limiteParcelasSemJuros) {
//     emprestimo.valorEmprestimo += emprestimo.valorEmprestimo * emprestimo.taxaJuros;
// }

// let valorParcela = emprestimo.valorEmprestimo / emprestimo.numeroParcelas; // calcula o valor da parcela

// console.log(`\n valor total: ${emprestimo.valorEmprestimo.toFixed(2)}\n`);

// for (let i = 0; i < emprestimo.numeroParcelas; i++) {
//     console.log(`Parcela ${i + 1}: ${valorParcela.toFixed(2)}\n`); // exibe o valor da parcela
// }

// simulador com metodos

// criando usuario
class Usuario {
    constructor(nome, idade, email) {
      this.nome = nome;
      this.idade = idade;
      this.email = email;
    }
  }
  
  const infoUsuario = new Usuario( // pega as infos do usuario no prompt
    prompt("Insira seu nome completo: "),
    parseInt(prompt("Insira sua idade: ")),
    prompt("Insira seu e-mail ")
  );
  
  const usuarios = [infoUsuario];
  console.log(usuarios);
  
  const taxaJuros = // muda a taxa dependendo da idade do usuario
    infoUsuario.idade >= 17 && infoUsuario.idade <= 30 ? 0.02 :
    infoUsuario.idade > 30 && infoUsuario.idade <= 50 ? 0.04 :
    infoUsuario.idade > 50 && infoUsuario.idade <= 65 ? 0.05 :
    infoUsuario.idade > 65 ? 0.07 : 0; // default taxa de juros se a idade não se enquadrar em nenhuma faixa
  
  const valorEmprestimo = parseFloat(prompt("Insira o valor do empréstimo: "));
  const numeroParcelas = parseInt(prompt("Insira o número de parcelas: "));
  const limiteParcelasSemJuros = parseInt(prompt("Insira o limite de parcelas sem juros: "));
  
  const calcularValorParcela = ({ valorEmprestimo, numeroParcelas, taxaJuros, limiteParcelasSemJuros }) => {
    const valorSemJuros = valorEmprestimo / numeroParcelas;
    const valorComJuros = (valorEmprestimo * taxaJuros) / (numeroParcelas - limiteParcelasSemJuros);
    
    return Array.from({ length: numeroParcelas }, (_, i) =>
      i < limiteParcelasSemJuros ? valorSemJuros : valorSemJuros + valorComJuros
    );
  };
  
  const emprestimo = { valorEmprestimo, numeroParcelas, taxaJuros, limiteParcelasSemJuros };
  
  const parcelas = calcularValorParcela(emprestimo);
  
  console.log(`\nValor total do empréstimo: ${valorEmprestimo.toFixed(2)}\n`);
  
  parcelas.forEach((parcela, index) => {
    console.log(`Parcela ${index + 1}: ${parcela.toFixed(2)}\n`);
  });