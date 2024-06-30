import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
const Layout = ({children,description,keywords,author}) => {

    return (
        <div>
            <Helmet>
                <meta charSet='utf-8'/>
                <meta name='description' content={description}/>
                <meta name='keywords' content={keywords}/>
                <meta name='author' content={author}/>
            </Helmet>
            <header id='header'>
                <Header/>
            </header>
            <main style={{minHeight:'70vh'}}>
                <Toaster/>
                {children}
            </main>
            <footer id='footer'>
                <Footer/>
            </footer>
        </div>
    );
};

Layout.defaultProps = {
    title:"e-home Shop Now",
    description: "java fullstack project",
    keywords:"java,springboot,react",
    author:"henotic"
}
export default Layout;