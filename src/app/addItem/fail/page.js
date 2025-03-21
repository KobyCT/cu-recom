"use client";
import HeaderSearchLess from "@/app/component/headerns";
import NavItem from "@/app/component/Navbar";
export default function SellProductClothing() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      {/* Header */}
      <HeaderSearchLess Title="เกิดข้อผิดพลาด" prevPage="/addItem" />
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
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M8.58325 103V94.4166H94.4166V103H8.58325ZM60.0994 52.7381L48.941 41.5797L32.27 58.2507C31.7751 58.7464 31.5276 59.3519 31.5276 60.0672C31.5276 60.7825 31.7751 61.3876 32.27 61.8826L39.7719 69.4091C40.2676 69.9048 40.873 70.1526 41.5883 70.1526C42.3036 70.1526 42.9087 69.9048 43.4037 69.4091L60.0994 52.7381ZM52.0031 38.5423L63.1368 49.676L82.6145 30.2229C83.1095 29.728 83.357 29.0953 83.357 28.3249C83.357 27.5546 83.1095 26.9219 82.6145 26.4269L75.2522 19.0646C74.7572 18.5696 74.1245 18.3221 73.3542 18.3221C72.5838 18.3221 71.9511 18.5696 71.4562 19.0646L52.0031 38.5423ZM47.4475 36.9995L64.6807 54.2316L46.4658 72.4712C45.0789 73.8581 43.457 74.5516 41.6001 74.5516C39.7433 74.5516 38.1214 73.8581 36.7344 72.4712L35.9094 71.6461L30.9493 76.5075H19.0646L29.9429 65.6539L29.282 64.994C27.8958 63.6071 27.1944 61.977 27.178 60.1037C27.1615 58.2303 27.8464 56.6006 29.2326 55.2144L47.4475 36.9995ZM47.4475 36.9995L68.5014 15.9456C69.8883 14.5587 71.5102 13.8652 73.367 13.8652C75.2239 13.8652 76.8454 14.5587 78.2316 15.9456L85.7592 23.4475C87.1454 24.8337 87.8385 26.4552 87.8385 28.3121C87.8385 30.1696 87.1454 31.7915 85.7592 33.1777L64.6807 54.2316L47.4475 36.9995Z"
                fill="#1C1B1F"
              />
            </svg>
          </div>

          {/* Success Message */}
          <h2 className="text-xl font-bold mb-2">
            ส่งฟอร์มตรวจสอบสินค้าเกิดข้อผิดพลาด
          </h2>

          {/* Notification Message */}
          <p className="text-gray-600"></p>
        </div>
      </div>
      <NavItem />
    </div>
  );
}
