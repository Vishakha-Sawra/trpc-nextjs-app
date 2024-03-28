import Header from '@/components/header';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />
      <section className='bg-gray-950 min-h-screen pt-20 mt-auto'>
        <div className='mx-14'>
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to <span className='bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent'>All Star!</span></h1>
            <p className="text-lg mb-8 px-20"> We are a dynamic software agency dedicated to transforming ideas into cutting-edge digital solutions. With a passion for pushing technological boundaries, our team of skilled developers, designers, and strategists collaborates to craft bespoke software that propels businesses to new heights.</p>
            <a href="#" className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white py-2 px-4 rounded-full hover:bg-gradient-to-l transition duration-300">Create an account.</a>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-4">
            <div className='cursor-pointer'>
              <Image src="/fotis-fotopoulos-DuHKoV44prg-unsplash.jpg" alt="Software Image 1" width={300} height={300} className="w-full h-auto rounded-lg" />
              <h1 className='text-center text-lg'>Unlocking the Power of AI</h1>
            </div>
            <div className='cursor-pointer'>
              <Image src="/hack-capital-uv5_bsypFUM-unsplash.jpg" alt="Software Image 2" width={300} height={300} className="w-full h-auto rounded-lg" />
              <h1 className='text-center text-lg'>Building the Future of Blockchain</h1>
            </div>
            <div className='cursor-pointer'>
              <Image src="/john-schnobrich-FlPc9_VocJ4-unsplash.jpg" alt="Software Image 3" width={300} height={300} className="w-full h-auto rounded-lg" />
              <h1 className='text-center text-lg'>Creating the Next Big Thing</h1>
            </div>
            <div className='cursor-pointer'>
              <Image src="/zan-X_JsI_9Hl7o-unsplash.jpg" alt="Software Image 3" width={300} height={300} className="w-full h-auto rounded-lg" />
              <h1 className='text-center text-lg'>Building the Future of Blockchain</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
