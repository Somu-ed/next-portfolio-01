import Layout from '@/components/layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-1.png'
import AnimatedText from '@/components/AnimatedText'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-0'>
          <div className="flex items-center justify-between w-full">
            <div className='w-1/2'>
              <Image src={profilePic} alt='Soumyajeet Satpathy' className='w-full h-auto' />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText text="Turning Vision Into Reality With Code And Design." className='!text-6xl !text-left'/>
              <p>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
                Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
