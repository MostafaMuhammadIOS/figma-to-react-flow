import { ShoppingCart, Search, Menu, User } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate, useLocation } from 'react-router';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

export function Header({ cartCount, onCartClick }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <button className="lg:hidden">
              <Menu className="size-6" />
            </button>
            <button onClick={() => navigate('/')} className="flex items-center gap-2 group">
              <div className="relative">
                {/* Water Droplet Icon */}
                <div className="size-10 bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <svg 
                    className="size-6 text-white" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
                  </svg>
                </div>
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent tracking-tight">
                filterwell<span className="font-light">kit</span>
              </h1>
            </button>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button 
              onClick={() => navigate('/')}
              className={`text-sm transition ${location.pathname === '/' ? 'text-black' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Home
            </button>
            <button 
              onClick={() => navigate('/product')}
              className={`text-sm transition ${location.pathname === '/product' ? 'text-black' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Shop
            </button>
            <a href="#" className="text-sm hover:text-gray-600 transition">Contact</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <User className="size-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
              onClick={onCartClick}
            >
              <ShoppingCart className="size-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs size-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}