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
Abe.Parser=function(lexer,table,grammars) {
	this.lexer=lexer;
	if(table)
	    this.table = table;
	else
		this.table=ABE_LR_TABLE;
	if(grammars)
		this.grammar = grammars;
	else
		this.grammar=ABE_LR_GRAMMARS;
	
	this.stack = Abe.LR_Stack;
	this.error = false;
}

Abe.Parser.prototype= {
	compile: function() {
		 
		this.stack.push(new Abe.StackElement(this.table.states[0], this.table.endIndex,0));
		var tagS = true;

		while (tagS === true && this._error === false) {
			var look=this.lexer.scan();
			if (look===null) {
				while (tagS)
					tagS = this.analyze(Abe.Token.END);
			} else {
				while (tagS) 
					tagS = this.analyze(look);
		
				tagS = true;
			}

		}

		this.dispose();

	},
	dispose: function() {
		this.stack.length=0;
		this.error = false;
	},
	err : function(msg) {
		alert(msg);
		this.error = true;
	},
	analyze : function(look) {
		//Debug.print(symbol);
		if (look == null) {
			this.err("不能识别的符号'" + this.lexer.peek+"'");
			return false;
		}
		//$.dprint(look);
		var sidx=look.symbolIndex;
		if(sidx===-1){//如果在符号表中索引为-1，说明lexer没有得到索引，交给table查找
			sidx=this.table.getSymbolIndex(look.value);
		}

		var act = this.stack[this.stack.length - 1].state.getAction(sidx);
		
		if (act == null) {
			this.err("匹配失败");
			return false;
		}
		//$.dprint(act);
		
		switch (act.type) {
			case Abe.Action.ACCEPT:
				document.getElementById("output").value="Success!\n"+this.stack.pop().value;
				$.dprint("Accept");
				return false;
				break;
			case Abe.Action.SHIFT:
				
				this.stack.push(new Abe.StackElement(this.table.states[act.value], sidx,look.value));
				return false;
				break;
			case Abe.Action.REDUCE:
				var U = this.grammar[act.value-1].reduce();
				//$.dprint(U.value);
				var go_state = this.stack[this.stack.length - 1].state.getGoto(U.symbolIndex);
				this.stack.push(new Abe.StackElement(this.table.states[go_state], U.symbolIndex,U.value));
				return true;
				break;
		}
		return false;
	}
}

