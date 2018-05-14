var root = 'https://jsonplaceholder.typicode.com';
var nombres = [
  { id: 1, nombre: "Daniela Guerrero" },
  { id: 2, nombre: "Brayan Guerrero" }, 
  { id: 3, nombre: "Maria Camila Quesada" }, 
  { id: 4, nombre: "Libardo Muñoz" }, 
  { id: 5, nombre: "Sebastian Perez" }, 
  { id: 6, nombre: "Raquel Beltran" }, 
  { id: 7, nombre: "Carolina Reyes" }, 
  { id: 8, nombre: "Jhon Galviz" }, 
  { id: 9, nombre: "Javier Ruiz"},
  { id: 10, nombre: "Andres Lopez"},
  { id: 11, nombre: "Orlando Suarez"},
  { id: 12, nombre: "Jonathan Garnica"},
  { id: 13, nombre: "Andres Maldonado"},
  { id: 14, nombre: "Monica Guerrero"},
  { id: 15, nombre: "Sara Guerrero"},
  { id: 16, nombre: "Dania Guerrero"},
  { id: 17, nombre: "Silvia Guerrero"},
  { id: 18, nombre: "Valentina Guerrero"},
  { id: 19, nombre: "Cirilo Florez"},
  { id: 20, nombre: "Rut Martinez"},
  { id: 21, nombre: "Genesio Martinez"},
  { id: 22, nombre: "Josefina Luna"}
];

$("#request").click(function (e) {
  e.preventDefault();
  $.ajax({
    url: root + '/posts',
    method: 'GET',
    error: function (xhr, errDesc, exception) {
      console.log(xhr);
    },
    success:function(code,jqXHR){
      console.info("request succesfully!");
    }
  }).then(function (data) {
    printData(data);
    // console.log(data);
    // console.log(nombres);
    
  });
});


function printData(data) {
  var nombre = "";
  $.each(data,function(index,post){
    $.each(nombres,function(index,user) {
      if(post.userId == user.id){
        nombre = user.nombre;
        $("<p class='paragraph'> <span class='header'>" + nombre + ": " + post.title + "</span></br> Message: " + post.body + "</p>").appendTo("#results");
      }
    });
    // console.info(index);
    // console.log(obj.title);
    
    /* $.each(element,function(body,title,userId,id){
      
    }); */
    
  });
}
