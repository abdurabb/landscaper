import React, { useState, useTransition } from 'react';
import BusinessCard from '../../components/home/BusinessCard'
import ProjectCard from '../../components/home/ProjectCard'
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';


const LandscapingDetailPage = () => {
  const navigate = useNavigate()
  const lang = useSelector((state) => state.language.lang);
  const isArabic = lang === "ar";
  const { t } = useTranslation();

  const images = [
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=400&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&h=400&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop"
  ];

  const sampleProjects = [
    {
      id: 1,
      title: {
        en: "Areca palm project | GOOD SIZE g...",
        ar: "مشروع نخيل الأريكا | حجم جيد ..."
      },
      company: {
        en: "Lifescape Custom Landscaping Inc.",
        ar: "لايفسكيب لتنسيق الحدائق حسب الطلب"
      },
      images: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: {
        en: "Garden Maintenance Project",
        ar: "مشروع صيانة الحديقة"
      },
      company: {
        en: "Green Roots Landscaping",
        ar: "جذور خضراء لتنسيق الحدائق"
      },
      images: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: {
        en: "Tropical Tree Installation",
        ar: "تركيب الأشجار الاستوائية"
      },
      company: {
        en: "EcoGreen Projects",
        ar: "مشاريع إيكو جرين"
      },
      images: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&h=400&fit=crop&crop=center"
    },
    {
      id: 4,
      title: {
        en: "Tropical Tree Installation",
        ar: "تركيب الأشجار الاستوائية"
      },
      company: {
        en: "EcoGreen Projects",
        ar: "مشاريع إيكو جرين"
      },
      images: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&h=400&fit=crop&crop=center"
    },
    {
      id: 5,
      title: {
        en: "Tropical Tree Installation",
        ar: "تركيب الأشجار الاستوائية"
      },
      company: {
        en: "EcoGreen Projects",
        ar: "مشاريع إيكو جرين"
      },
      images: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&h=400&fit=crop&crop=center"
    },
    {
      id: 6,
      title: {
        en: "Tropical Tree Installation",
        ar: "تركيب الأشجار الاستوائية"
      },
      company: {
        en: "EcoGreen Projects",
        ar: "مشاريع إيكو جرين"
      },
      images: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&h=400&fit=crop&crop=center"
    }
  ];


  return (
    <div className="max-w-7xl mx-auto p-4 bg-[#FFFFFF] m-4" dir={isArabic ? "rtl" : "ltr"}>
      <div className="bg-[#FFFFFF] rounded-lg overflow-hidden  p-4">
        {/* navigation */}
        <div className="py-2 flex items-center gap-1.5">
          <span className="flex items-center">
            <svg
            className='hover:cursor-pointer'
            onClick={()=>{navigate('/')}}
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 14.0005V9.06714C6 8.69378 6 8.50709 6.07266 8.36448C6.13658 8.23904 6.23857 8.13706 6.36401 8.07314C6.50661 8.00048 6.6933 8.00048 7.06667 8.00048H8.93333C9.3067 8.00048 9.49339 8.00048 9.63599 8.07314C9.76144 8.13706 9.86342 8.23904 9.92734 8.36448C10 8.50709 10 8.69378 10 9.06714V14.0005M7.34513 1.84315L2.82359 5.3599C2.52135 5.59498 2.37022 5.71252 2.26135 5.85973C2.16491 5.99012 2.09307 6.13701 2.04935 6.29319C2 6.4695 2 6.66095 2 7.04386V11.8671C2 12.6139 2 12.9872 2.14532 13.2725C2.27316 13.5233 2.47713 13.7273 2.72801 13.8552C3.01323 14.0005 3.3866 14.0005 4.13333 14.0005H11.8667C12.6134 14.0005 12.9868 14.0005 13.272 13.8552C13.5229 13.7273 13.7268 13.5233 13.8547 13.2725C14 12.9872 14 12.6139 14 11.8671V7.04386C14 6.66095 14 6.4695 13.9506 6.29319C13.9069 6.13701 13.8351 5.99012 13.7386 5.85973C13.6298 5.71252 13.4787 5.59499 13.1764 5.35991L8.65487 1.84315C8.42065 1.66099 8.30354 1.5699 8.17423 1.53489C8.06013 1.504 7.93987 1.504 7.82577 1.53489C7.69646 1.5699 7.57935 1.66099 7.34513 1.84315Z"
                stroke="#147AFC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          <span className="flex items-center">
            {isArabic ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 4L6 8L10 12"
                  stroke="#6B7280"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 4.5L10 8.5L6 12.5"
                  stroke="#6B7280"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </span>

          <span className="text-sm text-gray-700">{isArabic? "تفاصيل" :"Details"}</span>
        </div>



        <div className="flex flex-col md:flex-row gap-4">
          {/* Left / Top Image */}
          <div className="w-full md:w-2/3 relative">
            <img
              src={images[0]}
              alt="Main selected"
              className="w-full h-full max-h-[500px] object-cover rounded-lg"
            />
          </div>

          {/* Right / Bottom Thumbnails */}
          <div className="w-full   md:w-1/3 flex md:flex-col flex-row gap-1 md:gap-4">
            {images.slice(1).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="w-1/2 md:w-full h-48 object-cover rounded-lg cursor-pointer transition-all"
              />
            ))}
          </div>
        </div>


        {/* specifications and card */}
        <div className='grid grid-cols-1 md:grid-cols-2 py-6'>
          <div className='  '>
            <h1 className='text-[#374151] text-2xl font-poppins mt-3 md:mt-6' >{t('specification')}</h1>
            {/* specifications */}
            <div className='grid grid-cols-2'>
              <div className={`flex flex-col md:flex-row md:items-center ${isArabic ? "border-l-2" : "border-r-2 "} p-1 border-[#D9D9D9]`}>
                <span className="text-gray-600 md:min-w-[100px]">{t('type')}</span>
                <span className="text-gray-800 mt-1 md:mt-0 md:ml-6">{t('typeValue')}</span>
              </div>

              <div className="flex  p-1 ">
                <span className="text-gray-600 min-w-[80px]">{t('sqFt')}</span>
                <span className="text-gray-800 ml-6">---</span>
              </div>
            </div>

            {/* description */}
            <div className='mt-2 md:mt-8'>
              <h1 className='text-2xl font-poppins text-[#374151]'>
                {t('detailPageDescriptionHead')}
              </h1>
              <p className='mt-1 md:mt-3 text-sm md:text-1xl  text-[#374151] font-poppins'>
                {t('detailDescription')}
              </p>
            </div>
          </div>


          {/* second card */}
          <div className='p-0 md:p-2 w-full '>
            <BusinessCard />
          </div>
        </div>

        {/* other projects */}
        <div className='mt-2 md:mt-6 ' >
          <h1 className='text-2xl pl-1 text-[#374151] font-poppins' >{t('otherProject')}</h1>
          <div
            className="flex overflow-x-auto hide-scrollbar space-x-0 md:space-x-3  "
          >
            {sampleProjects.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 "
              >
                <ProjectCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  );
};

export default LandscapingDetailPage;




