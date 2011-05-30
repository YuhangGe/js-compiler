/**
 * @author Abraham
 */
if(typeof Abe ==='undefined')
	Abe={};

	
Abe.Tag={
	UNDEF:-1,
	
	AND:256,OR:257,	NOT:258,EQ:259,NE:260,LE:261,GE:262,
	INT:2,BYTE:264,CHAR:265,VOID:266,FLOAT:3,
	IF:267,ELSE:268,WHILE:269,DO:270,FOR:271,BREAK:272,CONTINUE:273,
	FUNCTION:274,RETURN:275,
	STR:276,NUM:277,
	TEMP:279,MINUS:280,INDEX:281,BASIC:282,
	ID:5,END:0,
	
	'{':285,
	'}':286,
	';':1,
	',':4,
	'(':289,
	')':290,
	'&':291,
	'|':292,
	'!':293,
	'=':294,
	
	/********************/
	S:0,
	D:1,
	T:2,
	L:3
}



