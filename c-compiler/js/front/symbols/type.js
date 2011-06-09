
Abe.Type=function(str,tag,width){
	this.base(str,tag);
	this.width=width;
}
Abe.Type.numeric=function(type){
	 if(type===Abe.Type.Char||type===Abe.Type.Int||type===Abe.Type.Byte)
	 	return true;
	 else
	 	return false;
}
Abe.Type.max=function(t1,t2){
	if(!Abe.Type.numeric(t1)||!Abe.Type.numeric(t2))
		return null;
	else if(t1===Abe.Type.Int||t2===Abe.Type.Int)
		return Abe.Type.Int;
	else if(t1===Abe.Type.Byte||t2===Abe.Type.Byte)
		return Abe.Type.Byte;
	else
		return Abe.Type.Char;
}
Abe.Type.prototype={
	toString:undefined
};
$.inherit(Abe.Type,Abe.Word);

Abe.Type.Int=new Abe.Type("int", Abe.Tag.BASIC,4);
Abe.Type.Char=new Abe.Type("char" ,Abe.Tag.BASIC,1);
Abe.Type.Byte=new Abe.Type("byte",Abe.Tag.BASIC,1);
Abe.Type.Float=new Abe.Type("float",Abe.Tag.BASIC,4);


Abe.TArray=function(type,size,dim){
	this.base("[]",Abe.Tag.INDEX,size*type.width);
	this.of=type;
	this.size=size;
	if(dim===undefined)
		this.dim=1;
	else
		this.dim=dim;
}
Abe.TArray.prototype.toString=function(){
	return "["+this.size+"] {"+this.of.toString()+"}("+this.width+")";
}
$.inherit(Abe.TArray,Abe.Type);
