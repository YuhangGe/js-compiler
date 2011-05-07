/**
 * @author     Abraham [abraham1@163.com]
 * @blog       http://yuhanghome.net
 * @address    Software Institute, Nanjing University, China
 * @约定        私有函数使用_开头，统一小写；公开函数使用Pascal命名法
 * @算法参考     《编译原理——编译程序构造与实践教程》（张幸儿、戴新宇 编著，人民邮电出版社）
 */
/**
 * 帮助类，对一个项集求后继项集的过程中，项集中可能有多个项的后继是同一个符号的后继，
 * 该类用于储存符号和其后继的对应
 */
_Symbol_Follow_Helper = function(){
    this._symbols = new Array();
    this._item_sets = new Array();
}
_Symbol_Follow_Helper.prototype._get_symbol_index = function(symbol){
    for (var i = 0; i < this._symbols.length; i++) {
        if (this._symbols[i].Equals(symbol)) 
            return i;
    }
    return -1;
}
_Symbol_Follow_Helper.prototype.GetItemSet = function(symbol){
    var index = this._get_symbol_index(symbol);
    if (index !== -1) {
        return this._item_sets[index];
    }
    return null;
}
_Symbol_Follow_Helper.prototype.AddItemSet = function(symbol, itemset){
    this._symbols.push(symbol);
    this._item_sets.push(itemset);
}

/**
 * 在计算后继关系项集的过程中，某项的后继项集可能是已经存在的项集，这时候需要把该项的后继项集的引用改成已经存在的项集
 * 为了实现这一点，使用此帮助类，存储生成的后继项集和该项集的前驱项
 */
_Follow_Previous_Helper = function(itemset){
    //存储该后继项集的前继项，当发现该后继项集已经存在的时候，把这些前继项的后继项集的引用改为那个已经存在的项集
    this.PreItems = new Array();
    this.ItemSet = itemset;
}
/**
 * 分析表生成器
 */
_ATCreator = function(){
    this._init_set = null;//初始项集
    this._item_sets = new Array();//所有的项集
    this._symbols= new Array();
    this._root_item = null;
}
/**
 * 初始化文法
 * @param {Array of Item} set 初始项集
 * @param {Item} root 增加的根项集
 */
_ATCreator.prototype.InitGrammer = function(set, root){
    this._init_set = set;
    this._root_item = root;
    this._root_symbol=root.Left;
    this._set_index = 0;//项集编号索引
}

/**
 * 生成分析表，算法过程不难理解，但具体的程序实现比较麻烦，虽然尽力写了注释
 * 但感觉还是不够清晰。一定要先把LR(1)的分析表构造算法SLR(1)算法学会。
 * 本算法实现是依据《编译原理——编译程序构造与实践教程》（张幸儿、戴新宇 编著，人民邮电出版社）
 * 第5章第2节第4点LR(1)分析表的构造（第一版第109页起）中描述的算法。
 */
_ATCreator.prototype.Create = function(){

    //第一步，生成后继关系项集表
    this._create_follow_table();
    
    //第二步，计算symbol的first和follow
    this._get_first_follow();
    
    //第三步，使用后继关系项集表生成LR(1)分析表，即生成table.js文件
    this._create_table();
    
    //第四步，生成grammar.js文件
    var grammar = this._create_grammar();
    
    return {
        "Table": this._table,
        "Grammar": grammar
    };
    //return this._output_table();

}
_ATCreator.prototype._create_grammar = function(){
	return null;
}

/**
 * 辅助函数，用在_create_table中，返回符号在表中的索引
 */
_ATCreator.prototype._get_symbol_index=function(arr,symbol){
	for(var i=0;i<arr.length;i++)
		if(arr[i].Equals(symbol))
			return i;
	return -1;
}
/**
 * 辅助函数，用在_create_table中，返回规则的序号
 */
_ATCreator.prototype._get_grammar_index=function(item){
	for(var i=0;i<this._init_set.length;i++){
		if(this._init_set[i].GrammarEquals(item)===true)
			return i;
	}
	return -1;
}
/**
 * 使用后继关系项集表生成LR(1)分析表
 */
