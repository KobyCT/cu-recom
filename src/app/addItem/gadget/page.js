"use client";
import HeaderSearchLess from "@/app/component/headerns";
import { useState } from "react";

export default function SellProductClothing() {
  const [productData, setProductData] = useState({
    productName: "",
    price: "",
    originalPrice: "",
    description: "",
    size: "",
    weight: "",
    brandAndModel: "",
    MaterialCareInstructions: "",
    selectedCondition: "ใหม่มือสอง/เคยใช้ครั้งเดียว", // Default selected condition
    shippingMethod: "",
    purchaseId: "",
    tag: "",
  });

  const facultyData = [
    { name: "Chula Alumni or not from Chula", id: "99" },
    { name: "The Sirindhorn Thai Language Institute", id: "01" },
    { name: "General Education Center", id: "02" },
    { name: "Graduate School", id: "20" },
    { name: "Faculty of Engineering", id: "21" },
    { name: "Faculty of Arts", id: "22" },
    { name: "Faculty of Science", id: "23" },
    { name: "Faculty of Political Science", id: "24" },
    { name: "Faculty of Architecture", id: "25" },
    { name: "Faculty of Commerce and Accountancy", id: "26" },
    { name: "Faculty of Education", id: "27" },
    { name: "Faculty of Communication Arts", id: "28" },
    { name: "Faculty of Economics", id: "29" },
    { name: "Faculty of Medicine", id: "30" },
    { name: "Faculty of Veterinary Science", id: "31" },
    { name: "Faculty of Dentistry", id: "32" },
    { name: "Faculty of Pharmaceutical Sciences", id: "33" },
    { name: "Faculty of Law", id: "34" },
    { name: "Faculty of Fine and Applied Arts", id: "35" },
    { name: "Faculty of Nursing", id: "36" },
    { name: "Faculty of Allied Health Sciences", id: "37" },
    { name: "Faculty of Psychology", id: "38" },
    { name: "Faculty of Sports Science", id: "39" },
    { name: "School of Agricultural Resources", id: "40" },
    { name: "College of Population Studies", id: "51" },
    { name: "College of Public Health Sciences", id: "53" },
    { name: "Language Institute", id: "55" },
    { name: "School of Integrated Innovation", id: "56" },
    { name: "Sasin Graduate Institute of Business Administration", id: "58" },
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
    ส่วนที่ขาดหาย: "ระบุส่วนประกอบที่อาจสูญหาย",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const selectCondition = (condition) => {
    setProductData((prev) => ({
      ...prev,
      selectedCondition:
        condition === prev.selectedCondition ? null : condition,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product data submitted:", productData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      {/* Header */}
      <HeaderSearchLess Title="ขายสินค้าอุปกรณ์ขนาดเล็ก" prevPage="/addItem" />

      {/*Upload Section */}
      <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-lg mb-1 text-center mt-20">
        <div className="flex justify-center items-center bg-gray-200 rounded w-full md:w-full lg:w-full h-80 mb-4"></div>
      </div>

      {/* Start new */}

      <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-lg mb-1 mt-4">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Product Name Section */}
          <section>
            <h2 className="text-lg font-medium mb-3">ชื่อสินค้า</h2>
            <input
              type="text"
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
                <label className="block text-sm font-medium mb-1">ราคา</label>
                <input
                  type="number"
                  name="price"
                  value={productData.price}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  ราคาเดิม
                </label>
                <input
                  type="number"
                  name="originalPrice"
                  value={productData.originalPrice}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="mt-3">
              <label className="block text-sm font-medium mb-1">คำอธิบาย</label>
              <textarea
                name="description"
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  ขนาดกว้างxยาวxสูง
                </label>
                <input
                  type="text"
                  name="size"
                  value={productData.size}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  น้ำหนัก
                </label>
                <input
                  type="text"
                  name="weight"
                  value={productData.weight}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="mt-3">
              <label className="block text-sm font-medium mb-1">
                ยี่ห้อและรุ่น
              </label>
              <input
                type="text"
                name="brandAndModel"
                value={productData.brandAndModel}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mt-3">
              <label className="block text-sm font-medium mb-1">
                วิธีที่ใช้และข้อมูลเกี่ยวกับการดูแลรักษา
              </label>
              <textarea
                name="MaterialcareInstructions"
                value={productData.MaterialCareInstructions}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </section>

          {/* Product Condition Section */}
          <section>
            <h2 className="text-lg font-medium border-b pb-2 mb-4">
              สภาพสินค้า
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
              การจัดส่งสินค้า
            </h2>

            <div className="flex items-center mb-2">
              <span className="block text-sm font-medium">วิธีการจัดส่ง</span>
              <span className="ml-2 text-xs text-gray-500">
                (เช่น Kerry, Flash, ไปรษณีย์ ให้ระบุรายละเอียด)
              </span>
            </div>

            <input
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
