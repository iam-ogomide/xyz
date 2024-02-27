import couch from '../assets/couch.png';

const About = () => {
  return (
    <div className='md:px-14 p-4 max-w-s mx-auto' id='about'>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

            {/* about image */}
            <div className="md:w-1/2">
                <img src={couch} alt="" />
            </div>

            {/* about content  */}
            <div className="md:w-1/2">
                <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>We have been improving our product <span className='text-secondary'>for many years</span></h2>
                <p className="text-tartiary text-lg mb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sequi quas similique. Ab et harum repellendus consectetur commodi adipisci, </p>
                <button className='btnPrimary'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default About