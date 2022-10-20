import logo from '../logo.svg';
import '../App.css';



function Door() {


    console.log(11)
    return (
        <>

            <div className="App">
                <header className="App-header">
                    The Curious Developer SeHyoung
                    {/* a태그 링크 */}
                    <a
                        className="App-link"
                        //href="https://shlog.netlify.app/"

                        href="Home"

                        /* target="_blank"  이건 새창으로 열기 */
                        rel="noopener noreferrer"
                    >
                        {/* 홈 중앙 큰 별 로고 */}
                        <img src={logo} className="App-logo" alt="logo" /><br></br>

                    </a>
                    Welcome to SHworld
                </header>
            </div>

        </>
    )
}
export default Door;