/**
 * @author     Abraham [abraham1@163.com]
 * @blog:       http://yuhanghome.net
 * @address    Software Institute, Nanjing University, China
 * @约定        私有函数使用_开头，统一小写；公开函数使用Pascal命名法
 */

window.onload= function() {

	var _n= Nonterminal;
	var _t = Terminator;

	var _function=new _t('function');
	var Identifier= new _t('Identifier');
	var B_LEFT=new _t('(');
	var B_RIGHT=new _t(')');
	var F_LEFT=new _t('[');
	var F_RIGHT=new _t(']');
	var H_LEFT=new _t('{');
	var H_RIGHT=new _t('}');
	var COMMOM=new _t(',');
	var FEN=new _t(';');
	var MAO=new _t(':');
	var T_E=new _t('=');
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

	var _else=new _t('else');
	var _while=new _t('while');
	var _do=new _t('do');
	var _switch=new _t('switch');
	var _case=new _t('case');
	var _default=new _t('default');

	var CON_OR=new _t('OR');
	var CON_AND=new _t('AND');
	var CON_EQ=new _t('EQ');
	var CON_NEQ=new _t('NE');
	var CON_GE =new _t('GE');
	var CON_LE=new _t('LE');
	var CON_GT=new _t('>');
	var CON_LT = new _t('<');
	var OP_OR=new _t('|');
	var OP_AND=new _t('&');
	var OP_PLUS=new _t('+');
	var OP_MINUS=new _t('-')
	var OP_MUL=new _t('*');
	var OP_DIV=new _t('/');
	var OP_NOT=new _t('!');
	var OP_EQ=new _t('=');

	//Programs
	var Program=new _n('Program');
	var TopStatements=new _n('TopStatements');
	var TopStatementsPrefix=new _n('TopStatementsPrefix');
	var Statement=new _n('Statement');
	//Function Definition
	var FunctionDefinition=new _n('FunctionDefinition');
	var NamedFunction=new _n('NamedFunction');
	var AnonymousFunction =new _n('AnonymousFunction');
	var FormalParametersAndBody=new _n("FormalParametersAndBody");
	var Identifier =new _n('Identifier');
	var FormalParameters=new _n("FormalParameters");
	var FormalParametersPrefix=new _n('FormalParametersPrefix');
	var FormalParameter=new _n('FormalParameter');
	//Try Statement
	var TryStatement =new _n('TryStatement ');
	var CatchClauses=new _n('CatchClauses');
	var FinallyClause=new _n('FinallyClause');

	//Throw and Return Statement
	var ThrowStatement =new _n('ThrowStatement');
	var ReturnStatement=new _n('ReturnStatement');
	//Continue and Break Statements
	var ContinueStatement =new _n('ContinueStatement');
	var OptionalLabel=new _n('OptionalLabel');
	var BreakStatement =new _n('BreakStatement ');
	var WithStatement=new _n('WithStatement');
	//For
	var ForStatement=new _n('ForStatement');
	var ForInitializer=new _n('ForInitializer');
	var ForInBinding =new _n('ForInBinding');
	//block
	var Block=new _n('Block');
	var BlockStatementsPrefix=new _n('BlockStatementsPrefix');
	var BlockStatements=new _n('BlockStatements');
	//expression
	var Expression=new _n('Expression');
	var OptionalExpression=new _n('OptionalExpression');
	var ParenthesizedExpression=new _n('ParenthesizedExpression');
	var AssignmentExpression=new _n('AssignmentExpression');
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

	var FACTOR=new _n('factor');
	var FACTOR=new _n('factor');
	var FACTOR=new _n('factor');
	var FACTOR=new _n('factor');
	var FACTOR=new _n('factor');
	var FACTOR=new _n('factor');

	var g=new Array();
	//Programs
	g.push(new Item(Program,[TopStatements]));
	g.push(new Item(TopStatements,[Symbol.NULL]));
	g.push(new Item(TopStatements,[TopStatementsPrefix]));
	g.push(new Item(TopStatementsPrefix,[TopStatements]));
	g.push(new Item(TopStatementsPrefix,[TopStatementsPrefix,TopStatement]));
	g.push(new Item(TopStatement,[Statement]));
	g.push(new Item(TopStatement,[FunctionDefinition]));
	//Function Definition
	g.push(new Item(FunctionDefinition,[NamedFunction]));
	g.push(new Item(AnonymousFunction,[_function, FormalParametersAndBody]));
	g.push(new Item(NamedFunction,[_function, Identifier, FormalParametersAndBody]));
	g.push(new Item(FormalParametersAndBody,[B_LEFT, FormalParameters,B_RIGHT,H_LEFT, TopStatements,H_RIGHT]));
	g.push(new Item(FormalParameters,[Symbol.NULL]));
	g.push(new Item(FormalParameters,[FormalParametersPrefix]));
	g.push(new Item(FormalParametersPrefix,[FormalParameter]));
	g.push(new Item(FormalParametersPrefix,[FormalParametersPrefix ,COMMOM, FormalParameter]));
	g.push(new Item(FormalParameter,[Identifier]));
	//Try Statement
	g.push(new Item(TryStatement,[_try, Block, CatchClauses]));
	g.push(new Item(TryStatement,[_try, Block, FinallyClause]));
	g.push(new Item(TryStatement,[_try, Block, CatchClauses, FinallyClause]));
	g.push(new Item(CatchClauses ,[CatchClause]));
	g.push(new Item(CatchClauses,[ CatchClauses, CatchClause]));
	g.push(new Item(CatchClause,[ _catch ,B_LEFT, Identifier ,B_RIGHT, Block]));
	g.push(new Item(FinallyClause,[ _finally ,Block]));
	//Throw Return With
	g.push(new Item(ReturnStatement,[ _return ,OptionalExpression]));
	g.push(new Item(ThrowStatement [ _throw,Expression]));
	g.push(new Item(WithStatement [ _with, ParenthesizedExpression, Statement]));
	//Continue and Break
	g.push(new Item(ContinueStatement,[_continue, OptionalLabel]));
	g.push(new Item(BreakStatement,[ _break, OptionalLabel]));
	g.push(new Item(OptionalLabel,[Symbol.NULL]));
	g.push(new Item(OptionalLabel,[Identifier]));
	//For Statements
	g.push(new Item(ForStatement ,[_for ,B_LEFT,ForInitializer ,FEN, OptionalExpression,FEN, OptionalExpression,B_RIGHT,Statement]));
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
	g.push(new Item(CaseGuard ,[_case, Expression,MAO]));
	g.push(new Item(CaseGuard,[ _default,MAO]));
	g.push(new Item(SwitchStatement,[ _switch, ParenthesizedExpression ,H_LEFT,H_RIGHT]));
	g.push(new Item(SwitchStatement,[ _switch ,ParenthesizedExpression ,H_LEFT,CaseGroups ,LastCaseGroup,H_RIGHT]));
	g.push(new Item(CaseGroups ,[Symbol.NULL]));
	g.push(new Item(CaseGroups ,[CaseGroups, CaseGroup]));
	g.push(new Item(CaseGroup,[ CaseGuards, BlockStatementsPrefix]));
	g.push(new Item(LastCaseGroup ,[CaseGuards, BlockStatements]));
	g.push(new Item(CaseGuards ,[ CaseGuard]));
	g.push(new Item(CaseGuards ,[ CaseGuards, CaseGuard]));
	g.push(new Item(CaseGuard ,[_case, Expression,MAO]));
	g.push(new Item(CaseGuard,[ _default,MAO]));
	//if
	g.push(new Item(IfStatement,[ _if,ParenthesizedExpression ,Statement]));
	g.push(new Item(IfStatement,[_if,ParenthesizedExpression ,Statement,_else,Statement]));
	//labeled statements
	g.push(new Item(LabeledStatement,[Identifier,MAO,Statement]));
	//block
	g.push(new Item(Block ,[H_LEFT, BlockStatements ,H_RIGHT]));
	g.push(new Item(BlockStatements,[Symbol.NULL]));
	g.push(new Item(BlockStatements,[BlockStatementsPrefix]));
	g.push(new Item(BlockStatementsPrefix,[ Statementfull]));
	g.push(new Item(BlockStatementsPrefix,[BlockStatementsPrefix, Statementfull]));
	//Variable Definition
	g.push(new Item(VariableDefinition ,[_var, VariableDeclarationList]));
	g.push(new Item(VariableDeclarationList,[VariableDeclaration]));
	g.push(new Item( VariableDeclarationList,[VariableDeclarationList,COMMON, VariableDeclaration]));
	g.push(new Item( VariableDeclaration,[Identifier,VariableInitializer]));
	g.push(new Item(VariableInitializer,[Symbol.NULL]));
	g.push(new Item(VariableInitializer,[AssignmentExpression]));
	//Expression
	g.push(new Item(ExpressionStatement ,[Expression]));
	g.push(new Item(EmptyStatement,[FEN]));
	g.push(new Item(Expression ,[AssignmentExpression]));
	g.push(new Item(Expression ,[ Expression,COMMON, AssignmentExpression]));
	g.push(new Item(OptionalExpression ,[ Expression]));
	g.push(new Item(OptionalExpression ,[ Symbol.NULL]));

	//Statements
	g.push(new Item(Statement ,[EmptyStatement]));
	g.push(new Item(Statement ,[ ExpressionStatement, OptionalSemicolon]));
	g.push(new Item(Statement ,[VariableDefinition, OptionalSemicolon]));
	g.push(new Item(Statement ,[Block]));
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
	g.push(new Item(OptionalSemicolon,[FEN]));
	//Assignment Operators
	g.push(new Item(AssignmentExpression,[ConditionalExpression]));
	g.push(new Item(AssignmentExpression,[LeftSideExpression,T_EQ, AssignmentExpression]));
	g.push(new Item(AssignmentExpression,[LeftSideExpression, CompoundAssignment, AssignmentExpression]));
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
	
	
	g.push(new Item(TYPE,[TYPE,F_LEFT,NUM,F_RIGHT]));
	g.push(new Item(TYPE,[BASIC]));
	g.push(new Item(STMTS,[STMTS,STMT]));
	g.push(new Item(STMTS,[Symbol.NULL]));

	g.push(new Item(STMT,[LOC,OP_EQ,BOOL,ST_END]));
	g.push(new Item(STMT,[IF,B_LEFT,BOOL,B_RIGHT,STMT,IF_STMT]));
	g.push(new Item(IF_STMT,[ELSE,STMT]));
	g.push(new Item(IF_STMT,[Symbol.NULL]));
	//g.push(new Item(STMT,[IF,B_LEFT,BOOL,B_RIGHT,STMT,ELSE,STMT]));
	g.push(new Item(STMT,[WHILE,B_LEFT,BOOL,B_RIGHT,STMT]));
	g.push(new Item(STMT,[DO,STMT,WHILE,B_LEFT,BOOL,B_RIGHT,ST_END]));
	g.push(new Item(STMT,[BREAK,ST_END]));
	g.push(new Item(STMT,[BLOCK]));

	g.push(new Item(LOC,[LOC,F_LEFT,BOOL,F_RIGHT]));
	g.push(new Item(LOC,[ID]));
	g.push(new Item(BOOL,[BOOL,CON_OR,JOIN]));
	g.push(new Item(BOOL,[JOIN]));
	g.push(new Item(JOIN,[JOIN,CON_AND,EQUAL]));
	g.push(new Item(JOIN,[EQUAL]));
	g.push(new Item(EQUAL,[EQUAL,CON_EQ,REL]));
	g.push(new Item(EQUAL,[REL]));
	g.push(new Item(REL,[EXPR,CON_LT,EXPR]));
	g.push(new Item(REL,[EXPR,CON_LE,EXPR]));
	g.push(new Item(REL,[EXPR,CON_GT,EXPR]));
	g.push(new Item(REL,[EXPR,CON_GE,EXPR]));
	g.push(new Item(REL,[EXPR]));
	g.push(new Item(EXPR,[EXPR,OP_PLUS,TERN]));
	g.push(new Item(EXPR,[EXPR,OP_MINUS,TERN]));
	g.push(new Item(EXPR,[TERN]));
	g.push(new Item(TERN,[TERN,OP_MUL,UNARY]));
	g.push(new Item(TERN,[TERN,OP_DIV,UNARY]));
	g.push(new Item(TERN,[UNARY]));
	g.push(new Item(UNARY,[OP_NOT,UNARY]));
	g.push(new Item(UNARY,[OP_MINUS,UNARY]));
	g.push(new Item(UNARY,[FACTOR]));
	g.push(new Item(FACTOR,[B_LEFT,BOOL,B_RIGHT]));
	g.push(new Item(FACTOR,[NUM]));
	g.push(new Item(FACTOR,[LOC]));

	//g.push(new Item(BLOCK,[BLOCK,STMT]));
	//g.push(new Item(BLOCK,[Symbol.NULL]));
	// g.push(new Item(STMT,[IF,ID,STMT,BLOCK]));
	// g.push(new Item(BLOCK,[ELSE,STMT]));
	// g.push(new Item(BLOCK,[Symbol.NULL]));
	// g.push(new Item(STMT,[BASIC]));
	/*
	 var E=new Nonterminal("E");
	 var T=new _n("T");
	 var F=new _n("F");
	 //var D=new Nonterminal("D");
	 //var T=new Nonterminal("T");
	 // var L=new Nonterminal("L");
	 var t_i=new Terminator("i");
	 var t_l=new Terminator("(");
	 var t_r=new Terminator(")");
	 var t_p=new Terminator("+");
	 var t_m=new Terminator("*");
	 //
	 //
	 g.push(new Item(E,[T,F]));
	 g.push(new Item(T,[t_p]));
	 g.push(new Item(T,[Symbol.NULL]));
	 g.push(new Item(F,[t_m]));
	 g.push(new Item(F,[Symbol.NULL]));
	 //
	 */
	var Z=new Nonterminal("Z");
	var g_root=new Item(Z);
	g_root.Right.Symbols=[BLOCK,Symbol.END];

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