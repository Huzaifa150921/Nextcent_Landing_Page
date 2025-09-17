
import './App.css'
import Header from './Components/Header/Header.jsx'
import Coursal from './Components/Coursal/Coursal.jsx'
import Client from './Components/Clients/Client.jsx'
import Community from './Components/Community/Community.jsx'
import PixelGrade1 from './Components/PixelGrade/PixelGrade.jsx'
import PixelGradeImage1 from './assets/pic/pic2.png'
import LocalBussiness from './Components/LocalBussiness/LocalBussiness.jsx'
import Customers from './Components/Customers/Customers.jsx'
import PixelGradeImage2 from "./assets/pic/pic3.png"
import Marketing from './Components/Marketing/Marketing.jsx'
import Demo from './Components/Demo/Demo.jsx'
import Footer from './Components/Footer/Footer.jsx'
function App() {
 

  return (
    <>

    <div className="AppContainer">
    <Header/>
    <Coursal/>
    <Client/>
    <Community/>
    <PixelGrade1 image={PixelGradeImage1} heading1="The unseen of spending three" heading2="years at Pixelgrade" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."/>
    <LocalBussiness/>
    <PixelGrade1 image={PixelGradeImage2} heading1="How to design your site footer like" heading2="we did" body="Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida."/>
    <Customers/>
    <Marketing/>
    <Demo/>
    <Footer/>
    </div>
    </>
  )
}

export default App
