if(!Abe)
	Abe={};

Abe.Stmt=function(){
	this.after=0;
}
Abe.Stmt.Null=new Stmt();
Abe.Stmt.Enclosing=Abe.Stmt.Null;
Abe.Stmt.prototype.gen=function(b,a){
	return;
}
$.inherit(Abe.Stmt,Abe.Node);

Abe.If=function(expr,stmt){
	this.expr=expr;
	this.stmt=stmt;
}
Abe.If.prototype.gen=function(b,a){
	var l=this.newlabel();
	this.expr.jumping(0,a);
	this.emitlabel(l);
	this.stmt.gen(l,a);
}
$.inherit(Abe.If,Abe.Stmt);

Abe.Else=function(expr,stmt1,stmt2){
	this.expr=expr;
	this.stmt1=stmt1;
	this.stmt2=stmt2;
}
Abe.Else.prototype.gen=function(b,a){
	var l1=this.newlabel();
	var l2=this.newlabel();
	this.expr.jumping(0,l2);
	this.emitlabel(l1);
	this.stmt1.gen(l1,a);
	this.emit("goto L"+a);
	this.emitlabel(l2);
	this.stmt2.gen(l2,a);
}
$.inherit(Abe.Else,Abe.Stmt);

Abe.While=function(){
	this.stmt=null;
	this.expr=null;
}
Abe.While.prototype.init=function(expr,stmt){
	this.expr=expr;
	this.stmt=stmt;
}
Abe.While.prototype.gen=function(b,a){
	this.after=a;
	this.expr.jumping(0,a);
	var l=this.newlabel();
	this.emitlabel(l);
	this.stmt.gen(l,b);
	this.emit("goto L"+b);
}
$.inherit(Abe.While,Abe.Stmt);

Abe.Do=function(){
	this.stmt=null;
	this.expr=null;
}
Abe.Do.prototype.init=function(expr,stmt){
	this.expr=expr;
	this.stmt=stmt;
}
Abe.Do.prototype.gen=function(b,a){
	this.after=a;
	var l=this.newlabel();
	this.stmt.gen(b,l);
	this.emitlabel(l);
	this.expr.jumping(b,0);
}
$.inherit(Abe.Do,Abe.Stmt);

Abe.Set=function(id,expr){
	this.id=id;
	this.expr=expr;
}
Abe.Set.prototype.gen=function(b,a){
	this.emit(this.id.toString()+" = "+this.expr.gen().toString());
}
$.inherit(Abe.Set,Abe.Stmt);

Abe.SetElem=function(access,expr){
	this.array=access.array;
	this.index=access.index;
	this.expr=expr;
}
Abe.SetElem..prototype.gen=function(b,a){
	var s1=this.index.reduce().toString();
	var s2=this.index.reduce().toString();
	this.emit(this.array.toString()+" [ "+s1+" ] = "+s2);
}
$.inherit(Abe.SetElem,Abe.Stmt);

Abe.Seq=function(stmt1,stmt2){
	this.stmt1=stmt1;
	this.stmt2=stmt2;
}
Abe.Seq.prototype.gen=function(b,a){
	if(this.stmt1===Abe.Stmt.Null){
		this.stmt2.gen(b,a);
	}else if(this.stmt2===Abe.Stmt.Null){
		this.stmt1.gen(b,a);
	}else{
		var l=this.newlabel();
		this.stmt1.gen(b,l);
		this.emitlabel(l);
		this.stmt2.gen(l,a);
	}
}
$.inherit(Abe.Seq,Abe.Stmt);

Abe.Break=function(){
	if(Abe.Stmt.Enclosing===Abe.Stmt.Null){
		this.error("unenclosed break");
	}
	this.stmt=Abe.Stmt.Enclosing;
}
Abe.Break.prototype.gen=function(b,a){
	this.emit("goto L"+stmt.after);
}
$.inherit(Abe.Break,Abe.Stmt);
