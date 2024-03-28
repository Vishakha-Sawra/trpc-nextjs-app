import Header from '@/components/header';
import { getAuthUser } from '@/utils/get-auth-user';
import Image from 'next/image';
// blog component

export default async function ProPage() {
    const user = await getAuthUser();

    return (
        <>
            <Header />
            {/* Blog */}
            <section className='bg-gray-950  min-h-screen pt-20'>
                <div className='max-w-4xl mx-auto rounded-md h-auto flex justify-center items-center'>
                    <div>
                        <p className='text-5xl text-center font-bold mt-2 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent'>
                            Pro Page
                        </p>
                        <div className="my-16 grid grid-cols-2 gap-4">
                            <div className='cursor-pointer'>
                                <Image src="/fotis-fotopoulos-DuHKoV44prg-unsplash.jpg" alt="Software Image 1" width={300} height={300} className="w-full h-auto rounded-lg" />
                                <h1 className='text-center text-lg text-gray-200 shadow-white hover:shadow-lg font-semibold mt-2'>Navigating the Digital Landscape</h1>
                            </div>
                            <div className='cursor-pointer'>
                                <Image src="/hack-capital-uv5_bsypFUM-unsplash.jpg" alt="Software Image 2" width={300} height={300} className="w-full h-auto rounded-lg" />
                                <h1 className='text-center text-lg text-gray-200 shadow-white hover:shadow-lg font-semibold mt-2'>Building the Future of Blockchain</h1>
                            </div>
                            <div className='cursor-pointer'>
                                <Image src="/john-schnobrich-FlPc9_VocJ4-unsplash.jpg" alt="Software Image 3" width={300} height={300} className="w-full h-auto rounded-lg" />
                                <h1 className='text-center text-lg text-gray-200 shadow-white hover:shadow-lg font-semibold mt-2'>Behind the Code</h1>
                            </div>
                            <div className='cursor-pointer'>
                                <Image src="/zan-X_JsI_9Hl7o-unsplash.jpg" alt="Software Image 3" width={300} height={300} className="w-full h-auto rounded-lg" />
                                <h1 className='text-center text-lg text-gray-200 shadow-white hover:shadow-lg font-semibold mt-2'>Innovation Unleashed</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
