if(!Abe)
	Abe= {};
Abe.Table= function() {
	this.states=new Array();
	this.initTable();
}
Abe.Table.prototype.initTable= function() {

	this.states[0]=new Abe.State(0);
	this.states[0].quickAddShift([2,3]);
	this.states[0].quickAddGoto([0,1],[1,2]);

	this.states[1]=new Abe.State(1);
	this.states[1].addAction(0,Abe.Action.ACC);

	this.states[2]=new Abe.State(2);
	this.states[2].setEmptyAction(6);
	this.states[2].quickAddGoto([2,5]);

	this.states[3]=new Abe.State(3);
	this.states[3].quickAddReduce([1,2],[2,2],[4,2],[9,2],[11,2],[15,2],[16,2],[17,2]);

	this.states[5]=new Abe.State(5);
	this.states[5].setEmptyAction(8);
	this.states[5].quickAddShift([9,11]);
	this.states[5].quickAddGoto([3,7],[4,9],[5,10]);

	this.states[6]=new Abe.State(6);
	this.states[6].quickAddReduce([1,4],[2,4],[4,4],[9,4],[11,4],[15,4],[16,4],[17,4]);

	this.states[7]=new Abe.State(7);
	this.states[7].quickAddShift([1,12],[2,3],[4,15],[11,16],[15,17],[16,18],[17,19]);
	this.states[7].quickAddGoto([0,20],[1,2],[6,13],[7,14]);

	this.states[8]=new Abe.State(8);
	this.states[8].quickAddReduce([1,9],[2,9],[4,9],[11,9],[15,9],[16,9],[17,9]);

	this.states[9]=new Abe.State(9);
	this.states[9].quickAddReduce([1,3],[2,3],[4,3],[9,3],[11,3],[15,3],[16,3],[17,3]);

	this.states[10]=new Abe.State(10);
	this.states[10].quickAddShift([4,23],[6,24]);

	this.states[11]=new Abe.State(11);
	this.states[11].quickAddReduce([4,7],[6,7]);

	this.states[12]=new Abe.State(12);
	this.states[12].quickAddReduce([0,1],[1,1],[2,1],[4,1],[11,1],[14,1],[15,1],[16,1],[17,1]);

	this.states[13]=new Abe.State(13);
	this.states[13].quickAddReduce([1,8],[2,8],[4,8],[11,8],[15,8],[16,8],[17,8]);

	this.states[14]=new Abe.State(14);
	this.states[14].quickAddShift([6,26],[10,25]);

	this.states[15]=new Abe.State(15);
	this.states[15].quickAddReduce([5,19],[6,19],[8,19],[10,19],[13,19],[18,19],[19,19],[20,19],[21,19],[22,19],[23,19],[24,19],[25,19],[26,19],[27,19],[28,19]);

	this.states[16]=new Abe.State(16);
	this.states[16].quickAddShift([12,27]);

	this.states[17]=new Abe.State(17);
	this.states[17].quickAddShift([12,28]);

	this.states[18]=new Abe.State(18);
	this.states[18].quickAddShift([2,3],[4,15],[11,16],[15,17],[16,18],[17,19]);
	this.states[18].quickAddGoto([0,20],[1,2],[6,29],[7,14]);

	this.states[19]=new Abe.State(19);
	this.states[19].quickAddShift([5,39]);

	this.states[20]=new Abe.State(20);
	this.states[20].quickAddReduce([1,17],[2,17],[4,17],[11,17],[14,17],[15,17],[16,17],[17,17]);

	this.states[23]=new Abe.State(23);
	this.states[23].quickAddShift([5,40]);

	this.states[24]=new Abe.State(24);
	this.states[24].quickAddShift([7,41]);

	this.states[25]=new Abe.State(25);
	this.states[25].quickAddShift([4,15],[7,53],[12,52],[26,50],[29,49]);
	this.states[25].quickAddGoto([7,54],[8,42],[10,43],[11,44],[12,45],[13,46],[14,47],[15,48],[16,51]);

	this.states[26]=new Abe.State(26);
	this.states[26].quickAddShift([4,15],[7,53],[12,52],[26,50],[29,49]);
	this.states[26].quickAddGoto([7,54],[8,56],[10,43],[11,44],[12,45],[13,46],[14,47],[15,48],[16,51]);

	this.states[27]=new Abe.State(27);
	this.states[27].quickAddShift([4,15],[7,53],[12,52],[26,50],[29,49]);
	this.states[27].quickAddGoto([7,54],[8,70],[10,43],[11,44],[12,45],[13,46],[14,47],[15,48],[16,51]);

	this.states[28]=new Abe.State(28);
	this.states[28].quickAddShift([4,15],[7,53],[12,52],[26,50],[29,49]);
	this.states[28].quickAddGoto([7,54],[8,84],[10,43],[11,44],[12,45],[13,46],[14,47],[15,48],[16,51]);

	this.states[29]=new Abe.State(29);
	this.states[29].quickAddShift([15,98]);

	this.states[39]=new Abe.State(39);
	this.states[39].quickAddReduce([1,16],[2,16],[4,16],[11,16],[14,16],[15,16],[16,16],[17,16]);

	this.states[40]=new Abe.State(40);
	this.states[40].quickAddReduce([1,5],[2,5],[4,5],[9,5],[11,5],[15,5],[16,5],[17,5]);

	this.states[41]=new Abe.State(41);
	this.states[41].quickAddShift([8,99]);

	this.states[42]=new Abe.State(42);
	this.states[42].quickAddShift([5,100],[18,101]);

	this.states[43]=new Abe.State(43);
	this.states[43].quickAddShift([19,102]);
	this.states[43].quickAddReduce([5,21],[8,21],[13,21],[18,21]);

	this.states[44]=new Abe.State(44);
	this.states[44].quickAddShift([20,103]);
	this.states[44].quickAddReduce([5,23],[8,23],[13,23],[18,23],[19,23]);

	this.states[45]=new Abe.State(45);
	this.states[45].quickAddReduce([5,25],[8,25],[13,25],[18,25],[19,25],[20,25]);

	this.states[46]=new Abe.State(46);
	this.states[46].quickAddShift([21,104],[22,107],[23,108],[24,109],[25,105],[26,106]);
	this.states[46].quickAddReduce([5,30],[8,30],[13,30],[18,30],[19,30],[20,30]);

	this.states[47]=new Abe.State(47);
	this.states[47].quickAddShift([27,110],[28,111]);
	this.states[47].quickAddReduce([5,33],[8,33],[13,33],[18,33],[19,33],[20,33],[21,33],[22,33],[23,33],[24,33],[25,33],[26,33]);

	this.states[48]=new Abe.State(48);
	this.states[48].quickAddReduce([5,36],[8,36],[13,36],[18,36],[19,36],[20,36],[21,36],[22,36],[23,36],[24,36],[25,36],[26,36],[27,36],[28,36]);

	this.states[49]=new Abe.State(49);
	this.states[49].quickAddShift([4,15],[7,53],[12,52],[26,50],[29,49]);
	this.states[49].quickAddGoto([7,54],[15,112],[16,51]);

	this.states[50]=new Abe.State(50);
	this.states[50].quickAddShift([4,15],[7,53],[12,52],[26,50],[29,49]);
	this.states[50].quickAddGoto([7,54],[15,120],[16,51]);

	this.states[51]=new Abe.State(51);
	this.states[51].quickAddReduce([5,39],[8,39],[13,39],[18,39],[19,39],[20,39],[21,39],[22,39],[23,39],[24,39],[25,39],[26,39],[27,39],[28,39]);

	this.states[52]=new Abe.State(52);
	this.states[52].quickAddShift([4,15],[7,53],[12,52],[26,50],[29,49]);
	this.states[52].quickAddGoto([7,54],[8,128],[10,43],[11,44],[12,45],[13,46],[14,47],[15,48],[16,51]);

	this.states[53]=new Abe.State(53);
	this.states[53].quickAddReduce([5,41],[8,41],[13,41],[18,41],[19,41],[20,41],[21,41],[22,41],[23,41],[24,41],[25,41],[26,41],[27,41],[28,41]);

	this.states[54]=new Abe.State(54);
	this.states[54].quickAddShift([6,26]);
	this.states[54].quickAddReduce([5,42],[8,42],[13,42],[18,42],[19,42],[20,42],[21,42],[22,42],[23,42],[24,42],[25,42],[26,42],[27,42],[28,42]);

	this.states[56]=new Abe.State(56);
	this.states[56].quickAddShift([8,143],[18,101]);

	this.states[70]=new Abe.State(70);
	this.states[70].quickAddShift([13,145],[18,101]);

	this.states[84]=new Abe.State(84);
	this.states[84].quickAddShift([13,147],[18,101]);

	this.states[98]=new Abe.State(98);
	this.states[98].quickAddShift([12,149]);

	this.states[99]=new Abe.State(99);
	this.states[99].quickAddReduce([4,6],[6,6]);

	this.states[100]=new Abe.State(100);
	this.states[100].quickAddReduce([1,10],[2,10],[4,10],[11,10],[14,10],[15,10],[16,10],[17,10]);

	this.states[101]=new Abe.State(101);
	this.states[101].quickAddShift([4,15],[7,53],[12,52],[26,50],[29,49]);
	this.states[101].quickAddGoto([7,54],[10,150],[11,44],[12,45],[13,46],[14,47],[15,48],[16,51]);

	this.states[102]=new Abe.State(102);
	this.states[102].quickAddShift([4,15],[7,53],[12,52],[26,50],[29,49]);
	this.states[102].quickAddGoto([7,54],[11,163],[12,45],[13,46],[14,47],[15,48],[16,51]);

	this.states[103]=new Abe.State(103);
	this.states[103].quickAddShift([4,15],[7,53],[12,52],[26,50],[29,49]);
	this.states[103].quickAddGoto([7,54],[12,175],[13,46],[14,47],[15,48],[16,51]);

	this.states[104]=new Abe.State(104);
	this.states[104].quickAddShift([4,15],[7,53],[12,52],[26,50],[29,49]);
	this.states[104].quickAddGoto([7,54],[13,186],[14,47],[15,48],[16,51]);

	this.states[105]=new Abe.State(105);
	this.states[105].quickAddShift([4,15],[7,53],[12,52],[26,50],[29,49]);
	this.states[105].quickAddGoto([7,54],[14,196],[15,48],[16,51]);

	this.states[106]=new Abe.State(106);
	this.states[106].quickAddShift([4,15],[7,53],[12,52],[26,50],[29,49]);
	this.states[106].quickAddGoto([7,54],[14,205],[15,48],[16,51]);

	this.states[107]=new Abe.State(107);
	this.states[107].quickAddShift([4,15],[7,53],[12,52],[26,50],[29,49]);
	this.states[107].quickAddGoto([7,54],[13,214],[14,47],[15,48],[16,51]);

	this.states[108]=new Abe.State(108);
	this.states[108].quickAddShift([4,15],[7,53],[12,52],[26,50],[29,49]);
	this.states[108].quickAddGoto([7,54],[13,224],[14,47],[15,48],[16,51]);

	this.states[109]=new Abe.State(109);
	this.states[109].quickAddShift([4,15],[7,53],[12,52],[26,50],[29,49]);
	this.states[109].quickAddGoto([7,54],[13,234],[14,47],[15,48],[16,51]);

	this.states[110]=new Abe.State(110);
	this.states[110].quickAddShift([4,15],[7,53],[12,52],[26,50],[29,49]);
	this.states[110].quickAddGoto([7,54],[15,244],[16,51]);

	this.states[111]=new Abe.State(111);
	this.states[111].quickAddShift([4,15],[7,53],[12,52],[26,50],[29,49]);
	this.states[111].quickAddGoto([7,54],[15,252],[16,51]);

	this.states[112]=new Abe.State(112);
	this.states[112].quickAddReduce([5,37],[8,37],[13,37],[18,37],[19,37],[20,37],[21,37],[22,37],[23,37],[24,37],[25,37],[26,37],[27,37],[28,37]);

	this.states[120]=new Abe.State(120);
	this.states[120].quickAddReduce([5,38],[8,38],[13,38],[18,38],[19,38],[20,38],[21,38],[22,38],[23,38],[24,38],[25,38],[26,38],[27,38],[28,38]);

	this.states[128]=new Abe.State(128);
	this.states[128].quickAddShift([13,260],[18,101]);

	this.states[143]=new Abe.State(143);
	this.states[143].quickAddReduce([5,18],[6,18],[8,18],[10,18],[13,18],[18,18],[19,18],[20,18],[21,18],[22,18],[23,18],[24,18],[25,18],[26,18],[27,18],[28,18]);

	this.states[145]=new Abe.State(145);
	this.states[145].quickAddShift([2,3],[4,15],[11,16],[15,17],[16,18],[17,19]);
	this.states[145].quickAddGoto([0,20],[1,2],[6,262],[7,14]);

	this.states[147]=new Abe.State(147);
	this.states[147].quickAddShift([2,3],[4,15],[11,16],[15,17],[16,18],[17,19]);
	this.states[147].quickAddGoto([0,20],[1,2],[6,272],[7,14]);

	this.states[149]=new Abe.State(149);
	this.states[149].quickAddShift([4,15],[7,53],[12,52],[26,50],[29,49]);
	this.states[149].quickAddGoto([7,54],[8,282],[10,43],[11,44],[12,45],[13,46],[14,47],[15,48],[16,51]);

	this.states[150]=new Abe.State(150);
	this.states[150].quickAddShift([19,102]);
	this.states[150].quickAddReduce([5,20],[8,20],[13,20],[18,20]);

	this.states[163]=new Abe.State(163);
	this.states[163].quickAddShift([20,103]);
	this.states[163].quickAddReduce([5,22],[8,22],[13,22],[18,22],[19,22]);

	this.states[175]=new Abe.State(175);
	this.states[175].quickAddReduce([5,24],[8,24],[13,24],[18,24],[19,24],[20,24]);

	this.states[186]=new Abe.State(186);
	this.states[186].quickAddShift([25,105],[26,106]);
	this.states[186].quickAddReduce([5,26],[8,26],[13,26],[18,26],[19,26],[20,26]);

	this.states[196]=new Abe.State(196);
	this.states[196].quickAddShift([27,110],[28,111]);
	this.states[196].quickAddReduce([5,31],[8,31],[13,31],[18,31],[19,31],[20,31],[21,31],[22,31],[23,31],[24,31],[25,31],[26,31]);

	this.states[205]=new Abe.State(205);
	this.states[205].quickAddShift([27,110],[28,111]);
	this.states[205].quickAddReduce([5,32],[8,32],[13,32],[18,32],[19,32],[20,32],[21,32],[22,32],[23,32],[24,32],[25,32],[26,32]);

	this.states[214]=new Abe.State(214);
	this.states[214].quickAddShift([25,105],[26,106]);
	this.states[214].quickAddReduce([5,27],[8,27],[13,27],[18,27],[19,27],[20,27]);

	this.states[224]=new Abe.State(224);
	this.states[224].quickAddShift([25,105],[26,106]);
	this.states[224].quickAddReduce([5,28],[8,28],[13,28],[18,28],[19,28],[20,28]);

	this.states[234]=new Abe.State(234);
	this.states[234].quickAddShift([25,105],[26,106]);
	this.states[234].quickAddReduce([5,29],[8,29],[13,29],[18,29],[19,29],[20,29]);

	this.states[244]=new Abe.State(244);
	this.states[244].quickAddReduce([5,34],[8,34],[13,34],[18,34],[19,34],[20,34],[21,34],[22,34],[23,34],[24,34],[25,34],[26,34],[27,34],[28,34]);

	this.states[252]=new Abe.State(252);
	this.states[252].quickAddReduce([5,35],[8,35],[13,35],[18,35],[19,35],[20,35],[21,35],[22,35],[23,35],[24,35],[25,35],[26,35],[27,35],[28,35]);

	this.states[260]=new Abe.State(260);
	this.states[260].quickAddReduce([5,40],[8,40],[13,40],[18,40],[19,40],[20,40],[21,40],[22,40],[23,40],[24,40],[25,40],[26,40],[27,40],[28,40]);

	this.states[262]=new Abe.State(262);
	this.states[262].setEmptyAction(312);
	this.states[262].quickAddShift([14,311]);
	this.states[262].quickAddGoto([9,310]);

	this.states[272]=new Abe.State(272);
	this.states[272].quickAddReduce([1,14],[2,14],[4,14],[11,14],[14,14],[15,14],[16,14],[17,14]);

	this.states[282]=new Abe.State(282);
	this.states[282].quickAddShift([13,313],[18,101]);

	this.states[310]=new Abe.State(310);
	this.states[310].quickAddReduce([1,11],[2,11],[4,11],[11,11],[14,11],[15,11],[16,11],[17,11]);

	this.states[311]=new Abe.State(311);
	this.states[311].quickAddShift([2,3],[4,15],[11,16],[15,17],[16,18],[17,19]);
	this.states[311].quickAddGoto([0,20],[1,2],[6,315],[7,14]);

	this.states[312]=new Abe.State(312);
	this.states[312].quickAddReduce([1,13],[2,13],[4,13],[11,13],[14,13],[15,13],[16,13],[17,13]);

	this.states[313]=new Abe.State(313);
	this.states[313].quickAddShift([5,325]);

	this.states[315]=new Abe.State(315);
	this.states[315].quickAddReduce([1,12],[2,12],[4,12],[11,12],[14,12],[15,12],[16,12],[17,12]);

	this.states[325]=new Abe.State(325);
	this.states[325].quickAddReduce([1,15],[2,15],[4,15],[11,15],[14,15],[15,15],[16,15],[17,15]);

}
ABE_LR_TABLE=new Abe.Table();