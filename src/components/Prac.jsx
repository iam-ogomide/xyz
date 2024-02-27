import planet from '../assets/planet.png'

const Prac = () => {
  return (
    <div className='md:px-14 p-4 max-w-s mx-auto'>
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8">

            {/* prac content */}
            <div className="md:w-1/2">
                <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">You can practice at any <span className="text-secondary">time convinent for you</span></h2>
                <p className="text-tartiary text-lg mb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sequi quas similique. Ab et harum repellendus consectetur commodi adipisci, </p>
                <button className="btnPrimary">Get Started</button>
            </div>

            {/* prac image */}
            <div className='md:w-1/2'>
                <img src={planet} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Prac