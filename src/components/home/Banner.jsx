import React from 'react';
import { ChevronDown, MapPin, Search } from 'lucide-react';
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";


function Banner() {
    const { t } = useTranslation();
    const lang = useSelector((state) => state.language.lang);
    const isArabic = lang === "ar";
    const categories = t("banner.categories", { returnObjects: true }) || []
    const emirates = t("banner.emirates", { returnObjects: true }) || []

    return (
        <div
            style={{ backgroundImage: "url('/BG.png')" }}
            className={`w-full min-h-[200px] md:h-[230px] flex flex-col items-center justify-center px-4 py-8`}
            dir={isArabic ? "rtl" : "ltr"}
        >
            <h1 className="text-[#FFFFFF] font-Open Sans font-bold text-1xl md:text-3xl lg:text-3xl text-center mb-8 drop-shadow-lg">
                {t("banner.title") || "Create your dream landscaping today!"}
            </h1>

            {/* Filter/Search Bar */}
            <div className="w-full max-w-5xl">
                <div className="hidden md:flex bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Emirates Dropdown */}
                    <div className="relative flex items-center px-5 py-3 border-r border-gray-200 flex-shrink-0">
                        <MapPin className="w-4 h-4 text-gray-500 mr-2" />
                        <select className="bg-transparent border-none outline-none text-gray-700 text-sm font-medium pr-6 cursor-pointer min-w-[120px]">
                            {emirates.map((emirate, index) => (
                                <option key={index} value={emirate}>{emirate}</option>
                            ))}
                        </select>
                    </div>

                    {/* Categories Dropdown */}
                    <div className="relative flex items-center px-4 py-3 border-r border-gray-200 flex-shrink-0">
                        <select className="bg-transparent border-none outline-none text-gray-700 text-sm font-medium pr-6 cursor-pointer min-w-[140px]">
                            {categories.map((category, index) => (
                                <option key={index} value={category}>{category}</option>
                            ))}
                        </select>
                    </div>

                    {/* Search Input */}
                    <div className="flex-1 flex items-center px-4 py-3">
                        <input
                            type="text"
                            placeholder={t("banner.searchPlaceHolder") || "Search for anything"}
                            className="w-full bg-transparent border-none outline-none text-gray-700 text-sm placeholder-gray-500"
                        />
                    </div>

                    {/* Search Button */}
                    <button className="bg-[#0C7A1F26] text-[#0C7A1F] px-6 py-3 font-medium text-sm flex items-center gap-2 flex-shrink-0">
                        <Search className="w-4 h-4" />
                        {t("banner.search") || "Search"}
                    </button>
                </div>

                {/* Mobile Version */}
                <div className="md:hidden overflow-x-auto">
                    <div className="flex gap-0 w-max">
                        {/* Emirates Dropdown */}
                        <div className={`relative bg-white  ${isArabic ? "rounded-r-lg" : "rounded-l-lg"} p-1`}>
                            <div className="flex items-center px-0 py-2">
                                <MapPin className="w-4 h-4 text-gray-500 " />
                                <select className="bg-transparent border-none outline-none text-gray-700 text-sm font-medium pr-0 ">
                                    {emirates.map((emirate, index) => (
                                        <option key={index} value={emirate}>{emirate}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Category Dropdown */}
                        <div className="relative bg-white p-1">
                            <div className="flex items-center px-0 py-2">
                                <select className="bg-transparent border-none outline-none text-gray-700 text-sm font-medium pr-0">
                                    {categories.map((category, index) => (
                                        <option key={index} value={category}>{category}</option>
                                    ))}
                                </select>
                                {/* <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 pointer-events-none" /> */}
                            </div>
                        </div>

                        {/* Search Input */}
                        <div className="bg-white p-1 ">
                            <input
                                type="text"
                                placeholder={t("banner.searchPlaceHolder") || "Search for anything"}
                                className="px-0 py-2 bg-transparent border-none outline-none text-gray-700 text-sm placeholder-gray-500"
                            />
                        </div>

                        {/* Search Button */}
                        <button className="bg-green-700 text-white px-4 py-3 rounded-lg font-medium text-sm flex items-center justify-center flex-shrink-0 hover:bg-green-800">
                            <Search className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
