if(!Abe)
	Abe={};


Abe.Action= function(value,type) {
	this.value=value;
	this.type=type;
}
Abe.Action.prototype.toString= function() {
	if(this.type===Abe.Action.SHIFT)
		return 'S'+this.value;
	else if(this.type===Abe.Action.REDUCE)
		return 'r'+this.value;
	else
		return "Accept"
}
Abe.Action.SHIFT=0;
Abe.Action.REDUCE=1;
Abe.Action.ACCEPT=2;
Abe.Action.ACC=new Abe.Action(0,Abe.Action.ACCEPT);

Abe.State= function(value) {
	this.vlaue=value;
	this.action=new Array();
	this.go_to=new Array();
}
Abe.State.prototype= {
	toString: function() {
		return 'state'+this.value;
	},
	getAction: function(index) {
		return this.action[index];
	},
	getGoto: function(index) {
		return this.go_to[index];
	},
	addAction: function(index,action) {
		this.action[index]=action;
	},
	addGoto: function(index,go_to) {
		this.go_to[index]=go_to;
	},
	quickAddShift: function(idx) {
		for(var i=0;i<arguments.length;i++) {
			var tmp=arguments[i];
			this.addAction(tmp[0],new Abe.Action(tmp[1],Abe.Action.SHIFT));
		}

	},
	quickAddReduce: function(idx) {
		for(var i=0;i<arguments.length;i++) {
			var tmp=arguments[i];
			this.addAction(tmp[0],new Abe.Action(tmp[1],Abe.Action.REDUCE));
		}
	},
	quickAddGoto: function(idx) {
		for(var i=0;i<arguments.length;i++) {
			var tmp=arguments[i];
			this.addGoto(tmp[0],tmp[1]);
		}
	}
}
