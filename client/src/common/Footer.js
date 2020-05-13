import React from 'react';

function openFacebookWindow(){ 
    window.open('https://www.facebook.com/sharer/sharer.php?u=https://covid19-au.herokuapp.com/', 
                        'newwindow', 'width=900,height=400'); 
}

function openTwitterWindow(){ 
    window.open('https://twitter.com/share?ref_src=twsrc%5Etfw&text=Check%20out%20latest%20COVID-19%20status%20and%20keep%20track%20of%20hours%20staying%20home.&url=https://covid19-au.herokuapp.com/',
                'newwindow', 'width=600, height=300');
}

function openLinkedInWindow(){
    window.open('http://www.linkedin.com/shareArticle?mini=true&url=https://covid19-au.herokuapp.com/&title=Check%20out%20latest%20COVID-19%20status%20and%20keep%20track%20of%20hours%20staying%20home.&source=herokuapp.com',
                'newwindow', 'width=600, heigh=200');
}

function Footer() {
    return(
        <footer className="sticky-footer bg-white">
            <div className="mr-5">
                <div className="text-right my-auto">
                    <small className="mr-1">Website developed by Takuji Okubo</small>
                    <a href="https://github.com/tak-9/covid-19" target="_blank" rel="noopener noreferrer"><i className="fab fa-github text-dark"></i></a>
                    <br className="d-sm-none" />
                    <small className="ml-3">Share this site on</small> 
                    <br className="d-sm-none" />
                    <span className="ml-2" style={{cursor: "pointer"}} onClick={openFacebookWindow}><i className="fab fa-facebook-f"></i></span>
                    <span className="ml-2" style={{cursor: "pointer"}} onClick={openTwitterWindow}><i className="fab fa-twitter"></i></span>
                    <span className="ml-2" style={{cursor: "pointer"}} onClick={openLinkedInWindow}><i className="fab fa-linkedin"></i></span>
                </div>
            </div>
        </footer>
    )
}
export default Footer;