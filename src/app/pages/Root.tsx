import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Outlet } from 'react-router';
import { useState } from 'react';
import { CartSheet } from '../components/CartSheet';
import { toast, Toaster } from 'sonner';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export function Root() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const productImage = "https://images.unsplash.com/photo-1594766117697-8478c612c643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGZpbHRlciUyMHN0cmF3JTIwcHJvZHVjdHxlbnwxfHx8fDE3NzMzNjU4NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  const handleAddToCart = (product: { id: string; name: string; price: number; image: string }) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex > -1) {
      const newItems = [...cartItems];
      newItems[existingItemIndex].quantity += 1;
      setCartItems(newItems);
    } else {
      const newItem: CartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image,
      };
      setCartItems([...cartItems, newItem]);
    }

    toast.success(`Added to cart`);
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
      <Header cartCount={totalItems} onCartClick={() => setIsCartOpen(true)} />
      
      <Outlet context={{ onAddToCart: handleAddToCart }} />
      
      <Footer />

      <CartSheet
        open={isCartOpen}
        onOpenChange={setIsCartOpen}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      <Toaster position="bottom-right" />
    </div>
  );
}