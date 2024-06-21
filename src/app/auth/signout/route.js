import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const token = await getToken({ req });

  if (!token) {
    return NextResponse.json({ error: 'No token found' }, { status: 401 });
  }

  const kakaoLogoutUrl = `https://kapi.kakao.com/v1/user/logout`;

  const response = await fetch(kakaoLogoutUrl, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token.accessToken}`,
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
  });

  if (!response.ok) {
    return NextResponse.json({ error: 'Failed to logout from Kakao' }, { status: response.status });
  }

  return NextResponse.json({ message: 'Successfully logged out' });
}
