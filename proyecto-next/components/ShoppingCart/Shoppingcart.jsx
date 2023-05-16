import Image from 'next/image'
import Photo from '../../public/shoppingcart.png'


const shoppingcart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (product) => {
    const updatedCart = cartItems.filter((item) => item !== product);
    setCartItems(updatedCart);
  };

  return (
    <div>
      <h2>Carrito de compras</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => addToCart('Producto 1')}>Agregar al carrito</button>
      <button onClick={() => addToCart('Producto 2')}>Agregar al carrito</button>
      <button onClick={() => removeFromCart('Producto 1')}>Eliminar del carrito</button>
    </div>
  );
};

export default ShoppingCart;
