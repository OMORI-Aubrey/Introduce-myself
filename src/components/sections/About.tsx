import '/src/styles/sections/About.css'
import '/src/styles/global.css'


const About = () => {
  return (
    <>
      <section className='section'>
        <h1 className='myName'>
          <span className='white-text'>Sim</span>
          &nbsp;
          <span className='gradient-text'>Jaeyun</span>
        </h1>

        <ul className='introduces white-text'>
          <li>나이는 21세</li>
          <li>현재 대학생</li>
          <li>초보 개발자</li>
        </ul>

        <p className='contact gray-text'>
          sim_518@naver.com
        </p>

        <div className='icons'>

        </div>

        <button className='readMoreBtn'>
          더보기
        </button>
      </section>
    </>
  );
}

export default About;