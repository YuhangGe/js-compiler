/**
 * @author Abraham
 */
function check(){
	var text=$.$("input").value;
	JSCompiler=new Abe.Parser(new Abe.Lexer(text));
	JSCompiler.compile();
	
	
}
