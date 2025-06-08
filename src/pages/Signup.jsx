import image from '../assets/ilovepdf.svg';
import facebook from '../assets/facebooook.png';
import google from '../assets/google.jpeg';
import sso from '../assets/sso.png';
import bookstore from '../assets/bookstore.jpeg';

const Signup = () => {
  const inputClass =
    "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";
  const socialBox =
    "flex items-center gap-2 border rounded-lg px-3 py-2 w-32 hover:shadow-md cursor-pointer transition justify-center sm:justify-start inline-flex";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-md flex flex-col md:flex-row overflow-hidden">

        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 md:p-10 bg-gray-50">
          <img src={image} alt="Logo" className="w-32 mb-6" />
          <h2 className="text-xl font-semibold mb-6">Create New Account</h2>

          {/* Social Logins */}
          <div className="flex flex-col md:flex-row gap-4 mb-6 justify-center">
            <div className={`${socialBox} bg-blue-900`}>
              <img src={facebook} alt="Facebook" className="h-6 object-contain" />
              <p className="hidden sm:inline-block text-sm text-white font-medium ml-2">Facebook</p>
            </div>
            <div className={`${socialBox} border-red-500`}>
              <img src={google} alt="Google" className="h-6 object-contain" />
              <p className="hidden sm:inline-block text-sm text-gray-700 font-medium ml-2">Google</p>
            </div>
            <div className={socialBox}>
              <img src={sso} alt="SSO" className="h-6 object-contain" />
              <p className="hidden sm:inline-block text-sm text-gray-700 font-medium ml-2">SSO</p>
            </div>
          </div>

          {/* Input Fields */}
          <div className="w-full max-w-md space-y-4 mb-6">
            <input type="email" placeholder="Email" className={inputClass} />
            <input type="password" placeholder="Password" className={inputClass} />
            <input type="text" placeholder="Name" className={inputClass} />
          </div>

          <button className="px-5 max-w-xs bg-red-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Sign up
          </button>

          {/* Bottom Message */}
          <div className="mt-6 flex gap-2 text-sm text-gray-600 text-center">
            <p>Already Member login?</p>
            <p className="text-red-500 underline cursor-pointer hover:underline">Login ?</p>
          </div>

          <p className="text-xs text-gray-500 text-center mt-4 px-4">
            By creating an account, you agree to&nbsp;
            <span className="text-red-600 cursor-pointer hover:underline">iLovePDF Terms of Service</span>
            &nbsp;and&nbsp;
            <span className="text-red-600 cursor-pointer hover:underline">Privacy Policy</span>
          </p>
        </div>

        {/* Right Section (hidden on mobile) */}
        <div className="hidden md:flex w-1/2 items-center justify-center text-gray-800 px-10">
          <div className="flex flex-col items-center text-center space-y-6 max-w-md">
            <img src={bookstore} alt="Bookstore Illustration" className="w-48 h-auto" />
            <div>
              <h1 className="text-2xl font-semibold mb-2">Log in to your workspace</h1>
              <p className="text-sm text-gray-600 mb-3">
                Enter your email and password to access your iLovePDF account. You are one step
                closer to boosting your document productivity.
              </p>
              <p className="text-blue-600 text-sm cursor-pointer hover:underline">See all tools</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Signup;