_ATCreator.prototype._create_table = function(){
   	this._t_symbols=new Array();
	this._n_symbols=new Array();
	for(var i=0;i<this._symbols.length;i++){
		var s=this._symbols[i];
		if(s.Type===Symbol.TERMINATOR)
			this._t_symbols.push(s)
		else if(s.Equals(this._root_symbol)===false)
			this._n_symbols.push(s);
	}
	this._table=[];
	/**
	 * 填写SLR(1)分析表，参见《编译原理——编译程序构造与实践教程》（张幸儿、戴新宇 编著，人民邮电出版社）
	 * 第一版第114页
	 */
	for(var i=0;i<this._item_sets.length;i++){
		if(this._item_sets[i].Type===ItemSet.END){
			continue;//如果是END符的项集，忽略
		}
		var items=this._item_sets[i].Items;
		
		var actions=[];
		var gotos=[];
		actions.length=this._t_symbols.length;
		gotos.length=this._n_symbols.length;
		for(var j=0;j<items.length;j++){
			var item=items[j];
			
			if (item.Follow.Type === FOLLOWSHIP.SHIFT) {
				var follow=item.Follow;
				//对于初始项Z'->Z#的Z_后续的#_后续，置ACTION[k][#]=acc，这里，k是Z'->Z#的项集序号
				if(follow.Value.Equals(Symbol.END)){
					actions[this._get_symbol_index(this._t_symbols,follow.Value)]=new Action('#',Action.ACCEPT);
				}
				//对于X_后继，x∈Vn，置GOTO[i][X]=j，这里j是该X_后继的项集序号
				else if(follow.Value.Type==Symbol.NONTERMINAL){
					gotos[this._get_symbol_index(this._n_symbols,follow.Value)]=follow.Result.Id;
				}
				//对于X_后继，x∈Vt，置ACTION[i][X]=Sj，这里j是该X_后继的项集序号
				else if(follow.Value.Type===Symbol.TERMINATOR){
					actions[this._get_symbol_index(this._t_symbols,follow.Value)]=new Action(follow.Result.Id,Action.SHIFT);
				}
			}
			//3.对于#U:=u后继，置ACTION[i][a]=rj，这里j是规则U:=u的序号，而a∈U的follow集合，对于follow集合，参见编译原理教材
			else {
				
			
				var fset=item.Left.Follow;
				var rj=this._get_grammar_index(item)+1;//加1是因为还有个init(0)状态
					//$.dprint(rj);
				for(var k=0;k<fset.length;k++){
			  		actions[this._get_symbol_index(this._t_symbols,fset[k])]=new Action(rj,Action.REDUCE);
				}
			}
		}
		this._table[this._item_sets[i].Id]=[actions,gotos];
	}
	
}

/**
 * 生成后继关系项集表,储存在this._item_sets中
 */
_ATCreator.prototype._create_follow_table = function(){
    //初始项集
    var init_set = this._create_item_set(this._set_index++, this._root_item, "Init" ,ItemSet.INIT);
    this._item_sets.push(init_set);
    
    var _set_queue = new Array();
    _set_queue.push(init_set);
    
//    var debug_counter = 0;//调试计数器，避免陷入死循环
    //使用栈实现迭代生成所有项集
    while (true) {
        var item_set = _set_queue.shift();
        
        
        var symbol_follow_helper = new _Symbol_Follow_Helper();//辅助类，用于处理一个项集中多个项对应同一个后继项集
        //将项集中各个项对应生成的后继项集临时保存，待对项集中的项全部处理完成后，看生成的项集是否已经存在于之前已经生成的项集列表中，
        //如果还不存在，则加入到已经生成的项集列表this._item_sets中
        var tmp_follow_preious_array = new Array();
        
        /**
         * 遍历项集中的每一项，生成后继项集，临时保存在tmp_set_array中
         */
        for (var i = 0; i < item_set.Items.length; i++) {
            var item = item_set.Items[i];
            
            
            //得到圆点后的符号
            var dot_symbol = item.GetDotSymbol();
            
            if (dot_symbol === null)//如果是null，说明圆点已经在最右边，后继关系为规约
            {
                item.Follow.Type = FOLLOWSHIP.REDUCE;
                item.Follow.Value = null;
                item.Follow.Result = null;
                
            }
            else //否则，创建新的项集
            {
                var f_p_h = symbol_follow_helper.GetItemSet(dot_symbol);
                var follow_item = item.GetFollowItem();
                //如果还没有为后继的符号创建项集，则创建新的项集
                if (f_p_h === null) {
                	var type=ItemSet.SYMBOL;
                	if(dot_symbol.Equals(Symbol.END))
                		type=ItemSet.END;
                    var new_item_set = this._create_item_set(this._set_index++, follow_item, dot_symbol.Name,type);
                    var f_p_h = new _Follow_Previous_Helper(new_item_set);
                    symbol_follow_helper.AddItemSet(dot_symbol, f_p_h);
                    tmp_follow_preious_array.push(f_p_h);//临时保存，最后检测
                }
                //否则，添加一个基本项，并对闭包进行扩展
                else {
                    this._append_item_set(f_p_h.ItemSet, follow_item);
                    
                }
                f_p_h.PreItems.push(item);
                item.Follow.Type = FOLLOWSHIP.SHIFT;
                item.Follow.Value = dot_symbol;
                item.Follow.Result = f_p_h.ItemSet;
                
            }
            
        }
        
        
        /**
         * 检测生成的项集是否已经存在于之前已经生成的项集列表中，
         * 如果还不存在，则加入到已经生成的项集列表this._item_sets中
         */
        for (var i = 0; i < tmp_follow_preious_array.length; i++) {
            var index = this._get_itemset_index(tmp_follow_preious_array[i].ItemSet);
            if (index === -1) {
                this._item_sets.push(tmp_follow_preious_array[i].ItemSet);//加入到已经生成的项集列表中
                _set_queue.push(tmp_follow_preious_array[i].ItemSet);//同时加入到迭代队列中，用于等待迭代生成全部项集
            }
            else {
                for (var j = 0; j < tmp_follow_preious_array[i].PreItems.length; j++) {
                    tmp_follow_preious_array[i].PreItems[j].Follow.Result = this._item_sets[index];
                }
            }
        }
        
        //如果栈为空，结束迭代
        if (_set_queue.length === 0) 
            break;
        
//        //调试使用，防止死循环
//        if (++debug_counter > 100) 
//            break;
    }
    
}


