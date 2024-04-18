import FrontLandingPage from '@/components/FrontLandingPage'
import AboutUs from './AboutUs'
import NavBar from '@/components/NavBar'



const LandingPage = () => {
    return (
        <div className='overflow-hidden'>
            <NavBar/>
            <FrontLandingPage />
            <AboutUs/>
        </div>
    )
}

export default LandingPage
