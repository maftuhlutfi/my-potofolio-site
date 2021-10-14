import Contact from '../components/Home/Contact'
import Hero from '../components/Home/Hero'
import MyProjects from '../components/Home/MyProjects'
import MyServices from '../components/Home/MyServices'
import Tech from '../components/Home/Tech'
import Testimonials from '../components/Home/Testimonials'
import CustomHead from '../components/shared/CustomHead'
import MainLayout from '../layout/MainLayout'

export default function Home() {
  return (
    <>
      <CustomHead
        title='Home - Maftuh'
        description='I am a Fullstack Javascript Web Developer specialized in MERN Stack that build quality websites for your needs. I also do some graphic design.'
        url='http://maftuhlutfi.vercel.app'
      />
      <MainLayout>
        <div className='py-20 flex flex-col gap-40'>
          <Hero />
          <Tech />
          <MyProjects />
          <MyServices />
          <Testimonials />
          <Contact />
        </div>
      </MainLayout>
    </>
  )
}
