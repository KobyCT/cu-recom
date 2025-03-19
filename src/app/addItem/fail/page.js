"use client";
import HeaderSearchLess from "@/app/component/headerns";
import NavItem from "@/app/component/Navbar";
export default function SellProductClothing() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      {/* Header */}
      <HeaderSearchLess Title="ขายเครื่องแต่งกาย" prevPage="/addItem" />
        {/*Upload Section */}
        <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-lg mb-1 text-center mt-20 ">
        <div className="flex flex-col items-center justify-center h-screen text-center">
      {/* SVG Icon */}
      <div className="mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          width="80"
          height="80"
          fill="#1C1B1F"
        >
          <path d="M51.4999 93.4264L24.2317 72.9744C23.3784 72.3529 22.7028 71.5442 22.205 70.5486C21.7072 69.5529 21.4583 68.5129 21.4583 67.4285V19.8082C21.4583 17.8326 22.1199 16.1832 23.4431 14.8599C24.7664 13.5366 26.4158 12.875 28.3914 12.875H74.6084C76.584 12.875 78.2334 13.5366 79.5567 14.8599C80.88 16.1832 81.5416 17.8326 81.5416 19.8082V67.4285C81.5416 68.5129 81.2927 69.5529 80.7948 70.5486C80.297 71.5442 79.6214 72.3529 78.7681 72.9744L51.4999 93.4264ZM51.4999 87.9792L76.177 69.4917C76.5075 69.2171 76.7689 68.9009 76.9613 68.5433C77.1537 68.1856 77.2499 67.7865 77.2499 67.3459V19.8082C77.2499 19.1473 76.9749 18.5418 76.4248 17.9917C75.8748 17.4417 75.2693 17.1667 74.6084 17.1667H28.3914C27.7305 17.1667 27.125 17.4417 26.575 17.9917C26.0249 18.5418 25.7499 19.1473 25.7499 19.8082V67.3459C25.7499 67.7865 25.8461 68.1856 26.0385 68.5433C26.2309 68.9009 26.4924 69.2171 26.8228 69.4917L51.4999 87.9792ZM46.9937 61.4041L68.2707 40.1271L65.2332 37.0403L46.9937 55.2799L37.8159 46.1022L34.7292 49.1396L46.9937 61.4041Z" />
        </svg>
      </div>

      {/* Success Message */}
      <h2 className="text-xl font-bold mb-2">
        ส่งฟอร์มตรวจสอบสินค้าเรียบร้อยแล้ว!
      </h2>

      {/* Notification Message */}
      <p className="text-gray-600">
        แอดมินจะส่งข้อความแจ้งเตือนในแชทเมื่อสินค้าผ่านการตรวจสอบ
      </p>
    </div></div>
        <NavItem/>
    </div>
  );
}
