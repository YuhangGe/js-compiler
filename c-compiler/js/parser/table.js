/**
 * @author Abraham
 * 依赖core.js
 */
if(!Abe)
	Abe= {};

Abe.Table= function() {

	this.states=new Array();

	this.initTable();
}
Abe.Table.prototype.initTable= function() {
	for(var i=0;i<16;i++)
		this.states[i]=new Abe.State(i);

	this.states[0].quickAddShift([2,4],[3,5]);
	this.states[0].quickAddGoto([0,1],[1,2],[2,3]);

	this.states[1].addAction(0,Abe.Action.ACC);
	this.states[1].quickAddShift([2,4],[3,5]);
	this.states[1].quickAddGoto([1,7],[2,3]);

	this.states[2].quickAddReduce([0,6],[2,6],[3,6]);

	this.states[3].quickAddShift([5,12]);
	this.states[3].quickAddGoto([3,11]);

	this.states[4].quickAddReduce([5,2]);

	this.states[5].quickAddReduce([5,3]);

	this.states[7].quickAddReduce([0,7],[2,7],[3,7]);

	this.states[11].quickAddShift([1,13],[4,14]);

	this.states[12].quickAddReduce([1,5],[4,5]);

	this.states[13].quickAddReduce([0,1],[2,1],[3,1]);

	this.states[14].quickAddShift([5,15]);

	this.states[15].quickAddReduce([1,4],[4,4]);

}
ABE_LR_TABLE=new Abe.Table();