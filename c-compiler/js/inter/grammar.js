ABE_LR_GRAMMARS=new Array();
ABE_LR_GRAMMARS[0]= {
	//block->} stmts decls {
	reduce: function() {
		var p0=Abe.Stack.pop();//}
		var p1=Abe.Stack.pop();//stmts
		var p2=Abe.Stack.pop();//decls
		var p3=Abe.Stack.pop();//{
		return {
			symbolTag:Abe.Tag.BLOCK,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[1]= {
	//decls->decl decls
	reduce: function() {
		var p0=Abe.Stack.pop();//decl
		var p1=Abe.Stack.pop();//decls
		return {
			symbolTag:Abe.Tag.DECLS,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[2]= {
	//decls->ε
	reduce: function() {
		var p0=Abe.Stack.pop();//ε
		return {
			symbolTag:Abe.Tag.DECLS,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[3]= {
	//decl->; id type
	reduce: function() {
		var p0=Abe.Stack.pop();//;
		var p1=Abe.Stack.pop();//id
		var p2=Abe.Stack.pop();//type
		return {
			symbolTag:Abe.Tag.DECL,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[4]= {
	//type->] num [ type
	reduce: function() {
		var p0=Abe.Stack.pop();//]
		var p1=Abe.Stack.pop();//num
		var p2=Abe.Stack.pop();//[
		var p3=Abe.Stack.pop();//type
		return {
			symbolTag:Abe.Tag.TYPE,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[5]= {
	//type->basic
	reduce: function() {
		var p0=Abe.Stack.pop();//basic
		return {
			symbolTag:Abe.Tag.TYPE,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[6]= {
	//stmts->stmt stmts
	reduce: function() {
		var p0=Abe.Stack.pop();//stmt
		var p1=Abe.Stack.pop();//stmts
		return {
			symbolTag:Abe.Tag.STMTS,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[7]= {
	//stmts->ε
	reduce: function() {
		var p0=Abe.Stack.pop();//ε
		return {
			symbolTag:Abe.Tag.STMTS,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[8]= {
	//stmt->; bool = loc
	reduce: function() {
		var p0=Abe.Stack.pop();//;
		var p1=Abe.Stack.pop();//bool
		var p2=Abe.Stack.pop();//=
		var p3=Abe.Stack.pop();//loc
		return {
			symbolTag:Abe.Tag.STMT,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[9]= {
	//stmt->stmt ) bool ( if
	reduce: function() {
		var p0=Abe.Stack.pop();//stmt
		var p1=Abe.Stack.pop();//)
		var p2=Abe.Stack.pop();//bool
		var p3=Abe.Stack.pop();//(
		var p4=Abe.Stack.pop();//if
		return {
			symbolTag:Abe.Tag.STMT,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[10]= {
	//stmt->stmt else stmt ) bool ( if
	reduce: function() {
		var p0=Abe.Stack.pop();//stmt
		var p1=Abe.Stack.pop();//else
		var p2=Abe.Stack.pop();//stmt
		var p3=Abe.Stack.pop();//)
		var p4=Abe.Stack.pop();//bool
		var p5=Abe.Stack.pop();//(
		var p6=Abe.Stack.pop();//if
		return {
			symbolTag:Abe.Tag.STMT,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[11]= {
	//stmt->stmt ) bool ( while
	reduce: function() {
		var p0=Abe.Stack.pop();//stmt
		var p1=Abe.Stack.pop();//)
		var p2=Abe.Stack.pop();//bool
		var p3=Abe.Stack.pop();//(
		var p4=Abe.Stack.pop();//while
		return {
			symbolTag:Abe.Tag.STMT,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[12]= {
	//stmt->; ) bool ( while stmt do
	reduce: function() {
		var p0=Abe.Stack.pop();//;
		var p1=Abe.Stack.pop();//)
		var p2=Abe.Stack.pop();//bool
		var p3=Abe.Stack.pop();//(
		var p4=Abe.Stack.pop();//while
		var p5=Abe.Stack.pop();//stmt
		var p6=Abe.Stack.pop();//do
		return {
			symbolTag:Abe.Tag.STMT,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[13]= {
	//stmt->; break
	reduce: function() {
		var p0=Abe.Stack.pop();//;
		var p1=Abe.Stack.pop();//break
		return {
			symbolTag:Abe.Tag.STMT,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[14]= {
	//stmt->block
	reduce: function() {
		var p0=Abe.Stack.pop();//block
		return {
			symbolTag:Abe.Tag.STMT,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[15]= {
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
ABE_LR_GRAMMARS[16]= {
	//loc->id
	reduce: function() {
		var p0=Abe.Stack.pop();//id
		return {
			symbolTag:Abe.Tag.LOC,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[17]= {
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
ABE_LR_GRAMMARS[18]= {
	//bool->join
	reduce: function() {
		var p0=Abe.Stack.pop();//join
		return {
			symbolTag:Abe.Tag.BOOL,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[19]= {
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
ABE_LR_GRAMMARS[20]= {
	//join->equality
	reduce: function() {
		var p0=Abe.Stack.pop();//equality
		return {
			symbolTag:Abe.Tag.JOIN,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[21]= {
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
ABE_LR_GRAMMARS[22]= {
	//equality->rel
	reduce: function() {
		var p0=Abe.Stack.pop();//rel
		return {
			symbolTag:Abe.Tag.EQUALITY,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[23]= {
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
ABE_LR_GRAMMARS[24]= {
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
ABE_LR_GRAMMARS[25]= {
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
ABE_LR_GRAMMARS[26]= {
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
ABE_LR_GRAMMARS[27]= {
	//rel->expr
	reduce: function() {
		var p0=Abe.Stack.pop();//expr
		return {
			symbolTag:Abe.Tag.REL,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[28]= {
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
ABE_LR_GRAMMARS[29]= {
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
ABE_LR_GRAMMARS[30]= {
	//expr->tern
	reduce: function() {
		var p0=Abe.Stack.pop();//tern
		return {
			symbolTag:Abe.Tag.EXPR,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[31]= {
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
ABE_LR_GRAMMARS[32]= {
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
ABE_LR_GRAMMARS[33]= {
	//tern->unary
	reduce: function() {
		var p0=Abe.Stack.pop();//unary
		return {
			symbolTag:Abe.Tag.TERN,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[34]= {
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
ABE_LR_GRAMMARS[35]= {
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
ABE_LR_GRAMMARS[36]= {
	//unary->factor
	reduce: function() {
		var p0=Abe.Stack.pop();//factor
		return {
			symbolTag:Abe.Tag.UNARY,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[37]= {
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
ABE_LR_GRAMMARS[38]= {
	//factor->num
	reduce: function() {
		var p0=Abe.Stack.pop();//num
		return {
			symbolTag:Abe.Tag.FACTOR,
			value:p0.value
		}
	}
}
ABE_LR_GRAMMARS[39]= {
	//factor->loc
	reduce: function() {
		var p0=Abe.Stack.pop();//loc
		return {
			symbolTag:Abe.Tag.FACTOR,
			value:p0.value
		}
	}
}