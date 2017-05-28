var Calculadora = {

//variables
	pantalla: document.getElementById("display").innerHTML,
	decimal: 0,
	signo: 0,
	controlen: 8,
	stop: 0,
	num1: 0,
	opcion: 0,
	auxnum: 0,
	auxestado: 0,
	auxresultado: 0,
	inicio: (
		function(){
			this.EventosClick();
		}
	),

//animacion
	animboton: function(tecla){
		document.getElementById(tecla).style.transform="scale(0.9)";
		setTimeout(function() {document.getElementById(tecla).style.transform="scale(1)";}, 200);
	},

//numeros
	EventosClick: function(){
		document.getElementById("0").addEventListener("click",function(){Calculadora.viewnum("0")});
		document.getElementById("1").addEventListener("click",function(){Calculadora.viewnum("1")});
		document.getElementById("2").addEventListener("click",function(){Calculadora.viewnum("2")});
		document.getElementById("3").addEventListener("click",function(){Calculadora.viewnum("3")});
		document.getElementById("4").addEventListener("click",function(){Calculadora.viewnum("4")});
		document.getElementById("5").addEventListener("click",function(){Calculadora.viewnum("5")});
		document.getElementById("6").addEventListener("click",function(){Calculadora.viewnum("6")});
		document.getElementById("7").addEventListener("click",function(){Calculadora.viewnum("7")});
		document.getElementById("8").addEventListener("click",function(){Calculadora.viewnum("8")});
		document.getElementById("9").addEventListener("click",function(){Calculadora.viewnum("9")});
    document.getElementById("punto").addEventListener("click",function(){Calculadora.punto()});
    document.getElementById("on").addEventListener("click",function(){Calculadora.on("")});
  },

  //operaciones
  	viewnum: function(valor){
  		this.animboton(valor);
      if(this.decimal == 1  && this.stop == 0){
  			this.controlen += 1,
  			this.stop = 1;
  		}
  		if(this.pantalla.length < this.controlen){
  			if(this.pantalla != "0"){
  				this.pantalla += valor;
  			}else if(valor != 0){
  				this.pantalla = "",
  				this.pantalla += valor;
  			}
  			this.viewdisplay();
  		}
  	},

    punto: function(){
  		this.animboton("punto");
  		if(this.decimal == 0){
  			this.pantalla += ".";
  		}
  		this.decimal = 1,
  		this.viewdisplay();
  	},
    on: function(){
  		this.animboton("on");
  		this.pantalla = "0",
  		this.decimal = 0,
  		this.signo = 0,
  		this.stop = 0,
  		this.controlen = 8
  		this.num1 = 0,
  		this.auxestado = 0,
  		this.auxnum = 0,
  		this.opcion = 0,
  		this.auxresultado = 0,
  		this.viewdisplay();
  	},

    viewdisplay: function(){
      if(this.pantalla.toString().length > this.controlen){
        this.pantalla = this.pantalla.toString().substring(0,8);
      }
      document.getElementById("display").innerHTML = this.pantalla;
    }
    }
    Calculadora.inicio();
