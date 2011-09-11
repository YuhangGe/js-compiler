/**
 * @author Abraham
 */
if( typeof Abe === 'undefined')
	Abe = {};

Abe.Tag = {
END:0,
'ε':1,
FUNCTION:2,
';':3,
',':4,
'&&':5,
'||':6,
'&':7,
'^':8,
'|':9,
'==':10,
'!=':11,
'===':12,
'!==':13,
'<':14,
'<<':15,
'!':16,
'++':17,
'--':18,
NUMBER:19,

/********************/
PROGRAM:0,
TOPSTATEMENTS:1,
TOPSTATEMENTSPREFIX:2,
TOPSTATEMENT:3,
STATEMENT:4,
FUNCTIONDEFINITION:5,
EXPRESSIONSTATEMENT:6,
EXPRESSION:7,
EMPTYSTATEMENT:8,
ASSIGNMENTEXPRESSION:9,
OPTIONALSEMICOLON:10,
CONDITIONALEXPRESSION:11,
LOGICALOREXPRESSION:12,
LOGICALANDEXPRESSION:13,
BITWISEOREXPRESSION:14,
BITWISEANDEXPRESSION:15,
EQUALITYEXPRESSION:16,
BITWISEXOREXPRESSION:17,
RELATIONALEXPRESSION:18,
SHIFTEXPRESSION:19,
ADDITIVEEXPRESSION:20,
MULTIPLICATIVEEXPRESSION:21,
UNARYEXPRESSION:22,
POSTFIXEXPRESSION:23,
LEFTSIDEEXPRESSION:24,

}