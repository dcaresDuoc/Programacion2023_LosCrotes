
import Image from 'next/image'
import NotePhoto from '../public/note-code.jpg'
import TablePhoto from '../public/table-code.jpg'


const About = () => {
  return (
    <div className='section-about'>
      <div className='container-info'>
      
        <div className='left-info'>
          <div className='container-about'>
            <h1>About</h1>
            <span>Profesionales informaticos</span>
          </div>
          <Image className='note-img' src={NotePhoto} alt={NotePhoto} width={100} height={80}/>
          <Image className='tablet-img' src={TablePhoto} alt={TablePhoto} width={100} height={80}/>

        </div>

        <div className='right-info'>
          <h1>Programadores Profesionales</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facilis nemo magnam at necessitatibus nobis tempora sapiente.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nesciunt quod cum natus. Saepe ducimus aspernatur nesciunt deleniti rem. At illo temporibus accusantium quas. Iusto aliquam accusantium consequuntur culpa similique!</p>
          <button className='btn-text'>Conocer Más</button>
        </div>
      </div>
    </div>
  )
}

export default About