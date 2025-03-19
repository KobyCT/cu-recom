"use client";
import HeaderSearchLess from "@/app/component/headerns";
import { useState } from "react";

export default function SellProductClothing() {
  const formData = new FormData();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [productData, setProductData] = useState({
    verifyImages: [],  // Array for verify images
    productImages: [],  // Changed to array for product images
    name: "",
    price: "",
    oldprice: "",
    description: "",
    detailOneDescription: "",
    detailTwoDescription: "",
    detailThreeDescription: "",
    detailFourDescription: "",
    condition: "",
    shippingType: "",
    shippingCost: "",
    conditionDescription: "",
    tag: "",
  });

  // Add error state for file validation
  const [fileError, setFileError] = useState({
    verify: "",
    sell: ""
  });
  
  const facultyData = [
    { name: "สถาบันภาษาไทยสิรินธร", id: "01" },
    { name: "ศูนย์การศึกษาทั่วไป", id: "02" },
    { name: "บัณฑิตวิทยาลัย", id: "20" },
    { name: "คณะวิศวกรรมศาสตร์", id: "21" },
    { name: "คณะอักษรศาสตร์", id: "22" },
    { name: "คณะวิทยาศาสตร์", id: "23" },
    { name: "คณะรัฐศาสตร์", id: "24" },
    { name: "คณะสถาปัตยกรรมศาสตร์", id: "25" },
    { name: "คณะพาณิชยศาสตร์และการบัญชี", id: "26" },
    { name: "คณะศึกษาศาสตร์", id: "27" },
    { name: "คณะนิเทศศาสตร์", id: "28" },
    { name: "คณะเศรษฐศาสตร์", id: "29" },
    { name: "คณะแพทยศาสตร์", id: "30" },
    { name: "คณะสัตวแพทยศาสตร์", id: "31" },
    { name: "คณะทันตแพทยศาสตร์", id: "32" },
    { name: "คณะเภสัชศาสตร์", id: "33" },
    { name: "คณะนิติศาสตร์", id: "34" },
    { name: "คณะศิลปกรรมศาสตร์", id: "35" },
    { name: "คณะพยาบาลศาสตร์", id: "36" },
    { name: "คณะสหเวชศาสตร์", id: "37" },
    { name: "คณะจิตวิทยา", id: "38" },
    { name: "คณะวิทยาศาสตร์การกีฬา", id: "39" },
    { name: "โรงเรียนทรัพยากรเกษตร", id: "40" },
    { name: "วิทยาลัยประชากรศาสตร์", id: "51" },
    { name: "วิทยาลัยวิทยาศาสตร์สาธารณสุข", id: "53" },
    { name: "สถาบันภาษา", id: "55" },
    { name: "สถาบันนวัตกรรมบูรณาการแห่งจุฬาลงกรณ์มหาวิทยาลัย", id: "56" },
    {
      name: "สถาบันบัณฑิตบริหารธุรกิจศศินทร์แห่งจุฬาลงกรณ์มหาวิทยาลัย",
      id: "58",
    },
  ];

  // List of condition options
  const conditions = [
    "ใหม่มือสอง/เคยใช้ครั้งเดียว",
    "ดี",
    "มีตำหนิ/รอยตามการใช้งาน",
    "ส่วนที่ขาดหาย",
  ];

  const descriptions = {
    "มีตำหนิ/รอยตามการใช้งาน": "มีรอยขาดหรือด่างจากการใช้งาน",
    "ส่วนที่ขาดหาย": "ระบุส่วนประกอบที่อาจสูญหาย",
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Updated function to handle verify images with limit
  const handleAddVerify = (e) => {
    const files = Array.from(e.target.files);
    
    // Clear previous error message
    setFileError(prev => ({ ...prev, verify: "" }));
    
    // Check if more than 3 files are selected
    if (files.length > 3) {
      setFileError(prev => ({ ...prev, verify: "สามารถอัพโหลดได้สูงสุด 3 รูปเท่านั้น" }));
      // Reset the file input
      e.target.value = "";
      return;
    }
    
    setProductData((prev) => ({
      ...prev,
      verifyImages: files,
    }));
  };

  // Updated function to handle product images with limit
  const handleAddSell = (e) => {
    const files = Array.from(e.target.files);
    
    // Clear previous error message
    setFileError(prev => ({ ...prev, sell: "" }));
    
    // Check if more than 3 files are selected
    if (files.length > 3) {
      setFileError(prev => ({ ...prev, sell: "สามารถอัพโหลดได้สูงสุด 3 รูปเท่านั้น" }));
      // Reset the file input
      e.target.value = "";
      return;
    }
    
    setProductData((prev) => ({
      ...prev,
      productImages: files,
    }));
  };

  const selectCondition = (condition) => {
    setProductData((prev) => ({
      ...prev,
      condition: condition === prev.condition ? null : condition,
    }));
  };
  
  function toBuffer(item) {
    const buffer = Buffer.from(item.arrayBuffer());
    return buffer;
  }

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true)
    const formData = new FormData();
    
    // Check if verify images are within the limit before submitting
    if (productData.verifyImages.length > 3) {
      setFileError(prev => ({ ...prev, verify: "สามารถอัพโหลดได้สูงสุด 3 รูปเท่านั้น" }));
      return;
    }
    
    // Check if product images are within the limit before submitting
    if (productData.productImages.length > 3) {
      setFileError(prev => ({ ...prev, sell: "สามารถอัพโหลดได้สูงสุด 3 รูปเท่านั้น" }));
      return;
    }
    
    // Check if files are selected
    if (productData.verifyImages.length === 0) {
      setFileError(prev => ({ ...prev, verify: "กรุณาอัพโหลดรูปสำหรับยืนยัน" }));
      return;
    }
    
    if (productData.productImages.length === 0) {
      setFileError(prev => ({ ...prev, sell: "กรุณาอัพโหลดรูปสำหรับโฆษณาขาย" }));
      return;
    }
    
    const { tag, ...toadd } = productData;
    
    // Append all other form data
    Object.entries(toadd).forEach(([key, value]) => {
      // Special handling for images to ensure we pass the array of files
      if (key === 'verifyImages' || key === 'productImages') {
        for (let i = 0; i < value.length; i++) {
          formData.append(key, value[i]);
        }
      } else {
        formData.append(key, value);
      }
    });
    
    let success;
    const token = getCookie("token");
    formData.set("quantity", 1);
    
    try {
      const response = await axios.post(
        "https://backend-cu-recom.up.railway.app/api/products",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      const productId = response.data.id;
      console.log("Productid: " + productId);
      
      const addType = await axios.post(
        "https://backend-cu-recom.up.railway.app/api/products/tag/",
        {
          "productid": productId,
          "tag": "big"
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      const addFacTag = await axios.post(
        "https://backend-cu-recom.up.railway.app/api/products/tag/",
        {
          "productid": productId,
          "tag": productData.tag
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      console.log(addType, addFacTag);
      console.log("FormData submitted:", Object.fromEntries(formData));
      success = true;
    } catch (err) {
      console.log(err);
      console.log("FormData submitted:", Object.fromEntries(formData));
      //redirect("/addItem/fail")
    }
    
    if (success) {
      redirect("/addItem/success");
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      {/* Header */}
      <HeaderSearchLess
        Title="ขายหนังสือเเละเอกสารการเรียน"
        prevPage="/addItem"
      />

      {/*Upload Section */}
      <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-lg mb-1 text-center mt-20">
        <div className="flex justify-center items-center bg-gray-200 rounded w-full md:w-full lg:w-full h-80 mb-4"></div>
      </div>

      {/* Start new */}

      <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-lg mb-1 mt-4">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Product Name Section */}
          <section>
            <h2 className="text-lg font-medium mb-3">
              ชื่อสินค้า<span className="text-red-500">*</span>
            </h2>
            <input
              type="text"
              required
              name="productName"
              value={productData.productName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="mt-3 flex">
              <div className="w-full">
                <label className="block text-sm font-medium mb-1">
                  เหมาะสำหรับคณะ
                </label>
                <select
                  name="tag"
                  value={productData.tag}
                  className="w-full border-solid border outline-black rounded-md focus:outline-black p-2"
                  aria-label="Faculty selection"
                  onChange={handleChange}
                >
                  <option value="">None</option>
                  {facultyData.map((faculty, i) => (
                    <option key={i} value={faculty.id}>
                      {faculty.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-3">
              <div>
                <label className="block text-sm font-medium mb-1">
                  ราคา<span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="number"
                  name="price"
                  value={productData.price}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  ราคาเดิม<span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  required
                  name="originalPrice"
                  value={productData.originalPrice}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="mt-3">
              <label className="block text-sm font-medium mb-1">
                คำอธิบาย<span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                required
                value={productData.description}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </section>

          {/* Product Details Section */}
          <section>
            <h2 className="text-lg font-medium border-b pb-2 mb-4">
              รายละเอียดสินค้า
            </h2>

            <div>
              <label className="block text-sm font-medium mb-1">
                ชื่อหนังสือ<span className="text-red-500">*</span>
              </label>
              <input
                required
                type="text"
                name="bookName"
                value={productData.bookName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                ประเภทและเนื้อหาของหนังสือ
              </label>
              <input
                type="text"
                name="bookDetails"
                value={productData.bookDetails}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mt-3">
                <label className="block text-sm font-medium mb-1">
                  ผู้แต่ง
                </label>
                <input
                  type="text"
                  name="author"
                  value={productData.author}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mt-3">
                <label className="block text-sm font-medium mb-1">
                  จำนวนหน้า
                </label>
                <input
                  type="number"
                  name="numPages"
                  value={productData.numPages}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </section>

          {/* Product Condition Section */}
          <section>
            <h2 className="text-lg font-medium border-b pb-2 mb-4">
              สภาพสินค้า <span className="text-red-500">*</span>
            </h2>

            <div className="space-y-2">
              {conditions.map((condition) => (
                <div
                  key={condition}
                  className="flex items-center p-2 rounded-lg hover:bg-gray-50"
                >
                  <input
                    type="checkbox"
                    id={condition}
                    checked={productData.selectedCondition === condition}
                    onChange={() => selectCondition(condition)}
                    className="h-5 w-5 text-pink-500 rounded focus:ring-pink-500"
                  />
                  <label htmlFor={condition} className="ml-2 text-gray-700">
                    {condition}
                    {descriptions[condition] && (
                      <div className="text-xs text-gray-500 mt-1">
                        {descriptions[condition]}
                      </div>
                    )}
                  </label>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium mb-1">
                รายละเอียดสภาพสินค้า (ถ้ามี ควรกรอกเพิ่มเติม)
              </label>
              <textarea
                name="conditionDetails"
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </section>

          {/* Shipping Section */}
          <section>
            <h2 className="text-lg font-medium border-b pb-2 mb-4">
              การจัดส่งสินค้า <span className="text-red-500">*</span>
            </h2>

            <div className="flex items-center mb-2">
              <span className="block text-sm font-medium">วิธีการจัดส่ง</span>
              <span className="ml-2 text-xs text-gray-500">
                (เช่น Kerry, Flash, ไปรษณีย์ ให้ระบุรายละเอียด)
              </span>
            </div>

            <input
              required
              type="text"
              name="shippingMethod"
              value={productData.shippingMethod}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="mt-4">
              <label className="block text-sm font-medium mb-1">
                ค่าจัดส่งในการจัดส่ง
              </label>
              <input
                type="number"
                name="shippingCost"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </section>

          {/* Submit Button */}
          <div className="pt-4 w-full">
            <button
              type="submit"
              className="px-6 py-3 bg-customPink text-white rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full"
            >
              บันทึกข้อมูลสินค้า
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
