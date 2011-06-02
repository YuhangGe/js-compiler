if(!Abe)
	Abe= {};
Abe.Table= function() {
	this.states=new Array();
	this.initTable();
}
Abe.Table.prototype.initTable= function() {

	this.states[0]=new Abe.State(0);
	this.states[0].quickAddShift([1,2]);
	this.states[0].quickAddGoto([0,1]);

	this.states[1]=new Abe.State(1);
	this.states[1].addAction(0,Abe.Action.ACC);

	this.states[2]=new Abe.State(2);
	this.states[2].setEmptyAction(5);
	this.states[2].quickAddGoto([1,4]);

	this.states[4]=new Abe.State(4);
	this.states[4].setEmptyAction(7);
	this.states[4].quickAddShift([9,10]);
	this.states[4].quickAddGoto([2,6],[3,8],[4,9]);

	this.states[5]=new Abe.State(5);
	this.states[5].quickAddReduce([1,3],[2,3],[4,3],[9,3],[11,3],[15,3],[16,3],[17,3]);

	this.states[6]=new Abe.State(6);
	this.states[6].quickAddShift([1,2],[2,11],[4,14],[11,15],[15,16],[16,17],[17,18]);
	this.states[6].quickAddGoto([0,19],[5,12],[6,13]);

	this.states[7]=new Abe.State(7);
	this.states[7].quickAddReduce([1,8],[2,8],[4,8],[11,8],[15,8],[16,8],[17,8]);

	this.states[8]=new Abe.State(8);
	this.states[8].quickAddReduce([1,2],[2,2],[4,2],[9,2],[11,2],[15,2],[16,2],[17,2]);

	this.states[9]=new Abe.State(9);
	this.states[9].quickAddShift([4,21],[6,22]);

	this.states[10]=new Abe.State(10);
	this.states[10].quickAddReduce([4,6],[6,6]);

	this.states[11]=new Abe.State(11);
	this.states[11].quickAddReduce([0,1],[1,1],[2,1],[4,1],[11,1],[14,1],[15,1],[16,1],[17,1]);

	this.states[12]=new Abe.State(12);
	this.states[12].quickAddReduce([1,7],[2,7],[4,7],[11,7],[15,7],[16,7],[17,7]);

	this.states[13]=new Abe.State(13);
	this.states[13].quickAddShift([6,24],[10,23]);

	this.states[14]=new Abe.State(14);
	this.states[14].quickAddReduce([5,17],[6,17],[8,17],[10,17],[13,17],[18,17],[19,17],[20,17],[21,17],[22,17],[23,17],[24,17],[25,17],[26,17],[27,17],[28,17]);

	this.states[15]=new Abe.State(15);
	this.states[15].quickAddShift([12,25]);

	this.states[16]=new Abe.State(16);
	this.states[16].quickAddShift([12,26]);

	this.states[17]=new Abe.State(17);
	this.states[17].quickAddShift([1,2],[4,14],[11,15],[15,16],[16,17],[17,18]);
	this.states[17].quickAddGoto([0,19],[5,27],[6,13]);

	this.states[18]=new Abe.State(18);
	this.states[18].quickAddShift([5,36]);

	this.states[19]=new Abe.State(19);
	this.states[19].quickAddReduce([1,15],[2,15],[4,15],[11,15],[14,15],[15,15],[16,15],[17,15]);

	this.states[21]=new Abe.State(21);
	this.states[21].quickAddShift([5,37]);

	this.states[22]=new Abe.State(22);
	this.states[22].quickAddShift([7,38]);

	this.states[23]=new Abe.State(23);
	this.states[23].quickAddShift([4,14],[7,50],[12,49],[26,47],[29,46]);
	this.states[23].quickAddGoto([6,51],[7,39],[8,40],[9,41],[10,42],[11,43],[12,44],[13,45],[14,48]);

	this.states[24]=new Abe.State(24);
	this.states[24].quickAddShift([4,14],[7,50],[12,49],[26,47],[29,46]);
	this.states[24].quickAddGoto([6,51],[7,53],[8,40],[9,41],[10,42],[11,43],[12,44],[13,45],[14,48]);

	this.states[25]=new Abe.State(25);
	this.states[25].quickAddShift([4,14],[7,50],[12,49],[26,47],[29,46]);
	this.states[25].quickAddGoto([6,51],[7,67],[8,40],[9,41],[10,42],[11,43],[12,44],[13,45],[14,48]);

	this.states[26]=new Abe.State(26);
	this.states[26].quickAddShift([4,14],[7,50],[12,49],[26,47],[29,46]);
	this.states[26].quickAddGoto([6,51],[7,81],[8,40],[9,41],[10,42],[11,43],[12,44],[13,45],[14,48]);

	this.states[27]=new Abe.State(27);
	this.states[27].quickAddShift([15,95]);

	this.states[36]=new Abe.State(36);
	this.states[36].quickAddReduce([1,14],[2,14],[4,14],[11,14],[14,14],[15,14],[16,14],[17,14]);

	this.states[37]=new Abe.State(37);
	this.states[37].quickAddReduce([1,4],[2,4],[4,4],[9,4],[11,4],[15,4],[16,4],[17,4]);

	this.states[38]=new Abe.State(38);
	this.states[38].quickAddShift([8,96]);

	this.states[39]=new Abe.State(39);
	this.states[39].quickAddShift([5,97],[18,98]);

	this.states[40]=new Abe.State(40);
	this.states[40].quickAddShift([19,99]);
	this.states[40].quickAddReduce([5,19],[8,19],[13,19],[18,19]);

	this.states[41]=new Abe.State(41);
	this.states[41].quickAddShift([20,100]);
	this.states[41].quickAddReduce([5,21],[8,21],[13,21],[18,21],[19,21]);

	this.states[42]=new Abe.State(42);
	this.states[42].quickAddReduce([5,23],[8,23],[13,23],[18,23],[19,23],[20,23]);

	this.states[43]=new Abe.State(43);
	this.states[43].quickAddShift([21,101],[22,104],[23,105],[24,106],[25,102],[26,103]);
	this.states[43].quickAddReduce([5,28],[8,28],[13,28],[18,28],[19,28],[20,28]);

	this.states[44]=new Abe.State(44);
	this.states[44].quickAddShift([27,107],[28,108]);
	this.states[44].quickAddReduce([5,31],[8,31],[13,31],[18,31],[19,31],[20,31],[21,31],[22,31],[23,31],[24,31],[25,31],[26,31]);

	this.states[45]=new Abe.State(45);
	this.states[45].quickAddReduce([5,34],[8,34],[13,34],[18,34],[19,34],[20,34],[21,34],[22,34],[23,34],[24,34],[25,34],[26,34],[27,34],[28,34]);

	this.states[46]=new Abe.State(46);
	this.states[46].quickAddShift([4,14],[7,50],[12,49],[26,47],[29,46]);
	this.states[46].quickAddGoto([6,51],[13,109],[14,48]);

	this.states[47]=new Abe.State(47);
	this.states[47].quickAddShift([4,14],[7,50],[12,49],[26,47],[29,46]);
	this.states[47].quickAddGoto([6,51],[13,117],[14,48]);

	this.states[48]=new Abe.State(48);
	this.states[48].quickAddReduce([5,37],[8,37],[13,37],[18,37],[19,37],[20,37],[21,37],[22,37],[23,37],[24,37],[25,37],[26,37],[27,37],[28,37]);

	this.states[49]=new Abe.State(49);
	this.states[49].quickAddShift([4,14],[7,50],[12,49],[26,47],[29,46]);
	this.states[49].quickAddGoto([6,51],[7,125],[8,40],[9,41],[10,42],[11,43],[12,44],[13,45],[14,48]);

	this.states[50]=new Abe.State(50);
	this.states[50].quickAddReduce([5,39],[8,39],[13,39],[18,39],[19,39],[20,39],[21,39],[22,39],[23,39],[24,39],[25,39],[26,39],[27,39],[28,39]);

	this.states[51]=new Abe.State(51);
	this.states[51].quickAddShift([6,24]);
	this.states[51].quickAddReduce([5,40],[8,40],[13,40],[18,40],[19,40],[20,40],[21,40],[22,40],[23,40],[24,40],[25,40],[26,40],[27,40],[28,40]);

	this.states[53]=new Abe.State(53);
	this.states[53].quickAddShift([8,140],[18,98]);

	this.states[67]=new Abe.State(67);
	this.states[67].quickAddShift([13,142],[18,98]);

	this.states[81]=new Abe.State(81);
	this.states[81].quickAddShift([13,144],[18,98]);

	this.states[95]=new Abe.State(95);
	this.states[95].quickAddShift([12,146]);

	this.states[96]=new Abe.State(96);
	this.states[96].quickAddReduce([4,5],[6,5]);

	this.states[97]=new Abe.State(97);
	this.states[97].quickAddReduce([1,9],[2,9],[4,9],[11,9],[14,9],[15,9],[16,9],[17,9]);

	this.states[98]=new Abe.State(98);
	this.states[98].quickAddShift([4,14],[7,50],[12,49],[26,47],[29,46]);
	this.states[98].quickAddGoto([6,51],[8,147],[9,41],[10,42],[11,43],[12,44],[13,45],[14,48]);

	this.states[99]=new Abe.State(99);
	this.states[99].quickAddShift([4,14],[7,50],[12,49],[26,47],[29,46]);
	this.states[99].quickAddGoto([6,51],[9,160],[10,42],[11,43],[12,44],[13,45],[14,48]);

	this.states[100]=new Abe.State(100);
	this.states[100].quickAddShift([4,14],[7,50],[12,49],[26,47],[29,46]);
	this.states[100].quickAddGoto([6,51],[10,172],[11,43],[12,44],[13,45],[14,48]);

	this.states[101]=new Abe.State(101);
	this.states[101].quickAddShift([4,14],[7,50],[12,49],[26,47],[29,46]);
	this.states[101].quickAddGoto([6,51],[11,183],[12,44],[13,45],[14,48]);

	this.states[102]=new Abe.State(102);
	this.states[102].quickAddShift([4,14],[7,50],[12,49],[26,47],[29,46]);
	this.states[102].quickAddGoto([6,51],[12,193],[13,45],[14,48]);

	this.states[103]=new Abe.State(103);
	this.states[103].quickAddShift([4,14],[7,50],[12,49],[26,47],[29,46]);
	this.states[103].quickAddGoto([6,51],[12,202],[13,45],[14,48]);

	this.states[104]=new Abe.State(104);
	this.states[104].quickAddShift([4,14],[7,50],[12,49],[26,47],[29,46]);
	this.states[104].quickAddGoto([6,51],[11,211],[12,44],[13,45],[14,48]);

	this.states[105]=new Abe.State(105);
	this.states[105].quickAddShift([4,14],[7,50],[12,49],[26,47],[29,46]);
	this.states[105].quickAddGoto([6,51],[11,221],[12,44],[13,45],[14,48]);

	this.states[106]=new Abe.State(106);
	this.states[106].quickAddShift([4,14],[7,50],[12,49],[26,47],[29,46]);
	this.states[106].quickAddGoto([6,51],[11,231],[12,44],[13,45],[14,48]);

	this.states[107]=new Abe.State(107);
	this.states[107].quickAddShift([4,14],[7,50],[12,49],[26,47],[29,46]);
	this.states[107].quickAddGoto([6,51],[13,241],[14,48]);

	this.states[108]=new Abe.State(108);
	this.states[108].quickAddShift([4,14],[7,50],[12,49],[26,47],[29,46]);
	this.states[108].quickAddGoto([6,51],[13,249],[14,48]);

	this.states[109]=new Abe.State(109);
	this.states[109].quickAddReduce([5,35],[8,35],[13,35],[18,35],[19,35],[20,35],[21,35],[22,35],[23,35],[24,35],[25,35],[26,35],[27,35],[28,35]);

	this.states[117]=new Abe.State(117);
	this.states[117].quickAddReduce([5,36],[8,36],[13,36],[18,36],[19,36],[20,36],[21,36],[22,36],[23,36],[24,36],[25,36],[26,36],[27,36],[28,36]);

	this.states[125]=new Abe.State(125);
	this.states[125].quickAddShift([13,257],[18,98]);

	this.states[140]=new Abe.State(140);
	this.states[140].quickAddReduce([5,16],[6,16],[8,16],[10,16],[13,16],[18,16],[19,16],[20,16],[21,16],[22,16],[23,16],[24,16],[25,16],[26,16],[27,16],[28,16]);

	this.states[142]=new Abe.State(142);
	this.states[142].quickAddShift([1,2],[4,14],[11,15],[15,16],[16,17],[17,18]);
	this.states[142].quickAddGoto([0,19],[5,259],[6,13]);

	this.states[144]=new Abe.State(144);
	this.states[144].quickAddShift([1,2],[4,14],[11,15],[15,16],[16,17],[17,18]);
	this.states[144].quickAddGoto([0,19],[5,268],[6,13]);

	this.states[146]=new Abe.State(146);
	this.states[146].quickAddShift([4,14],[7,50],[12,49],[26,47],[29,46]);
	this.states[146].quickAddGoto([6,51],[7,277],[8,40],[9,41],[10,42],[11,43],[12,44],[13,45],[14,48]);

	this.states[147]=new Abe.State(147);
	this.states[147].quickAddShift([19,99]);
	this.states[147].quickAddReduce([5,18],[8,18],[13,18],[18,18]);

	this.states[160]=new Abe.State(160);
	this.states[160].quickAddShift([20,100]);
	this.states[160].quickAddReduce([5,20],[8,20],[13,20],[18,20],[19,20]);

	this.states[172]=new Abe.State(172);
	this.states[172].quickAddReduce([5,22],[8,22],[13,22],[18,22],[19,22],[20,22]);

	this.states[183]=new Abe.State(183);
	this.states[183].quickAddShift([25,102],[26,103]);
	this.states[183].quickAddReduce([5,24],[8,24],[13,24],[18,24],[19,24],[20,24]);

	this.states[193]=new Abe.State(193);
	this.states[193].quickAddShift([27,107],[28,108]);
	this.states[193].quickAddReduce([5,29],[8,29],[13,29],[18,29],[19,29],[20,29],[21,29],[22,29],[23,29],[24,29],[25,29],[26,29]);

	this.states[202]=new Abe.State(202);
	this.states[202].quickAddShift([27,107],[28,108]);
	this.states[202].quickAddReduce([5,30],[8,30],[13,30],[18,30],[19,30],[20,30],[21,30],[22,30],[23,30],[24,30],[25,30],[26,30]);

	this.states[211]=new Abe.State(211);
	this.states[211].quickAddShift([25,102],[26,103]);
	this.states[211].quickAddReduce([5,25],[8,25],[13,25],[18,25],[19,25],[20,25]);

	this.states[221]=new Abe.State(221);
	this.states[221].quickAddShift([25,102],[26,103]);
	this.states[221].quickAddReduce([5,26],[8,26],[13,26],[18,26],[19,26],[20,26]);

	this.states[231]=new Abe.State(231);
	this.states[231].quickAddShift([25,102],[26,103]);
	this.states[231].quickAddReduce([5,27],[8,27],[13,27],[18,27],[19,27],[20,27]);

	this.states[241]=new Abe.State(241);
	this.states[241].quickAddReduce([5,32],[8,32],[13,32],[18,32],[19,32],[20,32],[21,32],[22,32],[23,32],[24,32],[25,32],[26,32],[27,32],[28,32]);

	this.states[249]=new Abe.State(249);
	this.states[249].quickAddReduce([5,33],[8,33],[13,33],[18,33],[19,33],[20,33],[21,33],[22,33],[23,33],[24,33],[25,33],[26,33],[27,33],[28,33]);

	this.states[257]=new Abe.State(257);
	this.states[257].quickAddReduce([5,38],[8,38],[13,38],[18,38],[19,38],[20,38],[21,38],[22,38],[23,38],[24,38],[25,38],[26,38],[27,38],[28,38]);

	this.states[259]=new Abe.State(259);
	this.states[259].quickAddShift([14,305]);
	this.states[259].quickAddReduce([1,10],[2,10],[4,10],[11,10],[15,10],[16,10],[17,10]);

	this.states[268]=new Abe.State(268);
	this.states[268].quickAddReduce([1,12],[2,12],[4,12],[11,12],[14,12],[15,12],[16,12],[17,12]);

	this.states[277]=new Abe.State(277);
	this.states[277].quickAddShift([13,306],[18,98]);

	this.states[305]=new Abe.State(305);
	this.states[305].quickAddShift([1,2],[4,14],[11,15],[15,16],[16,17],[17,18]);
	this.states[305].quickAddGoto([0,19],[5,308],[6,13]);

	this.states[306]=new Abe.State(306);
	this.states[306].quickAddShift([5,317]);

	this.states[308]=new Abe.State(308);
	this.states[308].quickAddReduce([1,11],[2,11],[4,11],[11,11],[14,11],[15,11],[16,11],[17,11]);

	this.states[317]=new Abe.State(317);
	this.states[317].quickAddReduce([1,13],[2,13],[4,13],[11,13],[14,13],[15,13],[16,13],[17,13]);

}
ABE_LR_TABLE=new Abe.Table();