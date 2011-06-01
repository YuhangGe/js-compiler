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
	var ST_END=new _t(';');
	
	var STMT=new _n('stmt');
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
	g.push(new Item(STMT,[LOC,OP_EQ,BOOL,ST_END]));
	g.push(new Item(STMT,[BOOL,ST_END]));
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
	
	// var S=new Nonterminal("S");
	// var D=new Nonterminal("D");
	// var T=new Nonterminal("T");
	// var L=new Nonterminal("L");
	// var t_i=new Terminator("int");
	// var t_f=new Terminator("float");
	// var t_d=new Terminator(",");
	// var t_id=new Terminator("id");
	// var t_end=new Terminator(";");
// 	
// 	
	// var g=new Array();
	// g.push(new Item())
// 	
	// var g1=new Item(D);
	// g1.Right.Symbols=[T,L];
	// var g2=new Item(T);
	// g2.Right.Symbols=[t_i];
 	// var g3=new Item(T);
	// g3.Right.Symbols=[t_f];
	// var g4=new Item(L);
	// g4.Right.Symbols=[L,t_d,t_id];
	// var g5=new Item(L);
	// g5.Right.Symbols=[t_id];
	// var g6=new Item(D);
	// g6.Right.Symbols=[Symbol.NULL];
	// var g7=new Item(S);
	// g7.Right.Symbols=[D,t_end];
	// var g8=new Item(B);
	// g8.Right.Symbols=[S];
	// var g9=new Item(B);
	// g9.Right.Symbols=[B,S]
// 	
// 	
	var Z=new Nonterminal("Z");
	var g_root=new Item(Z);
	g_root.Right.Symbols=[STMT,Symbol.END];

	
	AnalysisTableCreator.InitGrammer(g,g_root);
	var result=AnalysisTableCreator.Create();
	//$.dprint(result);
	var r=AnalysisTableCreator._output_table();
	
	$('#info').html(r.info);
	$('#tag').attr('value',r.tag);
	$('#table').attr('value',r.table);
	$('#grammar').attr('value',r.grammar);
}