if(typeof Abe==='undefined')
	Abe={};
	
Abe.IRCode=function(op,arg1,arg2,result){
	this.op=op;
	this.arg1=arg1;
	this.arg2=arg2;
	this.result=result;
}
Abe.IRCode.prototype={
	toString:function(){
		switch(this.op.type){
			case Abe.IROp.Arith:
				return this.result.toString()+" = "+this.arg1.toString()+" "+this.op.toString()+" "+this.arg2.toString();
			break;
			case Abe.IROp.LABEL:
				return "L"+this.result.toString();
			break;
			case Abe.IROp.JUMP:
				return this.op.toString()+this.result.toString();
			break;
			case Abe.IROp.ARRAY:
				
			break;
			case Abe.IROp.REL:
				return 'rel:'+this.arg1.toString()+" "+this.op.toString()+" "+this.arg2.toString();
				break;
		}
		return '';
	}
}

Abe.IROp=function(type,value){
	this.type=type;
	this.value=value;
}
Abe.IROp.prototype={
	toString:function(){
		 return this.value;
	}
}
Abe.IROp.ARITH=0;
Abe.IROp.ARRAY=1;
Abe.IROp.JUMP=2;
Abe.IROp.LABEL=3;
Abe.IROp.SET=4;
Abe.IROp.REL=5;

Abe.IRVar=function(type,value){
	this.type=type;
	this.value=value;
}
Abe.IRArg.prototype={
	toString:function(){
		if(this.type===Abe.IRArg.VAR)
			return 'V'+this.value;
		else if(this.type===Abe.IRArg.TEMP)
			return 't'+this.value;
		else
			return this.value.toString();
	}
}
Abe.IRArg.VAR=0;
Abe.IRArg.TEMP=1;
Abe.IRArg.CONST=2;

Abe.IR={
	codes:new Array(),
	output:null,
	outBuff:new Array(),
	add:function(code){
		this.codes.push(code);
	},
	toString:function(){
		if(output===null){
			for(var i=0;i<this.codes.length;i++){
				this.outBuff.push(this.codes[i].toString());
			}
			output=this.outBuff.join('\n');
		}
		return output;
	},
	reset:function(){
		this.codes.length=0;
		this.output=null;
		this.outBuff.length=0;
	}
}