_ATCreator.prototype._output_table = function(){
    var rtn = "<style>.t{display:table-cell;margin-left:20px;border-right:1px solid blue;width:50%;}</style><ul style='list-style:none;width:100%;'>";
    for (var i = 0; i < this._item_sets.length; i++) {
        var item_set = this._item_sets[i];
        rtn += "<li style='margin-bottom:10px'><div class='t'>" + item_set.Id + "  " + item_set.Name + "_</div><div class='t'>";
        for (var j = 0; j < item_set.Items.length; j++) {
            var item = item_set.Items[j];
            rtn += "<div>" + item.toString() + "  ;";
            if (item.Follow.Type !== FOLLOWSHIP.REDUCE) 
                rtn += "  " + item.Follow.Value.Name + "  →" + item.Follow.Result.Id;
            else 
                rtn += " REDUCE";
            rtn += "</div>"
        }
        rtn += "</div></li>";
    }
    rtn += "</ul></br></br><table  border='1' cellspacing='50%' cellpadding='3'><tr>";
    rtn += "<th>state</th>";
    for(var i=0;i<this._t_symbols.length;i++){
    	rtn+="<th>"+this._t_symbols[i].Name+"</th>";
    }
    for(var i=0;i<this._n_symbols.length;i++){
    	rtn+="<th>"+this._n_symbols[i].Name+"</th>";
    }
    rtn+="</tr>";
    for(var i=0;i<this._table.length;i++){
    	var row=this._table[i];
    	if(!row)
    		continue;
    	rtn+="<tr><td>"+i+"</td>";
    	for(var j=0;j<row[0].length;j++){
    		rtn+="<td>";
    		var a=row[0][j];
    		if(a){
    			$.dprint(a);
    			if(a.Type===Action.ACCEPT)
    				rtn+="acc";
    			else if(a.Type===Action.SHIFT)
    				rtn+="S"+a.Value;
    			else
    				rtn+="r"+a.Value;
    		}
    	    rtn+="</td>";
    	}
    	for(var j=0;j<row[1].length;j++){
    		rtn+="<td>";
    		var g=row[1][j];
    		if(g){
    			rtn+=g;
    		}
    		rtn+="</td>";
    	}
    	rtn+="</tr>";
    }
    return rtn;
}

/**
 * 递归生成表
 */
_ATCreator.prototype._get_itemset_index = function(item_set){
    for (var i = 0; i < this._item_sets.length; i++) {
        if (this._item_sets[i].Equals(item_set)) 
            return i;
    }
    return -1;
}

/**
 * 在一个项集item_set中添加一个基本项，并对闭包进行扩展
 * @param {ItemSet} item_set
 * @param {Item} base_item
 */
