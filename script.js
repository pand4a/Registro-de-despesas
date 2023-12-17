document.getElementById('despesa-form').addEventListener('submit', adicionarDespesa);

function adicionarDespesa(event) {
  event.preventDefault();
  
  const valor = parseFloat(document.getElementById('valor').value);
  const categoria = document.getElementById('categoria').value;
  
  if (!isNaN(valor) && categoria !== '') {
    const listaDespesas = document.getElementById('lista-despesas');
    
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`Valor: R$ ${valor.toFixed(2)} - Categoria: ${categoria}`));
    
    listaDespesas.appendChild(li);
    
    atualizarResumo(valor);
    
    document.getElementById('valor').value = '';
    document.getElementById('categoria').value = '';
  } else {
    alert('Por favor, preencha todos os campos corretamente.');
  }
}

function atualizarResumo(valor) {
  const resumo = document.getElementById('resumo');
  const total = calcularTotal(valor);
  
  const totalElement = document.createElement('p');
  totalElement.innerHTML = `<strong>Total de Despesas:</strong> R$ ${total.toFixed(2)}`;
  
  const existenteTotal = resumo.querySelector('p');
  if (existenteTotal) {
    resumo.replaceChild(totalElement, existenteTotal);
  } else {
    resumo.appendChild(totalElement);
  }
}

function calcularTotal(valor) {
  const existenteTotal = document.querySelector('#resumo strong');
  let total = valor;
  
  if (existenteTotal) {
    const regex = /\d+\.\d+/;
    const valorExistente = parseFloat(existenteTotal.innerText.match(regex)[0]);
    total += valorExistente;
  }
  
  return total;
}
