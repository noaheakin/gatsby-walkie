import React from 'react';
import NavBar from '../components/NavBar';
import * as screenImg from '../images/walkie-screen.jpg';
import closerImg from '../images/closer-together.png';
import distractionImg from '../images/distraction-free.png';
import voiceImg from '../images/voice-only.png';
const App = () => {
    return (React.createElement("div", { className: "App" },
        React.createElement(NavBar, null),
        React.createElement("div", { className: "flex pt-8 bg-white mt-28 mx-auto space-y-2 xs:py-0 xs:flex-col xs:items-center xs:space-y-0" },
            React.createElement("div", { className: "sm:order-10 w-1/2 text-left px-20" },
                React.createElement("h1", { className: "text-4xl py-5 font-extrabold tracking-wide leading-snug" }, "Simple, real time voice chat for your remote team."),
                React.createElement("h3", { className: "text-xl" }, "Walkie is a better way to communicate for distributed teams that don't want to spend all day in dry text channels."),
                React.createElement("form", { className: "my-10" },
                    React.createElement("input", { className: "border border-r-0 rounded-l-lg py-3 border-gray-300", type: "text", placeholder: "   > work email", required: true }),
                    React.createElement("button", { className: "border border-black bg-black text-white px-3 py-3 font-bold rounded-r-lg" }, "Become Founding User"))),
            React.createElement("img", { className: "md:w-1/2", src: screenImg })),
        React.createElement("div", { className: "bg-black flex py-20 justify-items-center px-14 text-white" },
            React.createElement("div", { className: "flex flex-col space-y-3 pr-12" },
                React.createElement("img", { className: "h-15 w-20", src: voiceImg }),
                React.createElement("h2", { className: "text-2xl" }, "Voice Only"),
                React.createElement("p", null, "A voice only communication tool that enables teams to communicate with emotion and purpose.")),
            React.createElement("div", { className: "flex flex-col space-y-3 pr-12" },
                React.createElement("img", { className: "h-14 w-14", src: distractionImg }),
                React.createElement("h2", { className: "text-2xl" }, "Distraction Free"),
                React.createElement("p", null, "No more \u2318-tabbing. Spend less time in slack channels and more time on the work that actually matters.")),
            React.createElement("div", { className: "flex flex-col space-y-3" },
                React.createElement("img", { className: "h-15 w-20", src: closerImg }),
                React.createElement("h2", { className: "text-2xl" }, "Closer Together"),
                React.createElement("p", null, "Subtle hints of presence so that even the most distributed teams feel connected across continents."))),
        React.createElement("div", { className: "flex flex-column" },
            React.createElement("div", { className: "flex" },
                React.createElement("div", { className: "flex flex-column" },
                    React.createElement("h2", null, "Have fewer meetings and make faster decisions"),
                    React.createElement("p", null, "Walkie keeps people out of unnecessary meetings by providing the value of real time communication with out the need for everyone to drop everything.")),
                React.createElement("img", { src: process.env.PUBLIC_URL + '/images/request-access1.png' })),
            React.createElement("div", { className: "flex" },
                React.createElement("img", { src: process.env.PUBLIC_URL + '/images/send-us-feedback.jpg' })),
            React.createElement("div", null,
                React.createElement("img", { src: process.env.PUBLIC_URL + '/images/request-access2.jpg' })))));
};
export default App;
