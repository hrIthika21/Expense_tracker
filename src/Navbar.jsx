import './expense_tracker.css'

const Navbar = () => {
    
        const hamMenu=document.querySelector(".ham-menu");
        const  offScreenMenu=document.querySelector(".off-screen-menu");
      
        function HamMenu(){
        hamMenu.classList.toggle("active");
        offScreenMenu.classList.toggle("active");
        console.log("hamMenu")
        }

    return (
        
        <header>
            <div className="website_name">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="50" viewBox="0 0 701 379" fill="none">
                <g id="money_logo">
                <g id="Group 1">
                <rect id="Rectangle 7" x="57.2076" width="643.792" height="324.431" fill="#ADEBB0"/>
                <rect id="Rectangle 8" x="57.2076" width="31.0911" height="324.431" fill="#326437"/>
                <rect id="Rectangle 9" x="669.909" width="31.0911" height="324.431" fill="#326437"/>
                <rect id="Rectangle 10" x="57.2076" y="31.9741" width="31.9741" height="643.792" transform="rotate(-90 57.2076 31.9741)" fill="#326437"/>
                <rect id="Rectangle 11" x="57.2076" y="324.431" width="31.9741" height="643.792" transform="rotate(-90 57.2076 324.431)" fill="#326437"/>
                <ellipse id="Ellipse 3" cx="379.311" cy="162.855" rx="105.295" ry="108.286" fill="#326437"/>
                <rect id="Rectangle 12" x="322.103" y="102.317" width="16.5819" height="121.075" fill="#FFE500"/>
                <rect id="Rectangle 15" x="420.351" y="102.317" width="16.5819" height="121.075" fill="#FFE500"/>
                <rect id="Rectangle 13" width="82.602" height="22.3864" transform="matrix(0.697137 0.716938 -0.697137 0.716938 337.71 102.317)" fill="#FFE500"/>
                <rect id="Rectangle 14" width="82.602" height="22.3864" transform="matrix(0.697137 -0.716938 0.697137 0.716938 363.558 161.538)" fill="#FFE500"/>
                </g>
                <g id="Group 2">
                <rect id="Rectangle 7_2" y="54.5693" width="643.792" height="324.431" fill="#ADEBB0"/>
                <rect id="Rectangle 8_2" y="54.5693" width="31.0911" height="324.431" fill="#326437"/>
                <rect id="Rectangle 16" y="315.052" width="57.2076" height="63.9483" fill="#326437"/>
                <rect id="Rectangle 17" x="586.999" y="315.052" width="57.2076" height="63.9483" fill="#326437"/>
                <rect id="Rectangle 18" x="586.999" y="54.5693" width="57.2076" height="63.9483" fill="#326437"/>
                <rect id="Rectangle 19" x="72.5458" y="6.39478" width="57.2076" height="63.9483" fill="#326437"/>
                <rect id="Rectangle 20" x="641.305" width="57.2076" height="63.9483" fill="#326437"/>
                <rect id="Rectangle 9_2" x="612.701" y="54.5693" width="31.0911" height="324.431" fill="#326437"/>
                <rect id="Rectangle 10_2" y="86.5432" width="31.9741" height="643.792" transform="rotate(-90 0 86.5432)" fill="#326437"/>
                <rect id="Rectangle 11_2" y="379" width="31.9741" height="643.792" transform="rotate(-90 0 379)" fill="#326437"/>
                <ellipse id="Ellipse 3_2" cx="322.104" cy="217.424" rx="105.295" ry="108.286" fill="#326437"/>
                <rect id="Rectangle 12_2" x="264.896" y="156.886" width="16.5819" height="121.075" fill="#FFE500"/>
                <rect id="Rectangle 15_2" x="363.144" y="156.886" width="16.5819" height="121.075" fill="#FFE500"/>
                <rect id="Rectangle 13_2" width="82.602" height="22.3864" transform="matrix(0.697137 0.716938 -0.697137 0.716938 280.502 156.886)" fill="#FFE500"/>
                <rect id="Rectangle 14_2" width="82.602" height="22.3864" transform="matrix(0.697137 -0.716938 0.697137 0.716938 306.351 216.107)" fill="#FFE500"/>
                </g>
                <rect id="Rectangle 16_2" y="54.5693" width="57.2076" height="63.9483" fill="#326437"/>
                </g>
            </svg>
            <p>Money Track</p>
            </div>
            <div className="off-screen-menu" >
                    <a href="#home">Home</a>
                    <a href="#add_expense">Add Expense</a>
                    <a href="expenses_list">Expense List</a>
            </div>

            <div className="ham-menu" onClick={HamMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <a href="#add_expense" className="add_expense">Add Expense</a>
            <a href="#expenses_list" className="expenses_list">Expense List</a>
            <a href="#home" className="home">Home</a>
        </header>

    );
}
 
export default Navbar;