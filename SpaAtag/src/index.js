
export default class StartUp
{
	
	constructor()
	{
		document.querySelector("#aTest2")
			.addEventListener("click", function (event)
			{
				event.preventDefault();
			});


		let arrASpaAtag = document.querySelectorAll(".SpaAtag");
		for (let i = 0; i < arrASpaAtag.length; ++i)
		{
			arrASpaAtag[i]
				.addEventListener("click", function (event)
				{
					event.preventDefault();

					history.pushState(null, "Spa A tag", event.target.pathname);
					//history.replaceState(null, "Spa A tag", event.target.pathname);

				});
		}

		
	}

	TestCilck = () =>
	{
		
		
	};

	TestCilck2 = () =>
	{
	};

}


const app = new StartUp();
