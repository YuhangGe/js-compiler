/**
 * @author     Abraham [abraham1@163.com]
 * @blog:       http://yuhanghome.net
 * @address    Software Institute, Nanjing University, China
 * @约定        私有函数使用_开头，统一小写；公开函数使用Pascal命名法
 */

window.onload= function() {

	var S=new Nonterminal("S");
	var D=new Nonterminal("D");
	var T=new Nonterminal("T");
	var L=new Nonterminal("L");
	var t_i=new Terminator("int");
	var t_f=new Terminator("float");
	var t_d=new Terminator(",");
	var t_id=new Terminator("id");
	var t_nl=new Terminator(";");
	
	
	var g1=new Item(D);
	g1.Right.Symbols=[T,L,t_nl];//[T,L];
	var g2=new Item(T);
	g2.Right.Symbols=[t_i];
 	var g3=new Item(T);
	g3.Right.Symbols=[t_f];
	var g4=new Item(L);
	g4.Right.Symbols=[L,t_d,t_id];
	var g5=new Item(L);
	g5.Right.Symbols=[t_id];
	var g6=new Item(S);
	g6.Right.Symbols=[D];
	var g7=new Item(S);
	g7.Right.Symbols=[S,D];
	
	
	var Z=new Nonterminal("Z");
	var g_root=new Item(Z);
	g_root.Right.Symbols=[S,Symbol.END];

	// var Z=new Nonterminal("Z");
	// var X=new Nonterminal("X");
	// var Y=new Nonterminal("Y");
	// var t_a=new Terminator("a");
	// var t_c=new Terminator("c");
	// var t_d=new Terminator("d");
// 
	// var g1=new Item(Z);
	// g1.Right.Symbols=[t_d];
	// var g2=new Item(Z);
	// g2.Right.Symbols=[X,Y,Z];
	// var g3=new Item(Y);
	// g3.Right.Symbols=[Symbol.NULL];
	// var g4=new Item(Y);
	// g4.Right.Symbols=[t_c];
	// var g5=new Item(X);
	// g5.Right.Symbols=[t_a];
	// var g6=new Item(X);
	// g6.Right.Symbols=[Y];
// 
	// var S=new Nonterminal("S");
	// var g_root=new Item(S);
	// g_root.Right.Symbols=[Z,Symbol.END];

	//AnalysisTableCreator.InitGrammer([g1,g2,g3,g4,g5],g_root);
	AnalysisTableCreator.InitGrammer([g1,g2,g3,g4,g5,g6,g7],g_root);
	var result=AnalysisTableCreator.Create();
	//$.dprint(result);
	document.body.innerHTML=AnalysisTableCreator._output_table();
	
	
}