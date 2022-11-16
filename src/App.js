import './App.css';
import Navbar from './Components/Navbar.js';
import AuthorCard from './Components/AuthorCard.js';
import EducationCard from './Components/EducationCard.js';
import HobbiesCard from './Components/HobbiesCard.js';
import WorkCard from './Components/WorkCard.js';
function App (){
  return(
    <>
    <Navbar/>

  <div class="py-6">
        <main>
          <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <AuthorCard/>
            <EducationCard/>
            <WorkCard/>
            <HobbiesCard/>

          </div>
      
       </main>
  </div>
  </>
  )
}

export default App;