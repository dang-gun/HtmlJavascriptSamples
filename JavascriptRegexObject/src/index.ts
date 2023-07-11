
export default class StartUp
{
	/** 정규식 개체 */
	reg = /\{\{[a-zA-Z0-9]+:[a-zA-Z0-9]+\}\}|\{\{[a-zA-Z0-9]+\}\}/g
	/** 테스트 문자열 */
	testString = "{{test001}}, {{test001:test1}}, {{test001:a}}, {{aa}}";

	constructor()
	{
		debugger;
		for (let i = 0; i < 1; ++i)
		{
			console.log("----- -----");

			this.F1();
			this.F2();
			this.F3();

			console.log(" ");

			this.F1();
			this.F2();
			this.F3();
		}


		this.reg.lastIndex = 0;
		for (let i = 0; i < 1; ++i)
		{
			console.log("----- -----");

			this.F1();
			this.F2();
			this.F3();

			console.log(" this.reg.lastIndex = 0; ");
			this.reg.lastIndex = 0;
			this.F1();
			this.F2();
			this.F3();
		}


		this.reg.lastIndex = 0;
		for (let i = 0; i < 1; ++i)
		{
			console.log("----- -----");

			this.F1();
			console.log("F1 - lastIndex : " + this.reg.lastIndex);
			this.F2();
			console.log("F2 - lastIndex : " + this.reg.lastIndex);
			this.F3();
			console.log("F3 - lastIndex : " + this.reg.lastIndex);

			this.F1();
			console.log("F1 - lastIndex : " + this.reg.lastIndex);
			this.F2();
			console.log("F2 - lastIndex : " + this.reg.lastIndex);
			this.F3();
			console.log("F3 - lastIndex : " + this.reg.lastIndex);
		}
		
	}

	private F1(): void
	{
		console.log("F1 : " + this.reg.exec(this.testString));
	}

	private F2(): void
	{
		console.log("F2 : " + this.reg.exec(this.testString));
	}

	private F3(): void
	{
		console.log("F3 : " + this.reg.exec(this.testString));
	}

}

const app = new StartUp();
