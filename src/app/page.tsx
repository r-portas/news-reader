export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-white">
        Welcome to the News Reader
      </h1>
      <p className="mt-4 text-lg text-gray-400">
        Stay updated with the latest news from around the world.
      </p>
      <button className="px-4 py-2 mt-8 text-lg font-semibold text-white bg-blue-500 rounded hover:bg-blue-600">
        Get Started
      </button>
    </div>
  );
}
