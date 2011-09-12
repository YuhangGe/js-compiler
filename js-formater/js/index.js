/**
 * @author Abraham
 */
function check(){
	if(console.clear)
		console.clear();
	var text=$.$("input").value;
	JSCompiler=new Abe.Parser(new Abe.Lexer(text));
	JSCompiler.compile();
	
	
}
