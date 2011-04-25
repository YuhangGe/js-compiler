/**
 * @author Abraham
 */
Abe=new Object();

Abe.Global={
	auto_inc_id:0,
	register:function(tag){
		if(tag instanceof Array){
			for(var i=0;i<tag.length;i++)
				this[tag[i]]=this.auto_inc_id++;
		}else
			this[tag]=this.auto_inc_id++;
	}
}

Abe.Global.register(['ID','WHILE','NUM','EOF','OTHER']);
