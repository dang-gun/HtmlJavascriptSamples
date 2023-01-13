import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { useNavigate, useLocation } from 'react-router-dom';

import Start from './Start.js';
import { Test1, Test2, Test3 } from './TestComponent.js';




function App()
{
    const navigate = useNavigate();

    //감시할 이벤트들
    useEffect(() =>
    {//componentDidMount와 동일

        window.onpopstate = function (event)
        {
            console.log(`location : ${document.location}, state : ${event.state}`)
        }

        document.querySelector("#aTest3")
            .addEventListener("click", function (event)
            {
                event.preventDefault();

                navigate(event.target.pathname);
                //window.history.pushState('aTest3', "Spa A tag", event.target.pathname);
            });

        console.log("Start - componentDidMount : useEffect 마운트");

        return () =>
        {//언마운트
            console.log("Start - componentDidMount : useEffect 언마운트");
            //GlobalStatic.Page_Now.UpdateSignIn = null;
        };
    }, []);

    return (
        <div className="App">
                <header className="App-header">
                    SPA A tag React<br />
                    <Link to="/Test1">Test1 - React Link</Link><br />
                    <a href="/Test2">Test2 - A tag</a><br />
                    <a id="aTest3" href="/Test3">Test3 - A tag click Event</a><br />
                </header>
                <br />
                <br />
                <br />
                <br />
                <Routes>
                    <Route path="/" element={<Start />} />

                    <Route path="/Test1" element={<Test1 />} />
                    <Route path="/Test2" element={<Test2 />} />
                    <Route path="/Test3" element={<Test3 />} />
                </Routes>
        </div>
    );
}

export default App;

