

//import DG_JsTextReplace, { MatchResultInterface } from "./DG_JsTextReplace/DG_JsTextReplace";


export default class StartUp
{
	
	A = "StartUp A";
	B = "StartUp B";
	
	constructor()
	{
		document.getElementById("btnClick").onclick = this.TestCilck;
		document.getElementById("btnClick2").onclick = this.TestCilck2;
		document.getElementById("btnClick3").onclick = this.TestCilck3;
		document.getElementById("btnClick4").onclick = this.TestCilck4;


		console.log("constructor this A : " + this.A);
		console.log(this);
	}

	TestCilck = () =>
	{
		console.log("TestCilck this A : " + this.A);
		console.log("TestCilck this B : " + this.B);
		console.log(this);
	};

	TestCilck2()
	{
		this.B = "TestCilck2 B";
		console.log("TestCilck2 this A : " + this.A);
		console.log("TestCilck2 this B : " + this.B);
		console.log(this);
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


export class TestClass
{
	A = "TestClass A";

	Call1(objThis)
	{
		console.log("TestClass Call2 this A : " + this.A);
		console.log(this);

		console.log("TestClass Call2 objThis A : " + objThis.A);
		console.log(objThis);
	}
}

const app = new StartUp();
