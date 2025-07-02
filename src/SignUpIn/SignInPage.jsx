import React from "react";

export default function SignInPage() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <h2 className="text-3xl font-semibold text-[#38bdf8] mb-8">Daxil Ol</h2>
      <form className="w-full max-w-md space-y-4">
        <input type="email" placeholder="Email" className="w-full p-3 rounded bg-white/10 text-white border border-gray-600" />
        <input type="password" placeholder="Şifrə" className="w-full p-3 rounded bg-white/10 text-white border border-gray-600" />
        <button className="bg-[#38bdf8] hover:bg-[#0ea5e9] px-6 py-3 rounded w-full">Daxil ol</button>
      </form>
    </div>
  );
}