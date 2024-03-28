'use client';

import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { LoginUserInput, loginUserSchema } from '@/lib/user-schema';
import FormInput from '@/components/form-input';
import { LoadingButton } from '@/components/loading-button';
import { trpc } from '@/utils/trpc';
import toast from 'react-hot-toast';

export default function LoginForm() {
    const [submitting, setSubmitting] = useState(false);
    const router = useRouter();

    const methods = useForm<LoginUserInput>({
        resolver: zodResolver(loginUserSchema),
    });

    const { reset, handleSubmit } = methods;

    const { mutate: loginFn } = trpc.loginUser.useMutation({
        onSettled() {
            setSubmitting(false);
        },
        onMutate() {
            setSubmitting(true);
        },
        onError(error) {
            toast.error(error.message);
            console.log('Error message:', error.message);
            reset({ password: '' });
        },
        onSuccess() {
            toast.success('login successfully');
            router.push('/');
        },
    });

    const onSubmitHandler: SubmitHandler<LoginUserInput> = (values) => {
        loginFn(values);
    };

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={handleSubmit(onSubmitHandler)}
                className='max-w-md w-full mx-auto overflow-hidden shadow-lg bg-gray-900 rounded-2xl p-8 space-y-5 text-black'
            >
                <FormInput label='Email' name='email' type='email' />
                <FormInput label='Password' name='password' type='password' />

                <div className='text-center text-gray-200'>
                    <Link href='#' className=''>
                        Forgot Password?
                    </Link>
                </div>
                <LoadingButton loading={submitting} textColor='text-white'>
                    Login
                </LoadingButton>
                <span className='block'>
                    Need an account?{' '}
                    <Link href='/register' className='bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent font-semibold'>
                        Sign Up Here
                    </Link>
                </span>
            </form>
        </FormProvider>
    );
}
