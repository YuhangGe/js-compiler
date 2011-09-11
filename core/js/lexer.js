/**
 * @author Abraham
 * 
 * */
if(typeof Abe ==='undefined')
	Abe={};

Abe.Lexer=function(src){
	this.peek=' ';
	this.words={};
	this.cur_idx=-1;
	this.source=src;
	this.end_idx=this.source.length-1;
	this.bufToken=null;
	this.init();
	
	//this.read_ch();
	
}
Abe.Lexer.line=0;

Abe.Lexer.prototype={
	reset:function(){
		this.line=0;
		this.peek=' ';
		this.cur_idx=-1;
		this.bufToken=null;
	},
	init:function(){
		this.reserve(new Abe.Word("if",Abe.Tag.IF));
		this.reserve(new Abe.Word("else",Abe.Tag.ELSE));
		this.reserve(new Abe.Word("while",Abe.Tag.WHILE));
		this.reserve(new Abe.Word("do",Abe.Tag.DO));
		this.reserve(new Abe.Word("break",Abe.Tag.BREAK));
		this.reserve(new Abe.Word('var',Abe.Tag.VAR));
		this.reserve(new Abe.Word('delete',Abe.Tag.DELETE));
	},
 	reserve:function(word){
		this.words[word.lexeme]=word;
	},
	is_digit:function(ch){
		return ch!==null && ch>='0' && ch<='9';
	},
	is_letter:function(ch){
		return ch!==null &&((ch>='a' && ch<='z')
			|| (ch>='A' && ch<='Z'))
	},
	read_ch:function(){
		if(this.cur_idx<this.end_idx){
			this.cur_idx++;
			this.peek=this.source[this.cur_idx];
			if(this.peek ==='\n')
				Abe.Lexer.line++;
		}else{
			this.peek=null;
		}
		return this.peek;
	},
	read_the_ch:function(ch){
		return this.read_ch()===ch;
	},
	unread_ch:function(){
		if(this.peek===null)
			return;
		this.cur_idx--;
		if(this.peek==='\n')
			this.line--;
		this.peek=this.source[this.cur_idx];
	},
	scan:function(){
		if(this.bufToken!==null){
			var rtn=this.bufToken;
			this.bufToken=null;
			return rtn;
		}else{
			return this.get_token();
		}

	},
	/**
	 * 回退一个token，当遇到 empty符号时，需要
	 */
	back:function(token){
		this.bufToken=token;
		//$.dprint("lexer back:"+token);
	},
	get_token:function(){
		while(this.read_ch()!==null){
			if(this.peek===' ' || this.peek==='\t')
				continue;
			else if(this.peek==='\n')
				this.line++;
			else
				break;
		}
		if(this.peek===null)
			return null;
			
		
		switch(this.peek){
		case '&':
			if(this.read_the_ch('&')===true)
				return Abe.Word.and;
			else
				return new Abe.Token('&',Abe.Tag['&']);
			break;	
		case '|':
			if(this.read_the_ch('|')===true)
				return Abe.Word.or;
			else{
				this.unread_ch();
				return new Abe.Token('|',Abe.Tag['|']);
			}
			break;
		case '=':
			if(this.read_the_ch('=')===true)
				return Abe.Word.eq;
			else{
				this.unread_ch();
				return new Abe.Token('=',Abe.Tag['=']);
			}
				
			break;
		case '!':
			if(this.read_the_ch('=')===true)
				return Abe.Word.ne;
			else{
				this.unread_ch();
				return new Abe.Token('!',Abe.Tag['!']);
			}
			break;
		case '<':
			if(this.read_the_ch('=')===true)
				return Abe.Word.le;
			else{
				this.unread_ch();
				return new Abe.Token('<',Abe.Tag['<']);
			}
			break;
		case '>':
			if(this.read_the_ch('=')===true)
				return Abe.Word.ge;
			else{
				this.unread_ch();
				return new Abe.Token('>',Abe.Tag['>']);
			}
			break;
		}
		
		var word=this.peek;
		if(this.is_digit(this.peek)){
			while(this.is_digit(this.read_ch())===true ){
				word+=this.peek;
			}
			this.unread_ch();
			return new Abe.Token(word,Abe.Tag.NUMBER);
		}
		
		
		if(this.is_letter(this.peek)===true){
			while(this.is_letter(this.read_ch())===true ){
				word+=this.peek;
			}
			this.unread_ch();
			var w=this.words[word];
			if(w)
				return w;
			else{
				w=new Abe.Token(word,Abe.Tag.IDENTIFIER);
				this.words[word]=w;
				return w;
			}
		}

		return new Abe.Token(this.peek,Abe.Tag[this.peek]);
	}
}
