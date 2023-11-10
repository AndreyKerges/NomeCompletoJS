const nome = prompt('Olá, Qual o seu nome?');
const sobrenome = prompt(`${nome}, qual o seu sobrenome?`);

alert(`Certo, seu nome completo é: ${nome} ${sobrenome}`);
alert(`E o seu nome de catálogo é: ${sobrenome.toUpperCase()}, ${nome}`);