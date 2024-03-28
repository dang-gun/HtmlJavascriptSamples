

import TestBase from "./TestBase";


export default class TestChild extends TestBase
{
	Title = "TestChild this";
	
	constructor()
	{
		super();

		document.getElementById("btnClick_TestChild1_1").onclick = this.TestCilck1_1.bind(this);
		document.getElementById("btnClick_TestChild1_2").onclick = super.TestCilck1_2;

		document.getElementById("btnClick_TestChild2_1").onclick = this.TestCilck2_1;

		document.getElementById("btnClick_TestChild3").onclick = this.TestCilck3;

		document.getElementById("btnClick_TestChild4_1").onclick = this.TestCilck4_1;
		document.getElementById("btnClick_TestChild4_2").onclick = this.TestCilck4_2;
	}

	TestCilck2_1 = () =>
	{
		console.log("TestChild TestCilck2 this Title : " + this.Title);
		console.log("----------");

		//바인딩이 없으므로 에러 난다.
		//super.TestCilck3();
		//무한 루프
		//this.TestCilck3();
		//super.TestCilck3.bind(this)();
		
	}

	TestCilck3 = () =>
	{
		console.log("TestChild TestCilck3 this Title : " + this.Title);
		console.log("----------");

		this.TestCilck3_Base.bind(this)();

	}

	TestCilck4_1()
	{
		console.log("TestChild TestCilck4_1 this Title : " + this.Title);
		console.log("----------");
		super.TestCilck4_1();
	}
	TestCilck4_2 = () =>
	{
		console.log("TestChild TestCilck4_2 this Title : " + this.Title);
		console.log("----------");
		super.TestCilck4_2();
	}
}