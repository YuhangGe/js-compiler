/**
 * @author Abraham
 */
LR_GRAMMARS=new Array();
LR_GRAMMARS[0]= {
	reduce: function() {
		var p0=Abe.LR_Stack.pop();//T
		var p1=Abe.LR_Stack.pop();//+
		var p2=Abe.LR_Stack.pop();//E
		var value=calc_plus_minus(p0.value,p1.value,p2.value);
		return {
			symbolIndex:LR_TABLE.SYMBOLS.E,
			value:value
		}
	}
}

function calc_plus_minus(n1,op,n2) {
	if(op==='+')
		return n2+n1;
	else
		return n2-n1;
}

LR_GRAMMARS[1]= {
	//E:=T
	reduce: function() {
		//$.dprint("E:=T");
		var p0=Abe.LR_Stack.pop();//T
		return {
			symbolIndex:LR_TABLE.SYMBOLS.E,
			value:p0.value
		}
	}
}
LR_GRAMMARS[2]= {
	//T:=T*F | T:=T/F
	reduce: function() {
		var p0=Abe.LR_Stack.pop();//F
		var p1=Abe.LR_Stack.pop();//*
		var p2=Abe.LR_Stack.pop();//T
		var v=calc_mul_div(p0.value,p1.value,p2.value);
		return {
			symbolIndex:LR_TABLE.SYMBOLS.T,
			value:v
		};
	}
}

function calc_mul_div(n1,op,n2){
	if(op==='*')
		return n2*n1;
	else
		return n2/n1;
}
LR_GRAMMARS[3]= {
	//T:=F
	reduce: function() {
		var p0=Abe.LR_Stack.pop();//F
		return {
			symbolIndex: LR_TABLE.SYMBOLS.T,
			value: p0.value
		};
	}
}
LR_GRAMMARS[4]= {
	//F:=(E)
	reduce: function() {
		var p0=Abe.LR_Stack.pop();//)
		var p1=Abe.LR_Stack.pop();//E
		var p2=Abe.LR_Stack.pop();//(
		return {
			symbolIndex: LR_TABLE.SYMBOLS.F,
			value: p1.value
		};
	}
}
LR_GRAMMARS[5]= {
	//F:=num
	reduce: function() {
		var p0=Abe.LR_Stack.pop();//num
		return {
			symbolIndex: LR_TABLE.SYMBOLS.F,
			value: p0.value
		};
	}
}
