/**
 * @author Abraham
 */
g1={
	//E:=E+T | E:=E-T
	Left:LR_ONE_NONTERMINALS['E'],
	Reduce:function(){
		var t=LR_ONE_STACK.pop();//T
		var op=LR_ONE_STACK.pop();//+
		var e=LR_ONE_STACK.pop();//E
		var value=t.Value+e.Value;
		if(op.Value==='-')
			value=e.Value-t.Value;
		return {
			'Symbol': this.Left,
			'Value': value
		};
	}
}
g2={
	//E:=T
	Left:LR_ONE_NONTERMINALS['E'],
	Reduce:function(){
		var t=LR_ONE_STACK.pop();//T
		return {
			'Symbol': this.Left,
			'Value': t.Value
		};
	}
}
g3={
	//T:=T*F | T:=T/F
	Left:LR_ONE_NONTERMINALS['T'],
	Reduce:function(){
		var f=LR_ONE_STACK.pop();//F
		var op=LR_ONE_STACK.pop();//*
		var t=LR_ONE_STACK.pop();//T
		var value;
		if(op.Value==='/')
			value=t.Value/f.Value;
		else
			value=f.Value*t.Value;
		return {
			'Symbol': this.Left,
			'Value': value
		};
	}
}
g4={
	//T:=F
	Left:LR_ONE_NONTERMINALS['T'],
	Reduce:function(){
		var f=LR_ONE_STACK.pop();//F
		return {
			'Symbol': this.Left,
			'Value': f.Value
		};
	}
}
g5={
	//F:=(E)
	Left:LR_ONE_NONTERMINALS['F'],
	Reduce:function(){
		LR_ONE_STACK.pop();//)
		var e=LR_ONE_STACK.pop();//E
		LR_ONE_STACK.pop();//(
		return {
			'Symbol': this.Left,
			'Value': e.Value
		};
	}
}
g6={
	//F:=i
	Left:LR_ONE_NONTERMINALS['F'],
	Reduce:function(){
		var i=LR_ONE_STACK.pop();//i
		return {
			'Symbol': this.Left,
			'Value': i.Value
		};
	}
}

LR_GRAMMARS=new Array(null,g1,g2,g3,g4,g5,g6);


