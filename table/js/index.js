/**
 * @author     Abraham [abraham1@163.com]
 * @blog:       http://yuhanghome.net
 * @address    Software Institute, Nanjing University, China
 * @约定        私有函数使用_开头，统一小写；公开函数使用Pascal命名法
 */

window.onload=function(){

	var E=new Nonterminal("E");
	var T=new Nonterminal("T");
	var F=new Nonterminal("F");
	var t_plus=new Terminator("+");
	var t_mul=new Terminator("*");
	var t_qk=new Terminator("(");
	var t_hk=new Terminator(")");
	var t_i=new Terminator("i");
	
	var g1=new Item(E);
	g1.Right.Symbols=[E,t_plus,T];
	var g2=new Item(E);
	g2.Right.Symbols=[T];
	var g3=new Item(T);
	g3.Right.Symbols=[T,t_mul,F];
	var g4=new Item(T);
	g4.Right.Symbols=[F];
	var g5=new Item(F);
	g5.Right.Symbols=[t_qk,E,t_hk];
	var g6=new Item(F);
	g6.Right.Symbols=[t_i];
	
	var Z=new Nonterminal("Z");
	var g_root=new Item(Z);
	g_root.Right.Symbols=[E,Symbol.ENDSYMBOL];
	
	
//	var S=new Nonterminal("S");
//	var V=new Nonterminal("V");
//	var E=new Nonterminal("E");
//	var t_e=new Terminator("=");
//	var t_mul=new Terminator("*");
//	var t_i=new Terminator("i");
//	
//	var g1=new Item(S);
//	g1.Right.Symbols=[V,t_e,E];
//	var g2=new Item(S);
//	g2.Right.Symbols=[E];
//	var g3=new Item(V);
//	g3.Right.Symbols=[t_mul,E];
//	var g4=new Item(V);
//	g4.Right.Symbols=[t_i];
//	var g5=new Item(E);
//	g5.Right.Symbols=[V];
//	
//	var Z=new Nonterminal("Z");
//	var g_root=new Item(Z);
//	g_root.Right.Symbols=[S,Symbol.ENDSYMBOL];
	
	AnalysisTableCreator.InitGrammer([g1,g2,g3,g4,g5,g6],g_root);	
	//AnalysisTableCreator.InitGrammer([g1,g2,g3,g4,g5],g_root);	
	document.body.innerHTML=	AnalysisTableCreator.Create();
	
}
