$(document).ready(function () {
    // botao 1: altera o texto do h1
    $('button').eq(0).click(function () {
      $('h1').text('voce clicou no botao 1');
    });
  
    // botao 2: esconde o h1 com efeito fadeOut
    $('button').eq(1).click(function () {
      $('h1').fadeOut(800);
    });
  
    // botao 3: mostra o h1 com efeito fadeIn
    $('button').eq(2).click(function () {
      $('h1').fadeIn(800);
    });
  
    // botao 4: alterna a classe 'destaque' no h1
    $('button').eq(3).click(function () {
      $('h1').toggleClass('destaque');
    });
  
    // botao 5: anima o h1, muda cor, fundo e desloca para direita
    $('button').eq(4).click(function () {
      $('h1').animate({ marginLeft: '100px', opacity: 0.6 }, 800);
      $('h1').css({
        'color': 'green',
        'background-color': 'lightyellow'
      });
    });
  
    // mostra no console qual botao foi clicado
    $('button').each(function (index) {
      $(this).click(function () {
        console.log('botao ' + (index + 1) + ' foi clicado');
      });
    });
  
    // input: ao pressionar enter, altera o h1 para saudar o nome digitado
    $('#nome').keydown(function (e) {
      if (e.key === 'Enter') {
        var nome = $(this).val();
        $('h1').text('ola, ' + nome);
      }
    });
  
    // lista: ao clicar em um item, remove-o com fadeOut
    $('#lista li').click(function () {
      $(this).fadeOut(500, function () {
        $(this).remove();
      });
    });
  
    // imagem: ao clicar na imagem, troca o src para outra imagem
    $('#imagem').click(function () {
      $(this).attr('src', 'https://via.placeholder.com/150/0000FF/808080?text=nova+imagem');
    });
  
    // ajax: ao carregar a pagina, faz um get ajax e mostra o resultado no console
    $.get('https://jsonplaceholder.typicode.com/todos/1', function (data) {
      console.log('resultado do ajax:', data);
    });
  });
  