// This is a JavaScript file
$(function(){
  $.ajax({
    type: "get",
    url: "http://apiadvisor.climatempo.com.br/api/v1/forecast/region/sudeste?token=11e3e1513a46d67a2a05217cf9e7293a",
    success: function(data){
      var retornado = `\
      <h4 class="text-center"><b>${data.data[0].date_br}</b></h4>
      <p><img class="img-fluid img-thumbnail" src="${data.data[0].image}"></p>
      <p>Descrição não fornecida</p>
      <h4 class="text-center"><b>${data.data[1].date_br}</b></h4>
      <p><img class="img-fluid img-thumbnail" src="${data.data[1].image}"></p>
      <p>${data.data[1].text}</p>
      <h4 class="text-center"><b>${data.data[2].date_br}</b></h4>
      <p><img class="img-fluid img-thumbnail" src="${data.data[2].image}"></p>
      <p>${data.data[2].text}</p>`
      $("#previsao").append(retornado)
    },
    error: function(xhr, status, error){
      alert(`${xhr.status}:  ${xhr.statusText}`)
    }
  })
})
