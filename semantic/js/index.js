/**
 * @author Abraham
 */
function check(){
	var text=$.$("input").value;
	JSCompiler=new LR_Parser(new Lexer(text));
	JSCompiler.compile();
}


 


 