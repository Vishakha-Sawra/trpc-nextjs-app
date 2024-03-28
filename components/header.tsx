import Link from 'next/link';
import AuthMenu from './auth-menu';
import { getAuthUser } from '@/utils/get-auth-user';

const Header = async () => {
    const user = await getAuthUser({ shouldRedirect: false });

    return (
        <nav className="sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-0 border-b border-gray-200">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div>
                        <Link href='/' className='bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent text-2xl font-bold'>
                            All Star.
                        </Link>
                    </div>
                    <ul className='flex items-center gap-4'>
                        <li>
                            <Link href='/' className='text-white hover:text-pink-500 font-semibold'>
                                Home
                            </Link>
                        </li>
                        {!user && (
                            <>
                                <li>
                                    <Link href='/register' className='text-white hover:text-pink-500 font-semibold'>
                                        Register
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/login' className='text-white hover:text-pink-500 font-semibold'>
                                        Login
                                    </Link>
                                </li>
                            </>
                        )}
                        {user && <AuthMenu />}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
