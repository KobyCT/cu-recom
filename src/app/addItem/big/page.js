"use client";
import HeaderSearchLess from "@/app/component/headerns";
import { useState } from "react";
import { getCookie } from "cookies-next";
import axios from "axios";
import { redirect } from "next/navigation";

export default function SellProductBig() {
  const formData = new FormData();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [productData, setProductData] = useState({
    verifyImages: [], // Array for verify images
    productImages: [], // Changed to array for product images
    name: "",
    price: "",
    oldPrice: "",
    description: "",
    detailOneDescription: "",
    detailTwoDescription: "",
    detailThreeDescription: "",
    detailFourDescription: "",
    condition: "",
    shippingType: "",
    shippingCost: "",
    conditionDescription: "",
    isOpen: true,
    tag: "",
  });

  // Add error state for file validation
  const [fileError, setFileError] = useState({
    verify: "",
    sell: "",
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
    { name: "คณะครุศาสตร์", id: "27" },
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

  // Updated function to handle verify images with limit
  const handleAddVerify = (e) => {
    const files = Array.from(e.target.files);

    // Clear previous error message
    setFileError((prev) => ({ ...prev, verify: "" }));

    // Check if more than 3 files are selected
    if (files.length > 3) {
      setFileError((prev) => ({
        ...prev,
        verify: "สามารถอัพโหลดได้สูงสุด 3 รูปเท่านั้น",
      }));
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
    setFileError((prev) => ({ ...prev, sell: "" }));

    // Check if more than 3 files are selected
    if (files.length > 3) {
      setFileError((prev) => ({
        ...prev,
        sell: "สามารถอัพโหลดได้สูงสุด 3 รูปเท่านั้น",
      }));
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
    const formData = new FormData();

    // Check if verify images are within the limit before submitting
    if (productData.verifyImages.length > 3) {
      setFileError((prev) => ({
        ...prev,
        verify: "สามารถอัพโหลดได้สูงสุด 3 รูปเท่านั้น",
      }));
      return;
    }

    // Check if product images are within the limit before submitting
    if (productData.productImages.length > 3) {
      setFileError((prev) => ({
        ...prev,
        sell: "สามารถอัพโหลดได้สูงสุด 3 รูปเท่านั้น",
      }));
      return;
    }

    // Check if files are selected
    if (productData.verifyImages.length === 0) {
      setFileError((prev) => ({
        ...prev,
        verify: "กรุณาอัพโหลดรูปสำหรับยืนยัน",
      }));
      return;
    }

    if (productData.productImages.length === 0) {
      setFileError((prev) => ({
        ...prev,
        sell: "กรุณาอัพโหลดรูปสำหรับโฆษณาขาย",
      }));
      return;
    }
    setIsSubmitting(true);
    const { tag, ...toadd } = productData;

    // Append all other form data
    Object.entries(toadd).forEach(([key, value]) => {
      // Special handling for images to ensure we pass the array of files
      if (key === "verifyImages" || key === "productImages") {
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
          productid: productId,
          tag: "big",
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
          productid: productId,
          tag: productData.tag,
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
      setIsSubmitting(false);
      redirect("/addItem/fail");
    }

    if (success) {
      redirect("/addItem/success");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      {/* Header */}
      <HeaderSearchLess
        Title="ขายอุปกรณ์เครื่องใช้ขนาดใหญ่"
        prevPage="/addItem"
      />
      <form onSubmit={handleSubmit} className="space-y-8">
        {/*Upload Section */}
        <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-lg mb-1 text-center mt-20 ">
          <div className="flex justify-center items-center bg-gray-200 rounded w-full md:w-full lg:w-full h-80 mb-4 grid grid-cols-2">
            <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-lg mb-1 text-center mt-20 ">
              <h1>Upload รูปสำหรับโฆษณาขาย</h1>
              <input
                id="sell"
                type="file"
                accept=".jpg,.heic,.jpeg"
                multiple
                onChange={handleAddSell}
              />
              <div className="text-xs mt-1 text-gray-500">
                อัพโหลดได้สูงสุด 3 รูป
              </div>
              {fileError.sell && (
                <div className="text-red-500 text-sm mt-1">
                  {fileError.sell}
                </div>
              )}
              {productData.productImages.length > 0 && (
                <div className="text-green-500 text-sm mt-1">
                  เลือกไฟล์แล้ว {productData.productImages.length} ไฟล์
                </div>
              )}
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-lg mb-1 text-center mt-20 ">
              <h1>Upload รูปสำหรับยืนยัน</h1>
              <input
                id="verify"
                type="file"
                accept=".jpg,.heic,.jpeg"
                multiple
                onChange={handleAddVerify}
              />
              <div className="text-xs mt-1 text-gray-500">
                อัพโหลดได้สูงสุด 3 รูป
              </div>
              {fileError.verify && (
                <div className="text-red-500 text-sm mt-1">
                  {fileError.verify}
                </div>
              )}
              {productData.verifyImages.length > 0 && (
                <div className="text-green-500 text-sm mt-1">
                  เลือกไฟล์แล้ว {productData.verifyImages.length} ไฟล์
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Start new */}
        {/* Rest of the form remains the same */}
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
                  name="oldPrice"
                  value={productData.oldPrice}
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
                  ขนาดกว้างxยาวxสูง
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
                  น้ำหนัก
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
                ยี่ห้อและรุ่น
              </label>
              <input
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
              id="submit"
              type="submit"
              className={`w-full py-2 px-4 text-white font-semibold rounded-md transition ${
                isSubmitting
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-customPink hover:bg-pink-600"
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "กำลังส่งข้อมูล..." : "ลงขายสินค้า"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
