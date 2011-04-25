/**
 * @author Abraham
 */
function check(){
	var text=$.$("input").value;
	JSCompiler=new LR_Engine(new Lexer(text));
	JSCompiler.compile();
}


 


 