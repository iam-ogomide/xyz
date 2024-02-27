import feel from '../assets/home.png'
import Banner from '../shared/Banner'

const Newsletter = () => {
  return (
    <div className='md:px-14 p-4 max-w-screen-2xl mx-auto my-12'>
        {/* passing props from the banner component that we used for our main header */}
        <Banner home={feel} heading={"Each student can share their discount code within friends"} subheading={"lo Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque facere repellendus excepturi"} btn1={"I have a code"}/>

    </div>
  )
}

export default Newsletter