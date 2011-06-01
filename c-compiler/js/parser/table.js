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

	this.states[0]=new Abe.State(0);
	this.states[0].quickAddShift([4,3],[13,12],[16,11],[17,14],[19,15]);
	this.states[0].quickAddGoto([0,1],[1,2],[2,4],[3,5],[4,6],[5,7],[6,8],[7,9],[8,10],[9,13]);

	this.states[1]=new Abe.State(1);
	this.states[1].addAction(0,Abe.Action.ACC);

	this.states[2]=new Abe.State(2);
	this.states[2].quickAddShift([1,17],[2,18]);
	this.states[2].quickAddReduce([0,27],[3,27],[5,27],[6,27],[7,27],[8,27],[9,27],[10,27],[11,27],[12,27],[13,27],[14,27],[15,27],[18,27]);

	this.states[3]=new Abe.State(3);
	this.states[3].quickAddReduce([0,4],[1,4],[2,4],[3,4],[5,4],[6,4],[7,4],[8,4],[9,4],[10,4],[11,4],[12,4],[13,4],[14,4],[15,4],[18,4]);

	this.states[4]=new Abe.State(4);
	this.states[4].quickAddShift([5,19]);
	this.states[4].quickAddReduce([0,2]);

	this.states[5]=new Abe.State(5);
	this.states[5].quickAddShift([6,20]);
	this.states[5].quickAddReduce([0,6],[3,6],[5,6],[18,6]);

	this.states[6]=new Abe.State(6);
	this.states[6].quickAddShift([7,21]);
	this.states[6].quickAddReduce([0,8],[3,8],[5,8],[6,8],[18,8]);

	this.states[7]=new Abe.State(7);
	this.states[7].quickAddReduce([0,10],[3,10],[5,10],[6,10],[7,10],[18,10]);

	this.states[8]=new Abe.State(8);
	this.states[8].quickAddShift([8,22],[9,25],[10,26],[11,27],[12,23],[13,24]);
	this.states[8].quickAddReduce([0,15],[3,15],[5,15],[6,15],[7,15],[18,15]);

	this.states[9]=new Abe.State(9);
	this.states[9].quickAddShift([14,28],[15,29]);
	this.states[9].quickAddReduce([0,18],[3,18],[5,18],[6,18],[7,18],[8,18],[9,18],[10,18],[11,18],[12,18],[13,18],[18,18]);

	this.states[10]=new Abe.State(10);
	this.states[10].quickAddReduce([0,21],[3,21],[5,21],[6,21],[7,21],[8,21],[9,21],[10,21],[11,21],[12,21],[13,21],[14,21],[15,21],[18,21]);

	this.states[11]=new Abe.State(11);
	this.states[11].quickAddShift([4,3],[13,12],[16,11],[17,14],[19,15]);
	this.states[11].quickAddGoto([1,36],[8,30],[9,13]);

	this.states[12]=new Abe.State(12);
	this.states[12].quickAddShift([4,3],[13,12],[16,11],[17,14],[19,15]);
	this.states[12].quickAddGoto([1,36],[8,38],[9,13]);

	this.states[13]=new Abe.State(13);
	this.states[13].quickAddReduce([0,24],[3,24],[5,24],[6,24],[7,24],[8,24],[9,24],[10,24],[11,24],[12,24],[13,24],[14,24],[15,24],[18,24]);

	this.states[14]=new Abe.State(14);
	this.states[14].quickAddShift([4,3],[13,12],[16,11],[17,14],[19,15]);
	this.states[14].quickAddGoto([1,36],[2,46],[3,5],[4,6],[5,7],[6,8],[7,9],[8,10],[9,13]);

	this.states[15]=new Abe.State(15);
	this.states[15].quickAddReduce([0,26],[3,26],[5,26],[6,26],[7,26],[8,26],[9,26],[10,26],[11,26],[12,26],[13,26],[14,26],[15,26],[18,26]);

	this.states[17]=new Abe.State(17);
	this.states[17].quickAddShift([4,3],[13,12],[16,11],[17,14],[19,15]);
	this.states[17].quickAddGoto([1,36],[2,60],[3,5],[4,6],[5,7],[6,8],[7,9],[8,10],[9,13]);

	this.states[18]=new Abe.State(18);
	this.states[18].quickAddShift([4,3],[13,12],[16,11],[17,14],[19,15]);
	this.states[18].quickAddGoto([1,36],[2,74],[3,5],[4,6],[5,7],[6,8],[7,9],[8,10],[9,13]);

	this.states[19]=new Abe.State(19);
	this.states[19].quickAddShift([4,3],[13,12],[16,11],[17,14],[19,15]);
	this.states[19].quickAddGoto([1,36],[3,88],[4,6],[5,7],[6,8],[7,9],[8,10],[9,13]);

	this.states[20]=new Abe.State(20);
	this.states[20].quickAddShift([4,3],[13,12],[16,11],[17,14],[19,15]);
	this.states[20].quickAddGoto([1,36],[4,101],[5,7],[6,8],[7,9],[8,10],[9,13]);

	this.states[21]=new Abe.State(21);
	this.states[21].quickAddShift([4,3],[13,12],[16,11],[17,14],[19,15]);
	this.states[21].quickAddGoto([1,36],[5,113],[6,8],[7,9],[8,10],[9,13]);

	this.states[22]=new Abe.State(22);
	this.states[22].quickAddShift([4,3],[13,12],[16,11],[17,14],[19,15]);
	this.states[22].quickAddGoto([1,36],[6,124],[7,9],[8,10],[9,13]);

	this.states[23]=new Abe.State(23);
	this.states[23].quickAddShift([4,3],[13,12],[16,11],[17,14],[19,15]);
	this.states[23].quickAddGoto([1,36],[7,134],[8,10],[9,13]);

	this.states[24]=new Abe.State(24);
	this.states[24].quickAddShift([4,3],[13,12],[16,11],[17,14],[19,15]);
	this.states[24].quickAddGoto([1,36],[7,143],[8,10],[9,13]);

	this.states[25]=new Abe.State(25);
	this.states[25].quickAddShift([4,3],[13,12],[16,11],[17,14],[19,15]);
	this.states[25].quickAddGoto([1,36],[6,152],[7,9],[8,10],[9,13]);

	this.states[26]=new Abe.State(26);
	this.states[26].quickAddShift([4,3],[13,12],[16,11],[17,14],[19,15]);
	this.states[26].quickAddGoto([1,36],[6,162],[7,9],[8,10],[9,13]);

	this.states[27]=new Abe.State(27);
	this.states[27].quickAddShift([4,3],[13,12],[16,11],[17,14],[19,15]);
	this.states[27].quickAddGoto([1,36],[6,172],[7,9],[8,10],[9,13]);

	this.states[28]=new Abe.State(28);
	this.states[28].quickAddShift([4,3],[13,12],[16,11],[17,14],[19,15]);
	this.states[28].quickAddGoto([1,36],[8,182],[9,13]);

	this.states[29]=new Abe.State(29);
	this.states[29].quickAddShift([4,3],[13,12],[16,11],[17,14],[19,15]);
	this.states[29].quickAddGoto([1,36],[8,190],[9,13]);

	this.states[30]=new Abe.State(30);
	this.states[30].quickAddReduce([0,22],[3,22],[5,22],[6,22],[7,22],[8,22],[9,22],[10,22],[11,22],[12,22],[13,22],[14,22],[15,22],[18,22]);

	this.states[36]=new Abe.State(36);
	this.states[36].quickAddShift([2,18]);
	this.states[36].quickAddReduce([0,27],[3,27],[5,27],[6,27],[7,27],[8,27],[9,27],[10,27],[11,27],[12,27],[13,27],[14,27],[15,27],[18,27]);

	this.states[38]=new Abe.State(38);
	this.states[38].quickAddReduce([0,23],[3,23],[5,23],[6,23],[7,23],[8,23],[9,23],[10,23],[11,23],[12,23],[13,23],[14,23],[15,23],[18,23]);

	this.states[46]=new Abe.State(46);
	this.states[46].quickAddShift([5,19],[18,199]);

	this.states[60]=new Abe.State(60);
	this.states[60].quickAddShift([5,19]);
	this.states[60].quickAddReduce([0,1]);

	this.states[74]=new Abe.State(74);
	this.states[74].quickAddShift([3,202],[5,19]);

	this.states[88]=new Abe.State(88);
	this.states[88].quickAddShift([6,20]);
	this.states[88].quickAddReduce([0,5],[3,5],[5,5],[18,5]);

	this.states[101]=new Abe.State(101);
	this.states[101].quickAddShift([7,21]);
	this.states[101].quickAddReduce([0,7],[3,7],[5,7],[6,7],[18,7]);

	this.states[113]=new Abe.State(113);
	this.states[113].quickAddReduce([0,9],[3,9],[5,9],[6,9],[7,9],[18,9]);

	this.states[124]=new Abe.State(124);
	this.states[124].quickAddShift([12,23],[13,24]);
	this.states[124].quickAddReduce([0,11],[3,11],[5,11],[6,11],[7,11],[18,11]);

	this.states[134]=new Abe.State(134);
	this.states[134].quickAddShift([14,28],[15,29]);
	this.states[134].quickAddReduce([0,16],[3,16],[5,16],[6,16],[7,16],[8,16],[9,16],[10,16],[11,16],[12,16],[13,16],[18,16]);

	this.states[143]=new Abe.State(143);
	this.states[143].quickAddShift([14,28],[15,29]);
	this.states[143].quickAddReduce([0,17],[3,17],[5,17],[6,17],[7,17],[8,17],[9,17],[10,17],[11,17],[12,17],[13,17],[18,17]);

	this.states[152]=new Abe.State(152);
	this.states[152].quickAddShift([12,23],[13,24]);
	this.states[152].quickAddReduce([0,12],[3,12],[5,12],[6,12],[7,12],[18,12]);

	this.states[162]=new Abe.State(162);
	this.states[162].quickAddShift([12,23],[13,24]);
	this.states[162].quickAddReduce([0,13],[3,13],[5,13],[6,13],[7,13],[18,13]);

	this.states[172]=new Abe.State(172);
	this.states[172].quickAddShift([12,23],[13,24]);
	this.states[172].quickAddReduce([0,14],[3,14],[5,14],[6,14],[7,14],[18,14]);

	this.states[182]=new Abe.State(182);
	this.states[182].quickAddReduce([0,19],[3,19],[5,19],[6,19],[7,19],[8,19],[9,19],[10,19],[11,19],[12,19],[13,19],[14,19],[15,19],[18,19]);

	this.states[190]=new Abe.State(190);
	this.states[190].quickAddReduce([0,20],[3,20],[5,20],[6,20],[7,20],[8,20],[9,20],[10,20],[11,20],[12,20],[13,20],[14,20],[15,20],[18,20]);

	this.states[199]=new Abe.State(199);
	this.states[199].quickAddReduce([0,25],[3,25],[5,25],[6,25],[7,25],[8,25],[9,25],[10,25],[11,25],[12,25],[13,25],[14,25],[15,25],[18,25]);

	this.states[202]=new Abe.State(202);
	this.states[202].quickAddReduce([0,3],[1,3],[2,3],[3,3],[5,3],[6,3],[7,3],[8,3],[9,3],[10,3],[11,3],[12,3],[13,3],[14,3],[15,3],[18,3]);

}
ABE_LR_TABLE=new Abe.Table();