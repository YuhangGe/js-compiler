ABE_LR_GRAMMARS=new Array();
ABE_LR_GRAMMARS[0]= {
	//D->; L T
	reduce: function() {
		var p0=Abe.Stack.pop();//;
		var p1=Abe.Stack.pop();//L
		var p2=Abe.Stack.pop();//T
		return {
			symbolTag:Abe.Tag.D,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[1]= {
	//T->int
	reduce: function() {
		var p0=Abe.Stack.pop();//int
		return {
			symbolTag:Abe.Tag.T,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[2]= {
	//T->float
	reduce: function() {
		var p0=Abe.Stack.pop();//float
		return {
			symbolTag:Abe.Tag.T,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[3]= {
	//L->id , L
	reduce: function() {
		var p0=Abe.Stack.pop();//id
		var p1=Abe.Stack.pop();//,
		var p2=Abe.Stack.pop();//L
		return {
			symbolTag:Abe.Tag.L,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[4]= {
	//L->id
	reduce: function() {
		var p0=Abe.Stack.pop();//id
		return {
			symbolTag:Abe.Tag.L,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[5]= {
	//S->D
	reduce: function() {
		var p0=Abe.Stack.pop();//D
		return {
			symbolTag:Abe.Tag.S,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[6]= {
	//S->D S
	reduce: function() {
		var p0=Abe.Stack.pop();//D
		var p1=Abe.Stack.pop();//S
		return {
			symbolTag:Abe.Tag.S,
			value:p0.value
		}
	}
}