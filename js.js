//mediatorPattern
class MediatorPattern{
	constructor(){
		this.channels ={}
	}
	subscribe(name,fn){
	this.channels[name] = fn
	}
	notify(name,change){ 
		this.channels[name](change);
	}
	
};
var MEDIATOR = new MediatorPattern();
	MEDIATOR.subscribe('o1', color =>{document.getElementById('o1').style.backgroundColor = color});
	MEDIATOR.subscribe('o2',color =>{document.getElementById('o2').style.backgroundColor = color} );
	MEDIATOR.subscribe('o3',color =>{document.getElementById('o3').style.backgroundColor = color} );


MEDIATOR.notify('o1','green')
MEDIATOR.notify('o2','grey')
MEDIATOR.notify('o3','red')
 //alert(document.getElementById('o1').textContent)
//console.log(document.getElementById('o1').textContent)