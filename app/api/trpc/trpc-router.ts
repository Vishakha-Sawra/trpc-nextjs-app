import authRouter from '@/server/auth-route';
import { getUserHandler } from '@/server/user-controller';
import { createContext } from '@/utils/trpc-context';
import { protectedProcedure, t } from '@/utils/trpc-server';

const statusCheckRouter = t.router({
    statuschecker: t.procedure.query(() => {
        return {
            status: 'success',
            message: 'Welcome to the trpc server!',
        };
    }),
});

const userRouter = t.router({
    getUser: protectedProcedure.query(({ ctx }) => getUserHandler({ ctx })),
});

export const appRouter = t.mergeRouters(
    statusCheckRouter,
    authRouter,
    userRouter
);

export const createCaller = t.createCallerFactory(appRouter);

export const createAsyncCaller = async () => {
    const context = await createContext();
    return createCaller(context);
};

export type AppRouter = typeof appRouter;
