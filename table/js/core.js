/**
 * @author   Abraham [abraham1@163.com]
 * @blog     http://yuhanghome.net
 * @address  Software Institute, Nanjing University, China
 * @约定      私有函数、成员使用_开头，统一小写；公开函数使用Pascal命名法
 */
var FOLLOWSHIP = {
    SHIFT: 0,
    REDUCE: 1,
}


/****************************
 * 表示符号的类，包括终结符和非终结符
 ****************************/
function Symbol(name, type ){
    this._id = Symbol._auto_increment_id++;
    this.Name = name;
    this.Type = type;
    this.First = new Array();
    this.Follow = new Array();
    this.Nullable = false;
}

Symbol._auto_increment_id = 0;//为每个Symbol赋以一个自动增加的id，用于快速比较两个Sybmol是否相等

Symbol.prototype.Equals = function(symbol){
    return this._id === symbol._id;// this.Name==symbol.Name && this.Type===symbol.Type;
}

/**
 * 终结符
 * @param {String} value
 */
function Terminator(name){
    this.base(name, Symbol.TERMINATOR);
}

$.inherit(Terminator, Symbol);

/**
 * 非终结符
 * @param {String} name
 */
function Nonterminal(name){
    this.base(name, Symbol.NONTERMINAL);
}

$.inherit(Nonterminal, Symbol);

//Symbol的两种类型的枚举
Symbol.TERMINATOR = 0;
Symbol.NONTERMINAL = 1;


Symbol.END = new Terminator('#');
Symbol.NULL = new Terminator('e');
Symbol.NULL.Nullable=true;

/**********************************
 * 表示构造LR(0)项集规范族的表的类
 *
 *********************************/
/**
 * 项集
 */
function ItemSet(id){
    this.Id = id; //项集编号
    this.Items = new Array(); //项的集合
    this.Name=null;
}

/**
 * 判断两个项集是否相同
 * @param {ItemSet} itemset
 */
ItemSet.prototype.Equals = function(itemset){
    if (this.Items.length !== itemset.Items.length) 
        return false;
    for (var i = 0; i < this.Items.length; i++) {
        if (this.Items[i].Equals(itemset.Items[i]) === false) 
            return false;
    }
    return true;
}
/**
 * 添加项到项集中，没有对应的DelItem函数是因为算法的执行过程不需要删除操作
 * @param {Item|Array of Item} item
 */
ItemSet.prototype.AddItem = function(item){
    if (item instanceof Array) {
        for (var i = 0; i < item.length; i++) 
            this.Items.push(item[i]);
    }
    else 
        this.Items.push(item);
}
ItemSet.prototype.Display = function(){
    Debug.print("--------" + this.Id + "-----------");
    for (var i = 0; i < this.Items.length; i++) {
        $.dprint(this.Items[i]);
    }
}

/***
 * 表示一个项集中的项，诸如 E->T.+F，其中Left表示推导符->的左部E，Right属性表示右部 T.+F
 * @param {Object} left
 */
function Item(left){
    //this._id = Item._auto_increment_id++;//给每一个Item分配一个唯一的id,用于判断是否相同
    this.Left = left; //推导符->的左部，是一个非终结符
    this.Right = new _Right(); //推导符->的右部，是一个Right的类
    this.Follow = new _Follow();
}

//Item._auto_increment_id = 0;

Item.prototype.toString = function(){
    var rtn = this.Left.Name + " → ";
    var add_dot = false;
    for (var i = 0; i < this.Right.Symbols.length; i++) {
        if (this.Right.Dot === i) {
            rtn += ".";
            add_dot = true;
        }
        
        rtn += this.Right.Symbols[i].Name;
    }
    if (add_dot === false) 
        rtn += ".";
    return rtn;
}
Item.prototype.Clone=function(){
	var rtn=new Item(this.Left);
	rtn.Right=this.Right;
	return rtn;
}

Item.prototype.Equals = function(item){
    if (!this.Left.Equals(item.Left)) 
        return false;
    if (this.Right.Dot !== item.Right.Dot || this.Right.Symbols.length !== item.Right.Symbols.length) 
        return false;
    for (var i = 0; i < this.Right.Symbols.length; i++) {
        if (!this.Right.Symbols[i].Equals(item.Right.Symbols[i])) 
            return false;
    }
    return true;
}
/**
 * 得到后继关系的基本项
 */
Item.prototype.GetFollowItem = function(){
    if (this.Right.Dot === this.Right.Symbols.length) 
        return null;
    var rtn = new Item(this.Left);
    rtn.Right.Symbols = this.Right.Symbols;
    rtn.Right.Dot = this.Right.Dot + 1;
    return rtn;
    
}

/**
 * 得到圆点后的符号
 */
Item.prototype.GetDotSymbol = function(){
    if (this.Right.Dot === this.Right.Symbols.length) 
        return null;
    return this.Right.Symbols[this.Right.Dot];
}

/**
 * 内部类，表示一个项的推导符的右边，如 T.+F
 * Symbols表示 T + F三个符号
 * Dot表示小数点位置
 */
function _Right(){
    this.Symbols = new Array(); //符号列表
    this.Dot = 0; //点的位置
}

/**
 * 后继关系对象
 */
function _Follow(){
    this.Type = null; //Follow的类型，是SHIFT还是REDUCE
    this.Value = null; //Follow的值，如果Type是SHIFT，则为符号（Symbol)；否则是规约的文法
    this.Result = null; //后继的关系
}
