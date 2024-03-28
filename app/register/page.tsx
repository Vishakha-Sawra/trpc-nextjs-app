import Header from '@/components/header';
import RegisterForm from './register-form';

export default async function RegisterPage() {
    return (
        <>
            <Header />
            <section className='py-8 bg-gray-950 min-h-screen grid place-items-center'>
                <div className='w-full'>
                    <h1 className='text-5xl font-bold mb-4 xl:text-6xl text-center bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent'>
                        Welcome to All Star Register!
                    </h1>
                    <h2 className='mt-2 text-lg text-center mb-4 text-white'>
                        Sign Up To Get Started!
                    </h2>
                    <RegisterForm />
                </div>
            </section>
        </>
    );
}
