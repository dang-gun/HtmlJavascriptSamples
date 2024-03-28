import TestChild from "./TestChild";


export default class StartUp
{
	
	A = "StartUp A";
	B = "StartUp B";

	/** 상속 테스트용 */
	TestChild1 = new TestChild();
	
	constructor()
	{
		document.getElementById("btnClick").onclick = this.TestCilck;
		document.getElementById("btnClick2").onclick = this.TestCilck2;
		document.getElementById("btnClick3").onclick = this.TestCilck3;
		document.getElementById("btnClick4").onclick = this.TestCilck4;


		console.log("constructor this A : " + this.A);
		console.log(this);
		console.log(" ");
	}

	TestCilck = () =>
	{
		console.log("TestCilck this A : " + this.A);
		console.log("TestCilck this B : " + this.B);
		console.log(this);
		console.log(" ");
	};

	TestCilck2()
	{
		this.B = "TestCilck2 B";
		console.log("TestCilck2 this A : " + this.A);
		console.log("TestCilck2 this B : " + this.B);
		console.log(this);
		console.log(" ");
	};


	TestCilck3 = () =>
	{
		let fun = function ()
		{
			let tempClass = new TestClass();

			tempClass.Call1(this);
		}

		fun();
	}

	TestCilck4 = () =>
	{
		let objThis = this;

		let fun = function ()
		{
			let tempClass = new TestClass();

			tempClass.Call1(objThis);
		}

		fun();
	}




}

/** 화살표 함수 테스트용 클래스 */
export class TestClass
{
	A = "TestClass A";

	Call1(objThis)
	{
		console.log("TestClass Call2 this A : " + this.A);
		console.log(this);

		console.log("TestClass Call2 objThis A : " + objThis.A);
		console.log(objThis);
		console.log(" ");
	}
}

const app = new StartUp();
