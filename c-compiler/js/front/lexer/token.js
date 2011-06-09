if(typeof Abe ==='undefined')
	Abe={};


/**
 * 
 * @param {anything} value
 * @param {Abe.Tag} tag
 */
Abe.Token=function(value,tag){
	this.tag=tag;
	this.value=value;
}

Abe.Token.prototype.toString=function(){
	return this.value;
}

Abe.Token.END=new Abe.Token('#',Abe.Tag.END);

Abe.Num=function(value){
	this.base(value,Abe.Tag.NUM);
}
Abe.Num.prototype.toString=function(){
	return ""+this.value;
}
$.inherit(Abe.Num,Abe.Token);

Abe.Word=function(str,tag){
	this.base(str,tag);
	this.lexeme=this.value;
}
Abe.Word.prototype.toString=function(){
	return this.lexeme;
}
$.inherit(Abe.Word,Abe.Token);

Abe.Word.and=new Abe.Word("&&",Abe.Tag.AND);
Abe.Word.or=new Abe.Word("||",Abe.Tag.OR);
Abe.Word.eq=new Abe.Word("==",Abe.Tag.EQ);
Abe.Word.ne=new Abe.Word("!=",Abe.Tag.NE);
Abe.Word.le=new Abe.Word("<=",Abe.Tag.LE);
Abe.Word.ge=new Abe.Word(">=",Abe.Tag.GE);
Abe.Word.minus=new Abe.Word("minus",Abe.Tag.MINUS);
Abe.Word.temp=new Abe.Word("temp",Abe.Tag.TEMP);
