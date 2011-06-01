ABE_LR_GRAMMARS=new Array();
ABE_LR_GRAMMARS[0]= {
	//stmt->bool = loc
	reduce: function() {
		var p0=Abe.Stack.pop();//bool
		var p1=Abe.Stack.pop();//=
		var p2=Abe.Stack.pop();//loc
		return {
			symbolTag:Abe.Tag.STMT,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[1]= {
	//stmt->bool
	reduce: function() {
		var p0=Abe.Stack.pop();//bool
		return {
			symbolTag:Abe.Tag.STMT,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[2]= {
	//loc->] bool [ loc
	reduce: function() {
		var p0=Abe.Stack.pop();//]
		var p1=Abe.Stack.pop();//bool
		var p2=Abe.Stack.pop();//[
		var p3=Abe.Stack.pop();//loc
		return {
			symbolTag:Abe.Tag.LOC,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[3]= {
	//loc->id
	reduce: function() {
		var p0=Abe.Stack.pop();//id
		return {
			symbolTag:Abe.Tag.LOC,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[4]= {
	//bool->join OR bool
	reduce: function() {
		var p0=Abe.Stack.pop();//join
		var p1=Abe.Stack.pop();//OR
		var p2=Abe.Stack.pop();//bool
		return {
			symbolTag:Abe.Tag.BOOL,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[5]= {
	//bool->join
	reduce: function() {
		var p0=Abe.Stack.pop();//join
		return {
			symbolTag:Abe.Tag.BOOL,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[6]= {
	//join->equality AND join
	reduce: function() {
		var p0=Abe.Stack.pop();//equality
		var p1=Abe.Stack.pop();//AND
		var p2=Abe.Stack.pop();//join
		return {
			symbolTag:Abe.Tag.JOIN,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[7]= {
	//join->equality
	reduce: function() {
		var p0=Abe.Stack.pop();//equality
		return {
			symbolTag:Abe.Tag.JOIN,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[8]= {
	//equality->rel EQ equality
	reduce: function() {
		var p0=Abe.Stack.pop();//rel
		var p1=Abe.Stack.pop();//EQ
		var p2=Abe.Stack.pop();//equality
		return {
			symbolTag:Abe.Tag.EQUALITY,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[9]= {
	//equality->rel
	reduce: function() {
		var p0=Abe.Stack.pop();//rel
		return {
			symbolTag:Abe.Tag.EQUALITY,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[10]= {
	//rel->expr < expr
	reduce: function() {
		var p0=Abe.Stack.pop();//expr
		var p1=Abe.Stack.pop();//<
		var p2=Abe.Stack.pop();//expr
		return {
			symbolTag:Abe.Tag.REL,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[11]= {
	//rel->expr LE expr
	reduce: function() {
		var p0=Abe.Stack.pop();//expr
		var p1=Abe.Stack.pop();//LE
		var p2=Abe.Stack.pop();//expr
		return {
			symbolTag:Abe.Tag.REL,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[12]= {
	//rel->expr > expr
	reduce: function() {
		var p0=Abe.Stack.pop();//expr
		var p1=Abe.Stack.pop();//>
		var p2=Abe.Stack.pop();//expr
		return {
			symbolTag:Abe.Tag.REL,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[13]= {
	//rel->expr GE expr
	reduce: function() {
		var p0=Abe.Stack.pop();//expr
		var p1=Abe.Stack.pop();//GE
		var p2=Abe.Stack.pop();//expr
		return {
			symbolTag:Abe.Tag.REL,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[14]= {
	//rel->expr
	reduce: function() {
		var p0=Abe.Stack.pop();//expr
		return {
			symbolTag:Abe.Tag.REL,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[15]= {
	//expr->tern + expr
	reduce: function() {
		var p0=Abe.Stack.pop();//tern
		var p1=Abe.Stack.pop();//+
		var p2=Abe.Stack.pop();//expr
		return {
			symbolTag:Abe.Tag.EXPR,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[16]= {
	//expr->tern - expr
	reduce: function() {
		var p0=Abe.Stack.pop();//tern
		var p1=Abe.Stack.pop();//-
		var p2=Abe.Stack.pop();//expr
		return {
			symbolTag:Abe.Tag.EXPR,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[17]= {
	//expr->tern
	reduce: function() {
		var p0=Abe.Stack.pop();//tern
		return {
			symbolTag:Abe.Tag.EXPR,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[18]= {
	//tern->unary * tern
	reduce: function() {
		var p0=Abe.Stack.pop();//unary
		var p1=Abe.Stack.pop();//*
		var p2=Abe.Stack.pop();//tern
		return {
			symbolTag:Abe.Tag.TERN,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[19]= {
	//tern->unary / tern
	reduce: function() {
		var p0=Abe.Stack.pop();//unary
		var p1=Abe.Stack.pop();///
		var p2=Abe.Stack.pop();//tern
		return {
			symbolTag:Abe.Tag.TERN,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[20]= {
	//tern->unary
	reduce: function() {
		var p0=Abe.Stack.pop();//unary
		return {
			symbolTag:Abe.Tag.TERN,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[21]= {
	//unary->unary !
	reduce: function() {
		var p0=Abe.Stack.pop();//unary
		var p1=Abe.Stack.pop();//!
		return {
			symbolTag:Abe.Tag.UNARY,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[22]= {
	//unary->unary -
	reduce: function() {
		var p0=Abe.Stack.pop();//unary
		var p1=Abe.Stack.pop();//-
		return {
			symbolTag:Abe.Tag.UNARY,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[23]= {
	//unary->factor
	reduce: function() {
		var p0=Abe.Stack.pop();//factor
		return {
			symbolTag:Abe.Tag.UNARY,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[24]= {
	//factor->) bool (
	reduce: function() {
		var p0=Abe.Stack.pop();//)
		var p1=Abe.Stack.pop();//bool
		var p2=Abe.Stack.pop();//(
		return {
			symbolTag:Abe.Tag.FACTOR,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[25]= {
	//factor->num
	reduce: function() {
		var p0=Abe.Stack.pop();//num
		return {
			symbolTag:Abe.Tag.FACTOR,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[26]= {
	//factor->loc
	reduce: function() {
		var p0=Abe.Stack.pop();//loc
		return {
			symbolTag:Abe.Tag.FACTOR,
			value:p0.value
		}
	}
}