_ATCreator.prototype._append_item_set = function(item_set, base_item){
    if (this._is_in_closure(item_set.Items, base_item) === false) {
        item_set.AddItem(base_item);
        item_set.AddItem(this._get_closure(base_item, item_set.Items));
    }
    else {
        throw "wrong at _append_item_set!"
    }
}

/**
 * 得到一个基本项的项集
 * @param {Integer} id
 * @param {ItemSet} base_item
 */
_ATCreator.prototype._create_item_set = function(id, base_item, name ,type){
    var rtn = new ItemSet(id);
    rtn.Name = name;
    rtn.Type = type;
    rtn.AddItem(base_item);
    rtn.AddItem(this._get_closure(base_item));
    return rtn;
}
/**
 * 返回给定项的闭包项集
 * @param {Item} item 基本项
 * @param {Array of Item} exists_items 闭包内已经存在的项
 * @return {Array} 闭包项集（不包含基本项本身）
 */
_ATCreator.prototype._get_closure = function(item, exists_items){
    var f = item.GetDotSymbol();
    var rtn = new Array();
    
    if (f == null) 
        return rtn;
    if (f.Type === Symbol.TERMINATOR) 
        return rtn;
    
    var tmp_items = new Array();
    if (typeof exists_items !== "undefined" && exists_items !== null && exists_items instanceof Array) {
        for (var i = 0; i < exists_items.length; i++) {
            tmp_items.push(exists_items[i]);
        }
    }
    this._get_closure_loop(item, tmp_items, rtn);
    return rtn;
}
/**
 * _get_closure的具体实现辅助函数
 * @param {Item} item
 * @param {Array Of Item} exists_items
 * @param {Array Of Item} rtn_items
 */
_ATCreator.prototype._get_closure_loop = function(item, exists_items, rtn_items){
    var f = item.GetDotSymbol();
    if (f == null) 
        return;
    if (f.Type === Symbol.TERMINATOR) 
        return;
    for (var i = 0; i < this._init_set.length; i++) {
        if (this._init_set[i].Left.Equals(f)) {
            if (this._is_in_closure(exists_items, this._init_set[i]) === false) {
                rtn_items.push(this._init_set[i].Clone());
                exists_items.push(this._init_set[i]);
                this._get_closure_loop(this._init_set[i], exists_items, rtn_items);//递归得到相关项
            }
        }
    }
    
}
/**
 * 辅助函数，返回item是否已经存在于closure中
 * @param {Array of Item} closure
 * @param {Item} item
 */
_ATCreator.prototype._is_in_closure = function(closure, item){
    for (var i = 0; i < closure.length; i++) 
        if (closure[i].Equals(item)) 
            return true;
    return false;
}

/**
 * 得到符号的first和follow
 * 算法如下
 * (1)
 * for each symbol X   
 *		FIRST[X] := { }, FOLLOW[X] := { }, nullable[X] := false
 * 
 * (2)
 * for each terminal symbol t
 *		FIRST[t] := {t}
 *
 * (3)
 *  repeat
 * 		for each production X → Y1 Y2 … Yk,
 *			(3.1)
 * 			if all Yi are nullable then
 *				nullable[X] := true
 *			(3.2)
 * 			if Y1..Yi-1 are nullable then
 *				FIRST[X] := FIRST[X] U FIRST[Yi]
 *			(3.3)
 * 			if Yi+1..Yk are all nullable then
 *				FOLLOW[Yi] := FOLLOW[Yi] U FOLLOW[X]
 *			
 * 			(3.4)
 * 			if Yi+1..Yj-1 are all nullable then
 *				FOLLOW[Yi] := FOLLOW[Yi] U FIRST[Yj]
 * until FIRST, FOLLOW, nullable do not change
 * 关于算法的解释，参看龙书《编译原理》第二版140页
 * 
 */
