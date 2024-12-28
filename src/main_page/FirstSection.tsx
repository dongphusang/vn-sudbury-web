import firstPicture from '../assets/firstPic.jpg'
import secondPicture from '../assets/secondPic.jpg'
import thirdPicture from '../assets/thirdPic.jpg'
import fourthPicture from '../assets/fourthPic.jpg'
import '../main_page/FirstSection.css'

export default function FirstSection() {
    return (
    <div className='base'>
      <div className='title'>
        <h1>
          Welcome to Vietnamese Association Sudbury
        </h1>
        <br/>
        <p> Sharing our Vietnamese culture and heritage through our food, arts, and cultural activities </p>
        <p> Strengthen our connections with one another through friendships and shared common values </p>
        <p> Build resilience and leadership through volunteerism and civic engagement </p>
      </div>
      <div className='title pictures'>
        <img src={firstPicture} alt='first picture'/>
        <img src={secondPicture} alt='second picture'/>
        <img src={thirdPicture} alt='third picture'/>
        <img src={fourthPicture} alt='fourth picture'/>
      </div>
    </div>
    );
}

