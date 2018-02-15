$(document).ready(function() {



    $('.btnPublicar').click(function(event) {
      $('.publicaciones').append('<section class="row container bg-light mt-1 mb-1 pt-1"><div class="col-1"><img class="imgPerfil"src="http://hipnosis24horas.com/wp-content/themes/OptimizePress/timthumb.php?src=http://hipnosis24horas.com/wp-content/uploads/hipnosis1872-216x300.jpg&h=200&w=200&zc=1" alt=""></div><div class="col-10"><h4>Pensador <span>@pensa</span></h4><p>'+$('.inputPerfil').val()+'</p><p><a class="like" href="#"><i class="far fa-heart"></i></a><span class="contador">0</span></p></div><div class="col-1"><a class="eliminarTwitt"href="#"><i class="fas fa-times"></i></a></div></section>')
    });

    $('.publicaciones').on('click','.eliminarTwitt', function() {
      $(this).parent().parent().remove();
    });

    $('.publicaciones').on('click','.like', function() {
      if ($(this).hasClass('likeable')) {
        $(this).removeClass('likeable')
        $(this).parent().find('span').html(0);
      }else {
        $(this).addClass('likeable')
        $(this).parent().find('span').html(1);
      }
    });




});
