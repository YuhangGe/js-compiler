/**
 * @author Abraham
 * 依赖core.js
 */
LR_ONE_TERMINATORS = {
    '+': new Terminator('+'),
	'-': new Terminator('-'),
    '*': new Terminator('*'),
	'/': new Terminator('/'),
    '(': new Terminator('('),
    ')': new Terminator(')'),
    '0': new Terminator('0'),
    '1': new Terminator('1'),
    '2': new Terminator('2'),
    '3': new Terminator('3'),
    '4': new Terminator('4'),
    '5': new Terminator('5'),
    '6': new Terminator('6'),
    '7': new Terminator('7'),
    '8': new Terminator('8'),
    '9': new Terminator('9'),
	'.': new Terminator('.')
};
LR_ONE_NONTERMINALS = {
    'E': new Nonterminal('E'),
    'T': new Nonterminal('T'),
    'F': new Nonterminal('F')
};


s0 = new State(0);
s1 = new State(1);
s2 = new State(2);
s3 = new State(3);
s4 = new State(4);
s5 = new State(5);
s6 = new State(6);
s7 = new State(7);
s8 = new State(8);
s9 = new State(9);
s10 = new State(10);
s11 = new State(11);


s0.ACTION.Add(LR_ONE_TERMINATORS['('], new ShiftAction(4));
s0.ACTION.Add([LR_ONE_TERMINATORS['0'], LR_ONE_TERMINATORS['1'], LR_ONE_TERMINATORS['2'], LR_ONE_TERMINATORS['3'], LR_ONE_TERMINATORS['4'], LR_ONE_TERMINATORS['5'], LR_ONE_TERMINATORS['6'], LR_ONE_TERMINATORS['7'], LR_ONE_TERMINATORS['8'], LR_ONE_TERMINATORS['9']], new ShiftAction(5));
s0.GOTO.Add(LR_ONE_NONTERMINALS['E'], s1);
s0.GOTO.Add(LR_ONE_NONTERMINALS['T'], s2);
s0.GOTO.Add(LR_ONE_NONTERMINALS['F'], s3);


s1.ACTION.Add([LR_ONE_TERMINATORS['+'],LR_ONE_TERMINATORS['-']], new ShiftAction(6));
s1.ACTION.Add(Symbol.ENDSYMBOL, ACCEPTACTION);


s2.ACTION.Add([LR_ONE_TERMINATORS['+'],LR_ONE_TERMINATORS['-']], new ReduceAction(2));
s2.ACTION.Add([LR_ONE_TERMINATORS['*'],LR_ONE_TERMINATORS['/']], new ShiftAction(7));
s2.ACTION.Add(LR_ONE_TERMINATORS[')'], new ReduceAction(2));
s2.ACTION.Add(Symbol.ENDSYMBOL, new ReduceAction(2));


s3.ACTION.Add([LR_ONE_TERMINATORS['+'],LR_ONE_TERMINATORS['-']], new ReduceAction(4));
s3.ACTION.Add([LR_ONE_TERMINATORS['*'],LR_ONE_TERMINATORS['/']], new ReduceAction(4));
s3.ACTION.Add(LR_ONE_TERMINATORS[')'], new ReduceAction(4));
s3.ACTION.Add(Symbol.ENDSYMBOL, new ReduceAction(4));


s4.ACTION.Add(LR_ONE_TERMINATORS['('], new ShiftAction(4));
s4.ACTION.Add([LR_ONE_TERMINATORS['0'], LR_ONE_TERMINATORS['1'], LR_ONE_TERMINATORS['2'], LR_ONE_TERMINATORS['3'], LR_ONE_TERMINATORS['4'], LR_ONE_TERMINATORS['5'], LR_ONE_TERMINATORS['6'], LR_ONE_TERMINATORS['7'], LR_ONE_TERMINATORS['8'], LR_ONE_TERMINATORS['9']], new ShiftAction(5));
s4.GOTO.Add(LR_ONE_NONTERMINALS['E'], s8);
s4.GOTO.Add(LR_ONE_NONTERMINALS['T'], s2);
s4.GOTO.Add(LR_ONE_NONTERMINALS['F'], s3);

