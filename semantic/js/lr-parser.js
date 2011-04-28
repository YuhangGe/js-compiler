/**
 * @author Abraham
 * 依赖core.js,table.js
 */

/**
 * 储存于分析栈中的元素
 * @param {State} state 
 * @param {Number} symbolIndex 符号在表中的索引
 * @param {Number|Operator} value
 */
function StackElement(state,symbolIndex,value){
	this.state=state;
	this.symbolIndex=symbolIndex;
	this.value=value;
}

/**
 * LR（1）分析驱动程序
 */
function LR_Parser(lexer,lr_table,grammars) {
	this._lexer=lexer;
	if(lr_table)
	    this._table = lr_table;
	else
		this._table=LR_TABLE;
	if(grammars)
		this._grammar = grammars;
	else
		this._grammer=LR_GRAMMERS;
	
	this._stack = new Array();
	this._error = false;
	this._current_token = null;
	this._current_index = 0;
	this._text=null;
}

LR_Parser.prototype= {
	compile: function() {
		 
		this._stack.push(new StackElement(this._table.states[0], this._table.endIndex,0));
		var tagS = true;

		while (tagS === true && this._error === false) {
			var look=this._lexer.scan();
			if (look===null) {
				while (tagS)
					tagS = this._analyze(Abe.Table.Token.END);
			} else {
				while (tagS) 
					tagS = this._analyze(look);
		
				tagS = true;
			}

		}

		this._dispose();

	},
	_dispose: function() {
		this._stack.length=0;
		this._current_index=0;
		this._current_token=null;
		this._error = false;
	},
	_err : function(msg) {
		alert(msg);
		this._error = true;
	},
	_analyze : function(look) {
		//Debug.print(symbol);
		if (symbol == null) {
			this._err("不能识别的符号'" + this._current_token+"'");
			return false;
		}
		var sidx=look.symbolIndex;
		if(sidx===-1){//如果在符号表中索引为-1，说明lexer没有得到索引，交给table查找
			sidx=this._table.SYMBOLS.get(look.value);
		}
		var act = this._stack[this._stack.length - 1].state.getAction(symbolIndex);
		if (act == null) {
			this._err("匹配失败");
			return false;
		}
		switch (act.Type) {
			case Abe.Table.Action.ACCEPT:
				document.getElementById("output").value="Success!\n"+this._stack.pop().value;
				return false;
				break;
			case Abe.Table.Action.SHIFT:
				
				this._stack.push(new StackElement(this._table.states[act.value], symbolIndex,value));
				return false;
				break;
			case Abe.Table.Action.REDUCE:
				var U = this._grammar[act.value].reduce();
				var go_state = this._stack[this._stack.length - 1].state.getGoto(U.symbolIndex);
				this._stack.push(new StackElement(go_state, U.symbolIndex,U.value));
				return true;
				break;
		}
		return false;
	}
}

