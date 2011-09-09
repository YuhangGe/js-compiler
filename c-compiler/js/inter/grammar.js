var _stmts=null;
var envStack=new Array();
var breakStack=new Array(Abe.Stmt.Null);
var topEnv=null;
var used=0;
function last_reduce() {
	var lb=_stmts.newlabel();
	var la=_stmts.newlabel();
	//$.dprint('b:'+lb+";a"+la);
	_stmts.emitlabel(lb);
	_stmts.gen(lb,la);
	_stmts.emitlabel(la);
}

function func_block(block_begin,decls,stmts,p3) {
	//block->block_begin decls stmts }
	_stmts=stmts;
	envStack.pop();
	topEnv=envStack[envStack.length-1];
	return stmts;
}

function func_block_begin(p0) {
	//block_begin->{
	envStack.push(new Abe.Env(topEnv));
	topEnv=envStack[envStack.length-1];
}

function func_decls(decls,decl) {
	//decls->decls decl
	return decl;
}

function func_decls_0(p0) {
	//decls->ε
	return null;
}

function func_decl(type,id,p2) {
	//decl->type id ;
	$.dprint(type.toString());
	var w=new Abe.Word(id,Abe.Tag.ID);
	var i=new Abe.Id(w,type,used);
	topEnv.put(id,i);
	used+=type.width;
}

function func_type(type,p1,num,p3) {
	//type->type [ num ]
	if(type instanceof Abe.Type)
		return new Abe.TArray(type,num);
	else
		return new Abe.TArray(new Abe.TArray(type.of,num),type.size,type.dim+1);
	
}

function func_type_0(basic) {
	//type->basic
	switch(basic) {
		case 'int':
			return Abe.Type.Int;
			break;
		case 'byte':
			return Abe.Type.Byte;
			break;
		case 'char':
			return Abe.Type.Char;
			break;
		case 'float':
			return Abe.Type.Float;
			break;
	}
	return new Abe.Type(basic,Abe.Tag.BASIC,1);
}

function func_stmts(stmts,stmt) {
	//stmts->stmts stmt
	return new Abe.Seq(stmts,stmt);
}

function func_stmts_0(p0) {
	//stmts->ε
	return Abe.Stmt.Null;
}

function func_stmt(loc,p1,bool,p3) {
	//stmt->loc = bool ;
	if(loc instanceof Abe.Id) {
		return new  Abe.Set(loc,bool);
	} else {
		//$.dprint(loc.dim);
		//$.dprint(loc.array.type.dim);
		if(loc.dim!==loc.array.type.dim){
			$.dprint("error:数组维数错误，声明数组"+loc.array.type.dim+"，访问只有"+loc.dim);
		}
		return new  Abe.SetElem(loc,bool);
	}
}

function func_stmt_0(_if,p1,bool,p3,stmt,if_stmt) {
	//stmt->if ( bool ) stmt if_stmt
	$.dprint('stmt->if ( bool ) stmt if_stmt ');
	if(if_stmt===null) {
		return new Abe.If(bool,stmt);
	} else {
		return new Abe.Else(bool,stmt,if_stmt);
	}
}

function func_if_stmt(_else,stmt) {
	//if_stmt->else stmt
	$.dprint('if_stmt->else stmt');
	return stmt;
}

function func_if_stmt_0(p0) {
	//if_stmt->ε
	return null;
}

function func_stmt_1(_while,p1,bool,p3,stmt) {
	//stmt->while ( bool ) stmt
	$.dprint('stmt->while ( bool ) stmt');
	return new Abe.While(bool,stmt);

}

function func_stmt_2(_do,stmt,_while,p3,bool,p5,p6) {
	//stmt->do stmt while ( bool ) ;
	return new Abe.Do(stmt,bool);
}

function func_stmt_3(_break,p1) {
	//stmt->break ;
	return new Abe.Break();
}

function func_stmt_4(block) {
	//stmt->block
	$.dprint('stmt->block');
	//$.dprint(block);
	return block;
}

