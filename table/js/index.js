/**
 * @author     Abraham [abraham1@163.com]
 * @blog:       http://yuhanghome.net
 * @address    Software Institute, Nanjing University, China
 * @约定        私有函数使用_开头，统一小写；公开函数使用Pascal命名法
 */

window.onload=function(){

	var D=new Nonterminal("D");
	var T=new Nonterminal("T");
	var L=new Nonterminal("L");
	var t_i=new Terminator("int");
	var t_f=new Terminator("float");
	var t_d=new Terminator(",");
	var t_id=new Terminator("id");
	
	
	var g1=new Item(D);
	g1.Right.Symbols=[T,L];
	var g2=new Item(T);
	g2.Right.Symbols=[t_i];
	var g3=new Item(T);
	g3.Right.Symbols=[t_f];
	var g4=new Item(L);
	g4.Right.Symbols=[L,t_d,t_id];
	var g5=new Item(L);
	g5.Right.Symbols=[t_id];
	
	var Z=new Nonterminal("Z");
	var g_root=new Item(Z);
	g_root.Right.Symbols=[D,Symbol.ENDSYMBOL];
	
	
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
	
	AnalysisTableCreator.InitGrammer([g1,g2,g3,g4,g5],g_root);	
	//AnalysisTableCreator.InitGrammer([g1,g2,g3,g4,g5],g_root);	
	var result=AnalysisTableCreator.Create();
	$.dprint(result);
	document.body.innerHTML=AnalysisTableCreator._output_table();
	
}
