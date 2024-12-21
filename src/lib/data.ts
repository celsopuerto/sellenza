// Product data in TypeScript format
interface Product {
    id: number;
    name: string;
    category: "shirts" | "shoes";
    price: number;
    description: string;
    sizes: string[];
    colors: string[];
    imageUrl: string;
} 
  
const products: Product[] = [
    {
      id: 1,
      name: "Classic Cotton Shirt",
      category: "shirts",
      price: 25.99,
      description: "A comfortable cotton shirt, perfect for everyday wear.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["White", "Blue", "Black"],
      imageUrl: "https://example.com/images/classic-cotton-shirt.jpg",
    },
    {
      id: 2,
      name: "Formal Dress Shirt",
      category: "shirts",
      price: 45.99,
      description: "Elegant dress shirt suitable for formal occasions.",
      sizes: ["M", "L", "XL"],
      colors: ["White", "Light Blue"],
      imageUrl: "https://example.com/images/formal-dress-shirt.jpg",
    },
    {
      id: 3,
      name: "Running Sneakers",
      category: "shoes",
      price: 70.0,
      description: "Lightweight sneakers designed for optimal running performance.",
      sizes: ["7", "8", "9", "10", "11"],
      colors: ["Red", "Black", "Gray"],
      imageUrl: "https://example.com/images/running-sneakers.jpg",
    },
    {
      id: 4,
      name: "Leather Dress Shoes",
      category: "shoes",
      price: 120.0,
      description: "Premium leather shoes for business and formal occasions.",
      sizes: ["8", "9", "10", "11"],
      colors: ["Black", "Brown"],
      imageUrl: "https://example.com/images/leather-dress-shoes.jpg",
    },
    {
      id: 5,
      name: "Graphic Tee",
      category: "shirts",
      price: 19.99,
      description: "Stylish graphic t-shirt with vibrant prints.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "White", "Gray"],
      imageUrl: "https://example.com/images/graphic-tee.jpg",
    },
    {
      id: 6,
      name: "High-Top Sneakers",
      category: "shoes",
      price: 85.0,
      description: "Trendy high-top sneakers for casual outings.",
      sizes: ["7", "8", "9", "10", "11", "12"],
      colors: ["White", "Navy", "Black"],
      imageUrl: "https://example.com/images/high-top-sneakers.jpg",
    },
];

export default products;