function func_loc(loc,p1,bool,p3) {
	//loc->loc [ bool ]
	//$.dprint("loc->loc[bool]");
	//return new Abe.Id(loc,Abe.Type.Int,bool);
	
	if(loc instanceof Abe.Id){
		var t=loc.type.of;
		var w=new Abe.Constant(t.width);
		var t1=new Abe.Arith(new Abe.Token('*',Abe.Tag['*']),bool,w);
		return new Abe.Access(loc,t1,t);
	}else{
		var t=loc.type.of;
		if(t===undefined){
			$.dprint("error: 数组维数错误，超出。");
			return loc;
		}
		//$.dprint(loc.array.type.dim);
		var w=new Abe.Constant(t.width);
		var t1=new Abe.Arith(new Abe.Token('*',Abe.Tag['*']),bool,w);
		var t2=new Abe.Arith(new Abe.Token('+',Abe.Tag['+']),loc.index,t1);
		return new Abe.Access(loc.array,t2,t,loc.dim+1);
	}
	
}

function func_loc_0(id) {
	//loc->id
	var i=topEnv.get(id);
	//$.dprint(i.type.toString());
	if(i===null){
		$.dprint(id+" undeclared!");
	}else
		return i;
}

function func_bool(bool,OR,join) {
	//bool->bool OR join
	return new Abe.Or(new Abe.Token('||',Abe.Tag.OR),bool,join);
}

function func_bool_0(join) {
	//bool->join
	return join;
}

function func_join(join,AND,equality) {
	//join->join AND equality
	return new Abe.And(new Abe.Token('&&',Abe.Tag.AND),join,equality);
}

function func_join_0(equality) {
	//join->equality
	return equality;
}

function func_equality(equality,EQ,rel) {
	//equality->equality EQ rel
	return new Abe.Rel(new Abe.Token('==',Abe.Tag.EQ),equality,rel);
}

function func_equality_0(rel) {
	//equality->rel
	return rel;
}

function func_rel(expr,p1,expr0) {
	//rel->expr < expr
	return new Abe.Rel(new Abe.Token('<',Abe.Tag['<']),expr,expr0)
}

function func_rel_0(expr,LE,expr0) {
	//rel->expr LE expr
	return new Abe.Rel(new Abe.Token('<=',Abe.Tag.LE),expr,expr0)
}

function func_rel_1(expr,p1,expr0) {
	//rel->expr > expr
	return new Abe.Rel(new Abe.Token('>',Abe.Tag['>']),expr,expr0)
}

function func_rel_2(expr,GE,expr0) {
	//rel->expr GE expr
	return new Abe.Rel(new Abe.Token('>=',Abe.Tag.GE),expr,expr0)
}

function func_rel_3(expr) {
	//rel->expr
	return expr;
}

function func_expr(expr,p1,tern) {
	//expr->expr + tern
	return new Abe.Arith(new Abe.Token('+',Abe.Tag['+']),expr,tern);
}

function func_expr_0(expr,p1,tern) {
	//expr->expr - tern
	return new Abe.Arith(new Abe.Token('-',Abe.Tag['-']),expr,tern);
}

function func_expr_1(tern) {
	//expr->tern
	return tern;
}

function func_tern(tern,p1,unary) {
	//tern->tern * unary
	return new Abe.Arith(new Abe.Token('*',Abe.Tag['*']),tern,unary);
}

function func_tern_0(tern,p1,unary) {
	//tern->tern / unary
	return new Abe.Arith(new Abe.Token('/',Abe.Tag['/']),tern,unary);
}

function func_tern_1(unary) {
	//tern->unary
	return unary;
}

function func_unary(p0,unary) {
	//unary->! unary
	return new Abe.Not(new Abe.Token('!',Abe.Tag['!']),unary);
}

function func_unary_0(p0,unary) {
	//unary->- unary
	return new Abe.Unary(Abe.Word.minus,unary);
}

function func_unary_1(factor) {
	//unary->factor
	return factor;
}

function func_factor(p0,bool,p2) {
	//factor->( bool )
	return bool;
}

function func_factor_0(num) {
	//factor->num
	return new Abe.Constant(num);
}

function func_factor_1(loc) {
	//factor->loc
	return loc;
}