import Header from '../components/Header';
import Footer from '../components/Footer';
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function DefaultLayout({ children }) {
    return (
        <div>
            <SpeedInsights />
            <Header />
            {children}
            <Footer />
        </div>
    );
}