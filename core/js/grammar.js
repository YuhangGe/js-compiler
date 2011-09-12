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
function func_Block(p0,BlockStatements,p2){
//Block->{ BlockStatements } 
}
function func_BlockStatements(p0){
//BlockStatements->ε 
}
function func_BlockStatements_0(BlockStatementsPrefix){
//BlockStatements->BlockStatementsPrefix 
}
function func_BlockStatementsPrefix(Statement){
//BlockStatementsPrefix->Statement 
}
function func_BlockStatementsPrefix_0(BlockStatementsPrefix,Statement){
//BlockStatementsPrefix->BlockStatementsPrefix Statement 
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
function func_AssignmentExpression(_Number){
//AssignmentExpression->Number 
}
function func_Statement(EmptyStatement){
//Statement->EmptyStatement 
}
function func_Statement_0(ExpressionStatement,OptionalSemicolon){
//Statement->ExpressionStatement OptionalSemicolon 
}
function func_OptionalSemicolon(p0){
//OptionalSemicolon->; 
}
function func_Statement_1(Block){
//Statement->Block 
}
