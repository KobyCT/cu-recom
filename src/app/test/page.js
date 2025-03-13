"use client";
import { useState } from "react";
import { Dialog, Listbox } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const categories = [
  "หมวดหมู่",
  "หนังสือเรียน",
  "อุปกรณ์การเรียน",
  "อิเล็กทรอนิกส์",
];
const faculties = ["คณะ", "วิศวกรรมศาสตร์", "วิทยาศาสตร์", "บริหารธุรกิจ"];

export default function Shop() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedFaculty, setSelectedFaculty] = useState(faculties[0]);

  return (
    <div className="relative">
      {/* Header with buttons */}
      <div className="flex justify-start space-x-4 p-4 border-b bg-white">
        <button
          className="text-lg font-semibold"
          onClick={() => setIsOpen(true)}
        >
          หมวดหมู่
        </button>
        <button className="text-lg font-semibold">ล่าสุด</button>
        <button className="text-lg font-semibold">
          ราคา : สูงสุด - ต่ำสุด
        </button>
      </div>

      {/* Modal */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end">
          <Dialog.Panel className="bg-white w-full p-6 rounded-t-2xl shadow-lg">
            <div className="w-12 h-1 bg-gray-300 rounded mx-auto mb-4"></div>
            <Dialog.Title className="text-lg font-semibold mb-4">
              หมวดหมู่
            </Dialog.Title>

            {/* Category Dropdown */}
            <Listbox value={selectedCategory} onChange={setSelectedCategory}>
              <div className="relative mb-4">
                <Listbox.Button className="w-full p-3 border rounded-lg flex justify-between items-center">
                  {selectedCategory}
                  <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                </Listbox.Button>
                <Listbox.Options className="absolute w-full mt-1 bg-white border rounded-lg shadow-lg">
                  {categories.map((category) => (
                    <Listbox.Option
                      key={category}
                      value={category}
                      className="p-3 hover:bg-gray-100 cursor-pointer"
                    >
                      {category}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>

            {/* Faculty Dropdown */}
            <Listbox value={selectedFaculty} onChange={setSelectedFaculty}>
              <div className="relative mb-6">
                <Listbox.Button className="w-full p-3 border rounded-lg flex justify-between items-center">
                  {selectedFaculty}
                  <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                </Listbox.Button>
                <Listbox.Options className="absolute w-full mt-1 bg-white border rounded-lg shadow-lg">
                  {faculties.map((faculty) => (
                    <Listbox.Option
                      key={faculty}
                      value={faculty}
                      className="p-3 hover:bg-gray-100 cursor-pointer"
                    >
                      {faculty}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>

            {/* Search Button */}
            <button
              className="w-full py-3 bg-pink-500 text-white font-semibold rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              ค้นหา
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
