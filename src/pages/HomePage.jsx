import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import LatestProducts from '../components/LatestProducts';
import Industries from '../components/Industries';
import Sustainability from '../components/Sustainability';
import Acheivements from '../components/Acheivements';

const HomePage = () => {
    return (
        <div>
            <Hero />
            <About />
            <Services />
            <LatestProducts />
            <Industries />
            <Acheivements/>
            <Sustainability />
            
        </div>
    );
};

export default HomePage;
