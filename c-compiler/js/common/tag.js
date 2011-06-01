/**
 * @author Abraham
 */
if(typeof Abe ==='undefined')
	Abe= {};

Abe.Tag= {
	UNDEF:-1,

	/*	AND:256,OR:257,	NOT:258,EQ:259,NE:260,LE:261,GE:262,
	 INT:1,BYTE:264,CHAR:265,VOID:266,FLOAT:2,
	 IF:267,ELSE:268,WHILE:269,DO:270,FOR:271,BREAK:272,CONTINUE:273,
	 FUNCTION:274,RETURN:275,
	 STR:276,NUM:277,
	 TEMP:279,MINUS:280,INDEX:281,BASIC:282,
	 ID:4,
	 */
	END:0,
	'=':1,
	'[':2,
	']':3,
	ID:4,
	OR:5,
	AND:6,
	EQ:7,
	'<':8,
	LE:9,
	'>':10,
	GE:11,
	'+':12,
	'-':13,
	'*':14,
	'/':15,
	'!':16,
	'(':17,
	')':18,
	NUM:19,

	/********************/
	STMT:0,
	LOC:1,
	BOOL:2,
	JOIN:3,
	EQUALITY:4,
	REL:5,
	EXPR:6,
	TERN:7,
	UNARY:8,
	FACTOR:9,

}