/**
 * @author     Abraham [abraham1@163.com]
 * @blog:       http://yuhanghome.net
 * @address    Software Institute, Nanjing University, China
 * @约定        私有函数使用_开头，统一小写；公开函数使用Pascal命名法
 */

window.onload= function() {

	var _n= Nonterminal;
	var _t = Terminator;
	
	var stmt=new _n('STMT');
	var _if=new _t('if');
	var _else =new  _t('else');
	var bool=new _n('BOOL');
	var a=new _t('a');
	var pp=new _t('++');
	
	
	var g=new Array();
	g.push(new Item(bool,[a]));
	g.push(new Item(stmt,[bool,pp]));
	var Z=new Nonterminal("Z");
	var g_root=new Item(Z);
	g_root.Right.Symbols=[stmt,Symbol.END];
	
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