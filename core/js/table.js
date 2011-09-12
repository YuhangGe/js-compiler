if(!Abe)
	Abe= {};
Abe.Table= function() {
this.states=new Array();
 this.initTable();
 }
Abe.Table.prototype.initTable=function(){

this.states[0]=new Abe.State(0);
this.states[0].setEmptyAction(3);
this.states[0].quickAddShift([2,14],[4,8],[5,12]);
this.states[0].quickAddGoto([0,1],[1,2],[2,4],[3,5],[4,6],[5,13],[8,9],[9,10],[10,7],[11,11]);

this.states[1]=new Abe.State(1);
this.states[1].addAction(0,Abe.Action.ACC);

this.states[2]=new Abe.State(2);
this.states[2].quickAddReduce([0,1]);

this.states[3]=new Abe.State(3);
this.states[3].quickAddReduce([0,2]);

this.states[4]=new Abe.State(4);
this.states[4].quickAddShift([2,14],[4,8],[5,12]);
this.states[4].quickAddReduce([0,3]);
this.states[4].quickAddGoto([3,16],[4,6],[5,13],[8,9],[9,10],[10,7],[11,11]);

this.states[5]=new Abe.State(5);
this.states[5].quickAddReduce([0,4],[2,4],[4,4],[5,4]);

this.states[6]=new Abe.State(6);
this.states[6].quickAddReduce([0,6],[2,6],[4,6],[5,6]);

this.states[7]=new Abe.State(7);
this.states[7].quickAddReduce([0,16],[2,16],[3,16],[4,16],[5,16]);

this.states[8]=new Abe.State(8);
this.states[8].quickAddReduce([0,13],[2,13],[3,13],[4,13],[5,13]);

this.states[9]=new Abe.State(9);
this.states[9].quickAddShift([4,27]);
this.states[9].quickAddGoto([12,26]);

this.states[10]=new Abe.State(10);
this.states[10].quickAddReduce([4,12]);

this.states[11]=new Abe.State(11);
this.states[11].quickAddReduce([4,14]);

this.states[12]=new Abe.State(12);
this.states[12].quickAddReduce([4,15]);

this.states[13]=new Abe.State(13);
this.states[13].quickAddReduce([0,19],[2,19],[3,19],[4,19],[5,19]);

this.states[14]=new Abe.State(14);
this.states[14].setEmptyAction(29);
this.states[14].quickAddShift([2,14],[4,8],[5,12]);
this.states[14].quickAddGoto([4,31],[5,13],[6,28],[7,30],[8,9],[9,10],[10,7],[11,11]);

this.states[16]=new Abe.State(16);
this.states[16].quickAddReduce([0,5],[2,5],[4,5],[5,5]);

this.states[26]=new Abe.State(26);
this.states[26].quickAddReduce([0,17],[2,17],[3,17],[4,17],[5,17]);

this.states[27]=new Abe.State(27);
this.states[27].quickAddReduce([0,18],[2,18],[3,18],[4,18],[5,18]);

this.states[28]=new Abe.State(28);
this.states[28].quickAddShift([3,40]);

this.states[29]=new Abe.State(29);
this.states[29].quickAddReduce([3,8]);

this.states[30]=new Abe.State(30);
this.states[30].quickAddShift([2,14],[4,8],[5,12]);
this.states[30].quickAddReduce([3,9]);
this.states[30].quickAddGoto([4,41],[5,13],[8,9],[9,10],[10,7],[11,11]);

this.states[31]=new Abe.State(31);
this.states[31].quickAddReduce([2,10],[3,10],[4,10],[5,10]);

this.states[40]=new Abe.State(40);
this.states[40].quickAddReduce([0,7],[2,7],[3,7],[4,7],[5,7]);

this.states[41]=new Abe.State(41);
this.states[41].quickAddReduce([2,11],[3,11],[4,11],[5,11]);

}
 ABE_LR_TABLE=new Abe.Table();