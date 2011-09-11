/**
 * @author     Abraham [abraham1@163.com]
 * @blog:       http://yuhanghome.net
 * @address    Software Institute, Nanjing University, China
 * @约定        私有函数使用_开头，统一小写；公开函数使用Pascal命名法
 */

window.onload= function() {

	var _n= Nonterminal;
	var _t = Terminator;
	
	var _Identifier= new _t('Identifier');
	var _Number=new _t('Number');
	var _String=new _t('String');
	var _RegularExpression=new _t('RegExp');

	var _function=new _t('function');
	var _instanceof=new _t('instanceof');
	var _typeof=new _t('typeof');
	var _void=new _t('void');
	var _delete=new _t('delete');
	var _new =new _t('new');
	var _this=new _t('this');
	var _null=new _t('null');
	var _true=new _t('true');
	var _false=new _t('false');
	var _try=new _t('try');
	var _catch=new _t('catch');
	var _finally=new _t('finally');
	var _throw=new _t('throw');
	var _return = new _t('return');
	var _continue=new _t('continue');
	var _break=new _t('break');
	var _with=new _t('with');
	var _var=new _t('var');
	var _if=new _t('if');
	var _in=new _t('in');
	var _for=new _t('for');
	var _else=new _t('else');
	var _while=new _t('while');
	var _do=new _t('do');
	var _switch=new _t('switch');
	var _case=new _t('case');
	var _default=new _t('default');
	
	var B_LEFT=new _t('(');
	var B_RIGHT=new _t(')');
	var F_LEFT=new _t('[');
	var F_RIGHT=new _t(']');
	var H_LEFT=new _t('{');
	var H_RIGHT=new _t('}');
	var T_COMMON=new _t(',');
	var T_FEN=new _t(';');
	var T_DOT=new _t('.');
	var T_MAO=new _t(':');
	var T_WEN=new _t('?');
	var T_E=new _t('=');
	var T_EE=new _t('==');
	var T_EEE=new _t('===');
	var T_NE=new _t('!=');
	var T_NEE=new _t('!==');

	var T_L=new _t('<');
	var T_G=new _t('>');
	var T_LE=new _t('<=');
	var T_GE=new _t('>=');
	var T_LS=new _t('<<');
	var T_RS=new _t('>>');
	var T_RRS=new _t('>>>');
	var T_JIA=new _t('+');
	var T_JIAN=new _t('-');
	var T_CHENG=new _t('*');
	var T_CHU=new _t('/');
	var T_BAIFEN=new _t('%');
	var T_NOT=new _t('!');
	var T_BO=new _t('~');
	var T_PP=new _t('++');
	var T_MM=new _t('--');
	
	var CHENG_D=new _t('*=');
	var CHU_D=new _t('/=');
	var BAIFEN_D=new _t('%=');
	var JIA_D=new _t('+=');
	var JIAN_D=new _t('-=');
	var ZZ_D=new _t('<<=');
	var YY_D=new _t('>>=');
	var YYY_D=new _t('>>>=');
	var AND_D=new _t('&=');
	var MAO_D=new _t('^=');
	var HUO_D=new _t('|=');
	var L_AND=new _t('&&');
	var L_OR=new _t('||');
	var T_AND=new _t('&');
	var T_OR=new _t('|');
	var T_XOR=new _t('^');
	

	//Programs
	var Program=new _n('Program');
	var TopStatements=new _n('TopStatements');
	var TopStatementsPrefix=new _n('TopStatementsPrefix');
	var TopStatement=new _n('TopStatement');
	var Statement=new _n('Statement');
	//Function Definition
	var FunctionDefinition=new _n('FunctionDefinition');
	var NamedFunction=new _n('NamedFunction');
	var AnonymousFunction =new _n('AnonymousFunction');
	var FormalParametersAndBody=new _n("FormalParametersAndBody");

	var FormalParameters=new _n("FormalParameters");
	var FormalParametersPrefix=new _n('FormalParametersPrefix');
	var FormalParameter=new _n('FormalParameter');
	//Try Statement
	var TryStatement =new _n('TryStatement');
	var CatchClauses=new _n('CatchClauses');
	var CatchClause=new _n('CatchClause');
	var FinallyClause=new _n('FinallyClause');

	//Throw and Return Statement
	var ThrowStatement =new _n('ThrowStatement');
	var ReturnStatement=new _n('ReturnStatement');
	//Continue and Break Statements
	var ContinueStatement =new _n('ContinueStatement');
	var OptionalLabel=new _n('OptionalLabel');
	var BreakStatement =new _n('BreakStatement');
	var WithStatement=new _n('WithStatement');
	//For
	var ForStatement=new _n('ForStatement');
	var ForInitializer=new _n('ForInitializer');
	var ForInBinding =new _n('ForInBinding');
	//block
	var Block=new _n('Block');
	var BlockStatementsPrefix=new _n('BlockStatementsPrefix');
	var BlockStatements=new _n('BlockStatements');
	var Statementfull=new _n('Statementfull');
	//expression
	var Expression=new _n('Expression');
	var OptionalExpression=new _n('OptionalExpression');
	var ParenthesizedExpression=new _n('ParenthesizedExpression');
	var AssignmentExpression=new _n('AssignmentExpression');
	var LeftSideExpression=new _n('LeftSideExpression');
	var CompoundAssignment =new _n('CompoundAssignment');
	var ConditionalExpression=new _n('ConditionalExpression');	
	var LogicalAndExpression=new _n('LogicalAndExpression');
	var LogicalOrExpression=new _n('LogicalOrExpression');
	var BitwiseAndExpression=new _n('BitwiseAndExpression');
	var BitwiseXorExpression=new _n('BitwiseXorExpression');
	var BitwiseOrExpression=new _n('BitwiseOrExpression');
	var EqualityExpression=new _n('EqualityExpression');
	var RelationalExpression=new _n('RelationalExpression');
	var RelationalExpression=new _n('RelationalExpression');
	var ShiftExpression=new _n('ShiftExpression');
	var AdditiveExpression=new _n('AdditiveExpression');
	var MultiplicativeExpression=new _n('MultiplicativeExpression');
	var UnaryExpression=new _n('UnaryExpression');
	var PostfixExpression=new _n('PostfixExpression');
	var FunctionExpression =new _n('FunctionExpression');
	var ParenthesizedExpression =new _n('ParenthesizedExpression');
	var SimpleExpression =new _n('SimpleExpression');
	var PrimaryExpression=new _n('PrimaryExpression');
	//
	var Statement=new _n('Statement');
	var EmptyStatement=new _n('EmptyStatement');
	var ExpressionStatement=new _n('ExpressionStatement');

	var LeftSideExpression=new _n('LeftSideExpression');
	var WhileStatement=new _n('WhileStatement');
	var DoStatement =new _n('DoStatement');
	//switch
	var SwitchStatement =new _n('SwitchStatement');
	var CaseGroups  =new _n('CaseGroups');
	var LastCaseGroup=new _n('LastCaseGroup');
	var CaseGroup=new _n('CaseGroup');
	var CaseGuards =new _n('CaseGuards');
	var CaseGuard=new _n('CaseGuard');

	var IfStatement=new _n('IfStatement');

	var LabeledStatement=new _n('LabeledStatement');
	var VariableDefinition =new _n('VariableDefinition');
	var VariableDeclarationList=new _n('VariableDeclarationList');
	var VariableDeclaration=new _n('VariableDeclaration');
	var VariableInitializer=new _n('VariableInitializer');

	var OptionalSemicolon =new _n('OptionalSemicolon');




	var ArgumentList =new _n('ArgumentList');
	var Arguments =new _n('Arguments');
	var MemberOperator =new _n('MemberOperator');
	var ShortNewSubexpression =new _n('ShortNewSubexpression');
	var FullNewSubexpression =new _n('FullNewSubexpression');
	var ShortNewExpression =new _n('ShortNewExpression');
	var FullNewExpression =new _n('FullNewExpression');
	var CallExpression=new _n('CallExpression');
	var LeftSideExpression=new _n('LeftSideExpression');
	var LiteralElement =new _n('LiteralElement');
	var ElementList =new _n('ElementList');
	var ArrayLiteral =new _n('ArrayLiteral');
	var LiteralField=new _n('LiteralField');
	var FieldList =new _n('FieldList');
	var ObjectLiteral =new _n('ObjectLiteral');
	

	var g=new Array();
	//Programs
	g.push(new Item(Program,[TopStatements]));
	g.push(new Item(TopStatements,[Symbol.NULL]));
	g.push(new Item(TopStatements,[TopStatementsPrefix]));
	g.push(new Item(TopStatementsPrefix,[TopStatement]));
	g.push(new Item(TopStatementsPrefix,[TopStatementsPrefix,TopStatement]));
	g.push(new Item(TopStatement,[Statement]));
	g.push(new Item(TopStatement,[FunctionDefinition]));
	

	g.push(new Item(FunctionDefinition,[_function]));
/*	//Function Definition
	g.push(new Item(FunctionDefinition,[NamedFunction]));
	g.push(new Item(AnonymousFunction,[_function, FormalParametersAndBody]));
	g.push(new Item(NamedFunction,[_function, _Identifier, FormalParametersAndBody]));
	g.push(new Item(FormalParametersAndBody,[B_LEFT, FormalParameters,B_RIGHT,H_LEFT, TopStatements,H_RIGHT]));
	g.push(new Item(FormalParameters,[Symbol.NULL]));
	g.push(new Item(FormalParameters,[FormalParametersPrefix]));
	g.push(new Item(FormalParametersPrefix,[FormalParameter]));
	g.push(new Item(FormalParametersPrefix,[FormalParametersPrefix ,T_COMMON, FormalParameter]));
	g.push(new Item(FormalParameter,[_Identifier]));
	//Try Statement
	g.push(new Item(TryStatement,[_try, Block, CatchClauses]));
	g.push(new Item(TryStatement,[_try, Block, FinallyClause]));
	g.push(new Item(TryStatement,[_try, Block, CatchClauses, FinallyClause]));
	g.push(new Item(CatchClauses ,[CatchClause]));
	g.push(new Item(CatchClauses,[ CatchClauses, CatchClause]));
	g.push(new Item(CatchClause,[ _catch ,B_LEFT, _Identifier ,B_RIGHT, Block]));
	g.push(new Item(FinallyClause,[ _finally ,Block]));
	//Throw Return With
	g.push(new Item(ReturnStatement,[ _return ,OptionalExpression]));
	g.push(new Item(ThrowStatement, [ _throw,Expression]));
	g.push(new Item(WithStatement, [ _with, ParenthesizedExpression, Statement]));
	//Continue and Break
	g.push(new Item(ContinueStatement,[_continue, OptionalLabel]));
	g.push(new Item(BreakStatement,[ _break, OptionalLabel]));
	g.push(new Item(OptionalLabel,[Symbol.NULL]));
	g.push(new Item(OptionalLabel,[_Identifier]));
	//For Statements
	g.push(new Item(ForStatement ,[_for ,B_LEFT,ForInitializer ,T_FEN, OptionalExpression,T_FEN, OptionalExpression,B_RIGHT,Statement]));
	g.push(new Item(ForStatement ,[_for,B_LEFT, ForInBinding ,_in ,Expression,B_RIGHT, Statement]));
	g.push(new Item(ForInitializer ,[Symbol.NULL]));
	g.push(new Item(ForInitializer ,[Expression]));
	g.push(new Item(ForInitializer ,[_var,VariableDeclarationList]));
	g.push(new Item(ForInBinding,[LeftSideExpression]));
	g.push(new Item(ForInBinding,[_var, VariableDeclaration]));
	//While and Do-While
	g.push(new Item(DoStatement ,[_do,Statement,_while,ParenthesizedExpression]));
	g.push(new Item(WhileStatement,[_while,ParenthesizedExpression,Statement]));
	//Switch Statement
	g.push(new Item(SwitchStatement,[ _switch, ParenthesizedExpression ,H_LEFT,H_RIGHT]));
	g.push(new Item(SwitchStatement,[ _switch ,ParenthesizedExpression ,H_LEFT,CaseGroups ,LastCaseGroup,H_RIGHT]));
	g.push(new Item(CaseGroups ,[Symbol.NULL]));
	g.push(new Item(CaseGroups ,[CaseGroups, CaseGroup]));
	g.push(new Item(CaseGroup,[ CaseGuards, BlockStatementsPrefix]));
	g.push(new Item(LastCaseGroup ,[CaseGuards, BlockStatements]));
	g.push(new Item(CaseGuards ,[ CaseGuard]));
	g.push(new Item(CaseGuards ,[ CaseGuards, CaseGuard]));
	g.push(new Item(CaseGuard ,[_case, Expression,T_MAO]));
	g.push(new Item(CaseGuard,[ _default,T_MAO]));
	g.push(new Item(SwitchStatement,[ _switch, ParenthesizedExpression ,H_LEFT,H_RIGHT]));
	g.push(new Item(SwitchStatement,[ _switch ,ParenthesizedExpression ,H_LEFT,CaseGroups ,LastCaseGroup,H_RIGHT]));
	g.push(new Item(CaseGroups ,[Symbol.NULL]));
	g.push(new Item(CaseGroups ,[CaseGroups, CaseGroup]));
	g.push(new Item(CaseGroup,[ CaseGuards, BlockStatementsPrefix]));
	g.push(new Item(LastCaseGroup ,[CaseGuards, BlockStatements]));
	g.push(new Item(CaseGuards ,[ CaseGuard]));
	g.push(new Item(CaseGuards ,[ CaseGuards, CaseGuard]));
	g.push(new Item(CaseGuard ,[_case, Expression,T_MAO]));
	g.push(new Item(CaseGuard,[ _default,T_MAO]));
	//if
	g.push(new Item(IfStatement,[ _if,ParenthesizedExpression ,Statement]));
	g.push(new Item(IfStatement,[_if,ParenthesizedExpression ,Statement,_else,Statement]));
	//labeled statements
	g.push(new Item(LabeledStatement,[_Identifier,T_MAO,Statement]));
	//block
	g.push(new Item(Block ,[H_LEFT, BlockStatements ,H_RIGHT]));
	g.push(new Item(BlockStatements,[Symbol.NULL]));
	g.push(new Item(BlockStatements,[BlockStatementsPrefix]));
	g.push(new Item(BlockStatementsPrefix,[ Statementfull]));
	g.push(new Item(BlockStatementsPrefix,[BlockStatementsPrefix, Statementfull]));
	//Variable Definition	g.push(new Item(VariableDefinition ,[_var, VariableDeclarationList]));
	g.push(new Item(VariableDeclarationList,[VariableDeclaration]));
	g.push(new Item( VariableDeclarationList,[VariableDeclarationList,T_COMMON, VariableDeclaration]));
	g.push(new Item( VariableDeclaration,[_Identifier,VariableInitializer]));
	g.push(new Item(VariableInitializer,[Symbol.NULL]));
	g.push(new Item(VariableInitializer,[T_E,AssignmentExpression]));
	

*/
	//Expression
	g.push(new Item(ExpressionStatement ,[Expression]));
	g.push(new Item(EmptyStatement,[T_FEN]));
	g.push(new Item(Expression ,[AssignmentExpression]));
	g.push(new Item(Expression ,[ Expression,T_COMMON, AssignmentExpression]));
//	g.push(new Item(OptionalExpression ,[ Expression]));
//	g.push(new Item(OptionalExpression ,[ Symbol.NULL]));

	//Statements
	g.push(new Item(Statement ,[EmptyStatement]));
	g.push(new Item(Statement ,[ ExpressionStatement, OptionalSemicolon]));
	

	
//	g.push(new Item(Statement ,[VariableDefinition, OptionalSemicolon]));
/*	g.push(new Item(Statement ,[Block]));
	g.push(new Item(Statement ,[ LabeledStatement]));
	g.push(new Item(Statement ,[IfStatement]));
	g.push(new Item(Statement ,[ SwitchStatement]));
	g.push(new Item(Statement ,[ DoStatement, OptionalSemicolon]));
	g.push(new Item(Statement ,[ WhileStatement]));
	g.push(new Item(Statement ,[ ForStatement]));
	g.push(new Item(Statement ,[ WithStatement]));
	g.push(new Item(Statement ,[ ContinueStatement, OptionalSemicolon]));
	g.push(new Item(Statement ,[ BreakStatement, OptionalSemicolon]));
	g.push(new Item(Statement ,[  ReturnStatement ,OptionalSemicolon]));
	g.push(new Item(Statement ,[ ThrowStatement ,OptionalSemicolon]));
	g.push(new Item(Statement ,[  TryStatement]));
	g.push(new Item(OptionalSemicolon,[T_FEN]));
*/	//Assignment Operators
	g.push(new Item(AssignmentExpression,[ConditionalExpression]));
/*	g.push(new Item(AssignmentExpression,[LeftSideExpression,T_E, AssignmentExpression]));
	g.push(new Item(AssignmentExpression,[LeftSideExpression, CompoundAssignment, AssignmentExpression]));
	
	g.push(new Item(LeftSideExpression,[_Identifier]));
	
	g.push(new Item(CompoundAssignment ,[CHENG_D]));// *=
	g.push(new Item(CompoundAssignment ,[CHU_D]));// /=
	g.push(new Item(CompoundAssignment ,[BAIFEN_D]));// %=
	g.push(new Item(CompoundAssignment ,[JIA_D]));// +=
	g.push(new Item(CompoundAssignment ,[JIAN_D]));// -=
	g.push(new Item(CompoundAssignment ,[ZZ_D]));// <<=
	g.push(new Item(CompoundAssignment ,[YY_D]));// >>=
	g.push(new Item(CompoundAssignment ,[YYY_D]));// >>>=
	g.push(new Item(CompoundAssignment ,[AND_D]));// &=
	g.push(new Item(CompoundAssignment ,[MAO_D]));// ^=
	g.push(new Item(CompoundAssignment ,[HUO_D]));// |=
*/	//Conditional Operator
	g.push(new Item(ConditionalExpression,[  LogicalOrExpression]));
//	g.push(new Item(ConditionalExpression,[LogicalOrExpression,T_WEN, AssignmentExpression,T_MAO,AssignmentExpression]));
	//Binary Logical Operator
	g.push(new Item(LogicalAndExpression,[BitwiseOrExpression]));
	g.push(new Item(LogicalAndExpression,[LogicalAndExpression ,L_AND,BitwiseOrExpression]));
	g.push(new Item(LogicalOrExpression,[ LogicalAndExpression]));
	g.push(new Item(LogicalOrExpression,[ LogicalOrExpression,L_OR,LogicalAndExpression]));
	//Binary Bitwise Operator
	g.push(new Item(BitwiseAndExpression,[EqualityExpression]));
	g.push(new Item(BitwiseAndExpression,[BitwiseAndExpression,T_AND, EqualityExpression]));
	g.push(new Item(BitwiseXorExpression,[ BitwiseAndExpression]));
	g.push(new Item(BitwiseXorExpression,[ BitwiseXorExpression,T_XOR, BitwiseAndExpression]));
	g.push(new Item(BitwiseOrExpression,[  BitwiseXorExpression]));
	g.push(new Item(BitwiseOrExpression,[BitwiseOrExpression,T_OR, BitwiseXorExpression]));
	//Equality Operator
	g.push(new Item(EqualityExpression,[RelationalExpression]));
	g.push(new Item(EqualityExpression,[ EqualityExpression,T_EE, RelationalExpression]));
	g.push(new Item(EqualityExpression,[ EqualityExpression,T_NE, RelationalExpression]));
	g.push(new Item(EqualityExpression,[ EqualityExpression,T_EEE, RelationalExpression]));
	g.push(new Item(EqualityExpression,[EqualityExpression,T_NEE,RelationalExpression]));
	//Relational Operator
	g.push(new Item(RelationalExpression,[ShiftExpression]));
	g.push(new Item(RelationalExpression,[RelationalExpression,T_L,ShiftExpression]));
/*	g.push(new Item(RelationalExpression,[RelationalExpression,T_G,ShiftExpression]));
	g.push(new Item(RelationalExpression,[RelationalExpression,T_LE, ShiftExpression]));
	g.push(new Item(RelationalExpression,[RelationalExpression,T_GE,ShiftExpression]));
	g.push(new Item(RelationalExpression,[RelationalExpression,_instanceof, ShiftExpression]));
	g.push(new Item(RelationalExpression,[RelationalExpression,_in, ShiftExpression]));
*/	//Bitwise Shift Operator
	g.push(new Item(ShiftExpression,[AdditiveExpression]));
	g.push(new Item(ShiftExpression,[ShiftExpression,T_LS,AdditiveExpression]));
//	g.push(new Item(ShiftExpression,[ShiftExpression,T_RS, AdditiveExpression]));
//	g.push(new Item(ShiftExpression,[ShiftExpression,T_RRS, AdditiveExpression]));
	//Additive Operators
	g.push(new Item(AdditiveExpression , [MultiplicativeExpression ]));
//	g.push(new Item(AdditiveExpression , [AdditiveExpression,T_JIA, MultiplicativeExpression]));
//	g.push(new Item(AdditiveExpression , [AdditiveExpression,T_JIAN, MultiplicativeExpression]));
	//Multiplicative Operators
	g.push(new Item(MultiplicativeExpression , [  UnaryExpression]));
//	g.push(new Item(MultiplicativeExpression , [ MultiplicativeExpression,T_CHENG, UnaryExpression ]));
//	g.push(new Item(MultiplicativeExpression , [ MultiplicativeExpression,T_CHU,UnaryExpression]));
//	g.push(new Item(MultiplicativeExpression , [ MultiplicativeExpression,T_BAIFEN,UnaryExpression ]));
	//Unary Operators
	g.push(new Item(UnaryExpression , [PostfixExpression ]));
	// g.push(new Item(UnaryExpression , [_delete,LeftSideExpression ]));
	// g.push(new Item(UnaryExpression , [_void,UnaryExpression ]));
	// g.push(new Item(UnaryExpression , [_typeof,UnaryExpression ]));
	// g.push(new Item(UnaryExpression , [T_PP,LeftSideExpression ]));
	// g.push(new Item(UnaryExpression , [T_MM ,LeftSideExpression]));
	// g.push(new Item(UnaryExpression , [T_JIA ,UnaryExpression]));
	// g.push(new Item(UnaryExpression , [T_JIAN ,UnaryExpression]));
	// g.push(new Item(UnaryExpression , [T_BO ,UnaryExpression]));
	g.push(new Item(UnaryExpression , [T_NOT ,UnaryExpression]));
	//Postfix Operators
	g.push(new Item(PostfixExpression , [LeftSideExpression ]));
	g.push(new Item(PostfixExpression , [LeftSideExpression,T_PP ]));
	g.push(new Item(PostfixExpression, [LeftSideExpression,T_MM ]));
	
	g.push(new Item(LeftSideExpression , [_Number ]));
	//Left-Side Expressions
/*	g.push(new Item(LeftSideExpression , [CallExpression ]));
	g.push(new Item(LeftSideExpression , [ShortNewExpression]));
	g.push(new Item(CallExpression , [PrimaryExpression]));
	g.push(new Item( CallExpression, [ FullNewExpression ]));
	g.push(new Item(CallExpression , [CallExpression ,MemberOperator]));
	g.push(new Item(CallExpression , [CallExpression,Arguments ]));
	g.push(new Item(FullNewExpression  , [_new,FullNewSubexpression]));
	g.push(new Item(ShortNewExpression  , [_new, ShortNewSubexpression]));
	g.push(new Item(FullNewSubexpression  , [PrimaryExpression]));
	g.push(new Item(FullNewSubexpression  , [FullNewExpression]));
	g.push(new Item(FullNewSubexpression  , [FullNewSubexpression, MemberOperator]));
	g.push(new Item(ShortNewSubexpression, [FullNewSubexpression]));
	g.push(new Item(ShortNewSubexpression, [ShortNewExpression]));
	g.push(new Item(MemberOperator, [F_LEFT,Expression,F_RIGHT]));
	g.push(new Item(MemberOperator, [T_DOT,_Identifier ]));
	g.push(new Item(Arguments, [B_LEFT,B_RIGHT ]));
	g.push(new Item(Arguments, [B_LEFT,ArgumentList,B_RIGHT]));
	g.push(new Item(ArgumentList, [AssignmentExpression]));
	g.push(new Item(ArgumentList, [ArgumentList,AssignmentExpression]));
	//Array Literals
	g.push(new Item(ArrayLiteral, [F_LEFT,F_RIGHT]));
	g.push(new Item(ArrayLiteral, [F_LEFT,ElementList,F_RIGHT]));
	g.push(new Item(ElementList, [LiteralElement]));
	g.push(new Item(ElementList, [ElementList,T_COMMON,LiteralElement]));
	g.push(new Item(LiteralElement, [AssignmentExpression]));
	//Object Literals
	g.push(new Item(ObjectLiteral, [H_LEFT,H_RIGHT]));
	g.push(new Item(ObjectLiteral, [H_LEFT,FieldList,H_RIGHT]));
	g.push(new Item(FieldList , [LiteralField ]));
	g.push(new Item(FieldList , [FieldList,T_COMMON,LiteralField ]));
	g.push(new Item(LiteralField , [_Identifier,T_MAO,AssignmentExpression]));
	//Function Expressions
	g.push(new Item(FunctionExpression , [AnonymousFunction]));
	g.push(new Item(FunctionExpression , [NamedFunction]));
	//Primary Expressions
	g.push(new Item(PrimaryExpression, [SimpleExpression ]));
	g.push(new Item(PrimaryExpression, [FunctionExpression]));
	g.push(new Item(PrimaryExpression, [ObjectLiteral]));
	g.push(new Item(SimpleExpression , [_this]));
	g.push(new Item(SimpleExpression, [_null]));
	g.push(new Item(SimpleExpression, [_true]));
	g.push(new Item(SimpleExpression, [_false]));
	g.push(new Item(SimpleExpression, [_Number]));
	g.push(new Item(SimpleExpression, [_String]));
	g.push(new Item(SimpleExpression, [_Identifier]));
	g.push(new Item(SimpleExpression, [_RegularExpression]));
	g.push(new Item(SimpleExpression, [ParenthesizedExpression]));
	g.push(new Item(SimpleExpression, [ ArrayLiteral]));
	g.push(new Item(ParenthesizedExpression , [B_LEFT,Expression,B_RIGHT]));
*/	
	var Z=new Nonterminal("Z");
	var g_root=new Item(Z);
	g_root.Right.Symbols=[Program,Symbol.END];
	
	AnalysisTableCreator.InitGrammer(g,g_root);
	var result=AnalysisTableCreator.Create();
	//$.dprint(result);
	var r=AnalysisTableCreator._output_table();

	$('#info').html(r.info);
	$('#tag').attr('value',r.tag);
	$('#table').attr('value',r.table);
	$('#reduce').attr('value',r.reduce);
	$('#grammar').attr('value',r.grammar);
}