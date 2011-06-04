/**
 * @author     Abraham [abraham1@163.com]
 * @blog:       http://yuhanghome.net
 * @address    Software Institute, Nanjing University, China
 * @约定        私有函数使用_开头，统一小写；公开函数使用Pascal命名法
 */

window.onload= function() {

	var _n= Nonterminal;
	var _t = Terminator;
	
	var NUM=new _t('num');
	var ID= new _t('id');
	var BASIC=new _t('basic');
	var IF=new _t('if');
	
	var ELSE=new _t('else');
	var WHILE=new _t('while');
	var DO=new _t('do');
	var BREAK=new _t('break');
	var CON_OR=new _t('OR');
	var CON_AND=new _t('AND');
	var CON_EQ=new _t('EQ');
	var CON_NEQ=new _t('NE');
	var CON_GE =new _t('GE');
	var CON_LE=new _t('LE');
	var CON_GT=new _t('>');
	var CON_LT = new _t('<');
	var OP_OR=new _t('|');
	var OP_AND=new _t('&');
	var OP_PLUS=new _t('+');
	var OP_MINUS=new _t('-')
	var OP_MUL=new _t('*');
	var OP_DIV=new _t('/');
	var OP_NOT=new _t('!');
	var OP_EQ=new _t('=');
	var B_LEFT=new _t('(');
	var B_RIGHT=new _t(')');
	var F_LEFT=new _t('[');
	var F_RIGHT=new _t(']');
	var H_LEFT=new _t('{');
	var H_RIGHT=new _t('}');
	var ST_END=new _t(';');
	
	

	var BLOCK=new _n('block');
	var BLOCK_BEGIN=new _n('block_begin');
	var DECLS=new _n('decls');
	var DECL=new _n('decl');
	var TYPE=new _n('type');
	var STMTS=new _n('stmts');
	var STMT=new _n('stmt');
	var IF_STMT=new _n("if_stmt");
	var LOC=new _n('loc');
	var BOOL=new _n("bool");
	var JOIN=new _n('join');
	var EQUAL=new _n('equality');
	var REL=new _n('rel');
	var EXPR=new _n('expr');
	var TERN=new _n('tern');
	var UNARY=new _n('unary');
	var FACTOR=new _n('factor');
	
	var g=new Array();

	g.push(new Item(BLOCK,[BLOCK_BEGIN,DECLS,STMTS,H_RIGHT]));
	g.push(new Item(BLOCK_BEGIN,[H_LEFT]));
	
	g.push(new Item(DECLS,[DECLS,DECL]));
	g.push(new Item(DECLS,[Symbol.NULL]));
	g.push(new Item(DECL,[TYPE,ID,ST_END]));
	g.push(new Item(TYPE,[TYPE,F_LEFT,NUM,F_RIGHT]));
	g.push(new Item(TYPE,[BASIC]));
	g.push(new Item(STMTS,[STMTS,STMT]));
	g.push(new Item(STMTS,[Symbol.NULL]));
	

	g.push(new Item(STMT,[LOC,OP_EQ,BOOL,ST_END]));
	g.push(new Item(STMT,[IF,B_LEFT,BOOL,B_RIGHT,STMT,IF_STMT]));
	g.push(new Item(IF_STMT,[ELSE,STMT]));
	g.push(new Item(IF_STMT,[Symbol.NULL]));
	//g.push(new Item(STMT,[IF,B_LEFT,BOOL,B_RIGHT,STMT,ELSE,STMT]));
	g.push(new Item(STMT,[WHILE,B_LEFT,BOOL,B_RIGHT,STMT]));
	g.push(new Item(STMT,[DO,STMT,WHILE,B_LEFT,BOOL,B_RIGHT,ST_END]));
	g.push(new Item(STMT,[BREAK,ST_END]));
	g.push(new Item(STMT,[BLOCK]));

	
	g.push(new Item(LOC,[LOC,F_LEFT,BOOL,F_RIGHT]));
	g.push(new Item(LOC,[ID]));
	g.push(new Item(BOOL,[BOOL,CON_OR,JOIN]));
	g.push(new Item(BOOL,[JOIN]));
	g.push(new Item(JOIN,[JOIN,CON_AND,EQUAL]));
	g.push(new Item(JOIN,[EQUAL]));
	g.push(new Item(EQUAL,[EQUAL,CON_EQ,REL]));
	g.push(new Item(EQUAL,[REL]));
	g.push(new Item(REL,[EXPR,CON_LT,EXPR]));
	g.push(new Item(REL,[EXPR,CON_LE,EXPR]));
	g.push(new Item(REL,[EXPR,CON_GT,EXPR]));
	g.push(new Item(REL,[EXPR,CON_GE,EXPR]));
	g.push(new Item(REL,[EXPR]));
	g.push(new Item(EXPR,[EXPR,OP_PLUS,TERN]));
	g.push(new Item(EXPR,[EXPR,OP_MINUS,TERN]));
	g.push(new Item(EXPR,[TERN]));
	g.push(new Item(TERN,[TERN,OP_MUL,UNARY]));
	g.push(new Item(TERN,[TERN,OP_DIV,UNARY]));
	g.push(new Item(TERN,[UNARY]));
	g.push(new Item(UNARY,[OP_NOT,UNARY]));
	g.push(new Item(UNARY,[OP_MINUS,UNARY]));
	g.push(new Item(UNARY,[FACTOR]));
	g.push(new Item(FACTOR,[B_LEFT,BOOL,B_RIGHT]));
	g.push(new Item(FACTOR,[NUM]));
	g.push(new Item(FACTOR,[LOC]));
	
	//g.push(new Item(BLOCK,[BLOCK,STMT]));
	//g.push(new Item(BLOCK,[Symbol.NULL]));
	// g.push(new Item(STMT,[IF,ID,STMT,BLOCK]));
	// g.push(new Item(BLOCK,[ELSE,STMT]));
	// g.push(new Item(BLOCK,[Symbol.NULL]));
	// g.push(new Item(STMT,[BASIC]));
	/*
	 var E=new Nonterminal("E");
	 var T=new _n("T");
	 var F=new _n("F");
	 //var D=new Nonterminal("D");
	 //var T=new Nonterminal("T");
	// var L=new Nonterminal("L");
	 var t_i=new Terminator("i");
	 var t_l=new Terminator("(");
	 var t_r=new Terminator(")");
	 var t_p=new Terminator("+");
	 var t_m=new Terminator("*");
// 	
// 	
	g.push(new Item(E,[T,F]));
	g.push(new Item(T,[t_p]));
	g.push(new Item(T,[Symbol.NULL]));
	g.push(new Item(F,[t_m]));
	g.push(new Item(F,[Symbol.NULL]));
// 	
*/
	var Z=new Nonterminal("Z");
	var g_root=new Item(Z);
	g_root.Right.Symbols=[BLOCK,Symbol.END];

	
	AnalysisTableCreator.InitGrammer(g,g_root);
	var result=AnalysisTableCreator.Create();
	//$.dprint(result);
	var r=AnalysisTableCreator._output_table();
	
	$('#info').html(r.info);
	$('#tag').attr('value',r.tag);
	$('#table').attr('value',r.table);
	$('#reduce').attr('value',r.reduce);
	$('#grammar').attr('value',r.grammar);
}