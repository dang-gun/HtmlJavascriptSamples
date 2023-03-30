

//import DG_JsTextReplace, { MatchResultInterface } from "./DG_JsTextReplace/DG_JsTextReplace";


export default class StartUp
{
	
	A = "StartUp A";
	B = "StartUp B";
	
	constructor()
	{
		console.log("Test1.A1 : " + Test1.A1);
		console.log("Test1[1] : " + Test1[1]);

		console.log(" ");
		console.log("Test2.A2 : " + Test2.A2);
		//console.log("Test2[1] : " + Test2[1]);

		console.log(" --- --- ");
		console.log("Object.keys(Test1) : " );
		console.log(Object.keys(Test1));
		console.log(" ");
		console.log("Object.keys(Test2) : ");
		//console.log(Object.keys(Test2));

		debugger;
	}


}

enum Test1
{
	A1 = 1,
	B1 = 2
}

const enum Test2 {
	A2 = 1,
	B2 = 2
}

const app = new StartUp();
