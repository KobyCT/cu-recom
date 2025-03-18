"use client";
import HeaderSearchLess from "@/app/component/headerns";
import { useState } from "react";
import { Field, Label, Select } from "@headlessui/react";
import axios from "axios";
import { getCookie } from "cookies-next";

export default function SellProductClothing() {
  const formData = new FormData();
  const [productData, setProductData] = useState({
    verifyImages: "",
    productImages: "",
    name: "",
    price: "",
    oldprice: "",
    description: "",
    detailOneDescription: "",
    detailTwoDescription: "",
    detailThreeDescription: "",
    detailFourDescription: "",
    condition: "", // Default selected condition
    shippingType: "",
    shippingCost: "",
    conditionDescription: "",
    tag: "",
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
    ส่วนที่ขาดหาย: "ระบุส่วนประกอบที่อาจสูญหาย",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddVerify = (e) => {
    setProductData((prev) => ({
      ...prev,
      verifyImages: e.target.files[0],
    }));
  };

  const handleAddSell = (e) => {
    setProductData((prev) => ({
      ...prev,
      productImages: e.target.files[0],
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
    const formData = new FormData();
    let bufferArrayVerify = [];
    let bufferArraySell = [];

    // if (productData.verifyImages.length) {
    //   bufferArrayVerify = await Promise.all(
    //     Array.from(productData.verifyImages).map(async (file) => {
    //       return Buffer.from(await file.arrayBuffer());
    //     })
    //   );
    // }
    //
    // if (productData.productImages.length) {
    //   bufferArraySell = await Promise.all(
    //     Array.from(productData.productImages).map(async (file) => {
    //       return Buffer.from(await file.arrayBuffer());
    //     })
    //   );
    // }
    console.log(productData.productImages, productData.verifyImages);
    console.log(bufferArraySell, bufferArrayVerify);
    const { tag, ...toadd } = productData;
    console.log(toadd);
    Object.entries(toadd).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIwMDE3MDY3MDc0OTIwMDAwMDIzMiIsImlhdCI6MTc0MjMxODEwNywiZXhwIjoxNzQ0OTEwMTA3fQ.drJEowBvnuQUxKO1exnVXqKueRuBdrEjsrERQc4TKkY";

    //formData.set("verifyImages", bufferArrayVerify);
    //formData.set("productImages", bufferArraySell);
    formData.set("quantity", 1);
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

    console.log("FormData submitted:", Object.fromEntries(formData));
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      {/* Header */}
      <HeaderSearchLess Title="ขายเครื่องแต่งกาย" prevPage="/addItem" />
      <form onSubmit={handleSubmit} className="space-y-8">
        {/*Upload Section */}
        <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-lg mb-1 text-center mt-20 ">
          <div className="flex justify-center items-center bg-gray-200 rounded w-full md:w-full lg:w-full h-80 mb-4 grid grid-cols-2">
            <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-lg mb-1 text-center mt-20 ">
              <h1>Upload รูปสำหรับโฆษณาขาย</h1>
              <input
                type="file"
                accept=".jpg,.heic,.jpeg"
                multiple
                onChange={handleAddSell}
              />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-lg mb-1 text-center mt-20 ">
              <h1>Upload รูปสำหรับยืนยัน</h1>
              <input
                type="file"
                accept=".jpg,.heic,.jpeg"
                multiple
                onChange={handleAddVerify}
              />
            </div>
          </div>
        </div>

        {/* Start new */}

        <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-lg mb-1 mt-4">
          {/* Product Name Section */}
          <section>
            <h2 className="text-lg font-medium mb-3">
              ชื่อสินค้า<span className="text-red-500">*</span>
            </h2>
            <input
              required
              type="text"
              name="name"
              value={productData.name}
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
                  ราคาเดิม
                </label>
                <input
                  type="number"
                  name="oldprice"
                  value={productData.oldprice}
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
                required
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
                  ขนาดตามป้าย
                </label>
                <input
                  type="text"
                  name="detailOneDescription"
                  value={productData.detailOneDescription}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  ขนาดแบบละเอียด
                </label>
                <input
                  type="text"
                  name="detailTwoDescription"
                  value={productData.detailTwoDescription}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="mt-3">
              <label className="block text-sm font-medium mb-1">
                ยี่ห้อและรุ่น <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="text"
                name="detailThreeDescription"
                value={productData.detailThreeDescription}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mt-3">
              <label className="block text-sm font-medium mb-1">
                วิธีที่ใช้และข้อมูลเกี่ยวกับการดูแลรักษา
              </label>
              <textarea
                name="detailFourDescription"
                value={productData.detailFourDescription}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
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
                    checked={productData.condition === condition}
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
                name="conditionDescription"
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              />
            </div>
          </section>

          {/* Shipping Section */}
          <section>
            <h2 className="text-lg font-medium border-b pb-2 mb-4">
              การจัดส่งสินค้า
            </h2>

            <div className="flex items-center mb-2">
              <span className="block text-sm font-medium">
                วิธีการจัดส่ง <span className="text-red-500">*</span>
              </span>
              <span className="ml-2 text-xs text-gray-500">
                (เช่น Kerry, Flash, ไปรษณีย์ ให้ระบุรายละเอียด)
              </span>
            </div>

            <input
              required
              type="text"
              name="shippingType"
              value={productData.shippingType}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="mt-4">
              <label className="block text-sm font-medium mb-1">
                ค่าจัดส่งในการจัดส่ง <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="number"
                name="shippingCost"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
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
        </div>
      </form>
    </div>
  );
}
