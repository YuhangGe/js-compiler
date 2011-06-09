if(!Abe)
	Abe= {};

Abe.Node= function() {
	this.lexline=Abe.Lexer.line;

}
Abe.Node.labels=0;
Abe.Node.prototype.error= function(s) {
	throw "error: "+s;
}
Abe.Node.prototype.newlabel= function() {
	return ++Abe.Node.labels;
}
Abe.Node.prototype.emitlabel= function(i) {
	Abe.Out.print("L"+i+":");
}
Abe.Node.prototype.emit= function(s) {
	Abe.Out.print("\t"+s+"\n");
}
Abe.Expr= function(token,type) {
	this.base();
	this.op=token;
	this.type=type;
}
Abe.Expr.prototype.gen= function() {
	return this;
}
Abe.Expr.prototype.reduce= function() {
	return this;
}
Abe.Expr.prototype.jumping= function(t,f) {
	this.emitjumps(this.toString(),t,f);
}
Abe.Expr.prototype.emitjumps= function(str,t,f) {
	if(t!==0 && f!==0) {
		this.emit("if "+str+" goto L"+t);
		this.emit("goto L"+f);
	} else if(t!==0) {
		this.emit("if "+str+" goto L"+t);
	} else if(f!==0) {
		this.emit("iffalse "+str+" goto L"+f);
	} else {
		//do nothing
	}
}
Abe.Expr.prototype.toString= function() {
	return this.op.toString();
}
$.inherit(Abe.Expr,Abe.Node);

Abe.Id= function(id,type,offset) {
	this.base(id,type);
	this.offset=offset;
}
Abe.Id.prototype= {
	toString:undefined
};
$.inherit(Abe.Id,Abe.Expr);

Abe.Op= function(token,type) {
	this.base(token,type);
}
Abe.Op.prototype= {
	reduce: function() {
		var x=this.gen();
		if(x instanceof Abe.Constant)
			return x;
		var t=new Abe.Temp(this.type);
		this.emit(t.toString()+" = "+x.toString());
		return t;
	},
	toString:undefined
}

$.inherit(Abe.Op,Abe.Expr);

Abe.Arith= function(token,expr1,expr2) {
	this.base(token,null);
	this.expr1=expr1;
	this.expr2=expr2;
	this.type=Abe.Type.max(this.expr1.type,this.expr2.type);
	if(this.type===null)
		this.error("type error!");
}
Abe.Arith.prototype.gen= function() {
	
	return new Abe.Arith(this.op,this.expr1.reduce(),this.expr2.reduce());
}
Abe.Arith.prototype.toString= function() {
	return this.expr1.toString()+" "+this.op.toString()+" "+this.expr2.toString();
}
$.inherit(Abe.Arith,Abe.Op);

Abe.Temp= function(type) {
	this.base(Abe.Word.temp,type);
	this.number=++Abe.Temp.count;

}
Abe.Temp.count=0;
Abe.Temp.prototype.toString= function() {
	return "t"+this.number;
}
$.inherit(Abe.Temp,Abe.Expr);

Abe.Unary= function(token,expr) {
	this.base(token,null);
	this.expr=expr;
	this.type=Abe.Type.max(Abe.Type.Int,expr.type);
	if(this.type===null)
		this.error("type error!");
}
Abe.Unary.prototype.gen= function() {
	return new Abe.Unary(this.op,this.expr.reduce());
}
Abe.Unary.prototype.toString= function() {
	return this.op.toString()+" "+this.expr.toString();
}