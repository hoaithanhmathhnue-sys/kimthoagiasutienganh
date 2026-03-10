import React, { useState } from 'react';
import { Lock, User, LogIn, ShieldAlert } from 'lucide-react';

interface AppLoginScreenProps {
  onLoginSuccess: () => void;
}

const AppLoginScreen: React.FC<AppLoginScreenProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'Nguyễn Khắc Phi' && password === '12345') {
      onLoginSuccess();
    } else {
      setError('Tài khoản hoặc mật khẩu không chính xác!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-4">
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-md overflow-hidden border border-white/20">
        <div className="p-8 text-center space-y-3 bg-gradient-to-b from-indigo-50/50 to-transparent">
          <div className="w-20 h-20 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-2xl rotate-3 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-indigo-300/50 transform transition-transform hover:rotate-6 hover:scale-105">
            <Lock className="w-10 h-10 text-white -rotate-3" />
          </div>
          <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-purple-700">Đăng Nhập</h2>
          <p className="text-gray-500 font-medium">Hệ Thống Trợ Lý Ảo Học Đinh</p>
        </div>

        <form onSubmit={handleLogin} className="p-8 pt-2 space-y-6">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-medium flex items-center justify-center gap-2 animate-fade-in shadow-sm">
              <ShieldAlert className="w-5 h-5 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Tài khoản</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-11 p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-400 outline-none font-bold text-gray-700 transition-all placeholder:text-gray-300 placeholder:font-medium"
                placeholder="Nhập tài khoản"
                autoFocus
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Mật khẩu</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-11 p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-400 outline-none font-bold text-gray-700 transition-all placeholder:text-gray-300 placeholder:font-medium tracking-wider"
                placeholder="Nhập mật khẩu"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 mt-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg rounded-2xl shadow-lg shadow-indigo-200 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 relative overflow-hidden group/btn"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity"></div>
            <LogIn className="w-5 h-5 relative z-10" />
            <span className="relative z-10">ĐĂNG NHẬP</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppLoginScreen;
