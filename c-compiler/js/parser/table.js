/**
 * @author Abraham
 * 依赖core.js
 */
if(!Abe)
	Abe={};


Abe.Table= function() {

	this.states=new Array();

	this.initTable();
}

Abe.Table.prototype.initTable= function() {
	for(var i=0;i<17;i++)
		this.states[i]=new Abe.Table.State(i);

	this.states[0].quickAddShift([1,4],[2,5]);
	this.states[0].quickAddGoto([0,1],[1,2],[2,3]);

	this.states[1].addAction(0,Abe.Table.Action.ACC);
	this.states[2].quickAddShift([5,7]);
	this.states[2].quickAddReduce([0,6]);

	this.states[3].quickAddShift([4,9]);
	this.states[3].quickAddGoto([3,8]);

	this.states[4].quickAddReduce([4,2]);

	this.states[5].quickAddReduce([4,3]);

	this.states[7].quickAddShift([1,4],[2,5]);
	this.states[7].quickAddGoto([0,10],[1,2],[2,3]);

	this.states[8].quickAddShift([3,15]);
	this.states[8].quickAddReduce([0,1],[5,1]);

	this.states[9].quickAddReduce([0,5],[3,5],[5,5]);

	this.states[10].quickAddReduce([0,7]);

	this.states[15].quickAddShift([4,16]);

	this.states[16].quickAddReduce([0,4],[3,4],[5,4]);

}
ABE_LR_TABLE=new Abe.Table();

