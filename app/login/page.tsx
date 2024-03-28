import Header from '@/components/header';
import LoginForm from './login-form';

export default async function LoginPage() {
    return (
        <>
            <Header />
            <section className='bg-gray-950 min-h-screen grid place-items-center'>
                <div className='w-full'>
                    <h1 className='text-4xl lg:text-6xl text-center font-[600] bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent mb-4'>
                        Welcome Back
                    </h1>
                    <h2 className='text-lg text-center mb-4 text-ct-dark-200'>
                        Login to have access
                    </h2>
                    <LoginForm />
                </div>
            </section>
        </>
    );
}
