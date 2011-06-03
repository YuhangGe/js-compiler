ABE_LR_GRAMMARS=new Array();
ABE_LR_GRAMMARS[0]= {
	//block->{ decls stmts }
	reduce: function() {
		var p0=Abe.Stack.pop().value;//}
		var p1=Abe.Stack.pop().value;//stmts
		var p2=Abe.Stack.pop().value;//decls
		var p3=Abe.Stack.pop().value;//{
		var value=func_0_block(p3,p2,p1,p0);
		return {
			symbolTag:Abe.Tag.BLOCK,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[1]= {
	//decls->decls decl
	reduce: function() {
		var p0=Abe.Stack.pop().value;//decl
		var p1=Abe.Stack.pop().value;//decls
		var value=func_1_decls(p1,p0);
		return {
			symbolTag:Abe.Tag.DECLS,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[2]= {
	//decls->ε
	reduce: function() {
		var p0=Abe.Stack.pop().value;//ε
		var value=func_2_decls(p0);
		return {
			symbolTag:Abe.Tag.DECLS,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[3]= {
	//decl->type id ;
	reduce: function() {
		var p0=Abe.Stack.pop().value;//;
		var p1=Abe.Stack.pop().value;//id
		var p2=Abe.Stack.pop().value;//type
		var value=func_3_decl(p2,p1,p0);
		return {
			symbolTag:Abe.Tag.DECL,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[4]= {
	//type->type [ num ]
	reduce: function() {
		var p0=Abe.Stack.pop().value;//]
		var p1=Abe.Stack.pop().value;//num
		var p2=Abe.Stack.pop().value;//[
		var p3=Abe.Stack.pop().value;//type
		var value=func_4_type(p3,p2,p1,p0);
		return {
			symbolTag:Abe.Tag.TYPE,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[5]= {
	//type->basic
	reduce: function() {
		var p0=Abe.Stack.pop().value;//basic
		var value=func_5_type(p0);
		return {
			symbolTag:Abe.Tag.TYPE,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[6]= {
	//stmts->stmts stmt
	reduce: function() {
		var p0=Abe.Stack.pop().value;//stmt
		var p1=Abe.Stack.pop().value;//stmts
		var value=func_6_stmts(p1,p0);
		return {
			symbolTag:Abe.Tag.STMTS,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[7]= {
	//stmts->ε
	reduce: function() {
		var p0=Abe.Stack.pop().value;//ε
		var value=func_7_stmts(p0);
		return {
			symbolTag:Abe.Tag.STMTS,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[8]= {
	//stmt->loc = bool ;
	reduce: function() {
		var p0=Abe.Stack.pop().value;//;
		var p1=Abe.Stack.pop().value;//bool
		var p2=Abe.Stack.pop().value;//=
		var p3=Abe.Stack.pop().value;//loc
		var value=func_8_stmt(p3,p2,p1,p0);
		return {
			symbolTag:Abe.Tag.STMT,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[9]= {
	//stmt->if ( bool ) stmt
	reduce: function() {
		var p0=Abe.Stack.pop().value;//stmt
		var p1=Abe.Stack.pop().value;//)
		var p2=Abe.Stack.pop().value;//bool
		var p3=Abe.Stack.pop().value;//(
		var p4=Abe.Stack.pop().value;//if
		var value=func_9_stmt(p4,p3,p2,p1,p0);
		return {
			symbolTag:Abe.Tag.STMT,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[10]= {
	//stmt->if ( bool ) stmt else stmt
	reduce: function() {
		var p0=Abe.Stack.pop().value;//stmt
		var p1=Abe.Stack.pop().value;//else
		var p2=Abe.Stack.pop().value;//stmt
		var p3=Abe.Stack.pop().value;//)
		var p4=Abe.Stack.pop().value;//bool
		var p5=Abe.Stack.pop().value;//(
		var p6=Abe.Stack.pop().value;//if
		var value=func_10_stmt(p6,p5,p4,p3,p2,p1,p0);
		return {
			symbolTag:Abe.Tag.STMT,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[11]= {
	//stmt->while ( bool ) stmt
	reduce: function() {
		var p0=Abe.Stack.pop().value;//stmt
		var p1=Abe.Stack.pop().value;//)
		var p2=Abe.Stack.pop().value;//bool
		var p3=Abe.Stack.pop().value;//(
		var p4=Abe.Stack.pop().value;//while
		var value=func_11_stmt(p4,p3,p2,p1,p0);
		return {
			symbolTag:Abe.Tag.STMT,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[12]= {
	//stmt->do stmt while ( bool ) ;
	reduce: function() {
		var p0=Abe.Stack.pop().value;//;
		var p1=Abe.Stack.pop().value;//)
		var p2=Abe.Stack.pop().value;//bool
		var p3=Abe.Stack.pop().value;//(
		var p4=Abe.Stack.pop().value;//while
		var p5=Abe.Stack.pop().value;//stmt
		var p6=Abe.Stack.pop().value;//do
		var value=func_12_stmt(p6,p5,p4,p3,p2,p1,p0);
		return {
			symbolTag:Abe.Tag.STMT,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[13]= {
	//stmt->break ;
	reduce: function() {
		var p0=Abe.Stack.pop().value;//;
		var p1=Abe.Stack.pop().value;//break
		var value=func_13_stmt(p1,p0);
		return {
			symbolTag:Abe.Tag.STMT,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[14]= {
	//stmt->block
	reduce: function() {
		var p0=Abe.Stack.pop().value;//block
		var value=func_14_stmt(p0);
		return {
			symbolTag:Abe.Tag.STMT,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[15]= {
	//loc->loc [ bool ]
	reduce: function() {
		var p0=Abe.Stack.pop().value;//]
		var p1=Abe.Stack.pop().value;//bool
		var p2=Abe.Stack.pop().value;//[
		var p3=Abe.Stack.pop().value;//loc
		var value=func_15_loc(p3,p2,p1,p0);
		return {
			symbolTag:Abe.Tag.LOC,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[16]= {
	//loc->id
	reduce: function() {
		var p0=Abe.Stack.pop().value;//id
		var value=func_16_loc(p0);
		return {
			symbolTag:Abe.Tag.LOC,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[17]= {
	//bool->bool OR join
	reduce: function() {
		var p0=Abe.Stack.pop().value;//join
		var p1=Abe.Stack.pop().value;//OR
		var p2=Abe.Stack.pop().value;//bool
		var value=func_17_bool(p2,p1,p0);
		return {
			symbolTag:Abe.Tag.BOOL,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[18]= {
	//bool->join
	reduce: function() {
		var p0=Abe.Stack.pop().value;//join
		var value=func_18_bool(p0);
		return {
			symbolTag:Abe.Tag.BOOL,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[19]= {
	//join->join AND equality
	reduce: function() {
		var p0=Abe.Stack.pop().value;//equality
		var p1=Abe.Stack.pop().value;//AND
		var p2=Abe.Stack.pop().value;//join
		var value=func_19_join(p2,p1,p0);
		return {
			symbolTag:Abe.Tag.JOIN,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[20]= {
	//join->equality
	reduce: function() {
		var p0=Abe.Stack.pop().value;//equality
		var value=func_20_join(p0);
		return {
			symbolTag:Abe.Tag.JOIN,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[21]= {
	//equality->equality EQ rel
	reduce: function() {
		var p0=Abe.Stack.pop().value;//rel
		var p1=Abe.Stack.pop().value;//EQ
		var p2=Abe.Stack.pop().value;//equality
		var value=func_21_equality(p2,p1,p0);
		return {
			symbolTag:Abe.Tag.EQUALITY,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[22]= {
	//equality->rel
	reduce: function() {
		var p0=Abe.Stack.pop().value;//rel
		var value=func_22_equality(p0);
		return {
			symbolTag:Abe.Tag.EQUALITY,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[23]= {
	//rel->expr < expr
	reduce: function() {
		var p0=Abe.Stack.pop().value;//expr
		var p1=Abe.Stack.pop().value;//<
		var p2=Abe.Stack.pop().value;//expr
		var value=func_23_rel(p2,p1,p0);
		return {
			symbolTag:Abe.Tag.REL,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[24]= {
	//rel->expr LE expr
	reduce: function() {
		var p0=Abe.Stack.pop().value;//expr
		var p1=Abe.Stack.pop().value;//LE
		var p2=Abe.Stack.pop().value;//expr
		var value=func_24_rel(p2,p1,p0);
		return {
			symbolTag:Abe.Tag.REL,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[25]= {
	//rel->expr > expr
	reduce: function() {
		var p0=Abe.Stack.pop().value;//expr
		var p1=Abe.Stack.pop().value;//>
		var p2=Abe.Stack.pop().value;//expr
		var value=func_25_rel(p2,p1,p0);
		return {
			symbolTag:Abe.Tag.REL,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[26]= {
	//rel->expr GE expr
	reduce: function() {
		var p0=Abe.Stack.pop().value;//expr
		var p1=Abe.Stack.pop().value;//GE
		var p2=Abe.Stack.pop().value;//expr
		var value=func_26_rel(p2,p1,p0);
		return {
			symbolTag:Abe.Tag.REL,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[27]= {
	//rel->expr
	reduce: function() {
		var p0=Abe.Stack.pop().value;//expr
		var value=func_27_rel(p0);
		return {
			symbolTag:Abe.Tag.REL,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[28]= {
	//expr->expr + tern
	reduce: function() {
		var p0=Abe.Stack.pop().value;//tern
		var p1=Abe.Stack.pop().value;//+
		var p2=Abe.Stack.pop().value;//expr
		var value=func_28_expr(p2,p1,p0);
		return {
			symbolTag:Abe.Tag.EXPR,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[29]= {
	//expr->expr - tern
	reduce: function() {
		var p0=Abe.Stack.pop().value;//tern
		var p1=Abe.Stack.pop().value;//-
		var p2=Abe.Stack.pop().value;//expr
		var value=func_29_expr(p2,p1,p0);
		return {
			symbolTag:Abe.Tag.EXPR,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[30]= {
	//expr->tern
	reduce: function() {
		var p0=Abe.Stack.pop().value;//tern
		var value=func_30_expr(p0);
		return {
			symbolTag:Abe.Tag.EXPR,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[31]= {
	//tern->tern * unary
	reduce: function() {
		var p0=Abe.Stack.pop().value;//unary
		var p1=Abe.Stack.pop().value;//*
		var p2=Abe.Stack.pop().value;//tern
		var value=func_31_tern(p2,p1,p0);
		return {
			symbolTag:Abe.Tag.TERN,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[32]= {
	//tern->tern / unary
	reduce: function() {
		var p0=Abe.Stack.pop().value;//unary
		var p1=Abe.Stack.pop().value;///
		var p2=Abe.Stack.pop().value;//tern
		var value=func_32_tern(p2,p1,p0);
		return {
			symbolTag:Abe.Tag.TERN,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[33]= {
	//tern->unary
	reduce: function() {
		var p0=Abe.Stack.pop().value;//unary
		var value=func_33_tern(p0);
		return {
			symbolTag:Abe.Tag.TERN,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[34]= {
	//unary->! unary
	reduce: function() {
		var p0=Abe.Stack.pop().value;//unary
		var p1=Abe.Stack.pop().value;//!
		var value=func_34_unary(p1,p0);
		return {
			symbolTag:Abe.Tag.UNARY,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[35]= {
	//unary->- unary
	reduce: function() {
		var p0=Abe.Stack.pop().value;//unary
		var p1=Abe.Stack.pop().value;//-
		var value=func_35_unary(p1,p0);
		return {
			symbolTag:Abe.Tag.UNARY,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[36]= {
	//unary->factor
	reduce: function() {
		var p0=Abe.Stack.pop().value;//factor
		var value=func_36_unary(p0);
		return {
			symbolTag:Abe.Tag.UNARY,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[37]= {
	//factor->( bool )
	reduce: function() {
		var p0=Abe.Stack.pop().value;//)
		var p1=Abe.Stack.pop().value;//bool
		var p2=Abe.Stack.pop().value;//(
		var value=func_37_factor(p2,p1,p0);
		return {
			symbolTag:Abe.Tag.FACTOR,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[38]= {
	//factor->num
	reduce: function() {
		var p0=Abe.Stack.pop().value;//num
		var value=func_38_factor(p0);
		return {
			symbolTag:Abe.Tag.FACTOR,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[39]= {
	//factor->loc
	reduce: function() {
		var p0=Abe.Stack.pop().value;//loc
		var value=func_39_factor(p0);
		return {
			symbolTag:Abe.Tag.FACTOR,
			value:value
		}
	}
}