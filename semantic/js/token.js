Abe.Token=function(id,value,type){
	this.id=id;
	this.value=value;
	this.type=type;
}
Abe.Token.WHILE=new Abe.Token(7,'while',Abe.Global.WHILE);
Abe.Token.EOF=new Abe.Token(8,'eof',Abe.Global.EOF);

Abe.Token.KEYWORDS={
	'while':Abe.Token.WHILE,
	'if':Abe.Token.IF
}
