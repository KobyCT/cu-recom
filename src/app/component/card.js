import Image from "next/image";

export default function Product({ product_name="Unknown", imageSrc = "/ph.jpg", alt = "product", category = "", seller, price }) {
  return (
    
      <button>
        <div className="flex border rounded-lg p-4 shadow-md">
          <div className="flex-shrink-0">
            <Image src={imageSrc} alt={alt} width={200} height={250} className="w-full h-auto object-cover rounded-md" />
          </div>
          <div className="ml-4 flex flex-col justify-center">
            <h2 className="text-lg font-semibold">{product_name}</h2>
            <p className="text-pink-600 font-bold">{price}</p>
            <p className="text-pink-600 font-bold">{seller || "Unknown Seller"}</p>
          </div>
        </div>
      </button>
    
  );
}