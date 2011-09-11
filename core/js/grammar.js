function func_Program(TopStatements){
//Program->TopStatements 
}
function func_TopStatements(p0){
//TopStatements->ε 
}
function func_TopStatements_0(TopStatementsPrefix){
//TopStatements->TopStatementsPrefix 
}
function func_TopStatementsPrefix(TopStatement){
//TopStatementsPrefix->TopStatement 
}
function func_TopStatementsPrefix_0(TopStatementsPrefix,TopStatement){
//TopStatementsPrefix->TopStatementsPrefix TopStatement 
}
function func_TopStatement(Statement){
//TopStatement->Statement 
}
function func_TopStatement_0(FunctionDefinition){
//TopStatement->FunctionDefinition 
}
function func_FunctionDefinition(_function){
//FunctionDefinition->function 
}
function func_ExpressionStatement(Expression){
//ExpressionStatement->Expression 
}
function func_EmptyStatement(p0){
//EmptyStatement->; 
}
function func_Expression(AssignmentExpression){
//Expression->AssignmentExpression 
}
function func_Expression_0(Expression,p1,AssignmentExpression){
//Expression->Expression , AssignmentExpression 
}
function func_Statement(EmptyStatement){
//Statement->EmptyStatement 
}
function func_Statement_0(ExpressionStatement,OptionalSemicolon){
//Statement->ExpressionStatement OptionalSemicolon 
}
function func_AssignmentExpression(ConditionalExpression){
//AssignmentExpression->ConditionalExpression 
}
function func_ConditionalExpression(LogicalOrExpression){
//ConditionalExpression->LogicalOrExpression 
}
function func_LogicalAndExpression(BitwiseOrExpression){
//LogicalAndExpression->BitwiseOrExpression 
}
function func_LogicalAndExpression_0(LogicalAndExpression,p1,BitwiseOrExpression){
//LogicalAndExpression->LogicalAndExpression && BitwiseOrExpression 
}
function func_LogicalOrExpression(LogicalAndExpression){
//LogicalOrExpression->LogicalAndExpression 
}
function func_LogicalOrExpression_0(LogicalOrExpression,p1,LogicalAndExpression){
//LogicalOrExpression->LogicalOrExpression || LogicalAndExpression 
}
function func_BitwiseAndExpression(EqualityExpression){
//BitwiseAndExpression->EqualityExpression 
}
function func_BitwiseAndExpression_0(BitwiseAndExpression,p1,EqualityExpression){
//BitwiseAndExpression->BitwiseAndExpression & EqualityExpression 
}
function func_BitwiseXorExpression(BitwiseAndExpression){
//BitwiseXorExpression->BitwiseAndExpression 
}
function func_BitwiseXorExpression_0(BitwiseXorExpression,p1,BitwiseAndExpression){
//BitwiseXorExpression->BitwiseXorExpression ^ BitwiseAndExpression 
}
function func_BitwiseOrExpression(BitwiseXorExpression){
//BitwiseOrExpression->BitwiseXorExpression 
}
function func_BitwiseOrExpression_0(BitwiseOrExpression,p1,BitwiseXorExpression){
//BitwiseOrExpression->BitwiseOrExpression | BitwiseXorExpression 
}
function func_EqualityExpression(RelationalExpression){
//EqualityExpression->RelationalExpression 
}
function func_EqualityExpression_0(EqualityExpression,p1,RelationalExpression){
//EqualityExpression->EqualityExpression == RelationalExpression 
}
function func_EqualityExpression_1(EqualityExpression,p1,RelationalExpression){
//EqualityExpression->EqualityExpression != RelationalExpression 
}
function func_EqualityExpression_2(EqualityExpression,p1,RelationalExpression){
//EqualityExpression->EqualityExpression === RelationalExpression 
}
function func_EqualityExpression_3(EqualityExpression,p1,RelationalExpression){
//EqualityExpression->EqualityExpression !== RelationalExpression 
}
function func_RelationalExpression(ShiftExpression){
//RelationalExpression->ShiftExpression 
}
function func_RelationalExpression_0(RelationalExpression,p1,ShiftExpression){
//RelationalExpression->RelationalExpression < ShiftExpression 
}
function func_ShiftExpression(AdditiveExpression){
//ShiftExpression->AdditiveExpression 
}
function func_ShiftExpression_0(ShiftExpression,p1,AdditiveExpression){
//ShiftExpression->ShiftExpression << AdditiveExpression 
}
function func_AdditiveExpression(MultiplicativeExpression){
//AdditiveExpression->MultiplicativeExpression 
}
function func_MultiplicativeExpression(UnaryExpression){
//MultiplicativeExpression->UnaryExpression 
}
function func_UnaryExpression(PostfixExpression){
//UnaryExpression->PostfixExpression 
}
function func_UnaryExpression_0(p0,UnaryExpression){
//UnaryExpression->! UnaryExpression 
}
function func_PostfixExpression(LeftSideExpression){
//PostfixExpression->LeftSideExpression 
}
function func_PostfixExpression_0(LeftSideExpression,p1){
//PostfixExpression->LeftSideExpression ++ 
}
function func_PostfixExpression_1(LeftSideExpression,p1){
//PostfixExpression->LeftSideExpression -- 
}
function func_LeftSideExpression(_Number){
//LeftSideExpression->Number 
}
