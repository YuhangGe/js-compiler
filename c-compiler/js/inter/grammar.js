LR_GRAMMARS=new Array();
LR_GRAMMARS[0]= {
	//D->L T
	reduce: function() {
		var p0=Abe.LR_Stack.pop();//L
		var p1=Abe.LR_Stack.pop();//T
		return {
			symbolIndex:LR_TABLE.SYMBOLS.D,
			valeu:p0.value
		}
	}
}
LR_GRAMMARS[1]= {
	//T->int
	reduce: function() {
		var p0=Abe.LR_Stack.pop();//int
		return {
			symbolIndex:LR_TABLE.SYMBOLS.T,
			valeu:p0.value
		}
	}
}
LR_GRAMMARS[2]= {
	//T->float
	reduce: function() {
		var p0=Abe.LR_Stack.pop();//float
		return {
			symbolIndex:LR_TABLE.SYMBOLS.T,
			valeu:p0.value
		}
	}
}
LR_GRAMMARS[3]= {
	//L->id , L
	reduce: function() {
		var p0=Abe.LR_Stack.pop();//id
		var p1=Abe.LR_Stack.pop();//,
		var p2=Abe.LR_Stack.pop();//L
		return {
			symbolIndex:LR_TABLE.SYMBOLS.L,
			valeu:p0.value
		}
	}
}
LR_GRAMMARS[4]= {
	//L->id
	reduce: function() {
		var p0=Abe.LR_Stack.pop();//id
		return {
			symbolIndex:LR_TABLE.SYMBOLS.L,
			valeu:p0.value
		}
	}
}
LR_GRAMMARS[5]= {
	//S->D
	reduce: function() {
		var p0=Abe.LR_Stack.pop();//D
		return {
			symbolIndex:LR_TABLE.SYMBOLS.S,
			valeu:p0.value
		}
	}
}
LR_GRAMMARS[6]= {
	//S->S new_line D
	reduce: function() {
		var p0=Abe.LR_Stack.pop();//S
		var p1=Abe.LR_Stack.pop();//new_line
		var p2=Abe.LR_Stack.pop();//D
		return {
			symbolIndex:LR_TABLE.SYMBOLS.S,
			valeu:p0.value
		}
	}
}