s5.ACTION.Add([LR_ONE_TERMINATORS['+'],LR_ONE_TERMINATORS['-']], new ReduceAction(6));
s5.ACTION.Add([LR_ONE_TERMINATORS['*'],LR_ONE_TERMINATORS['/']], new ReduceAction(6));
s5.ACTION.Add(LR_ONE_TERMINATORS[')'], new ReduceAction(6));
s5.ACTION.Add(Symbol.ENDSYMBOL, new ReduceAction(6));


s6.ACTION.Add(LR_ONE_TERMINATORS['('], new ShiftAction(4));
s6.ACTION.Add([LR_ONE_TERMINATORS['0'], LR_ONE_TERMINATORS['1'], LR_ONE_TERMINATORS['2'], LR_ONE_TERMINATORS['3'], LR_ONE_TERMINATORS['4'], LR_ONE_TERMINATORS['5'], LR_ONE_TERMINATORS['6'], LR_ONE_TERMINATORS['7'], LR_ONE_TERMINATORS['8'], LR_ONE_TERMINATORS['9']], new ShiftAction(5));
s6.GOTO.Add(LR_ONE_NONTERMINALS['T'], s9);
s6.GOTO.Add(LR_ONE_NONTERMINALS['F'], s3);


s7.ACTION.Add(LR_ONE_TERMINATORS['('], new ShiftAction(4));
s7.ACTION.Add([LR_ONE_TERMINATORS['0'], LR_ONE_TERMINATORS['1'], LR_ONE_TERMINATORS['2'], LR_ONE_TERMINATORS['3'], LR_ONE_TERMINATORS['4'], LR_ONE_TERMINATORS['5'], LR_ONE_TERMINATORS['6'], LR_ONE_TERMINATORS['7'], LR_ONE_TERMINATORS['8'], LR_ONE_TERMINATORS['9']], new ShiftAction(5));
s7.GOTO.Add(LR_ONE_NONTERMINALS['F'], s10);


s8.ACTION.Add([LR_ONE_TERMINATORS['+'],LR_ONE_TERMINATORS['-']], new ShiftAction(6));
s8.ACTION.Add(LR_ONE_TERMINATORS[')'], new ShiftAction(11));

s9.ACTION.Add([LR_ONE_TERMINATORS['+'],LR_ONE_TERMINATORS['-']], new ReduceAction(1));
s9.ACTION.Add([LR_ONE_TERMINATORS['*'],LR_ONE_TERMINATORS['/']], new ShiftAction(7));
s9.ACTION.Add(LR_ONE_TERMINATORS[')'], new ReduceAction(1));
s9.ACTION.Add(Symbol.ENDSYMBOL, new ReduceAction(1));


s10.ACTION.Add([LR_ONE_TERMINATORS['+'],LR_ONE_TERMINATORS['-']], new ReduceAction(3));
s10.ACTION.Add([LR_ONE_TERMINATORS['*'],LR_ONE_TERMINATORS['/']], new ReduceAction(3));
s10.ACTION.Add(LR_ONE_TERMINATORS[')'], new ReduceAction(3));
s10.ACTION.Add(Symbol.ENDSYMBOL, new ReduceAction(3));


s11.ACTION.Add([LR_ONE_TERMINATORS['+'],LR_ONE_TERMINATORS['-']], new ReduceAction(5));
s11.ACTION.Add([LR_ONE_TERMINATORS['*'],LR_ONE_TERMINATORS['/']], new ReduceAction(5));
s11.ACTION.Add(LR_ONE_TERMINATORS[')'], new ReduceAction(5));
s11.ACTION.Add(Symbol.ENDSYMBOL, new ReduceAction(5));

LR_ONE_TABLE = new Array(s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11);

//
//Debug.print(  s7.ACTION.Get(LR_ONE_TERMINATORS['1']));
//Debug.print( LR_ONE_TABLE[0]));
//Debug.print(LR_ONE_TABLE[0].GOTO.Add(LR_ONE_NONTERMINALS['E']]);
