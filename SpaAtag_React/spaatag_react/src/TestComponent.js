import GlobalStatic from "./GlobalStatic";

export function Test1()
{
    ++GlobalStatic.TestCount;
    console.log("Test1 GlobalStatic.TestCount : " + GlobalStatic.TestCount);

    return (
        <div>
            Test1
        </div>
    );
}

export function Test2()
{
    ++GlobalStatic.TestCount;
    console.log("Test2 GlobalStatic.TestCount : " + GlobalStatic.TestCount);

    return (
        <div >
            Test2
        </div>
    );
}

export function Test3()
{
    ++GlobalStatic.TestCount;
    console.log("Test3 GlobalStatic.TestCount : " + GlobalStatic.TestCount);

    return (
        <div>
            Test3
        </div>
    );
}


