import React, { useState, useTransition } from 'react';
import BusinessCard from '../../components/home/BusinessCard'
import ProjectCard from '../../components/home/ProjectCard'
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';


const LandscapingDetailPage = () => {

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




