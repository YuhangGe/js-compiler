if(typeof Abe==='undefined')
	Abe={};

Abe.Out={
	buffer:new Array(),
	output:null,
	reset:function(){
		this.buffer.length=0;
		this.output=null;
	},
	print:function(str){
		this.buffer.push(str);
	},
	toString:function(){
		if(this.output===null)
			this.output=this.buffer.join('');
		return this.output;
	}
}

Abe.Reset= function() {
	Abe.Node.labels=0;
	Abe.Temp.count=0;
	Abe.Out.reset();
	Abe.IRArray.length=0;
}