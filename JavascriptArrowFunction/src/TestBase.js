

//import DG_JsTextReplace, { MatchResultInterface } from "./DG_JsTextReplace/DG_JsTextReplace";


export default class TestBase
{
	
	A = "TestBase A";
	B = "TestBase B";
	
	constructor()
	{
	}

	/** 화살표 함수로 선언  */
	TestCilck1_1 = () =>
	{
		console.log("TestBase TestCilck1_1 this A : " + this.A);
		console.log("TestBase TestCilck1_1 this B : " + this.B);
		console.log(this);
		console.log(" ");
	};
	/** 일반 함수로 선언 */
	TestCilck1_2()
	{
		this.B = "TestBase TestCilck1_2 B";
		console.log("TestBase TestCilck1_2 this A : " + this.A);
		console.log("TestBase TestCilck1_2 this B : " + this.B);
		console.log(this);
		console.log(" ");
	};


	/** 화살표 함수로 선언 - 재정의 용 */
	TestCilck2_1 = () =>
	{
		console.log("TestBase TestCilck2_1 this A : " + this.A);
		console.log("TestBase TestCilck2_1 this B : " + this.B);
		console.log(this);
		console.log(" ");
	};


	TestCilck3 = () =>
	{
		this.TestCilck3_Base();
	}
	TestCilck3_Base = () =>
	{
		console.log("TestBase TestCilck3 this A : " + this.A);
		console.log("TestBase TestCilck3 this B : " + this.B);
		console.log(this);
		console.log(" ");
	}


	/** 일반 함수로 선언 - 재정의 용  */
	TestCilck4_1()
	{
		this.B = "TestBase TestCilck4_1 B";
		console.log("TestBase TestCilck4_1 this A : " + this.A);
		console.log("TestBase TestCilck4_1 this B : " + this.B);
		console.log(this);
		console.log(" ");
	};
	/** 일반 함수로 선언 - 화살표 함수로 재정의  */
	TestCilck4_2()
	{
		this.B = "TestBase TestCilck4_2 B";
		console.log("TestBase TestCilck4_2 this A : " + this.A);
		console.log("TestBase TestCilck4_2 this B : " + this.B);
		console.log(this);
		console.log(" ");
	};
	
}
