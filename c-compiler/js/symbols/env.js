Abe.Env=function(preEnv){
	this.table={};
	this.prev=preEnv;
}
Abe.Env.prototype.put=function(token,id){
	this.table[token]=id;
}
Abe.Env.prototype.get=function(token){
	for(var e=this;e!=null;e=e.prev){
		var f=e.table[token];
		if(f)
			return f;
	}
	return null;
}
