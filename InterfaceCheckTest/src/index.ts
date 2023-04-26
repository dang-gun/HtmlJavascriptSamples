
import { Test1Interface } from "./Test1Interface";
import { Test2Interface } from "./Test2Interface";


export default class StartUp
{

	Test1Inf: Test1Interface
		= {
			Test1_int: 1
			, Test1_string: "Test1"
		};

	Test2Inf: Test2Interface
		= {
			Test2_int: 2
			, Test2_string: "Test2"
		};

	Test3: any
		= {
			Test1_int: 1
			, Test2_int: 2
		};
	
	constructor()
	{
		let Test1Inf_Temp: Test1Interface
			= {
			Test1_int: 11
			, Test1_string: "Test11"
		};

		console.log(" --- InterfaceCheck1 --- ");
		console.log("Test1Inf : " + this.InterfaceCheck1(this.Test1Inf));
		console.log("Test2Inf : " + this.InterfaceCheck1(this.Test2Inf));
		console.log(" ");
		console.log(" ");

		console.log(" --- InterfaceCheck2 --- ");
		console.log("Test1Inf of Test1Inf_Temp : "
			+ this.InterfaceCheck2(this.Test1Inf, Test1Inf_Temp));
		console.log("Test1Inf of Test2Inf : "
			+ this.InterfaceCheck2(this.Test1Inf, this.Test2Inf));
		console.log("Test1Inf of Test3 : "
			+ this.InterfaceCheck2(this.Test1Inf, this.Test3));
		


		//console.log(Object.keys(Test2));

		debugger;
	}

	/**
	 * 'Test1_int'와 'Test1_string'을 가지고 있으면 true를 리턴한다.
	 * @param obj1 체크할 오브젝트
	 * @returns Test1Interface를 가지고 있는지 여부
	 */
	public InterfaceCheck1(obj1: any): boolean
	{
		let bReturn: boolean = false;

		if ("object" === typeof obj1)
		{//오브젝트 일때

			//'Test1_int'와 'Test1_string'을 가지고 있는지 확인
			bReturn = ('Test1_int' in obj1) && ('Test1_string' in obj1);
		}

		return bReturn;
	}

	/**
	 * 두 오브젝트의 속성을 비교하여 같은 인터페이스를 사용하는 개체인지 판별한다.
	 * 정밀도는 내부의 nCheckCount변수로 설정된 값으로 최대 비교할 속성의 개수다.
	 * 이 값이 높을 수록 많은 속성으 비교하므로 정확성은 올라가지만 부하가 심해진다.
	 * 정밀도를 낮게 잡으면 obj1와 obj2의 순서만 바꿔도 다른 값이 나올 수 있는 가능성이 있다.
	 * @param obj1
	 * @param obj2
	 * @returns
	 */
	public InterfaceCheck2(obj1: any, obj2: any): boolean
	{
		let bReturn: boolean = false;

		//비교할 오브젝트의 속성 수
		let nCheckCount: number = 2;

		let s1 = typeof obj1;
		let s2 = typeof obj2;

		if ("object" === s1 && "object" === s2)
		{//둘다 오브젝트 일때

			//1번 오브잭트의 속성 이름을 추출한다.
			let arrObj1: string[] = Object.keys(obj1);

			//체크 성공여부 임시 저장
			let bCheckTemp: boolean = false;

			for (let i = 0; i < nCheckCount && i < arrObj1.length; ++i)
			{
				let sItem = arrObj1[i];

				bCheckTemp = (sItem in obj2);
				if (false === bCheckTemp)
				{//일치하는게 없다.

					//모두 일치하지 않으면 같은 인터페이스라고 할 수 없으므로
					//더 이상 비교할 필요가 없다.
					break;
				}

			}//end for i

			if (true === bCheckTemp)
			{//모든 체크가 성공했다.

				//같은 인터페이스를 사용하는 개체라고 판단 한다.
				bReturn = true;
			}

		}


		return bReturn;
	}
}



const app = new StartUp();
