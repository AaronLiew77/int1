import Login from '@/components/ui/login';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center p-4">
      <div className="relative py-3 sm:max-w-5xl sm:mx-auto">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
            {/* Left Column */}
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold mb-5">So much more than Analytics</h1>
              <p className="text-xl text-gray-600 mb-8">
                We help organizations extract actionable insights from the data they generate. Yadda Yadda Yadda.
              </p>
              <button className="w-fit bg-companycolor text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-200">
                Get Started
              </button>
            </div>

            {/* Right Column */}
            <div className="md:w-1/2">
              <Login />
            </div>
        </div>
        <div className="text-center mt-6 text-sm text-gray-600">
          <a href="#" className="hover:underline">Privacy Policy</a> and <a href="#" className="hover:underline">Terms of Use</a>
        </div>
      </div>
    </div>
  );
}