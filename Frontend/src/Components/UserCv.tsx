
const UserCv = () => {
    return (
        <div>
            <div>
                <img src="" alt="Avatar" />
                <div>
                    <h1>Name</h1>
                </div>
            </div>
            <div>
                <p><i className="fa fa-briefcase"></i>Plumber</p>
                <p><i className="fa fa-home"></i>London, UK</p>
                <p><i className="fa fa-envelope"></i>example@mail.com</p>
                <p><i className="fa fa-phone"></i>+36909999999</p>
                <p className="languange"><b><i className="fa fa-globe"></i>Languages</b></p>
                <div>
                    <p>English</p>

                    <div>B2</div>

                    <p>Spanish</p>

                    <div>A1</div>

                    <p>German</p>

                    <div>C1</div>

                </div>
                <div className="workexp-container">
                    <h2 className="headline workexp"><i className="fa fa-suitcase"></i>Work Experience</h2>
                    <div className="workexp">
                        <h5 className="workname"><b>Fürdő fingo / GasForUs.com</b></h5>
                        <h6 className="workdate"><i className="fa fa-calendar"></i>Jan 2024 - <span className="w3-tag w3-teal w3-round">Current</span></h6>
                        <p>Description of job....</p>

                    </div>
                    <div className="workexp">
                        <h5 className="workname"><b>Wc pucoló/ toalettesomething.com</b></h5>
                        <h6 className="workdate"><i className="fa fa-calendar"></i>Mar 2018 - Dec 2024</h6>
                        <p>Description of job....</p>
                    </div>
                    <div className="workexp">
                        <h5 className="workname"><b>Wc papír designer / designsomething.com</b></h5>
                        <h6 className="workdate"><i className="fa fa-calendar"></i>Jun 2010 - Mar 2018</h6>
                        <p>Description of job....</p>
                    </div>
                </div>
            </div>
            <div></div>
            <div></div>
        </div>
    );
};

export default UserCv;
