// This is a JavaScript file
$(function(){
  $("#tempo").click(function(){
    $.ajax({
      type: "get",
      url: "http://apiadvisor.climatempo.com.br/api/v1/forecast/region/sudeste?token=11e3e1513a46d67a2a05217cf9e7293a",
      success: function(data){
        var retornado = `\
        <p>Data: ${data.date_br}</p>
        <p>Imagem: ${data.image}</p>
        <p>Descrição: ${data.text}</p>`
        $("#previsao").append(retornado)
      },
      error: function(){
        alert("Erro!")
      }
    })
  })
})
