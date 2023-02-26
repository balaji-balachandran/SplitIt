import React from 'react';
import './styles.css';
import logo from '../img/splitit-home-nobg.png'
import code from '../img/code.png'
import coder from '../img/coder.webp'
import globe from '../img/globe.avif'
import sendMoney from '../img/sendMoney.png'
import budget from '../img/budget.png'
import Footer from '../components/Footer/Footer.js'

class Banner extends React.Component{
    render(){
        return (
        <div class="banner">
            <div class="company-name">SplitIt</div>
            <div class="tagline">Split the bill. Save the hassle.</div>
            <a href="sign-in">
                <div class="start-button">
                    <p> Get Started </p>
                </div>
            </a>
            <img id="logo" src={logo} alt="SplitIt Home"></img>
        </div>
        );
    }
}

class About extends React.Component{
    render(){
        return (<div class = "about">
                    <div class = "about-card-left" id="first-card"><img src={sendMoney} alt="code" id="first-row-image"></img></div>
                    <div class = "about-card-right" id="second-card">
                        <h1>What is SplitIt?</h1>
                        <p>
                            Have you ever found yourself in the awkward situation of organizing a group dinner, only to struggle with splitting the bill and collecting payments afterwards? Enter SplitIt, the service that lets you spend less time stressing over the bill and more time enjoying the thrill. With SplitIt, you can easily split the bill and make sure everyone pays their fair share, without having to worry about the hassle of collecting money from each person. 
                        </p>   
                    </div>
                    <div class = "about-card-left" id="third-card">
                        <h1>Why SplitIt?</h1>
                        <p>
                            SplitIt offers a hassle-free solution for splitting expenses and managing shared finances. It eliminates the need for manual calculations and awkward conversations about money, making it easier for users to split bills and track expenses with their friends, family, and colleagues. With its user-friendly interface, intuitive design, and powerful features, SplitIt offers a convenient way to manage your shared expenses and stay on top of your spending.
                        </p>
                    </div>
                    <div class = "about-card-right" id="fourth-card"><img src={code} alt="code" id="second-row-image"></img></div>
                    <div class = "about-card-left" id="fifth-card"><img src={budget} alt="coder" id="third-row-image"></img></div> 
                    <div class = "about-card-right" id="sixth-card">
                        <h1>What does SplitIt offer?</h1>
                        <p>
                            SplitIt allows you to use your webcam to scan receipts and easily assign expenses to your contacts. Your contacts can then view their outstanding dues on their own accounts. In addition, SplitIt offers features like expense tracking, contact management, and payment tracking to help you manage your finances and stay on top of your spending.
                        </p>    
                    </div>
                </div>);
    }
}

const Home = () =>{
    return (<div><Banner /><About /><Footer /></div>);
};

export default Home

