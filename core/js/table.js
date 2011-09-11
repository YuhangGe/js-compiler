if(!Abe)
	Abe= {};
Abe.Table= function() {
this.states=new Array();
 this.initTable();
 }
Abe.Table.prototype.initTable=function(){

this.states[0]=new Abe.State(0);
this.states[0].setEmptyAction(3);
this.states[0].quickAddShift([2,29],[3,8],[16,27],[19,26]);
this.states[0].quickAddGoto([0,1],[1,2],[2,4],[3,5],[4,6],[5,28],[6,9],[7,10],[8,7],[9,11],[11,12],[12,13],[13,14],[14,15],[15,17],[16,18],[17,16],[18,19],[19,20],[20,21],[21,22],[22,23],[23,24],[24,25]);

this.states[1]=new Abe.State(1);
this.states[1].addAction(0,Abe.Action.ACC);

this.states[2]=new Abe.State(2);
this.states[2].quickAddReduce([0,1]);

this.states[3]=new Abe.State(3);
this.states[3].quickAddReduce([0,2]);

this.states[4]=new Abe.State(4);
this.states[4].quickAddShift([2,29],[3,8],[16,27],[19,26]);
this.states[4].quickAddReduce([0,3]);
this.states[4].quickAddGoto([3,31],[4,6],[5,28],[6,9],[7,10],[8,7],[9,11],[11,12],[12,13],[13,14],[14,15],[15,17],[16,18],[17,16],[18,19],[19,20],[20,21],[21,22],[22,23],[23,24],[24,25]);

this.states[5]=new Abe.State(5);
this.states[5].quickAddReduce([0,4],[2,4],[3,4],[16,4],[19,4]);

this.states[6]=new Abe.State(6);
this.states[6].quickAddReduce([0,6],[2,6],[3,6],[16,6],[19,6]);

this.states[7]=new Abe.State(7);
this.states[7].quickAddReduce([0,13],[2,13],[3,13],[16,13],[19,13]);

this.states[8]=new Abe.State(8);
this.states[8].quickAddReduce([0,10],[2,10],[3,10],[16,10],[19,10]);

this.states[9]=new Abe.State(9);
this.states[9].quickAddGoto([10,56]);

this.states[10]=new Abe.State(10);
this.states[10].quickAddShift([4,57]);

this.states[11]=new Abe.State(11);
this.states[11].quickAddReduce([4,11]);

this.states[12]=new Abe.State(12);
this.states[12].quickAddReduce([4,15]);

this.states[13]=new Abe.State(13);
this.states[13].quickAddShift([6,58]);
this.states[13].quickAddReduce([4,16]);

this.states[14]=new Abe.State(14);
this.states[14].quickAddShift([5,59]);
this.states[14].quickAddReduce([4,19],[6,19]);

this.states[15]=new Abe.State(15);
this.states[15].quickAddShift([9,60]);
this.states[15].quickAddReduce([4,17],[5,17],[6,17]);

this.states[16]=new Abe.State(16);
this.states[16].quickAddShift([8,61]);
this.states[16].quickAddReduce([4,25],[5,25],[6,25],[9,25]);

this.states[17]=new Abe.State(17);
this.states[17].quickAddShift([7,62]);
this.states[17].quickAddReduce([4,23],[5,23],[6,23],[8,23],[9,23]);

this.states[18]=new Abe.State(18);
this.states[18].quickAddShift([10,63],[11,64],[12,65],[13,66]);
this.states[18].quickAddReduce([4,21],[5,21],[6,21],[7,21],[8,21],[9,21]);

this.states[19]=new Abe.State(19);
this.states[19].quickAddShift([14,67]);
this.states[19].quickAddReduce([4,27],[5,27],[6,27],[7,27],[8,27],[9,27],[10,27],[11,27],[12,27],[13,27]);

this.states[20]=new Abe.State(20);
this.states[20].quickAddShift([15,68]);
this.states[20].quickAddReduce([4,32],[5,32],[6,32],[7,32],[8,32],[9,32],[10,32],[11,32],[12,32],[13,32],[14,32]);

this.states[21]=new Abe.State(21);
this.states[21].quickAddReduce([4,34],[5,34],[6,34],[7,34],[8,34],[9,34],[10,34],[11,34],[12,34],[13,34],[14,34],[15,34]);

this.states[22]=new Abe.State(22);
this.states[22].quickAddReduce([4,36],[5,36],[6,36],[7,36],[8,36],[9,36],[10,36],[11,36],[12,36],[13,36],[14,36],[15,36]);

this.states[23]=new Abe.State(23);
this.states[23].quickAddReduce([4,37],[5,37],[6,37],[7,37],[8,37],[9,37],[10,37],[11,37],[12,37],[13,37],[14,37],[15,37]);

this.states[24]=new Abe.State(24);
this.states[24].quickAddReduce([4,38],[5,38],[6,38],[7,38],[8,38],[9,38],[10,38],[11,38],[12,38],[13,38],[14,38],[15,38]);

this.states[25]=new Abe.State(25);
this.states[25].quickAddShift([17,69],[18,70]);
this.states[25].quickAddReduce([4,40],[5,40],[6,40],[7,40],[8,40],[9,40],[10,40],[11,40],[12,40],[13,40],[14,40],[15,40]);

this.states[26]=new Abe.State(26);
this.states[26].quickAddReduce([4,43],[5,43],[6,43],[7,43],[8,43],[9,43],[10,43],[11,43],[12,43],[13,43],[14,43],[15,43],[17,43],[18,43]);

this.states[27]=new Abe.State(27);
this.states[27].quickAddShift([16,27],[19,26]);
this.states[27].quickAddGoto([22,71],[23,24],[24,25]);

this.states[28]=new Abe.State(28);
this.states[28].quickAddReduce([0,7],[2,7],[3,7],[16,7],[19,7]);

this.states[29]=new Abe.State(29);
this.states[29].quickAddReduce([0,8],[2,8],[3,8],[16,8],[19,8]);

this.states[31]=new Abe.State(31);
this.states[31].quickAddReduce([0,5],[2,5],[3,5],[16,5],[19,5]);

this.states[56]=new Abe.State(56);
this.states[56].quickAddReduce([0,14],[2,14],[3,14],[16,14],[19,14]);

this.states[57]=new Abe.State(57);
this.states[57].quickAddShift([16,27],[19,26]);
this.states[57].quickAddGoto([9,76],[11,12],[12,13],[13,14],[14,15],[15,17],[16,18],[17,16],[18,19],[19,20],[20,21],[21,22],[22,23],[23,24],[24,25]);

this.states[58]=new Abe.State(58);
this.states[58].quickAddShift([16,27],[19,26]);
this.states[58].quickAddGoto([13,93],[14,15],[15,17],[16,18],[17,16],[18,19],[19,20],[20,21],[21,22],[22,23],[23,24],[24,25]);

this.states[59]=new Abe.State(59);
this.states[59].quickAddShift([16,27],[19,26]);
this.states[59].quickAddGoto([14,107],[15,17],[16,18],[17,16],[18,19],[19,20],[20,21],[21,22],[22,23],[23,24],[24,25]);

this.states[60]=new Abe.State(60);
this.states[60].quickAddShift([16,27],[19,26]);
this.states[60].quickAddGoto([15,17],[16,18],[17,120],[18,19],[19,20],[20,21],[21,22],[22,23],[23,24],[24,25]);

this.states[61]=new Abe.State(61);
this.states[61].quickAddShift([16,27],[19,26]);
this.states[61].quickAddGoto([15,132],[16,18],[18,19],[19,20],[20,21],[21,22],[22,23],[23,24],[24,25]);

this.states[62]=new Abe.State(62);
this.states[62].quickAddShift([16,27],[19,26]);
this.states[62].quickAddGoto([16,143],[18,19],[19,20],[20,21],[21,22],[22,23],[23,24],[24,25]);

this.states[63]=new Abe.State(63);
this.states[63].quickAddShift([16,27],[19,26]);
this.states[63].quickAddGoto([18,153],[19,20],[20,21],[21,22],[22,23],[23,24],[24,25]);

this.states[64]=new Abe.State(64);
this.states[64].quickAddShift([16,27],[19,26]);
this.states[64].quickAddGoto([18,162],[19,20],[20,21],[21,22],[22,23],[23,24],[24,25]);

this.states[65]=new Abe.State(65);
this.states[65].quickAddShift([16,27],[19,26]);
this.states[65].quickAddGoto([18,171],[19,20],[20,21],[21,22],[22,23],[23,24],[24,25]);

this.states[66]=new Abe.State(66);
this.states[66].quickAddShift([16,27],[19,26]);
this.states[66].quickAddGoto([18,180],[19,20],[20,21],[21,22],[22,23],[23,24],[24,25]);

this.states[67]=new Abe.State(67);
this.states[67].quickAddShift([16,27],[19,26]);
this.states[67].quickAddGoto([19,189],[20,21],[21,22],[22,23],[23,24],[24,25]);

this.states[68]=new Abe.State(68);
this.states[68].quickAddShift([16,27],[19,26]);
this.states[68].quickAddGoto([20,197],[21,22],[22,23],[23,24],[24,25]);

this.states[69]=new Abe.State(69);
this.states[69].quickAddReduce([4,41],[5,41],[6,41],[7,41],[8,41],[9,41],[10,41],[11,41],[12,41],[13,41],[14,41],[15,41]);

this.states[70]=new Abe.State(70);
this.states[70].quickAddReduce([4,42],[5,42],[6,42],[7,42],[8,42],[9,42],[10,42],[11,42],[12,42],[13,42],[14,42],[15,42]);

this.states[71]=new Abe.State(71);
this.states[71].quickAddReduce([4,39],[5,39],[6,39],[7,39],[8,39],[9,39],[10,39],[11,39],[12,39],[13,39],[14,39],[15,39]);

this.states[76]=new Abe.State(76);
this.states[76].quickAddReduce([4,12]);

this.states[93]=new Abe.State(93);
this.states[93].quickAddShift([5,59]);
this.states[93].quickAddReduce([4,20],[6,20]);

this.states[107]=new Abe.State(107);
this.states[107].quickAddShift([9,60]);
this.states[107].quickAddReduce([4,18],[5,18],[6,18]);

this.states[120]=new Abe.State(120);
this.states[120].quickAddShift([8,61]);
this.states[120].quickAddReduce([4,26],[5,26],[6,26],[9,26]);

this.states[132]=new Abe.State(132);
this.states[132].quickAddShift([7,62]);
this.states[132].quickAddReduce([4,24],[5,24],[6,24],[8,24],[9,24]);

this.states[143]=new Abe.State(143);
this.states[143].quickAddShift([10,63],[11,64],[12,65],[13,66]);
this.states[143].quickAddReduce([4,22],[5,22],[6,22],[7,22],[8,22],[9,22]);

this.states[153]=new Abe.State(153);
this.states[153].quickAddShift([14,67]);
this.states[153].quickAddReduce([4,28],[5,28],[6,28],[7,28],[8,28],[9,28],[10,28],[11,28],[12,28],[13,28]);

this.states[162]=new Abe.State(162);
this.states[162].quickAddShift([14,67]);
this.states[162].quickAddReduce([4,29],[5,29],[6,29],[7,29],[8,29],[9,29],[10,29],[11,29],[12,29],[13,29]);

this.states[171]=new Abe.State(171);
this.states[171].quickAddShift([14,67]);
this.states[171].quickAddReduce([4,30],[5,30],[6,30],[7,30],[8,30],[9,30],[10,30],[11,30],[12,30],[13,30]);

this.states[180]=new Abe.State(180);
this.states[180].quickAddShift([14,67]);
this.states[180].quickAddReduce([4,31],[5,31],[6,31],[7,31],[8,31],[9,31],[10,31],[11,31],[12,31],[13,31]);

this.states[189]=new Abe.State(189);
this.states[189].quickAddShift([15,68]);
this.states[189].quickAddReduce([4,33],[5,33],[6,33],[7,33],[8,33],[9,33],[10,33],[11,33],[12,33],[13,33],[14,33]);

this.states[197]=new Abe.State(197);
this.states[197].quickAddReduce([4,35],[5,35],[6,35],[7,35],[8,35],[9,35],[10,35],[11,35],[12,35],[13,35],[14,35],[15,35]);

}
 ABE_LR_TABLE=new Abe.Table();