_ATCreator.prototype._get_first_follow = function(){
	
	//首先将语法规则拷贝到一个数组中，方便循环
	var ff_sets=new Array(this._root_item);
	for(var i=0;i<this._init_set.length;i++)
		ff_sets.push(this._init_set[i]);

	//然后将语法中的符号提取出来放在数组中
	this._symbols=new Array();
	for(var i=0;i<ff_sets.length;i++){
		this._add_symbols(this._symbols,ff_sets[i]);
	}
	
	//开始算法
	//步骤(1)初始化在Symbol的构造函数中实现
	
	//步骤(2)
	for(var i=0;i<this._symbols.length;i++){
		var t=this._symbols[i];
		if(t.Type===Symbol.TERMINATOR)
			t.First.push(t);
		//$.dprint(ff_symbols[i]);
	}
	
	//var debug_n=0;//在调试时使用，防止算法没写对陷入死循环。。。
	
	//步骤(3)---这个操蛋的算法哥看了半天，然后又写了半天代码，然后发现居然还是理解错了，然后又用了半天才有了现在这代码啊！！！！
	var changed=true;
	while(changed){
		//debug_n++;
		var in_change=false;
		for(var i=0;i<ff_sets.length;i++){
			var p=ff_sets[i];
			var r=p.Right.Symbols;
			
			var j,k;//用来进行循环的变量
			
			/**步骤(3.1)---真TM的麻烦啊有木有！！！！**/
			//首先如果nullable是true就不需要检验了，因为算法中不会出现true改为false的情况
			if(p.Left.Nullable===false){
				//此处使用的思想是首先假设Y1...Yk全为nullable,将X的nullable设为true
				p.Left.Nullable=true;
				in_change=true;
				//然后检验
				for(j=0;j<r.length;j++){
					//如果出现某个Yi不为nullable，取消假设
					if(r[j].Nullable===false){
						p.Left.Nullable=false;
						in_change=false;
						break;
					}
				}
			}
			
			/**
			 * 耗了十多个小时才写来的这么几行代码，已经木有能力用注释解释了
			 * 参考龙书《编译原理》第二版140页理解吧~~~
			 **/
			//步骤(3.2)---真TM的麻烦啊有木有！！！！
			for(j=0;j<r.length;j++){
				if(this._union_symbols(p.Left.First,r[j].First)===true)
					in_change=true;
				if(r[j].Nullable===false)
					break;
			}

			//步骤(3.3)---真TM的麻烦啊有木有！！！！
			for(j=r.length-1;j>=0;j--){
				if(r[j].Type===Symbol.NONTERMINAL &&
					this._union_symbols(r[j].Follow,p.Left.Follow)===true)
						in_change=true;
		
				if(r[j].Nullable===false)
					break;
			}
					
			//步骤(3.4)---真TM的麻烦啊有木有！！！！
			for(j=0;j<r.length-1;j++){
				if(r[j].Type===Symbol.TERMINATOR)
					continue;
				for(k=j+1;k<r.length;k++){
					if(this._union_symbols(r[j].Follow,r[k].First)===true)
						in_change=true;
					if(r[k].Nullable===false)
						break;
				}
			}
			
			
		}
		changed=in_change;
		
		//if(debug_n>20)//在调试时使用，防止算法没写对陷入死循环。。。
			//break;
	}
	
	//$.dprint(debug_n);
	//$.dprint('+++++++++++++');
	for(var i=0;i<this._symbols.length;i++)
		$.dprint(this._symbols[i]);
 
}
/**
 * 辅助函数，在_get_first_follow中，将set2中所有非空并入(union)到set1中
 * @return {boolean} 如果set1元素发生改变，返回ture，否则false
 */
_ATCreator.prototype._union_symbols=function(set1,set2){
	var tmp=new Array();
	for(var i=0;i<set2.length;i++){
		var e=set2[i];
		if(e.Equals(Symbol.NULL))
			continue;
		var _in=false;
		for(var j=0;j<set1.length;j++){
			if(set1[j].Equals(e)){
				_in=true;
				break;
			}
		}
		if(_in===false)
			tmp.push(e);
	}
	if(tmp.length>0){
		for(var i=0;i<tmp.length;i++)
			set1.push(tmp[i]);
		return true;
	}else
		return false;
	
		
}
/**
 * 辅助函数，在_get_first_follow中，从语法项item中提取symbol放入arr数组中
 */
_ATCreator.prototype._add_symbols=function(arr,item){
	//将item中的symbols取出临时放入tmp
	var tmp=new Array(item.Left);
	for(var i=0;i<item.Right.Symbols.length;i++)
		tmp.push(item.Right.Symbols[i]);
	
	//检验tmp中每一项是否已经在arr 中，如果没有，加入arr
	for(var i=0;i<tmp.length;i++){
		var _in=false;
		for(var j=0;j<arr.length;j++){
			if(arr[j].Equals(tmp[i])){
				_in=true;
				break;
			}
		}
		if(_in===false)
			arr.push(tmp[i]);
				
	}
	//$.dprint(arr);
	
}
AnalysisTableCreator = new _ATCreator();
