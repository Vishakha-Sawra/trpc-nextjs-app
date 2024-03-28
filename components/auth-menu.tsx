'use client';

import queryClient from '@/utils/query-client';
import { trpc } from '@/utils/trpc';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function AuthMenu() {
    const router = useRouter();

    const { mutate: logoutFn } = trpc.logoutUser.useMutation({
        onError(error) {
            toast.error(error.message);
            console.log('Error message:', error.message);
        },
        onSuccess() {
            queryClient.clear();
            toast.success('logout successful');
            router.push('/login');
        },
    });

    return (
        <>
            <li>
                <Link href='/ProPage' className='text-white font-semibold hover:text-pink-500'>
                    Pro Page
                </Link>
            </li>
            <li className='cursor-pointer text-white font-semibold hover:text-pink-500' onClick={() => logoutFn()}>
                Logout
            </li>
        </>
    );
}
