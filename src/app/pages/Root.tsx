import { useState } from 'react';
import { Outlet } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CartSheet } from '../components/CartSheet';
import { toast, Toaster } from 'sonner';
import productImage from 'figma:asset/952cb914be93123fc851144cf75b29c58cb3f988.png';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  color: string;
  image: string;
}

export function Root() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (quantity: number, color: string) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.color === color
    );

    if (existingItemIndex > -1) {
      const newItems = [...cartItems];
      newItems[existingItemIndex].quantity += quantity;
      setCartItems(newItems);
    } else {
      const newItem: CartItem = {
        id: `${Date.now()}-${color}`,
        name: 'Portable Water Filter Straw',
        price: 15.67,
        quantity,
        color,
        image: productImage,
      };
      setCartItems([...cartItems, newItem]);
    }

    toast.success(`Added ${quantity} item${quantity > 1 ? 's' : ''} to cart`);
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      handleRemoveItem(id);
      return;
    }
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    toast.info('Item removed from cart');
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header cartCount={totalItems} onCartClick={() => setCartOpen(true)} />
      
      <Outlet context={{ onAddToCart: handleAddToCart }} />
      
      <Footer />

      <CartSheet
        open={cartOpen}
        onOpenChange={setCartOpen}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      <Toaster position="bottom-right" />
    </div>
  );
}