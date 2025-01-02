import React, { useState } from 'react';
import ProductCard from '../ProductCard';
import ProductModal from '../ProductModal';
import turmericpowder from '../../assets/turmeric powder.jpg';
import corionderpowder from '../../assets/corionder powder.jpg';
import redchillipowder from '../../assets/red chilli masala.jpg';
import meatmasala from '../../assets/meat masala.jpg';
import hingchura from '../../assets/hing chura.jpg';

const products = [
  {
    name: "Turmeric Powder",
    description: "Premium grade pure turmeric powder (हल्दी)",
    image: turmericpowder,
    price: "₹180",
    details: {
      origin: "Selected Indian Farms",
      weight: "500g",
      usage: [
        "Essential for Indian curries",
        "Perfect for golden milk (हल्दी दूध)",
        "Used in traditional medicine"
      ],
      benefits: [
        "Natural anti-inflammatory",
        "Rich in curcumin",
        "Immunity booster"
      ]
    }
  },
  {
    name: "Coriander Powder",
    description: "Freshly ground coriander powder (धनिया पाउडर)",
    image: corionderpowder,
    price: "₹160",
    details: {
      origin: "Premium Indian Coriander Seeds",
      weight: "500g",
      usage: [
        "Base spice for curries",
        "Essential in garam masala",
        "Perfect for marinades"
      ],
      benefits: [
        "Aids digestion",
        "Rich in antioxidants",
        "Natural flavor enhancer"
      ]
    }
  },
  {
    name: "Red Chilli Powder",
    description: "Pure ground red chilli powder (लाल मिर्च)",
    image: redchillipowder,
    price: "₹200",
    details: {
      origin: "Selected Indian Red Chillies",
      weight: "500g",
      usage: [
        "Adds heat to dishes",
        "Perfect for Indian curries",
        "Essential in pickles"
      ],
      benefits: [
        "Rich in capsaicin",
        "Natural metabolism booster",
        "High in vitamins"
      ]
    }
  },
  {
    name: "Meat Masala",
    description: "Special blend for meat dishes (मीट मसाला)",
    image: meatmasala,
    price: "₹220",
    details: {
      origin: "Traditional Indian Recipe",
      weight: "500g",
      usage: [
        "Perfect for all meat dishes",
        "Ideal for marinades",
        "Great for biryanis"
      ],
      benefits: [
        "Perfect blend of spices",
        "Enhanced meat flavor",
        "Authentic taste"
      ]
    }
  },
  {
    name: "Hing Chura",
    description: "Premium quality asafoetida powder (हींग चूरा)",
    image: hingchura,
    price: "₹150",
    details: {
      origin: "Processed in India",
      weight: "500g",
      usage: [
        "Essential in dal recipes",
        "Perfect for vegetarian dishes",
        "Used in pickles and chutneys"
      ],
      benefits: [
        "Aids digestion",
        "Natural flavor enhancer",
        "Traditional digestive aid"
      ]
    }
  }
];

export default function ProductGrid() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            {...product}
            onClick={() => setSelectedProduct(product)}
          />
        ))}
      </div>
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}