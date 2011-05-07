/**
 * @author Abraham
 * 依赖core.js
 */
Abe= {};
Abe.Table= {}//Abe.Table命名空间

Abe.Table.Action= function(value,type) {
	this.value=value;
	this.type=type;
}
Abe.Table.Action.prototype.toString= function() {
	if(this.type===Abe.Table.Action.SHIFT)
		return 'S'+this.value;
	else if(this.type===Abe.Table.Action.REDUCE)
		return 'r'+this.value;
	else
		return "Accept"
}
Abe.Table.Action.SHIFT=0;
Abe.Table.Action.REDUCE=1;
Abe.Table.Action.ACCEPT=2;
Abe.Table.Action.ACC=new Abe.Table.Action(0,Abe.Table.Action.ACCEPT);

Abe.Table.State= function(value) {
	this.vlaue=value;
	this._action=new Array();
	this._goto=new Array();
}
Abe.Table.State.prototype= {
	toString: function() {
		return 'state'+this.value;
	},
	getAction: function(index) {
		return this._action[index];
	},
	getGoto: function(index) {
		return this._goto[index];
	},
	addAction: function(index,action) {
		this._action[index]=action;
	},
	addGoto: function(index,_goto) {
		this._goto[index]=_goto;
	},
	quickAddShift: function(idx) {
		for(var i=0;i<arguments.length;i++) {
			var tmp=arguments[i];
			this.addAction(tmp[0],new Abe.Table.Action(tmp[1],Abe.Table.Action.SHIFT));
		}

	},
	quickAddReduce: function(idx) {
		for(var i=0;i<arguments.length;i++) {
			var tmp=arguments[i];
			this.addAction(tmp[0],new Abe.Table.Action(tmp[1],Abe.Table.Action.REDUCE));
		}
	},
	quickAddGoto: function(idx) {
		for(var i=0;i<arguments.length;i++) {
			var tmp=arguments[i];
			this.addGoto(tmp[0],tmp[1]);
		}
	}
}

Abe.Table.LR_Table= function() {

	this.states=new Array();

	this.initIndex();
	this.initTable();
}
Abe.Table.LR_Table.prototype.getSymbolIndex= function(value) {

	return this._symbols[value];
}
Abe.Table.LR_Table.prototype.initIndex= function() {
	this._symbols= {
		',':3,
		'\n':5
	};
	var s= {};

	s.UNDEF=-1;//未定义
	s.END=0;
	s.ID=4;
	s.INT=1;
	s.FLOAT=2;
	s.S=0;
	s.D=1;
	s.T=2;
	s.L=3;

	this.SYMBOLS=s;
}
Abe.Table.LR_Table.prototype.initTable= function() {
	for(var i=0;i<17;i++)
		this.states[i]=new Abe.Table.State(i);

	this.states[0].quickAddShift([1,4],[2,5]);
	this.states[0].quickAddGoto([0,1],[1,2],[2,3]);

	this.states[1].addAction(0,Abe.Table.Action.ACC);
	this.states[2].quickAddShift([5,7]);
	this.states[2].quickAddReduce([0,6]);

	this.states[3].quickAddShift([4,9]);
	this.states[3].quickAddGoto([3,8]);

	this.states[4].quickAddReduce([4,2]);

	this.states[5].quickAddReduce([4,3]);

	this.states[7].quickAddShift([1,4],[2,5]);
	this.states[7].quickAddGoto([0,10],[1,2],[2,3]);

	this.states[8].quickAddShift([3,15]);
	this.states[8].quickAddReduce([0,1],[5,1]);

	this.states[9].quickAddReduce([0,5],[3,5],[5,5]);

	this.states[10].quickAddReduce([0,7]);

	this.states[15].quickAddShift([4,16]);

	this.states[16].quickAddReduce([0,4],[3,4],[5,4]);

}
LR_TABLE=new Abe.Table.LR_Table();

/**
 * @param {number} symbolIndex 该token在分析表中的索引，如果是-1，表示词法器(lexer)没有直接得到，交给table查询
 * @parma {anything} value
 */
Abe.Table.Token= function(symbolIndex,value) {
	if(typeof symbolIndex !=='number')
		throw 'bad index';
	this.symbolIndex=symbolIndex;
	this.value=value;
}
Abe.Table.Token.END=new Abe.Table.Token(LR_TABLE.SYMBOLS.END,'#');