
// API Configuration
export const API_CONFIG = {
  BASE_URL:  "https://deploybe-kbzd.onrender.com/api",
  BACKEND_URL: "https://deploybe-kbzd.onrender.com",
  
  // Endpoints
  ENDPOINTS: {
    PRODUCTS: "/products",
    CATEGORIES: "/categories",
    CUSTOMERS: "/customers",
    ORDERS: "/orders",
    ANALYTICS: "/analytics",
  },
  
  // Image helpers
  getImageUrl: (imagePath) => {
    if (!imagePath) return "/assets/image/no-image.jpg";
    if (imagePath.startsWith("http")) return imagePath;
    return `${API_CONFIG.BACKEND_URL}${imagePath}`;
  },
  
  // Full API URL helper
  getApiUrl: (endpoint) => {
    return `${API_CONFIG.BASE_URL}${endpoint}`;
  }
};

export default API_CONFIG;
