
Abe.Type=function(str,tag,width){
	this.base(str,tag);
	this.width=width;
}
Abe.Type.prototype.numeric=function(type){
	 if(type.equals(Abe.Type.Char)||type.equals(Abe.Type.Int)||type.equals(Abe.Type.Byte))
	 	return true;
	 else
	 	return false;
}
Abe.Type.prototype.max=function(t1,t2){
	if(!this.numeric(t1)||!this.numeric(t2))
		return null;
	else if(t1.equals(Abe.Type.Int)||t2.equals(Abe.Type.Int))
		return Abe.Type.Int;
	else if(t1.equals(Abe.Type.Byte)||t2.equals(Abe.Type.Byte))
		return Abe.Type.Byte;
	else
		return Abe.Type.Char;
}
$.inherit(Abe.Type,Abe.Word);

Abe.Type.Int=new Abe.Type("int", Abe.Tag.INT,4);
Abe.Type.Char=new Abe.Type("char" ,Abe.Tag.CHAR,1);
Abe.Type.Byte=new Abe.Type("byte",Abe.Tag.BYTE,1);

Abe.TArray=function(type,size){
	this.base("[]",Abe.Tag.INDEX,sz*type.widtd);
	this.of=type;
	this.size=size;
}
Abe.TArray.prototype.toString=function(){
	return "["+size+"] "+of.toString();
}
$.inherit(Abe.Type,Abe.TArray);
