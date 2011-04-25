/**
 * @author Abraham
 * 
 */
function _table_action(){
	this._table=new Array();
}

 
_table_action.prototype.Add=function(symbol,action){
	this._table.push([symbol,action]);
}
_table_action.prototype.Get = function(symbol){
	for (var i = 0; i < this._table.length; i++) {
		var tmp = this._table[i];
		if (tmp[0] instanceof Array) {
			for (var j = 0; j < tmp[0].length; j++) {
				if (tmp[0][j].Equals(symbol)) 
					return this._table[i][1];
			}
		}
		else {
			if (tmp[0].Equals(symbol)) {
				return this._table[i][1];
			}
		}
	}
}

function _table_goto(){
	this._table=new Array();
}

_table_goto.prototype.Add=function(symbol,go){
	this._table.push([symbol,go]);
}
_table_goto.prototype.Get=function(symbol,go){
	for(var i=0;i<this._table.length;i++){
		var tmp=this._table[i][0];
		if(tmp.Equals(symbol)){
			return this._table[i][1];
		}
	}
}

function State(value){
	this.Vlaue=value;
	this.ACTION=new _table_action();
	this.GOTO=new _table_goto();
}

 
var ACTION={
	SHIFT:0,
	REDUCE:1,
	ACCEPT:2
}

ACCEPTACTION=new function(){
	this.Type=ACTION.ACCEPT;
}
/**
 * 移入
 */
function Action(value,type){
	this.value=value;
	this.type=type;
}

/**
 * 规约
 */
function ReduceAction(value){
	this.Value=value;
	this.Type=ACTION.REDUCE;
}




function Symbol(name,type){
	this._id=Symbol._auto_increment_id++;
	this.name=name;
	this.type=type;
}
Symbol._auto_increment_id=0;

Symbol.prototype.Equals=function(symbol){
	return this._id===symbol._id;// this.Name==symbol.Name && this.Type===symbol.Type;
}
Symbol.TERMINATOR=0;
Symbol.NONTERMINAL=1;
Symbol.END=2;
Symbol.ENDSYMBOL=new Symbol('#',Symbol.END);
/**
 * 终结符
 * @param {Object} value
 */
function Terminator(name){
	this.base(name,Symbol.TERMINATOR);
}
$.inherit(Terminator,Symbol);

/**
 * 非终结符
 * @param {Object} name
 */
function Nonterminal(name){
	this.base(name,Symbol.NONTERMINAL);
}
$.inherit(Nonterminal,Symbol);




