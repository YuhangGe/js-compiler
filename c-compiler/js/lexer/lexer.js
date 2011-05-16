/**
 * @author Abraham
 * 
 * */
if(! Abe)
	Abe={};

Abe.Lexer=function(src){
	this.line=1;
	this.peek=' ';
	this.words={};
	this.cur_idx=0;
	this.source=src;
	this.end_idx=this.source.length-1;
}
Abe.Lexer.prototype={
	init:function(){
		this.reserve(new Abe.Word("if",Abe.Tag.IF));
		this.reserve(new Abe.Word("else",Abe.Tag.ELSE));
		this.reserve(new Abe.Word("while",Abe.Tag.WHILE));
		this.reserve(new Abe.Word("do",Abe.Tag.DO));
		this.reserve(new Abe.Word("break",Abe.Tag.BREAK));
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
		if(this.cur_idx<=this.end_idx){
			this.peek=this.source[this.cur_idx];
			if(this.cur_idx==='\n')
				this.line++;
			this.cur_idx++;
		}else{
			this.peek=null;
		}
		return this.peek;
	},
	read_the_ch:function(ch){
		return this.read_ch()===ch;
	},
	scan:function(){
		for(;;read_ch()){
			if(this.peek===' ' || this.peek==='\t')
				continue;
			else if(this.peek==='\n')
				line++;
			else
				break;
		}
		if(this.peek===null)
			return null;
			
		
		switch(this.peek){
		case '&':
			if(read_the_ch('&')===true)
				return Abe.Word.and;
			else
				return new Abe.Token('&');
			break;	
		case '|':
			if(read_the_ch('|')===true)
				return Abe.Word.or;
			else
				return new Abe.Token('|');
			break;
		case '=':
			if(read_the_ch('=')===true)
				return Abe.Word.eq;
			else
				return new Abe.Token('=');
			break;
		case '!':
			if(read_the_ch('=')===true)
				return Abe.Word.ne;
			else
				return new Abe.Token('=');
			break;
		case '<':
			if(read_the_ch('=')===true)
				return Abe.Word.le;
			else
				return new Abe.Token('=');
			break;
		case '>':
			if(read_the_ch('=')===true)
				return Abe.Word.ge;
			else
				return new Abe.Token('>');
			break;
		}
		
		var word=this.peek;
		if(this.is_digit(this.peek)){
			while(this.is_digit(this.read_ch())===true ){
				word+=this.peek;
			}
			return new Abe.Num(Number(word));
		}
		
		
		if(this.is_letter(this.peek)===true){
			while(this.is_letter(this.read_ch())===true ){
				word+=this.peek;
			}
			var w=this.words[word];
			if(!w)
				return w;
			else{
				w=new Abe.Word(word,Abe.Tag.ID);
				this.words[word]=w;
				return w;
			}
		}
		var t=new Abe.Token(this.peek.charCodeAt(0));
		this.peek=' ';
		return t;
	}
}
