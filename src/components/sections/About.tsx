import '/src/styles/sections/About.css'
import '/src/styles/global.css'
import { name } from '../../data/name'
import { introduces } from '../../data/introduces'
import { email } from '../../data/email'


const About = () => {
  return (
    <>
      <section className='section'>
        <h1 className='myName'>
          <span className='white-text'>{name.firstName}</span>
          &nbsp;
          <span className='gradient-text'>{name.lastName}</span>
        </h1>

        <ul className='introduces white-text'>
          {introduces.map((introduce, index) => (
            <li key={index}>{introduce}</li>
          ))}
        </ul>

        <p className='contact'>
          {email}
        </p>

        <div className='icons'>

        </div>

        <button className='readMore-Btn'>
          더보기
        </button>
      </section>
    </>
  );
}

export default About;