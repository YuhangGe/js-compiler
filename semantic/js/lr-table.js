/**
 * @author Abraham
 * 依赖core.js
 */

Abe.Table= {}//Abe.Table命名空间

Abe.Table.Action=function(value,type){
	this.value=value;
	this.type=type;
}
Abe.Table.Action.SHIFT=0;
Abe.Table.Action.REDUCE=1;
Abe.Table.Action.ACCEPT=2;
Abe.Table.Action.ACC=new Abe.Table.Action(0,Abe.Table.Action.ACCEPT);




Abe.Table.State=function(value){
	this.vlaue=value;
	this._action=new Array();
	this._goto=new Array();
}
Abe.Table.State.prototype={
	getAction:function(index){
		return this._action[index];
	},
	getGoto:function(index){
		return this._goto[index];
	},
	addAction:function(index,action){
		this._action[index]=action;
	},
	addGoto:function(index,_goto){
		this._goto[index]=_goto;
	},
	quickAddShift:function(idx){
		for(var i=0;i<arguments.length;i++){
			var tmp=arguments[i];
			this.addAction(tmp[0],new Abe.Table.Action(tmp[1],Abe.Table.Action.SHIFT));
		}
					
	},
	quickAddReduce:function(idx){
		for(var i=0;i<arguments.length;i++){
			var tmp=arguments[i];
			this.addAction(tmp[0],new Abe.Table.Action(tmp[1],Abe.Table.Action.REDUCE));
		}
	},
	quickAddGoto:function(idx){
		for(var i=0;i<arguments.length;i++){
			var tmp=arguments[i];
			this.addGoto(tmp[0],tmp[1]);
		}
	}
}

Abe.Table.LR_Table=  function(){
	
	this.states=new Array();
	
	this.initIndex();
	this.initTable();
}

Abe.Table.LR_Table.prototype.initIndex=function(){
	this._symbols={
		'+':0,
		'-':1,
		'*':2,
		'/':3
	};
	var s={};
	
	S.UNDEF=-1;//未定义
	s.END=5;
	s.num=4;

	s.get=function(value){
		return this._symbols[value];
	}
	this.SYMBOLS=s;
}

Abe.Table.LR_Table.prototype.initTable=function(){
	
	for(var i=0;i<=11;i++)
		this.states[i]=new State(i);
	
	this.states[0].quickAddShift([2,4],[4,5]);
	this.states[0].quickAddGoto([0,1],[1,2],[2,3]);
	
	this.states[1].quickAddShift([0,6]);
	this.states[1].addAction(5,Abe.Table.Action.ACC);
	
	this.states[2].quickAddShift([1,7]);
	this.states[2].quickAddReduce([0,2],[3,2],[5,2]);
	
	this.states[3].quickAddReduce([0,4],[1,4],[3,4],[5,4]);
	
	this.states[4].quickAddShift([1,7]);
	this.states[4].quickAddGoto([0,8],[1,2],[2,3]);
	
	this.states[5].quickAddReduce([0,6],[1,6],[3,6],[5,6]);
	
	this.states[6].quickAddShift([2,4],[4,5]);
	this.states[6].quickAddGoto([1,9],[2,3]);
	
	this.states[7].quickAddShift([2,4],[4,5]);
	this.states[7].quickAddGoto([2,10]);

	this.states[8].quickAddShift([0,6],[3,11]);
	
	this.states[9].quickAddShift([1,7]);
	this.states[9].quickAddReduce([0,1],[3,1],[5,1]);
	
	this.states[10].quickAddReduce([0,3],[1,3],[3,3],[5,3]);
 	
 	this.states[11].quickAddReduce([0,5],[1,5],[3,5],[5,5]);
}
LR_TABLE=new Abe.Table.LR_Table();

/**
 * @param {number} symbolIndex 该token在分析表中的索引，如果是-1，表示词法器(lexer)没有直接得到，交给table查询
 * @parma {anything} value 
 */
Abe.Table.Token=function(symbolIndex,value){
	this.symbolIndex=symbolIndex;
	this.value=value;
}
Abe.Table.Token.END=new Abe.Table.Token(LR_TABLE.SYMBOLS.END,'#');
