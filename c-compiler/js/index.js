/**
 * @author Abraham
 */
function check(){
	console.clear();
	var text=$.$("input").value;
	JSCompiler=new Abe.Parser(new Abe.Lexer(text));
	JSCompiler.compile();
	
	
}
