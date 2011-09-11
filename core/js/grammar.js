function func_Program(TopStatements){
//Program->TopStatements 
}
function func_TopStatements(p0){
//TopStatements->ε 
}
function func_TopStatements_0(TopStatementsPrefix){
//TopStatements->TopStatementsPrefix 
}
function func_TopStatementsPrefix(TopStatements){
//TopStatementsPrefix->TopStatements 
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
function func_FunctionDefinition(NamedFunction){
//FunctionDefinition->NamedFunction 
}
function func_AnonymousFunction(_function,FormalParametersAndBody){
//AnonymousFunction->function FormalParametersAndBody 
}
function func_NamedFunction(_function,Identifier,FormalParametersAndBody){
//NamedFunction->function Identifier FormalParametersAndBody 
}
function func_FormalParametersAndBody(p0,FormalParameters,p2,p3,TopStatements,p5){
//FormalParametersAndBody->( FormalParameters ) { TopStatements } 
}
function func_FormalParameters(p0){
//FormalParameters->ε 
}
function func_FormalParameters_0(FormalParametersPrefix){
//FormalParameters->FormalParametersPrefix 
}
function func_FormalParametersPrefix(FormalParameter){
//FormalParametersPrefix->FormalParameter 
}
function func_FormalParametersPrefix_0(FormalParametersPrefix,p1,FormalParameter){
//FormalParametersPrefix->FormalParametersPrefix , FormalParameter 
}
function func_FormalParameter(Identifier){
//FormalParameter->Identifier 
}
function func_TryStatement(_try,Block,CatchClauses){
//TryStatement->try Block CatchClauses 
}
function func_TryStatement_0(_try,Block,FinallyClause){
//TryStatement->try Block FinallyClause 
}
function func_TryStatement_1(_try,Block,CatchClauses,FinallyClause){
//TryStatement->try Block CatchClauses FinallyClause 
}
function func_CatchClauses(CatchClause){
//CatchClauses->CatchClause 
}
function func_CatchClauses_0(CatchClauses,CatchClause){
//CatchClauses->CatchClauses CatchClause 
}
function func_CatchClause(_catch,p1,Identifier,p3,Block){
//CatchClause->catch ( Identifier ) Block 
}
function func_FinallyClause(_finally,Block){
//FinallyClause->finally Block 
}
function func_ReturnStatement(_return,OptionalExpression){
//ReturnStatement->return OptionalExpression 
}
function func_ThrowStatement(_throw,Expression){
//ThrowStatement->throw Expression 
}
function func_WithStatement(_with,ParenthesizedExpression,Statement){
//WithStatement->with ParenthesizedExpression Statement 
}
function func_ContinueStatement(_continue,OptionalLabel){
//ContinueStatement->continue OptionalLabel 
}
function func_BreakStatement(_break,OptionalLabel){
//BreakStatement->break OptionalLabel 
}
function func_OptionalLabel(p0){
//OptionalLabel->ε 
}
function func_OptionalLabel_0(Identifier){
//OptionalLabel->Identifier 
}
function func_ForStatement(_for,p1,ForInitializer,p3,OptionalExpression,p5,OptionalExpression0,p7,Statement){
//ForStatement->for ( ForInitializer ; OptionalExpression ; OptionalExpression ) Statement 
}
function func_ForStatement_0(_for,p1,ForInBinding,_in,Expression,p5,Statement){
//ForStatement->for ( ForInBinding in Expression ) Statement 
}
function func_ForInitializer(p0){
//ForInitializer->ε 
}
function func_ForInitializer_0(Expression){
//ForInitializer->Expression 
}
function func_ForInitializer_1(_var,VariableDeclarationList){
//ForInitializer->var VariableDeclarationList 
}
function func_ForInBinding(LeftSideExpression){
//ForInBinding->LeftSideExpression 
}
function func_ForInBinding_0(_var,VariableDeclaration){
//ForInBinding->var VariableDeclaration 
}
function func_DoStatement(_do,Statement,_while,ParenthesizedExpression){
//DoStatement->do Statement while ParenthesizedExpression 
}
function func_WhileStatement(_while,ParenthesizedExpression,Statement){
//WhileStatement->while ParenthesizedExpression Statement 
}
function func_SwitchStatement(_switch,ParenthesizedExpression,p2,p3){
//SwitchStatement->switch ParenthesizedExpression { } 
}
function func_SwitchStatement_0(_switch,ParenthesizedExpression,p2,CaseGroups,LastCaseGroup,p5){
//SwitchStatement->switch ParenthesizedExpression { CaseGroups LastCaseGroup } 
}
function func_CaseGroups(p0){
//CaseGroups->ε 
}
function func_CaseGroups_0(CaseGroups,CaseGroup){
//CaseGroups->CaseGroups CaseGroup 
}
function func_CaseGroup(CaseGuards,BlockStatementsPrefix){
//CaseGroup->CaseGuards BlockStatementsPrefix 
}
function func_LastCaseGroup(CaseGuards,BlockStatements){
//LastCaseGroup->CaseGuards BlockStatements 
}
function func_CaseGuards(CaseGuard){
//CaseGuards->CaseGuard 
}
function func_CaseGuards_0(CaseGuards,CaseGuard){
//CaseGuards->CaseGuards CaseGuard 
}
function func_CaseGuard(_case,Expression,p2){
//CaseGuard->case Expression : 
}
function func_CaseGuard_0(_default,p1){
//CaseGuard->default : 
}
function func_SwitchStatement_1(_switch,ParenthesizedExpression,p2,p3){
//SwitchStatement->switch ParenthesizedExpression { } 
}
function func_SwitchStatement_2(_switch,ParenthesizedExpression,p2,CaseGroups,LastCaseGroup,p5){
//SwitchStatement->switch ParenthesizedExpression { CaseGroups LastCaseGroup } 
}
function func_CaseGroups_1(p0){
//CaseGroups->ε 
}
function func_CaseGroups_2(CaseGroups,CaseGroup){
//CaseGroups->CaseGroups CaseGroup 
}
function func_CaseGroup_0(CaseGuards,BlockStatementsPrefix){
//CaseGroup->CaseGuards BlockStatementsPrefix 
}
function func_LastCaseGroup_0(CaseGuards,BlockStatements){
//LastCaseGroup->CaseGuards BlockStatements 
}
function func_CaseGuards_1(CaseGuard){
//CaseGuards->CaseGuard 
}
function func_CaseGuards_2(CaseGuards,CaseGuard){
//CaseGuards->CaseGuards CaseGuard 
}
function func_CaseGuard_1(_case,Expression,p2){
//CaseGuard->case Expression : 
}
function func_CaseGuard_2(_default,p1){
//CaseGuard->default : 
}
function func_IfStatement(_if,ParenthesizedExpression,Statement){
//IfStatement->if ParenthesizedExpression Statement 
}
function func_IfStatement_0(_if,ParenthesizedExpression,Statement,_else,Statement0){
//IfStatement->if ParenthesizedExpression Statement else Statement 
}
function func_LabeledStatement(Identifier,p1,Statement){
//LabeledStatement->Identifier : Statement 
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
function func_BlockStatementsPrefix(Statementfull){
//BlockStatementsPrefix->Statementfull 
}
function func_BlockStatementsPrefix_0(BlockStatementsPrefix,Statementfull){
//BlockStatementsPrefix->BlockStatementsPrefix Statementfull 
}
function func_VariableDefinition(_var,VariableDeclarationList){
//VariableDefinition->var VariableDeclarationList 
}
function func_VariableDeclarationList(VariableDeclaration){
//VariableDeclarationList->VariableDeclaration 
}
function func_VariableDeclarationList_0(VariableDeclarationList,p1,VariableDeclaration){
//VariableDeclarationList->VariableDeclarationList , VariableDeclaration 
}
function func_VariableDeclaration(Identifier,VariableInitializer){
//VariableDeclaration->Identifier VariableInitializer 
}
function func_VariableInitializer(p0){
//VariableInitializer->ε 
}
function func_VariableInitializer_0(AssignmentExpression){
//VariableInitializer->AssignmentExpression 
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
function func_OptionalExpression(Expression){
//OptionalExpression->Expression 
}
function func_OptionalExpression_0(p0){
//OptionalExpression->ε 
}
function func_Statement(EmptyStatement){
//Statement->EmptyStatement 
}
function func_Statement_0(ExpressionStatement,OptionalSemicolon){
//Statement->ExpressionStatement OptionalSemicolon 
}
function func_Statement_1(VariableDefinition,OptionalSemicolon){
//Statement->VariableDefinition OptionalSemicolon 
}
function func_Statement_2(Block){
//Statement->Block 
}
function func_Statement_3(LabeledStatement){
//Statement->LabeledStatement 
}
function func_Statement_4(IfStatement){
//Statement->IfStatement 
}
function func_Statement_5(SwitchStatement){
//Statement->SwitchStatement 
}
function func_Statement_6(DoStatement,OptionalSemicolon){
//Statement->DoStatement OptionalSemicolon 
}
function func_Statement_7(WhileStatement){
//Statement->WhileStatement 
}
function func_Statement_8(ForStatement){
//Statement->ForStatement 
}
function func_Statement_9(WithStatement){
//Statement->WithStatement 
}
function func_Statement_10(ContinueStatement,OptionalSemicolon){
//Statement->ContinueStatement OptionalSemicolon 
}
function func_Statement_11(BreakStatement,OptionalSemicolon){
//Statement->BreakStatement OptionalSemicolon 
}
function func_Statement_12(ReturnStatement,OptionalSemicolon){
//Statement->ReturnStatement OptionalSemicolon 
}
function func_Statement_13(ThrowStatement,OptionalSemicolon){
//Statement->ThrowStatement OptionalSemicolon 
}
function func_Statement_14(TryStatement){
//Statement->TryStatement 
}
function func_OptionalSemicolon(p0){
//OptionalSemicolon->; 
}
function func_AssignmentExpression(ConditionalExpression){
//AssignmentExpression->ConditionalExpression 
}
function func_AssignmentExpression_0(LeftSideExpression,p1,AssignmentExpression){
//AssignmentExpression->LeftSideExpression = AssignmentExpression 
}
function func_AssignmentExpression_1(LeftSideExpression,CompoundAssignment,AssignmentExpression){
//AssignmentExpression->LeftSideExpression CompoundAssignment AssignmentExpression 
}
function func_CompoundAssignment(p0){
//CompoundAssignment->*= 
}
function func_CompoundAssignment_0(p0){
//CompoundAssignment->/= 
}
function func_CompoundAssignment_1(p0){
//CompoundAssignment->%= 
}
function func_CompoundAssignment_2(p0){
//CompoundAssignment->+= 
}
function func_CompoundAssignment_3(p0){
//CompoundAssignment->-= 
}
function func_CompoundAssignment_4(p0){
//CompoundAssignment-><<= 
}
function func_CompoundAssignment_5(p0){
//CompoundAssignment->>>= 
}
function func_CompoundAssignment_6(p0){
//CompoundAssignment->>>>= 
}
function func_CompoundAssignment_7(p0){
//CompoundAssignment->&= 
}
function func_CompoundAssignment_8(p0){
//CompoundAssignment->^= 
}
function func_CompoundAssignment_9(p0){
//CompoundAssignment->|= 
}
function func_ConditionalExpression(LogicalOrExpression){
//ConditionalExpression->LogicalOrExpression 
}
function func_ConditionalExpression_0(LogicalOrExpression,p1,AssignmentExpression,p3,AssignmentExpression0){
//ConditionalExpression->LogicalOrExpression ? AssignmentExpression : AssignmentExpression 
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
function func_RelationalExpression_1(RelationalExpression,p1,ShiftExpression){
//RelationalExpression->RelationalExpression > ShiftExpression 
}
function func_RelationalExpression_2(RelationalExpression,p1,ShiftExpression){
//RelationalExpression->RelationalExpression <= ShiftExpression 
}
function func_RelationalExpression_3(RelationalExpression,p1,ShiftExpression){
//RelationalExpression->RelationalExpression >= ShiftExpression 
}
function func_RelationalExpression_4(RelationalExpression,_instanceof,ShiftExpression){
//RelationalExpression->RelationalExpression instanceof ShiftExpression 
}
function func_RelationalExpression_5(RelationalExpression,_in,ShiftExpression){
//RelationalExpression->RelationalExpression in ShiftExpression 
}
function func_ShiftExpression(AdditiveExpression){
//ShiftExpression->AdditiveExpression 
}
function func_ShiftExpression_0(ShiftExpression,p1,AdditiveExpression){
//ShiftExpression->ShiftExpression << AdditiveExpression 
}
function func_ShiftExpression_1(ShiftExpression,p1,AdditiveExpression){
//ShiftExpression->ShiftExpression >> AdditiveExpression 
}
function func_ShiftExpression_2(ShiftExpression,p1,AdditiveExpression){
//ShiftExpression->ShiftExpression >>> AdditiveExpression 
}
function func_AdditiveExpression(MultiplicativeExpression){
//AdditiveExpression->MultiplicativeExpression 
}
function func_AdditiveExpression_0(AdditiveExpression,p1,MultiplicativeExpression){
//AdditiveExpression->AdditiveExpression + MultiplicativeExpression 
}
function func_AdditiveExpression_1(AdditiveExpression,p1,MultiplicativeExpression){
//AdditiveExpression->AdditiveExpression - MultiplicativeExpression 
}
function func_MultiplicativeExpression(UnaryExpression){
//MultiplicativeExpression->UnaryExpression 
}
function func_MultiplicativeExpression_0(MultiplicativeExpression,p1,UnaryExpression){
//MultiplicativeExpression->MultiplicativeExpression * UnaryExpression 
}
function func_MultiplicativeExpression_1(MultiplicativeExpression,p1,UnaryExpression){
//MultiplicativeExpression->MultiplicativeExpression / UnaryExpression 
}
function func_MultiplicativeExpression_2(MultiplicativeExpression,p1,UnaryExpression){
//MultiplicativeExpression->MultiplicativeExpression % UnaryExpression 
}
function func_UnaryExpression(PostfixExpression){
//UnaryExpression->PostfixExpression 
}
function func_UnaryExpression_0(_delete,LeftSideExpression){
//UnaryExpression->delete LeftSideExpression 
}
function func_UnaryExpression_1(_void,UnaryExpression){
//UnaryExpression->void UnaryExpression 
}
function func_UnaryExpression_2(_typeof,UnaryExpression){
//UnaryExpression->typeof UnaryExpression 
}
function func_UnaryExpression_3(p0,LeftSideExpression){
//UnaryExpression->++ LeftSideExpression 
}
function func_UnaryExpression_4(p0,LeftSideExpression){
//UnaryExpression->-- LeftSideExpression 
}
function func_UnaryExpression_5(p0,UnaryExpression){
//UnaryExpression->+ UnaryExpression 
}
function func_UnaryExpression_6(p0,UnaryExpression){
//UnaryExpression->- UnaryExpression 
}
function func_UnaryExpression_7(p0,UnaryExpression){
//UnaryExpression->~ UnaryExpression 
}
function func_UnaryExpression_8(p0,UnaryExpression){
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
function func_LeftSideExpression(CallExpression){
//LeftSideExpression->CallExpression 
}
function func_LeftSideExpression_0(ShortNewExpression){
//LeftSideExpression->ShortNewExpression 
}
function func_CallExpression(PrimaryExpression){
//CallExpression->PrimaryExpression 
}
function func_CallExpression_0(FullNewExpression){
//CallExpression->FullNewExpression 
}
function func_CallExpression_1(CallExpression,MemberOperator){
//CallExpression->CallExpression MemberOperator 
}
function func_CallExpression_2(CallExpression,Arguments){
//CallExpression->CallExpression Arguments 
}
function func_FullNewExpression(_new,FullNewSubexpression){
//FullNewExpression->new FullNewSubexpression 
}
function func_ShortNewExpression(_new,ShortNewSubexpression){
//ShortNewExpression->new ShortNewSubexpression 
}
function func_FullNewSubexpression(PrimaryExpression){
//FullNewSubexpression->PrimaryExpression 
}
function func_FullNewSubexpression_0(FullNewExpression){
//FullNewSubexpression->FullNewExpression 
}
function func_FullNewSubexpression_1(FullNewSubexpression,MemberOperator){
//FullNewSubexpression->FullNewSubexpression MemberOperator 
}
function func_ShortNewSubexpression(FullNewSubexpression){
//ShortNewSubexpression->FullNewSubexpression 
}
function func_ShortNewSubexpression_0(ShortNewExpression){
//ShortNewSubexpression->ShortNewExpression 
}
function func_MemberOperator(p0,Expression,p2){
//MemberOperator->[ Expression ] 
}
function func_MemberOperator_0(p0,Identifier){
//MemberOperator->. Identifier 
}
function func_Arguments(p0,p1){
//Arguments->( ) 
}
function func_Arguments_0(p0,ArgumentList,p2){
//Arguments->( ArgumentList ) 
}
function func_ArgumentList(AssignmentExpression){
//ArgumentList->AssignmentExpression 
}
function func_ArgumentList_0(ArgumentList,AssignmentExpression){
//ArgumentList->ArgumentList AssignmentExpression 
}
function func_ArrayLiteral(p0,p1){
//ArrayLiteral->[ ] 
}
function func_ArrayLiteral_0(p0,ElementList,p2){
//ArrayLiteral->[ ElementList ] 
}
function func_ElementList(LiteralElement){
//ElementList->LiteralElement 
}
function func_ElementList_0(ElementList,p1,LiteralElement){
//ElementList->ElementList , LiteralElement 
}
function func_LiteralElement(AssignmentExpression){
//LiteralElement->AssignmentExpression 
}
function func_ObjectLiteral(p0,p1){
//ObjectLiteral->{ } 
}
function func_ObjectLiteral_0(p0,FieldList,p2){
//ObjectLiteral->{ FieldList } 
}
function func_FieldList(LiteralField){
//FieldList->LiteralField 
}
function func_FieldList_0(FieldList,p1,LiteralField){
//FieldList->FieldList , LiteralField 
}
function func_LiteralField(Identifier,p1,AssignmentExpression){
//LiteralField->Identifier : AssignmentExpression 
}
function func_FunctionExpression(AnonymousFunction){
//FunctionExpression->AnonymousFunction 
}
function func_FunctionExpression_0(NamedFunction){
//FunctionExpression->NamedFunction 
}
function func_PrimaryExpression(SimpleExpression){
//PrimaryExpression->SimpleExpression 
}
function func_PrimaryExpression_0(FunctionExpression){
//PrimaryExpression->FunctionExpression 
}
function func_PrimaryExpression_1(ObjectLiteral){
//PrimaryExpression->ObjectLiteral 
}
function func_SimpleExpression(_this){
//SimpleExpression->this 
}
function func_SimpleExpression_0(_null){
//SimpleExpression->null 
}
function func_SimpleExpression_1(_true){
//SimpleExpression->true 
}
function func_SimpleExpression_2(_false){
//SimpleExpression->false 
}
function func_SimpleExpression_3(_Number){
//SimpleExpression->Number 
}
function func_SimpleExpression_4(_String){
//SimpleExpression->String 
}
function func_SimpleExpression_5(Identifier){
//SimpleExpression->Identifier 
}
function func_SimpleExpression_6(_RegExp){
//SimpleExpression->RegExp 
}
function func_SimpleExpression_7(ParenthesizedExpression){
//SimpleExpression->ParenthesizedExpression 
}
function func_SimpleExpression_8(ArrayLiteral){
//SimpleExpression->ArrayLiteral 
}
function func_ParenthesizedExpression(p0,Expression,p2){
//ParenthesizedExpression->( Expression ) 
}
