
let G_Numero1=0;
let G_Numero2=0;
let G_Signo= "";
//Click a los numeros//
$("#cero").click(function() { // Agrega 0 a la barra
  document.getElementById('resultado').innerHTML=document.getElementById('resultado').innerHTML + "0";
});
  $("#uno").click(function() { // Agrega 1 a la barra
    document.getElementById('resultado').innerHTML=document.getElementById('resultado').innerHTML + "1";
  });
  $("#dos").click(function() { // Agrega 2 a la barra
    document.getElementById('resultado').innerHTML=document.getElementById('resultado').innerHTML + "2";
  });
  $("#tres").click(function() { // Agrega 3 a la barra
    document.getElementById('resultado').innerHTML=document.getElementById('resultado').innerHTML + "3";
  });
  $("#cuatro").click(function() { // Agrega 4 a la barra
    document.getElementById('resultado').innerHTML=document.getElementById('resultado').innerHTML + "4";
  });
  $("#cinco").click(function() { // Agrega 5 a la barra
    document.getElementById('resultado').innerHTML=document.getElementById('resultado').innerHTML + "5";
  });
  $("#seis").click(function() { // Agrega 6 a la barra
    document.getElementById('resultado').innerHTML=document.getElementById('resultado').innerHTML + "6";
  });
  $("#siete").click(function() { // Agrega 7 a la barra
    document.getElementById('resultado').innerHTML=document.getElementById('resultado').innerHTML + "7";
  });
  $("#ocho").click(function() { // Agrega 8 a la barra
    document.getElementById('resultado').innerHTML=document.getElementById('resultado').innerHTML + "8";
  });
  $("#nueve").click(function() { // Agrega 9 a la barra
    document.getElementById('resultado').innerHTML=document.getElementById('resultado').innerHTML + "9";
  });
  $("#AC").click(function() { // Borra la pantalla de resultado
    document.getElementById('resultado').innerHTML="";
  });


//Click al Signo (+.-,*,/)

  $("#suma").click(function(){
    G_Numero1=document.getElementById('resultado').innerHTML; //obtiene el numero
    G_Signo="+"; //El signo sea de suma
    document.getElementById('resultado').innerHTML="";
  });
  $("#resta").click(function(){
    G_Numero1=document.getElementById('resultado').innerHTML; //obtiene el numero
    G_Signo="-"; //El signo sea de resta
    document.getElementById('resultado').innerHTML="";
  });
  $("#multiplicacion").click(function(){
    G_Numero1=document.getElementById('resultado').innerHTML; //obtiene el numero
    G_Signo="X"; //El signo sea de multiplicacion
    document.getElementById('resultado').innerHTML="";
  });
  $("#division").click(function(){
    G_Numero1=document.getElementById('resultado').innerHTML; //obtiene el numero
    G_Signo="/"; //El signo sea de division
    document.getElementById('resultado').innerHTML="";
  });
  $("#igual").click(function(){
    G_Numero2=document.getElementById('resultado').innerHTML; //obtiene el numero
    let claseinstanciada=new Calculadora(G_Numero1,G_Numero2); //obtener el resultado de la operacion

    document.getElementById('resultado').innerHTML="";

  switch(G_Signo)
  {
    case '+':
    claseinstanciada.SumarAsincrona().then(function(response){
    document.getElementById('resultado').innerHTML=response;
    },function(error){
      document.getElementById('resultado').innerHTML="No se pudo";
    });   //LLamar a la operacion de suma
    break;
    case '-':
    claseinstanciada.RestarAsincrona().then(function(response){
    document.getElementById('resultado').innerHTML=response;
    },function(error){
    document.getElementById('resultado').innerHTML="No se pudo";
    });
    break;
    case 'X':
    claseinstanciada.MultiplicarAsincrona().then(function(response){
    document.getElementById('resultado').innerHTML=response;
    },function(error){
      document.getElementById('resultado').innerHTML="No se pudo"; //LLamar a la operacion de multiplicacion
      });
    break;
    case '/':
    claseinstanciada.DividirAsincrona().then(function(response){
    document.getElementById('resultado').innerHTML=response;
    },function(error){
    document.getElementById('resultado').innerHTML="No se pudo"; //LLamar a la operacion de division
    });
    break;
    default:
    break;
  }
});


class Calculadora{
  constructor(_numero1,_numero2)
  {
    this.Numero1=_numero1;
    this.Numero2=_numero2;
  }
  Sumar()
  {
    return parseInt(this.Numero1)+parseInt(this.Numero2); //Cambia la variable de texto a numero
  }
  Restar()
  {
    return parseInt(this.Numero1)-parseInt(this.Numero2);
  }
  Multiplicar()
  {
    return parseInt(this.Numero1)*parseInt(this.Numero2);
  }
  Dividir()
  {
    var res=parseInt(this.Numero1)/parseInt(this.Numero2);
    res=res.toFixed(2);
    return res;
  }
  SumarAsincrona() { //Me avisa si cumplio la peticion o no
    var objeto= this;
    return new Promise(function(resolve,rejet){  //Funcion que tiene como parametro otra funcion
      try {
        resolve(parseInt(objeto.Numero1)+parseInt(objeto.Numero2));
      } catch (err) {
         reject(err.message);
      }
    })
  }
  RestarAsincrona() //Me avisa si cumplio la peticion o no
  {
    var objeto= this;
    return new Promise(function(resolve,rejet){ //Funcion que tiene como parametro otra funcion
      try {
        resolve(parseInt(objeto.Numero1)-parseInt(objeto.Numero2));
      } catch (err) {
         reject(err.message);
      }
    })
  }
  MultiplicarAsincrona() //Me avisa si cumplio la peticion o no
  {
    var objeto= this;
    return new Promise(function(resolve,rejet){ //Funcion que tiene como parametro otra funcion
      try {
        resolve(parseInt(objeto.Numero1)*parseInt(objeto.Numero2));
      } catch (err) {
         reject(err.message);
      }
    })
  }
  DividirAsincrona() //Me avisa si cumplio la peticion o no
  {
    var objeto= this;
    return new Promise(function(resolve,rejet){ //Funcion que tiene como parametro otra funcion
      try {
        resolve(parseInt(objeto.Numero1)/parseInt(objeto.Numero2));
      } catch (err) {
         reject(err.message);
      }
    })
  }
}
