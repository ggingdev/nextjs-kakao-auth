import AuthButton from './components/AuthButton';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
        <h1 className="text-4xl font-bold mb-4">Next.js Kakao OAuth</h1>
        <AuthButton />
      </div>
    </div>
  );
}
