var _stmts=null;
function last_reduce(){
	var lb=_stmts.newlabel();
	var la=_stmts.newlabel();
	//$.dprint('b:'+lb+";a"+la);
	_stmts.emitlabel(lb);
	_stmts.gen(lb,la);
	_stmts.emitlabel(la);
}

function func_0_block(p0,decls,stmts,p3) {
	//block->{ decls stmts }
	//$.dprint(stmts);
	_stmts=stmts;
	return stmts;
}

function func_1_decls(decls,decl) {
	//decls->decls decl
	return decl;
}

function func_2_decls(p0) {
	//decls->ε
	return p0;
}

function func_3_decl(type,id,p2) {
	//decl->type id ;
	$.dprint(type.toString()+ " "+id);
	//to do
}

function func_4_type(type,p1,num,p3) {
	//type->type [ num ]
	return new Abe.TArray(type,num);
}

function func_5_type(basic) {
	//type->basic
	$.dprint(basic);
	return new Abe.Type(basic,Abe.Tag.BASIC,1);
}

function func_6_stmts(stmts,stmt) {
	//stmts->stmts stmt
	$.dprint('stmts->stmts stmt');
	//$.dprint(stmts);
	//$.dprint(stmt);
	//$.dprint('----');
	return new Abe.Seq(stmts,stmt);
}

function func_7_stmts(p0) {
	//stmts->ε
	$.dprint('stmts->ε');
	return Abe.Stmt.Null;
}

function func_8_stmt(loc,p1,bool,p3) {
	//stmt->loc = bool ;
	//var rtn=null;
	$.dprint('stmt->loc = bool');
	if(loc instanceof Abe.Id){
		return new  Abe.Set(loc,bool);
	}else{
		return new  Abe.SetElem(loc,bool);
	}
	
}

function func_9_stmt(_if,p1,bool,p3,stmt,_if_stmt){
//stmt->if ( bool ) stmt if_stmt 
	$.dprint('stmt->if ( bool ) stmt if_stmt ');
	if(_if_stmt===null){
		return new Abe.If(bool,stmt);
	}else{
		return new Abe.Else(bool,stmt,_if_stmt);
	}
	
}
function func_10_if_stmt(_else,stmt){
//if_stmt->else stmt 
	$.dprint('if_stmt->else stmt');
	return stmt;
}

// function func_9_stmt(_if,p1,bool,p3,stmt) {
	// //stmt->if ( bool ) stmt
	// return new Abe.If(bool,stmt);
// }
// 
// function func_10_stmt(_if,p1,bool,p3,stmt1,_else,stmt2) {
	// //stmt->if ( bool ) stmt else stmt
	// return new Abe.Else(bool,stmt1,stmt2);
// }

function func_11_stmt(_while,p1,bool,p3,stmt) {
	//stmt->while ( bool ) stmt
	$.dprint('stmt->while ( bool ) stmt');
	var _w=new Abe.While();
	_w.init(bool,stmt);
	return _w;
}

function func_12_stmt(_do,stmt,_while,p3,bool,p5,p6) {
	//stmt->do stmt while ( bool ) ;
	var _d=new Abe.Do();
	_d.init(bool,stmt);
	return _d;
}

function func_13_stmt(_break,p1) {
	//stmt->break ;
	return new Abe.Break();
}

function func_14_stmt(block) {
	//stmt->block
	$.dprint('stmt->block');
	//$.dprint(block);
	return block;
}

function func_15_loc(loc,p1,bool,p3) {
	//loc->loc [ bool ]
	$.dprint("loc->loc[bool]");
	//return new Abe.Id(loc,Abe.Type.Int,bool);
	return new Abe.Access(loc,bool,Abe.Type.Int);
}

function func_16_loc(id) {
	//loc->id
	return new Abe.Id(id,Abe.Type.Int,0);
}

function func_17_bool(bool,OR,join) {
	//bool->bool OR join
	return new Abe.Rel(new Abe.Token('||',Abe.Tag.OR),bool,join);
}

function func_18_bool(join) {
	//bool->join
	//$.dprint('bool->join');
	//$.dprint(join);
	return join;
}

function func_19_join(join,AND,equality) {
	//join->join AND equality
	return new Abe.Rel(new Abe.Token('&&',Abe.Tag.AND),join,equality);
}

function func_20_join(equality) {
	//join->equality
	return equality;
}

function func_21_equality(equality,EQ,rel) {
	//equality->equality EQ rel
	return new Abe.Rel(new Abe.Token('==',Abe.Tag.EQ),equality,rel);
}

function func_22_equality(rel) {
	//equality->rel
	return rel;
}

function func_23_rel(expr1,p1,expr2) {
	//rel->expr < expr
	return new Abe.Rel(new Abe.Token('<',Abe.Tag['<']),expr1,expr2)
}

function func_24_rel(expr1,LE,expr2) {
	//rel->expr LE expr
	return new Abe.Rel(new Abe.Token('<=',Abe.Tag.LE),expr1,expr2)
}

function func_25_rel(expr1,p1,expr2) {
	//rel->expr > expr
	return new Abe.Rel(new Abe.Token('>',Abe.Tag['>']),expr1,expr2)
}

function func_26_rel(expr1,GE,expr2) {
	//rel->expr GE expr
	return new Abe.Rel(new Abe.Token('>=',Abe.Tag.GE),expr1,expr2)
}

function func_27_rel(expr) {
	//rel->expr
	return expr;
}

function func_28_expr(expr,p1,tern) {
	//expr->expr + tern
	return new Abe.Arith(new Abe.Token('+',Abe.Tag['+']),expr,tern);
}

function func_29_expr(expr,p1,tern) {
	//expr->expr - tern
	return new Abe.Arith(new Abe.Token('-',Abe.Tag['-']),expr,tern);
}

function func_30_expr(tern) {
	//expr->tern
	return tern;
}

function func_31_tern(tern,p1,unary) {
	//tern->tern * unary
	return new Abe.Arith(new Abe.Token('*',Abe.Tag['*']),tern,unary);
}

function func_32_tern(tern,p1,unary) {
	//tern->tern / unary
	return new Abe.Arith(new Abe.Token('/',Abe.Tag['/']),tern,unary);
}

function func_33_tern(unary) {
	//tern->unary
	return unary;
}

function func_34_unary(p0,unary) {
	//unary->! unary
	return new Abe.Not(new Abe.Token('!',Abe.Tag['!']),unary);
}

function func_35_unary(p0,unary) {
	//unary->- unary
	return new Abe.Unary(Abe.Word.minus,unary);
}

function func_36_unary(factor) {
	//unary->factor
	return factor;
}

function func_37_factor(p0,bool,p2) {
	//factor->( bool )
	return bool;
}

function func_38_factor(num) {
	//factor->num
	//$.dprint(num);
	return new Abe.Constant(num);
}

function func_39_factor(loc) {
	//factor->loc
	return loc;
}
function func_40_if_stmt(p0){
	//if_stmt->ε 
	$.dprint('if_stmt->ε');
	return null;
}
