/**
 * @author Abraham
 * 依赖core.js,table.js
 */

/**
 * 储存于分析栈中的元素
 * @param {State} state 
 * @param {Terminator|Nonterminal} symbol
 * @param {Number|Operator} value
 */
function StackElement(state,symbol,value){
	this.state=state;
	this.symbol=symbol;
	this.value=value;
}

/**
 * LR（1）分析驱动程序
 */
function LR_Engine(lexer,lr_table,grammars) {
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

LR_Engine.prototype= {
	compile: function() {
		 
		this._stack.push(new StackElement(this._table.states[0], this._table.endIndex,0));
		var tagS = true;

		while (tagS === true && this._error === false) {
			var look=this._lexer.scan();
			if (look===null) {
				while (tagS)
					tagS = this._analyze(this._table.endIndex);
			} else {
				while (tagS) 
					tagS = this._analyze(this._table.getAction(look.table_idx));
		
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
	_analyze : function(table_idx) {
		//Debug.print(symbol);
		if (symbol == null) {
			this._err("不能识别的符号'" + this._current_token+"'");
			return false;
		}
		var act = this._stack[this._stack.length - 1].state.getAction(table_idx);
		if (act == null) {
			this._err("匹配失败");
			return false;
		}
		switch (act.Type) {
			case Abe.Table.Action.ACCEPT:
				document.getElementById("output").value="Success!\n"+this._stack.pop().Value;
				return false;
				break;
			case Abe.Table.Action.SHIFT:
				
				this._stack.push(new StackElement(this._table.states[act.value], symbol,value));
				return false;
				break;
			case Abe.Table.Action.REDUCE:
				var U = this._grammar[act.value].reduce();
				var go_state = this._stack[this._stack.length - 1].state.GOTO.Get(U.symbol);
				this._stack.push(new StackElement(go_state, U.symbol,U.salue));
				return true;
				break;
		}
		return false;
	}
}

