ABE_LR_GRAMMARS=new Array();
ABE_LR_GRAMMARS[0]= {
	//block->block_begin decls stmts }
	reduce: function() {
		var p0=Abe.Stack.pop().value;//}
		var p1=Abe.Stack.pop().value;//stmts
		var p2=Abe.Stack.pop().value;//decls
		var p3=Abe.Stack.pop().value;//block_begin
		var value=func_block(p3,p2,p1,p0);
		return {
			symbolTag:Abe.Tag.BLOCK,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[1]= {
	//block_begin->{
	reduce: function() {
		var p0=Abe.Stack.pop().value;//{
		var value=func_block_begin(p0);
		return {
			symbolTag:Abe.Tag.BLOCK_BEGIN,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[2]= {
	//decls->decls decl
	reduce: function() {
		var p0=Abe.Stack.pop().value;//decl
		var p1=Abe.Stack.pop().value;//decls
		var value=func_decls(p1,p0);
		return {
			symbolTag:Abe.Tag.DECLS,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[3]= {
	//decls->ε
	reduce: function() {
		var p0=Abe.Stack.pop().value;//ε
		var value=func_decls_0(p0);
		return {
			symbolTag:Abe.Tag.DECLS,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[4]= {
	//decl->type id ;
	reduce: function() {
		var p0=Abe.Stack.pop().value;//;
		var p1=Abe.Stack.pop().value;//id
		var p2=Abe.Stack.pop().value;//type
		var value=func_decl(p2,p1,p0);
		return {
			symbolTag:Abe.Tag.DECL,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[5]= {
	//type->type [ num ]
	reduce: function() {
		var p0=Abe.Stack.pop().value;//]
		var p1=Abe.Stack.pop().value;//num
		var p2=Abe.Stack.pop().value;//[
		var p3=Abe.Stack.pop().value;//type
		var value=func_type(p3,p2,p1,p0);
		return {
			symbolTag:Abe.Tag.TYPE,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[6]= {
	//type->basic
	reduce: function() {
		var p0=Abe.Stack.pop().value;//basic
		var value=func_type_0(p0);
		return {
			symbolTag:Abe.Tag.TYPE,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[7]= {
	//stmts->stmts stmt
	reduce: function() {
		var p0=Abe.Stack.pop().value;//stmt
		var p1=Abe.Stack.pop().value;//stmts
		var value=func_stmts(p1,p0);
		return {
			symbolTag:Abe.Tag.STMTS,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[8]= {
	//stmts->ε
	reduce: function() {
		var p0=Abe.Stack.pop().value;//ε
		var value=func_stmts_0(p0);
		return {
			symbolTag:Abe.Tag.STMTS,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[9]= {
	//stmt->loc = bool ;
	reduce: function() {
		var p0=Abe.Stack.pop().value;//;
		var p1=Abe.Stack.pop().value;//bool
		var p2=Abe.Stack.pop().value;//=
		var p3=Abe.Stack.pop().value;//loc
		var value=func_stmt(p3,p2,p1,p0);
		return {
			symbolTag:Abe.Tag.STMT,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[10]= {
	//stmt->if ( bool ) stmt if_stmt
	reduce: function() {
		var p0=Abe.Stack.pop().value;//if_stmt
		var p1=Abe.Stack.pop().value;//stmt
		var p2=Abe.Stack.pop().value;//)
		var p3=Abe.Stack.pop().value;//bool
		var p4=Abe.Stack.pop().value;//(
		var p5=Abe.Stack.pop().value;//if
		var value=func_stmt_0(p5,p4,p3,p2,p1,p0);
		return {
			symbolTag:Abe.Tag.STMT,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[11]= {
	//if_stmt->else stmt
	reduce: function() {
		var p0=Abe.Stack.pop().value;//stmt
		var p1=Abe.Stack.pop().value;//else
		var value=func_if_stmt(p1,p0);
		return {
			symbolTag:Abe.Tag.IF_STMT,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[12]= {
	//if_stmt->ε
	reduce: function() {
		var p0=Abe.Stack.pop().value;//ε
		var value=func_if_stmt_0(p0);
		return {
			symbolTag:Abe.Tag.IF_STMT,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[13]= {
	//stmt->while ( bool ) stmt
	reduce: function() {
		var p0=Abe.Stack.pop().value;//stmt
		var p1=Abe.Stack.pop().value;//)
		var p2=Abe.Stack.pop().value;//bool
		var p3=Abe.Stack.pop().value;//(
		var p4=Abe.Stack.pop().value;//while
		var value=func_stmt_1(p4,p3,p2,p1,p0);
		return {
			symbolTag:Abe.Tag.STMT,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[14]= {
	//stmt->do stmt while ( bool ) ;
	reduce: function() {
		var p0=Abe.Stack.pop().value;//;
		var p1=Abe.Stack.pop().value;//)
		var p2=Abe.Stack.pop().value;//bool
		var p3=Abe.Stack.pop().value;//(
		var p4=Abe.Stack.pop().value;//while
		var p5=Abe.Stack.pop().value;//stmt
		var p6=Abe.Stack.pop().value;//do
		var value=func_stmt_2(p6,p5,p4,p3,p2,p1,p0);
		return {
			symbolTag:Abe.Tag.STMT,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[15]= {
	//stmt->break ;
	reduce: function() {
		var p0=Abe.Stack.pop().value;//;
		var p1=Abe.Stack.pop().value;//break
		var value=func_stmt_3(p1,p0);
		return {
			symbolTag:Abe.Tag.STMT,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[16]= {
	//stmt->block
	reduce: function() {
		var p0=Abe.Stack.pop().value;//block
		var value=func_stmt_4(p0);
		return {
			symbolTag:Abe.Tag.STMT,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[17]= {
	//loc->loc [ bool ]
	reduce: function() {
		var p0=Abe.Stack.pop().value;//]
		var p1=Abe.Stack.pop().value;//bool
		var p2=Abe.Stack.pop().value;//[
		var p3=Abe.Stack.pop().value;//loc
		var value=func_loc(p3,p2,p1,p0);
		return {
			symbolTag:Abe.Tag.LOC,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[18]= {
	//loc->id
	reduce: function() {
		var p0=Abe.Stack.pop().value;//id
		var value=func_loc_0(p0);
		return {
			symbolTag:Abe.Tag.LOC,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[19]= {
	//bool->bool OR join
	reduce: function() {
		var p0=Abe.Stack.pop().value;//join
		var p1=Abe.Stack.pop().value;//OR
		var p2=Abe.Stack.pop().value;//bool
		var value=func_bool(p2,p1,p0);
		return {
			symbolTag:Abe.Tag.BOOL,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[20]= {
	//bool->join
	reduce: function() {
		var p0=Abe.Stack.pop().value;//join
		var value=func_bool_0(p0);
		return {
			symbolTag:Abe.Tag.BOOL,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[21]= {
	//join->join AND equality
	reduce: function() {
		var p0=Abe.Stack.pop().value;//equality
		var p1=Abe.Stack.pop().value;//AND
		var p2=Abe.Stack.pop().value;//join
		var value=func_join(p2,p1,p0);
		return {
			symbolTag:Abe.Tag.JOIN,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[22]= {
	//join->equality
	reduce: function() {
		var p0=Abe.Stack.pop().value;//equality
		var value=func_join_0(p0);
		return {
			symbolTag:Abe.Tag.JOIN,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[23]= {
	//equality->equality EQ rel
	reduce: function() {
		var p0=Abe.Stack.pop().value;//rel
		var p1=Abe.Stack.pop().value;//EQ
		var p2=Abe.Stack.pop().value;//equality
		var value=func_equality(p2,p1,p0);
		return {
			symbolTag:Abe.Tag.EQUALITY,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[24]= {
	//equality->rel
	reduce: function() {
		var p0=Abe.Stack.pop().value;//rel
		var value=func_equality_0(p0);
		return {
			symbolTag:Abe.Tag.EQUALITY,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[25]= {
	//rel->expr < expr
	reduce: function() {
		var p0=Abe.Stack.pop().value;//expr
		var p1=Abe.Stack.pop().value;//<
		var p2=Abe.Stack.pop().value;//expr
		var value=func_rel(p2,p1,p0);
		return {
			symbolTag:Abe.Tag.REL,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[26]= {
	//rel->expr LE expr
	reduce: function() {
		var p0=Abe.Stack.pop().value;//expr
		var p1=Abe.Stack.pop().value;//LE
		var p2=Abe.Stack.pop().value;//expr
		var value=func_rel_0(p2,p1,p0);
		return {
			symbolTag:Abe.Tag.REL,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[27]= {
	//rel->expr > expr
	reduce: function() {
		var p0=Abe.Stack.pop().value;//expr
		var p1=Abe.Stack.pop().value;//>
		var p2=Abe.Stack.pop().value;//expr
		var value=func_rel_1(p2,p1,p0);
		return {
			symbolTag:Abe.Tag.REL,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[28]= {
	//rel->expr GE expr
	reduce: function() {
		var p0=Abe.Stack.pop().value;//expr
		var p1=Abe.Stack.pop().value;//GE
		var p2=Abe.Stack.pop().value;//expr
		var value=func_rel_2(p2,p1,p0);
		return {
			symbolTag:Abe.Tag.REL,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[29]= {
	//rel->expr
	reduce: function() {
		var p0=Abe.Stack.pop().value;//expr
		var value=func_rel_3(p0);
		return {
			symbolTag:Abe.Tag.REL,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[30]= {
	//expr->expr + tern
	reduce: function() {
		var p0=Abe.Stack.pop().value;//tern
		var p1=Abe.Stack.pop().value;//+
		var p2=Abe.Stack.pop().value;//expr
		var value=func_expr(p2,p1,p0);
		return {
			symbolTag:Abe.Tag.EXPR,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[31]= {
	//expr->expr - tern
	reduce: function() {
		var p0=Abe.Stack.pop().value;//tern
		var p1=Abe.Stack.pop().value;//-
		var p2=Abe.Stack.pop().value;//expr
		var value=func_expr_0(p2,p1,p0);
		return {
			symbolTag:Abe.Tag.EXPR,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[32]= {
	//expr->tern
	reduce: function() {
		var p0=Abe.Stack.pop().value;//tern
		var value=func_expr_1(p0);
		return {
			symbolTag:Abe.Tag.EXPR,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[33]= {
	//tern->tern * unary
	reduce: function() {
		var p0=Abe.Stack.pop().value;//unary
		var p1=Abe.Stack.pop().value;//*
		var p2=Abe.Stack.pop().value;//tern
		var value=func_tern(p2,p1,p0);
		return {
			symbolTag:Abe.Tag.TERN,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[34]= {
	//tern->tern / unary
	reduce: function() {
		var p0=Abe.Stack.pop().value;//unary
		var p1=Abe.Stack.pop().value;///
		var p2=Abe.Stack.pop().value;//tern
		var value=func_tern_0(p2,p1,p0);
		return {
			symbolTag:Abe.Tag.TERN,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[35]= {
	//tern->unary
	reduce: function() {
		var p0=Abe.Stack.pop().value;//unary
		var value=func_tern_1(p0);
		return {
			symbolTag:Abe.Tag.TERN,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[36]= {
	//unary->! unary
	reduce: function() {
		var p0=Abe.Stack.pop().value;//unary
		var p1=Abe.Stack.pop().value;//!
		var value=func_unary(p1,p0);
		return {
			symbolTag:Abe.Tag.UNARY,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[37]= {
	//unary->- unary
	reduce: function() {
		var p0=Abe.Stack.pop().value;//unary
		var p1=Abe.Stack.pop().value;//-
		var value=func_unary_0(p1,p0);
		return {
			symbolTag:Abe.Tag.UNARY,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[38]= {
	//unary->factor
	reduce: function() {
		var p0=Abe.Stack.pop().value;//factor
		var value=func_unary_1(p0);
		return {
			symbolTag:Abe.Tag.UNARY,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[39]= {
	//factor->( bool )
	reduce: function() {
		var p0=Abe.Stack.pop().value;//)
		var p1=Abe.Stack.pop().value;//bool
		var p2=Abe.Stack.pop().value;//(
		var value=func_factor(p2,p1,p0);
		return {
			symbolTag:Abe.Tag.FACTOR,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[40]= {
	//factor->num
	reduce: function() {
		var p0=Abe.Stack.pop().value;//num
		var value=func_factor_0(p0);
		return {
			symbolTag:Abe.Tag.FACTOR,
			value:value
		}
	}
}
ABE_LR_GRAMMARS[41]= {
	//factor->loc
	reduce: function() {
		var p0=Abe.Stack.pop().value;//loc
		var value=func_factor_1(p0);
		return {
			symbolTag:Abe.Tag.FACTOR,
			value:value
		}
	}
}