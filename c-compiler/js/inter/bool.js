if(!Abe)
	Abe= {};

/**
 * 常量类
 */
Abe.Constant= function(token,type) {
	//$.dprint(typeof token);
	if(typeof token==='number')
		this.base(new Abe.Num(token),Abe.Type.Int);
	else
		this.base(token,type);
}
Abe.Constant.prototype={
	toString:undefined
};
$.inherit(Abe.Constant,Abe.Expr);

Abe.Logical= function(token,expr1,expr2) {
	this.base(token,null);
	this.expr1=expr1;
	this.expr2=expr2;

}
Abe.Logical.prototype.gen= function() {
	var f=this.newlabel();
	var a=this.newlabel();
	var temp=new Abe.Temp(this.type);
	this.jumping(0,f);
	this.emit(temp.toString()+ " = true");
	this.emitIR(
		new Abe.IROp(Abe.IROp.SET,"="),
		new Abe.IRArg(Abe.IRArg.CONST,1),
		null,
		new Abe.IRArg(Abe.IRArg.TEMP,tmp.number)
	);
	this.emit("j L"+a);
	this.emitIR(
		new Abe.IROp(Abe.IROp.JUMP,"j"),
		null,
		null,
		new Abe.IRArg(Abe.IRArg.CONST,a)
	);
	this.emitlabel(f);
	this.emit(temp.toString()+" = false");
	this.emitIR(
		new Abe.IROp(Abe.IROp.SET,"="),
		new Abe.IRArg(Abe.IRArg.CONST,0),
		null,
		new Abe.IRArg(Abe.IRArg.TEMP,tmp.number)
	);
	this.emitlabel(a);
	return temp;
}
Abe.Logical.prototype.toString= function() {
	return this.expr1.toString()+" "+this.op.toString()+" "+this.expr2.toString();
}
$.inherit(Abe.Logical,Abe.Expr);

Abe.Or= function(token,expr1,expr2) {
	this.base(token,expr1,expr2);

}
Abe.Or.prototype= {
	jumping: function(t,f) {
		var label=(t!==0?t:this.newlabel());
		this.expr1.jumping(label,0);
		this.expr2.jumping(t,f);
		if(t===0) {
			this.emitlabel(label);
		}

	},
	toString:undefined
}
$.inherit(Abe.Or,Abe.Logical);

Abe.And= function(token,expr1,expr2) {
	this.base(token,expr1,expr2);

}
Abe.And.prototype= {
	jumping: function(t,f) {
		var label=(f!==0?f:this.newlabel());
		this.expr1.jumping(0,label);
		this.expr2.jumping(t,f);
		if(f===0) {
			this.emitlabel(label);
		}

	},
	toString:undefined
}
$.inherit(Abe.And,Abe.Logical);

Abe.Not= function(token,expr) {
	this.base(token,expr,expr);

}
Abe.Not.prototype.jumping= function(t,f) {
	this.expr.jumping(t,f);
}
Abe.Not.prototype.toString= function() {
	return this.op.toString()+" "+this.expr.toString();
}
$.inherit(Abe.Not,Abe.Logical);

Abe.Rel= function(token,expr1,expr2) {
	this.base(token,expr1,expr2);

}
Abe.Rel.prototype= {
	jumping: function(t,f) {
		var a=this.expr1.reduce();
		var b=this.expr2.reduce();
		var str=a.toString()+" "+this.op.toString()+" "+b.toString();
		this.emitIR(
			new Abe.IROp(Abe.IROp.REL,this.op.toString()),
			null,
			null,
			null
		);
		this.emitjumps(str,t,f);
	},
	toString:undefined
}

$.inherit(Abe.Rel,Abe.Logical);

Abe.Access= function(id,expr,type,dim) {
	this.base(new Abe.Word("[]",Abe.Tag.INDEX),type);
	if(dim===undefined)
		this.dim=1;
	else
		this.dim=dim;
	this.array=id;
	this.index=expr;
}
Abe.Access.prototype.gen= function() {
	
	return new Abe.Access(this.array,this.index.reduce(),this.type)	;
}
Abe.Access.prototype.jumping= function(t,f) {
	
	this.emitjumps(this.reduce().toString(),t,f);
}
Abe.Access.prototype.toString= function() {
	
	return this.array.toString()+" [ "+this.index.toString()+" ]";
}
$.inherit(Abe.Access,Abe.Op);