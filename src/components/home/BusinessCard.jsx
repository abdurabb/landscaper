import { Star, Share2, Heart } from "lucide-react";
import React from "react";
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

function BusinessCard() {
    const lang = useSelector((state) => state.language.lang);
    const isArabic = lang === "ar";
    const { t } = useTranslation();

    return (
        <div
            dir={isArabic ? "rtl" : "ltr"}
            className="w-full  rounded-xl bg-white shadow-lg p-4 space-y-4 md:space-y-4 space-x-8 md:space-x-4">
            {/* Posted info */}
            <div className="flex justify-between">
                <p className="text-xs text-gray-500">{t('postDetails')}</p>
                {/* Right icons */}
                <div className="flex text-gray-500 gap-4">
                    {/* share */}
                    <svg
                        className="hover: cursor-pointer"
                        width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" fill="white" />
                        <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#F3F4F6" />
                        <path d="M10.295 12.755L13.71 14.745M13.705 9.255L10.295 11.245M16.5 8.5C16.5 9.32843 15.8284 10 15 10C14.1716 10 13.5 9.32843 13.5 8.5C13.5 7.67157 14.1716 7 15 7C15.8284 7 16.5 7.67157 16.5 8.5ZM10.5 12C10.5 12.8284 9.82843 13.5 9 13.5C8.17157 13.5 7.5 12.8284 7.5 12C7.5 11.1716 8.17157 10.5 9 10.5C9.82843 10.5 10.5 11.1716 10.5 12ZM16.5 15.5C16.5 16.3284 15.8284 17 15 17C14.1716 17 13.5 16.3284 13.5 15.5C13.5 14.6716 14.1716 14 15 14C15.8284 14 16.5 14.6716 16.5 15.5Z" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {/* heart */}
                    <svg
                        className="hover:cursor-pointer"
                        width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" fill="white" />
                        <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#F3F4F6" />
                        <path d="M16.4201 8.30591C16.1647 8.05041 15.8615 7.84774 15.5277 7.70945C15.194 7.57117 14.8363 7.5 14.4751 7.5C14.1138 7.5 13.7561 7.57117 13.4224 7.70945C13.0887 7.84774 12.7854 8.05041 12.5301 8.30591L12.0001 8.83591L11.4701 8.30591C10.9542 7.79007 10.2546 7.50027 9.52506 7.50027C8.79554 7.50027 8.09591 7.79007 7.58006 8.30591C7.06421 8.82176 6.77441 9.5214 6.77441 10.2509C6.77441 10.9804 7.06421 11.6801 7.58006 12.1959L8.11006 12.7259L12.0001 16.6159L15.8901 12.7259L16.4201 12.1959C16.6756 11.9405 16.8782 11.6373 17.0165 11.3036C17.1548 10.9699 17.226 10.6122 17.226 10.2509C17.226 9.88967 17.1548 9.53196 17.0165 9.19824C16.8782 8.86451 16.6756 8.56129 16.4201 8.30591Z" fill="#D1D5DB" />
                    </svg>
                </div>
            </div>


            {/* Title */}
            <h2 className="text-base font-medium text-gray-800">
                {t('cardTitle')}
            </h2>

            <hr className=" text-[#E5E7EB] " />

            {/* Business section */}
            <h1 className="text-sm text-[#9E9E9E]">{t('postedBy')}</h1>
            <div className="flex items-start gap-3">
                <img
                    src="/Landscaper company logo.png"
                    alt="Company Logo"
                    className=" w-10 md:w-14 h-10 md:h-14 rounded-full border"
                />
                <div className="flex-1 ">
                    <h3 className="font-semibold text-gray-900">
                        {t('cardCompanyName')}
                    </h3>
                    <div className="flex items-center text-sm gap-3 text-gray-600">
                        <span className="font-semibold text-black mr-1">5.0</span>
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="ml-1">{t('rating')}</span>
                    </div>
                    <div className="flex gap-1 md:gap-3 text-sm text-green-700 font-medium mt-1">
                        <button className="hover:underline">{t('rateForBusiness')}</button>
                        <span>|</span>
                        <button className="hover:underline">{t('viewLists')}</button>
                    </div>
                </div>
            </div>

            {/* Enquiry button */}
            <button className="w-full bg-green-50 text-green-700 py-2 rounded-md font-medium border border-green-100 hover:bg-green-100">
                {t('enquiry')}
            </button>
        </div>
    );
}

export default BusinessCard