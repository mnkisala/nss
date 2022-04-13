import "../styles/style.scss";

import Topbar from "../components/Topbar";
import Footer from "../components/Footer"

function MyApp({ Component, pageProps }) {
    return (
        <>
            <div className="page-container">
                <Topbar />
                <main className="page">
                    <Component {...pageProps} />
                </main>
            </div>
            <Footer />
        </>
    );
}

export default MyApp;
