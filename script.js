var passoAtual = 1;
function proximo(resposta) {
//se a resposta for sim, ele pega o passo e adiciona o passo atual + 2, para ir para a prox pergunta.
    if (resposta === 'sim') {
        document.getElementById('passo' + passoAtual).style.display = 'none';
        passoAtual+=2;
        document.getElementById('passo' + passoAtual).style.display = 'block';
        } 
     if (resposta === 'ok') {
        document.getElementById('passo' + passoAtual).style.display = 'none';
        passoAtual++;
        document.getElementById('passo' + passoAtual).style.display = 'block';
                }  
//se a resposta for não, ele chama a função explicar Passo.
     else {
        explicarPasso(passoAtual);
                }}
// a função explicar passo chama o passo seguinte.
    function explicarPasso(numeroPasso) {
        document.getElementById('passo' + passoAtual).style.display = 'none';
        document.getElementById('passo' + numeroPasso).style.display = 'block';
        passoAtual = numeroPasso;
        }