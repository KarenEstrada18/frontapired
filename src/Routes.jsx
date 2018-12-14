import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';


import Nav from './components/nav/nav'
import PageHeader from './components/pageHeader/pageHeader'
import MainContent from './components/mainContent/mainContent'
import Footer from './components/footer/footer'
import NavAbout from './components/nav-about/nav-about'
import PageHeaderAbout from './components/pageHeader-about/pageHeader-about'
import MainContentAbout from './components/mainContent-about/mainContent-about'
import FooterAbout from './components/footer-about/footer-about'
import NavPost from './components/nav-post/nav-post'
import PageHeaderPost from './components/pageHeader-post/pageHeader-post'
import PostContent from './components/postContent/postContent'

class Routes extends Component {
   
    render() { 
        return ( 
            <Router>
                <main>
                    <Route exact path = "/" component = {Nav} />
                    <Route exact path = "/" component = {PageHeader} />
                    <Route exact path = "/" component = {MainContent} />
                    <Route exact path = "/" component = {Footer} />
                    <Route exact path = "/about" component = {NavAbout} />
                    <Route exact path = "/about" component = {PageHeaderAbout} />
                    <Route exact path = "/about" component = {MainContentAbout} />
                    <Route exact path = "/about" component = {FooterAbout} />
                    <Route exact path = "/post" component = {NavPost} />
                    <Route exact path = "/post" component = {PageHeaderPost} />
                    <Route exact path = "/post" component = {PostContent} />

                </main>
            </Router>
         );
    }
}
 
export default Routes;