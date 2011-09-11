ABE_LR_GRAMMARS=new Array();
ABE_LR_GRAMMARS[0]= {
//Program->TopStatements 
reduce: function() {
var p0=Abe.Stack.pop().value;//TopStatements
var value=func_Program(p0);
return {
	symbolTag:Abe.Tag.PROGRAM,
value:value
}
}
}
ABE_LR_GRAMMARS[1]= {
//TopStatements->ε 
reduce: function() {
var p0=Abe.Stack.pop().value;//ε
var value=func_TopStatements(p0);
return {
	symbolTag:Abe.Tag.TOPSTATEMENTS,
value:value
}
}
}
ABE_LR_GRAMMARS[2]= {
//TopStatements->TopStatementsPrefix 
reduce: function() {
var p0=Abe.Stack.pop().value;//TopStatementsPrefix
var value=func_TopStatements_0(p0);
return {
	symbolTag:Abe.Tag.TOPSTATEMENTS,
value:value
}
}
}
ABE_LR_GRAMMARS[3]= {
//TopStatementsPrefix->TopStatement 
reduce: function() {
var p0=Abe.Stack.pop().value;//TopStatement
var value=func_TopStatementsPrefix(p0);
return {
	symbolTag:Abe.Tag.TOPSTATEMENTSPREFIX,
value:value
}
}
}
ABE_LR_GRAMMARS[4]= {
//TopStatementsPrefix->TopStatementsPrefix TopStatement 
reduce: function() {
var p0=Abe.Stack.pop().value;//TopStatement
var p1=Abe.Stack.pop().value;//TopStatementsPrefix
var value=func_TopStatementsPrefix_0(p1,p0);
return {
	symbolTag:Abe.Tag.TOPSTATEMENTSPREFIX,
value:value
}
}
}
ABE_LR_GRAMMARS[5]= {
//TopStatement->Statement 
reduce: function() {
var p0=Abe.Stack.pop().value;//Statement
var value=func_TopStatement(p0);
return {
	symbolTag:Abe.Tag.TOPSTATEMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[6]= {
//TopStatement->FunctionDefinition 
reduce: function() {
var p0=Abe.Stack.pop().value;//FunctionDefinition
var value=func_TopStatement_0(p0);
return {
	symbolTag:Abe.Tag.TOPSTATEMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[7]= {
//FunctionDefinition->function 
reduce: function() {
var p0=Abe.Stack.pop().value;//function
var value=func_FunctionDefinition(p0);
return {
	symbolTag:Abe.Tag.FUNCTIONDEFINITION,
value:value
}
}
}
ABE_LR_GRAMMARS[8]= {
//ExpressionStatement->Expression 
reduce: function() {
var p0=Abe.Stack.pop().value;//Expression
var value=func_ExpressionStatement(p0);
return {
	symbolTag:Abe.Tag.EXPRESSIONSTATEMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[9]= {
//EmptyStatement->; 
reduce: function() {
var p0=Abe.Stack.pop().value;//;
var value=func_EmptyStatement(p0);
return {
	symbolTag:Abe.Tag.EMPTYSTATEMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[10]= {
//Expression->AssignmentExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//AssignmentExpression
var value=func_Expression(p0);
return {
	symbolTag:Abe.Tag.EXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[11]= {
//Expression->Expression , AssignmentExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//AssignmentExpression
var p1=Abe.Stack.pop().value;//,
var p2=Abe.Stack.pop().value;//Expression
var value=func_Expression_0(p2,p1,p0);
return {
	symbolTag:Abe.Tag.EXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[12]= {
//Statement->EmptyStatement 
reduce: function() {
var p0=Abe.Stack.pop().value;//EmptyStatement
var value=func_Statement(p0);
return {
	symbolTag:Abe.Tag.STATEMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[13]= {
//Statement->ExpressionStatement OptionalSemicolon 
reduce: function() {
var p0=Abe.Stack.pop().value;//OptionalSemicolon
var p1=Abe.Stack.pop().value;//ExpressionStatement
var value=func_Statement_0(p1,p0);
return {
	symbolTag:Abe.Tag.STATEMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[14]= {
//AssignmentExpression->ConditionalExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//ConditionalExpression
var value=func_AssignmentExpression(p0);
return {
	symbolTag:Abe.Tag.ASSIGNMENTEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[15]= {
//ConditionalExpression->LogicalOrExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//LogicalOrExpression
var value=func_ConditionalExpression(p0);
return {
	symbolTag:Abe.Tag.CONDITIONALEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[16]= {
//LogicalAndExpression->BitwiseOrExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//BitwiseOrExpression
var value=func_LogicalAndExpression(p0);
return {
	symbolTag:Abe.Tag.LOGICALANDEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[17]= {
//LogicalAndExpression->LogicalAndExpression && BitwiseOrExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//BitwiseOrExpression
var p1=Abe.Stack.pop().value;//&&
var p2=Abe.Stack.pop().value;//LogicalAndExpression
var value=func_LogicalAndExpression_0(p2,p1,p0);
return {
	symbolTag:Abe.Tag.LOGICALANDEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[18]= {
//LogicalOrExpression->LogicalAndExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//LogicalAndExpression
var value=func_LogicalOrExpression(p0);
return {
	symbolTag:Abe.Tag.LOGICALOREXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[19]= {
//LogicalOrExpression->LogicalOrExpression || LogicalAndExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//LogicalAndExpression
var p1=Abe.Stack.pop().value;//||
var p2=Abe.Stack.pop().value;//LogicalOrExpression
var value=func_LogicalOrExpression_0(p2,p1,p0);
return {
	symbolTag:Abe.Tag.LOGICALOREXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[20]= {
//BitwiseAndExpression->EqualityExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//EqualityExpression
var value=func_BitwiseAndExpression(p0);
return {
	symbolTag:Abe.Tag.BITWISEANDEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[21]= {
//BitwiseAndExpression->BitwiseAndExpression & EqualityExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//EqualityExpression
var p1=Abe.Stack.pop().value;//&
var p2=Abe.Stack.pop().value;//BitwiseAndExpression
var value=func_BitwiseAndExpression_0(p2,p1,p0);
return {
	symbolTag:Abe.Tag.BITWISEANDEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[22]= {
//BitwiseXorExpression->BitwiseAndExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//BitwiseAndExpression
var value=func_BitwiseXorExpression(p0);
return {
	symbolTag:Abe.Tag.BITWISEXOREXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[23]= {
//BitwiseXorExpression->BitwiseXorExpression ^ BitwiseAndExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//BitwiseAndExpression
var p1=Abe.Stack.pop().value;//^
var p2=Abe.Stack.pop().value;//BitwiseXorExpression
var value=func_BitwiseXorExpression_0(p2,p1,p0);
return {
	symbolTag:Abe.Tag.BITWISEXOREXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[24]= {
//BitwiseOrExpression->BitwiseXorExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//BitwiseXorExpression
var value=func_BitwiseOrExpression(p0);
return {
	symbolTag:Abe.Tag.BITWISEOREXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[25]= {
//BitwiseOrExpression->BitwiseOrExpression | BitwiseXorExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//BitwiseXorExpression
var p1=Abe.Stack.pop().value;//|
var p2=Abe.Stack.pop().value;//BitwiseOrExpression
var value=func_BitwiseOrExpression_0(p2,p1,p0);
return {
	symbolTag:Abe.Tag.BITWISEOREXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[26]= {
//EqualityExpression->RelationalExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//RelationalExpression
var value=func_EqualityExpression(p0);
return {
	symbolTag:Abe.Tag.EQUALITYEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[27]= {
//EqualityExpression->EqualityExpression == RelationalExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//RelationalExpression
var p1=Abe.Stack.pop().value;//==
var p2=Abe.Stack.pop().value;//EqualityExpression
var value=func_EqualityExpression_0(p2,p1,p0);
return {
	symbolTag:Abe.Tag.EQUALITYEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[28]= {
//EqualityExpression->EqualityExpression != RelationalExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//RelationalExpression
var p1=Abe.Stack.pop().value;//!=
var p2=Abe.Stack.pop().value;//EqualityExpression
var value=func_EqualityExpression_1(p2,p1,p0);
return {
	symbolTag:Abe.Tag.EQUALITYEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[29]= {
//EqualityExpression->EqualityExpression === RelationalExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//RelationalExpression
var p1=Abe.Stack.pop().value;//===
var p2=Abe.Stack.pop().value;//EqualityExpression
var value=func_EqualityExpression_2(p2,p1,p0);
return {
	symbolTag:Abe.Tag.EQUALITYEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[30]= {
//EqualityExpression->EqualityExpression !== RelationalExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//RelationalExpression
var p1=Abe.Stack.pop().value;//!==
var p2=Abe.Stack.pop().value;//EqualityExpression
var value=func_EqualityExpression_3(p2,p1,p0);
return {
	symbolTag:Abe.Tag.EQUALITYEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[31]= {
//RelationalExpression->ShiftExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//ShiftExpression
var value=func_RelationalExpression(p0);
return {
	symbolTag:Abe.Tag.RELATIONALEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[32]= {
//RelationalExpression->RelationalExpression < ShiftExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//ShiftExpression
var p1=Abe.Stack.pop().value;//<
var p2=Abe.Stack.pop().value;//RelationalExpression
var value=func_RelationalExpression_0(p2,p1,p0);
return {
	symbolTag:Abe.Tag.RELATIONALEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[33]= {
//ShiftExpression->AdditiveExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//AdditiveExpression
var value=func_ShiftExpression(p0);
return {
	symbolTag:Abe.Tag.SHIFTEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[34]= {
//ShiftExpression->ShiftExpression << AdditiveExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//AdditiveExpression
var p1=Abe.Stack.pop().value;//<<
var p2=Abe.Stack.pop().value;//ShiftExpression
var value=func_ShiftExpression_0(p2,p1,p0);
return {
	symbolTag:Abe.Tag.SHIFTEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[35]= {
//AdditiveExpression->MultiplicativeExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//MultiplicativeExpression
var value=func_AdditiveExpression(p0);
return {
	symbolTag:Abe.Tag.ADDITIVEEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[36]= {
//MultiplicativeExpression->UnaryExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//UnaryExpression
var value=func_MultiplicativeExpression(p0);
return {
	symbolTag:Abe.Tag.MULTIPLICATIVEEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[37]= {
//UnaryExpression->PostfixExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//PostfixExpression
var value=func_UnaryExpression(p0);
return {
	symbolTag:Abe.Tag.UNARYEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[38]= {
//UnaryExpression->! UnaryExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//UnaryExpression
var p1=Abe.Stack.pop().value;//!
var value=func_UnaryExpression_0(p1,p0);
return {
	symbolTag:Abe.Tag.UNARYEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[39]= {
//PostfixExpression->LeftSideExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//LeftSideExpression
var value=func_PostfixExpression(p0);
return {
	symbolTag:Abe.Tag.POSTFIXEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[40]= {
//PostfixExpression->LeftSideExpression ++ 
reduce: function() {
var p0=Abe.Stack.pop().value;//++
var p1=Abe.Stack.pop().value;//LeftSideExpression
var value=func_PostfixExpression_0(p1,p0);
return {
	symbolTag:Abe.Tag.POSTFIXEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[41]= {
//PostfixExpression->LeftSideExpression -- 
reduce: function() {
var p0=Abe.Stack.pop().value;//--
var p1=Abe.Stack.pop().value;//LeftSideExpression
var value=func_PostfixExpression_1(p1,p0);
return {
	symbolTag:Abe.Tag.POSTFIXEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[42]= {
//LeftSideExpression->Number 
reduce: function() {
var p0=Abe.Stack.pop().value;//Number
var value=func_LeftSideExpression(p0);
return {
	symbolTag:Abe.Tag.LEFTSIDEEXPRESSION,
value:value
}
}
}
