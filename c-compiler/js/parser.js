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
Abe.StackElement=function(state,symbolIndex,value){
	this.state=state;
	this.symbolIndex=symbolIndex;
	this.value=value;
}
Abe.LR_Stack=new Array();
/**
 * LR（1）分析驱动程序
 */
Abe.LR_Parser=function(lexer,lr_table,grammars) {
	this._lexer=lexer;
	if(lr_table)
	    this._table = lr_table;
	else
		this._table=LR_TABLE;
	if(grammars)
		this._grammar = grammars;
	else
		this._grammar=LR_GRAMMARS;
	
	this._stack = Abe.LR_Stack;
	this._error = false;
	this._current_token = null;
	this._current_index = 0;
	this._text=null;
}

Abe.LR_Parser.prototype= {
	compile: function() {
		 
		this._stack.push(new Abe.StackElement(this._table.states[0], this._table.endIndex,0));
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
		if (look == null) {
			this._err("不能识别的符号'" + this._current_token+"'");
			return false;
		}
		//$.dprint(look);
		var sidx=look.symbolIndex;
		if(sidx===-1){//如果在符号表中索引为-1，说明lexer没有得到索引，交给table查找
			sidx=this._table.getSymbolIndex(look.value);
		}

		var act = this._stack[this._stack.length - 1].state.getAction(sidx);
		
		if (act == null) {
			this._err("匹配失败");
			return false;
		}
		//$.dprint(act);
		
		switch (act.type) {
			case Abe.Table.Action.ACCEPT:
				document.getElementById("output").value="Success!\n"+this._stack.pop().value;
				$.dprint("Accept");
				return false;
				break;
			case Abe.Table.Action.SHIFT:
				
				this._stack.push(new Abe.StackElement(this._table.states[act.value], sidx,look.value));
				return false;
				break;
			case Abe.Table.Action.REDUCE:
				var U = this._grammar[act.value-1].reduce();
				//$.dprint(U.value);
				var go_state = this._stack[this._stack.length - 1].state.getGoto(U.symbolIndex);
				this._stack.push(new Abe.StackElement(this._table.states[go_state], U.symbolIndex,U.value));
				return true;
				break;
		}
		return false;
	}
}

