import React from 'react';

const Login: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <input className="w-full px-3 py-2 mb-3 border rounded-lg bg-stone-200" type="text" placeholder="First Name" />
      <input className="w-full px-3 py-2 mb-3 border rounded-lg bg-stone-200" type="text" placeholder="Last Name" />
      <input className="w-full px-3 py-2 mb-3 border rounded-lg bg-stone-200" type="email" placeholder="hello@example.com" />
      <button className="w-full bg-companycolor text-white py-2 px-4 rounded-lg">
        Sign Up
      </button>
      <p className="text-center mt-4 text-sm">
        Already have an account? <a href="#" className="text-companycolor hover:underline">Sign In</a>
      </p>
    </div>
  );
};

export default Login;