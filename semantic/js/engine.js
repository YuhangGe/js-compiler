/**
 * @author Abraham
 * 依赖core.js,table.js
 */

function Engine(){
    this._stack = LR_ONE_STACK;
    this._table = LR_ONE_TABLE;
    this._grammar = LR_ONE_GRAMMAR_TABLE;
    this._error = false;
    this._current_token = null;
    this._current_index = 0;
	this._text=null;
}

Engine.prototype.Check = function(text){
	this._text=text;
    this._stack.push(new StackElement(this._table[0], Symbol.ENDSYMBOL,0));
    var tagS = true;
	
    while (tagS === true && this._error === false) {
      	this._get_next_token();
        if (this._current_index === text.length+1) {
            while (tagS) {
                tagS = this._analyze(Symbol.ENDSYMBOL);
            }
			break;
        }
        else {
            while (tagS) {
                var tmp = LR_ONE_TERMINATORS[this._current_token];
                tagS = this._analyze(tmp);
            }
            tagS = true;
        }

    }
	
	
	this._dispose();
	
}
Engine.prototype._get_next_token=function(){
	 this._current_token = this._text.charAt(this._current_index);
     this._current_index++;
	 return this._current_token;
}
Engine.prototype._get_pre_token=function(){
	this._current_index--;
	this._current_token = this._text.charAt(this._current_index-1);
	return this._current_token;
}
Engine.prototype._dispose=function(){
	this._stack.length=0;
	this._current_index=0;
	this._current_token=null;
	this._error = false;
}
Engine.prototype._err = function(msg){
    alert(msg);
    this._error = true;
}
Engine.prototype._analyze = function(symbol){
    //Debug.print(symbol);
    if (symbol == null) {
        this._err("不能识别的符号'" + this._current_token+"'");
        return false;
    }
    var act = this._stack[this._stack.length - 1].State.ACTION.Get(symbol);
    if (act == null) {
        this._err("匹配失败");
        return false;
    }
    switch (act.Type) {
        case ACTION.ACCEPT:
            $.$("output").value="Success!\n"+this._stack.pop().Value;
            return false;
            break;
        case ACTION.SHIFT:
			var value=this._getValue(symbol);
            this._stack.push(new StackElement(this._table[act.Value], symbol,value));
            return false;
            break;
        case ACTION.REDUCE:
            var U = this._grammar[act.Value].Reduce();
            var go_state = this._stack[this._stack.length - 1].State.GOTO.Get(U.Symbol);
            this._stack.push(new StackElement(go_state, U.Symbol,U.Value));
            return true;
            break;
    }
    return false;
}

Engine.prototype._getValue=function(symbol){
	var c=symbol.Name;
	var str="";
	while((c>='0' && c<='9') || c==='.'){
		str+=c;
		c=this._get_next_token();
	}

	var r=Number(str);
	if(str.length>0 && r!=NaN){
		this._get_pre_token();
		return r;
	}
	else
		return symbol.Name;
}

JSCompiler = new Engine();
