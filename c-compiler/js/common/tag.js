/**
 * @author Abraham
 */
if(typeof Abe ==='undefined')
	Abe= {};

Abe.Reset= function() {
	Abe.Node.labels=0;
	Abe.Temp.count=0;
	Abe.Out.reset();
}
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
	'{':1,
	'}':2,
	'ε':3,
	ID:4,
	';':5,
	'[':6,
	NUM:7,
	']':8,
	BASIC:9,
	'=':10,
	IF:11,
	'(':12,
	')':13,
	ELSE:14,
	WHILE:15,
	DO:16,
	BREAK:17,
	OR:18,
	AND:19,
	EQ:20,
	'<':21,
	LE:22,
	'>':23,
	GE:24,
	'+':25,
	'-':26,
	'*':27,
	'/':28,
	'!':29,

	/********************/
	BLOCK:0,
	DECLS:1,
	STMTS:2,
	DECL:3,
	TYPE:4,
	STMT:5,
	LOC:6,
	BOOL:7,
	IF_STMT:8,
	JOIN:9,
	EQUALITY:10,
	REL:11,
	EXPR:12,
	TERN:13,
	UNARY:14,
	FACTOR:15,

}