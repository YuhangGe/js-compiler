/**
 * @author Abraham
 */
function check(){
	var text=$.$("input").value;
	JSCompiler=new Abe.LR_Parser(new Abe.Lexer(text));
	JSCompiler.compile();
}


 


 