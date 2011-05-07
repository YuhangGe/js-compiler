/**
 * @author Abraham
 * 
 * */
if(typeof Abe==='undefined')
	throw "依赖缺失。";
	
Abe.Lexer=function(src){
	if(typeof src!=='string')
		throw 'lexer accept only string';
		
	this._cur_ch=' ';
	this._cur_idx=0;
	this._src=src;
	this._end_idx=this._src.length-1;
}
Abe.Lexer.prototype={
	is_digit:function(ch){
		return (ch>='0' && ch<='9');
	},
	is_letter:function(ch){
		return (ch>='a' && ch<='z')
			|| (ch>='A' && ch<='Z')
			|| ch==='_';
	},
	get_next_ch:function(){
		if(this._cur_idx<=this._end_idx){
			this._cur_ch=this._src[this._cur_idx];
			this._cur_idx++;
		}else{
			this._cur_ch=null;
		}
		return this._cur_ch;
	},
	scan:function(){
		while(this._cur_ch===' ' || this._cur_ch==='\t')
			this.get_next_ch();
		if(this._cur_ch===null)
			return null;
			
		var word=this._cur_ch;
		var rtn=null;
		if(this.is_letter(word)===true){
			while(this.get_next_ch()!==null && this.is_letter(this._cur_ch)===true ){
				word+=this._cur_ch;
			}
			var type=LR_TABLE.SYMBOLS.ID;
			if(word==='int')
				type=LR_TABLE.SYMBOLS.INT;
			else if(word==='float')
			    type=LR_TABLE.SYMBOLS.FLOAT;
			rtn= new Abe.Table.Token(type,word);
		}else{
			//$.dprint(word);
			rtn= new Abe.Table.Token(LR_TABLE.SYMBOLS.UNDEF,this._cur_ch);	
			this.get_next_ch();
		}
		return rtn;
	}
}
