import React from 'react';
//import FlareComponent from 'flare-react';
import Navbar from './Navbar';
import '../static/homepage.css';

const App = () => {
    return (
        <div>
            <div>                
                <Navbar />                
                <div className="container" id="main">
                    <div className="row boxx">
                        <div className="text">
                            <img src="../assets/vl-text.png" style={{maxWidth: '70%'}}/>
                            <b><p>is based on the idea that lab experiments <br/>
                            can be taught using the Internet, more efficiently and less<br/>
                            expensively. The labs can also made be more available to students <br/>
                            with no access to physical labs or where equipment <br/>
                            is not available owing to being scarce or costly. 
                            </p></b>                
                        </div>            
                        <img src="./assets/lab.gif" alt="image" className="img-fluid float-right" />                  
                    </div>
                    <div className="row">
                        <h1 style={{marginLeft: '47%', marginBottom: '10px', backgroundColor: '#95aedd', borderRadius: '10px'}}>&nbsp; EXPERIMENTS &nbsp;</h1>
                    </div>
                    <div className="container row" style={{marginLeft: '-3%'}}>
                        <div className="col-1 stds">
                            <p style={{paddingLeft: '30%', backgroundColor: '#fcabc2', borderRadius: '10px'}}>S<br/>T<br/>A<br/>N<br/>D<br/>A<br/>R<br/>D<br/></p>
                        </div>
                        <div className="col-1">
                            <div className="row levels">
                                <h4 className="text">VII</h4>
                            </div>
                            <div className="row levels">
                                <h4 className="text">VIII</h4>
                            </div>
                            <div className="row levels">
                                <h4 className="text">IX</h4>
                            </div>
                            <div className="row levels">
                                <h4 className="text">X</h4>
                            </div>
                        </div>
                        <div className="col-lg-10" style={{marginRight: '-5%'}}>
                            <div className="row">
                                <div className="col-lg-5 card card-1">
                                    <h2>1. Growing plants from seeds</h2>                            
                                    <div id="root"></div>
                                </div>
                                <div className="col-lg-5 card card-2">
                                    <h2>2. Growing plants from seeds</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-5 card card-3">
                                    <h2>3. Growing plants from seeds</h2>
                                </div>
                                <div className="col-lg-5 card card-4">
                                    <h2>4. Growing plants from seeds</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/><br/><br/>
                    {/*
                    <div className="row">
                        <h1 className="text-center" style=margin-left: 47%; margin-bottom: 10px; background-color: #95aedd; border-radius: 10px;">&nbsp; ACTIVITIES &nbsp;</h1>
                    </div>
                    <br/>
                    <div className="container row" style="margin-left: -3%;">            
                        <div className="col-1 stds">
                            <p style="padding-left: 30%;background-color: #fcabc2; border-radius: 10px;">E<br/>X<br/>P<br/>E<br/>R<br/>&nbsp;I<br/>M<br/>E<br/>N<br/>T<br/>S<br/></p>
                        </div>
                        <div className="col-1">
                            <div className="row levelss">
                                <h4 className="text">I</h4>
                            </div>
                            <div className="row levelss">
                                <h4 className="text">II</h4>
                            </div>
                            <div className="row levelss">
                                <h4 className="text">III</h4>
                            </div>
                            <div className="row levelss">
                                <h4 className="text">IV</h4>
                            </div>
                            <div className="row levelss">
                                <h4 className="text">V</h4>
                            </div>
                            <div className="row levelss">
                                <h4 className="text">VI</h4>
                            </div>
                            <div className="row levelss">
                                <h4 className="text">VII</h4>
                            </div>
                            <div className="row levelss">
                                <h4 className="text">VIII</h4>
                            </div>
                        </div>
                        <div className="col-lg-10" style="margin-right: -5%;">
                            <div className="row">
                                <div className="col-lg-5 card card-1">
                                    <h4 style="margin-top: 10%;">1. Germinate seeds to observe how plants grow from seeds.</h4>
                                </div>
                                <div className="col-lg-5 card card-2">
                                    <h4 style="margin-top: 8%;">2. Test the presence of carbohydrates, proteins and fats in food items.</h4>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-5 card card-3">
                                    <h4 style="margin-top: 15%;">3. Observe stomata in leaves.</h4>
                                </div>
                                <div className="col-lg-5 card card-4">
                                    <h4 style="margin-top: 10%;">4. Study that leaves prepare starch by the process of photosynthesis.</h4>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-5 card card-2">
                                    <h4 style="margin-top: 10%;">5. Study how insect pests spoil food grains.</h4>
                                </div>
                                <div className="col-lg-5 card card-1">
                                    <h4 style="margin-top: 10%;">6. Observation of pond water for presence of micro-organisms.</h4>
                                </div>
                            </div>
                        </div>                
                    </div>     */}           
                </div>
                <div className="container" id="mobile">
                    <img src="./assets/vl-logo.png" alt="Virtual Labs" style={{maxHeight: '50%', maxWidth: '100%', marginLeft: '-5%'}}/>
                    <div style={{marginLeft: '2%'}}>
                        <h3>is available now on the Play Store and App Store!</h3>
                        <h6>Click to download the app now.</h6>
                    </div>  
                    
                    <a href="" id="play-store">   <img src="./assets/play_store.svg" alt="Download from Play Store" width="275" height="100" /> </a>
                    <a href="" id="app-store">   <img src="./assets/app_store.svg" alt="Download from App Store" width="275" height="100" /> </a>
                
                </div>    
            </div>
        </div>
    ); 
}

export default App;