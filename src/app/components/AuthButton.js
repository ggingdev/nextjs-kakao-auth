'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function AuthButton() {
  const { data: session, status } = useSession();

//   if (status === 'loading') {
//     return <div>Loading...</div>;
//   }

  if (!session) {
    return (
      <button
        onClick={() => signIn('kakao')}
        className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
      >
        카카오로 로그인하기
      </button>
    );
  }

  return (
    <div>
      <p className="text-xl mb-4">안녕하세요, {session.user.name} 님!</p>
      <button
        onClick={() => signOut()}
        className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        로그아웃
      </button>
    </div>
  );
}
