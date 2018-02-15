$(document).ready(function() {

  // al precionar el boton like, se cambia a +1 o +1 segun corresponda
  // $('.btnPublicar').click(function(event) {
  //   $('.publicaciones').append('<section class="container bg-light mb-2 pt-3 rounded"><div class="row"><div class="col-1"><img class="imgPerfil img-fluid" src="http://hipnosis24horas.com/wp-content/themes/OptimizePress/timthumb.php?src=http://hipnosis24horas.com/wp-content/uploads/hipnosis1872-216x300.jpg&h=200&w=200&zc=1" alt=""></div><div class="col-10"><h4>Pensador <span>@mansocra</span></h4><p>' + $('.inputPerfil').val() + '</p><p><a class="like" href="#"><i class="far fa-heart"></i></a><span class="ml-2">0</span></p></div><div class="col-1"><a class="eliminarTwitt" href="#"><i class="fas fa-times"></i></a></div></div></section>')
  //   $('.inputPerfil').val('')
  // });
  // $('.publicaciones').on('click', '.like', function() {
  //   if ($(this).hasClass('likeable')) {
  //     $(this).removeClass('likeable')
  //     $(this).parent().find('span').html(0);
  //   } else {
  //     $(this).addClass('likeable')
  //     $(this).parent().find('span').html(1);
  //   }
  // });

  // eliminamos el minitwit
  $('.publicaciones').on('click', '.eliminarTwitt', function() {
    $(this).parent().parent().parent().remove();
  });




  // botones para aumentar o disminuir el contador de likes y seccion con las flechas
  $('.btnPublicar').click(function(event) {
    event.preventDefault();
    $('.publicaciones').append('<section class="container bg-light mb-2 pt-3 rounded"><div class="row"><div class="col-1"><img class="imgPerfil img-fluid" src="http://hipnosis24horas.com/wp-content/themes/OptimizePress/timthumb.php?src=http://hipnosis24horas.com/wp-content/uploads/hipnosis1872-216x300.jpg&h=200&w=200&zc=1" alt=""></div><div class="col-10"><h4>Pensador <span>@mansocra</span></h4><p>' + $('.inputPerfil').val() + '</p><p><a class="like" href="#"><i class="far fa-heart fa-lg"></i></a><span class="ml-2">0</span><i class="fas fa-chevron-up fa-lg ml-1 mr-0"></i><i class="fas fa-chevron-down fa-lg ml-1 mr-0"></i></p></div><div class="col-1"><a class="eliminarTwitt" href="#"><i class="fas fa-times"></i></a></div></div></section>')
    $('.inputPerfil').val('')
  });
  $('.publicaciones').on('click', '.fa-chevron-up', function() {
    var contador = parseInt($(this).parent().find('span').html());
    ++contador;
    $(this).parent().find('span').html(contador);
    if (!$(this).parent().find('.like').hasClass('likeable')) {
      $(this).parent().find('.like').addClass('likeable')
    }
  });
  $('.publicaciones').on('click', '.fa-chevron-down', function() {
    if ($(this).parent().find('span').html() >= 1) {
      var contador = parseInt($(this).parent().find('span').html());
      --contador;
      $(this).parent().find('span').html(contador);
      if ($(this).parent().find('.like').hasClass('likeable') && $(this).parent().find('span').html() == 0) {
        $(this).parent().find('.like').removeClass('likeable')
      }
    }
  });



});
