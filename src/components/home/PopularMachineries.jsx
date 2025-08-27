import React from 'react'
import ProductCard from '../../components/home/Card'
import '../../App.css'
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function PopularMachineries() {
    const { t } = useTranslation();
    const lang = useSelector((state) => state.language.lang);
    const isArabic = lang === "ar";
    const sampleProducts = [
        {
            id: 1,
            title: {
                en: "Mini Loaders",
                ar: "لوادر صغيرة"
            },
            location: {
                en: "Al Najda Street, Abu Dhabi, UAE",
                ar: "شارع النجدة، أبوظبي، الإمارات العربية المتحدة"
            },
            price: 200,
            priceCal: {
                en: "Day",
                ar: "يوم"
            },
            images: [
                "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&h=250&fit=crop",
                "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
                "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=250&fit=crop",
                "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop"
            ]
        },
        {
            id: 2,
            title: {
                en: "Garden pathway installation",
                ar: "تركيب ممر الحديقة"
            },
            location: {
                en: "Sky Tower, Abu Dhabi, UAE",
                ar: "برج سكاي، أبو ظبي، الإمارات العربية المتحدة"
            },
            price: 500,
            priceCal: {
                en: "Day",
                ar: "يوم"
            },
            images: [
                "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=250&fit=crop",
                "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&h=250&fit=crop",
                "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62?w=400&h=250&fit=crop",
                "https://images.unsplash.com/photo-1505245208761-ba872912fac0?w=400&h=250&fit=crop"
            ]
        },
        {
            id: 3,
            title: {
                en: "Vertical garden setup",
                ar: "إعداد الحديقة العمودية"
            },
            location: {
                en: "Al Najda Street, Abu Dhabi, UAE",
                ar: "شارع النجدة، أبوظبي، الإمارات العربية المتحدة"
            },
            price: 300,
            priceCal: {
                en: "Day",
                ar: "يوم"
            },
            images: [
                "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62?w=400&h=250&fit=crop",
                "https://images.unsplash.com/photo-1505245208761-ba872912fac0?w=400&h=250&fit=crop",
                "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=250&fit=crop",
                "https://images.unsplash.com/photo-1505245208761-ba872912fac0?w=400&h=250&fit=crop"
            ]
        },
        {
            id: 4,
            title: {
                en: "Areca palm project | GOOD SIZE g...",
                ar: "مشروع نخيل الأريكا | حجم جيد ..."
            },
            location: {
                en: "Al Shamkha",
                ar: "الشامخة"
            },
            price: 400,
            priceCal: {
                en: "Day",
                ar: "يوم"
            },
            images: [
                "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&h=250&fit=crop",
                "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
                "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=250&fit=crop",
                "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop"
            ]
        },
        {
            id: 5,
            title: {
                en: "Garden pathway installation",
                ar: "تركيب ممر الحديقة"
            },
            location: {
                en: "Al Shamkha",
                ar: "الشامخة"
            },
            price: 400,
            priceCal: {
                en: "Day",
                ar: "يوم"
            },
            images: [
                "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=250&fit=crop",
                "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&h=250&fit=crop",
                "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62?w=400&h=250&fit=crop",
                "https://images.unsplash.com/photo-1505245208761-ba872912fac0?w=400&h=250&fit=crop"
            ]
        },
        {
            id: 6,
            title: {
                en: "Vertical garden setup",
                ar: "إعداد الحديقة العمودية"
            },
            location: {
                en: "Al Shamkha",
                ar: "الشامخة"
            },
            price: 400,
            priceCal: {
                en: "Day",
                ar: "يوم"
            },
            images: [
                "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62?w=400&h=250&fit=crop",
                "https://images.unsplash.com/photo-1505245208761-ba872912fac0?w=400&h=250&fit=crop",
                "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=250&fit=crop",
                "https://images.unsplash.com/photo-1505245208761-ba872912fac0?w=400&h=250&fit=crop"
            ]
        }
    ];

    return (
        <>
            <div className="p-4" dir={isArabic ? "rtl" : "ltr"}>
                <div className="max-w-7xl mx-auto">
                    <div className=" ml-4 font-base text-gray-800 mb-1 flex justify-between ">
                        <div className='text-start flex gap-3'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="12" fill="#0C7A1F" fillOpacity="0.1" />
                                <path d="M8.33317 10.0013C9.25364 10.0013 9.99984 9.25511 9.99984 8.33464C9.99984 7.41416 9.25364 6.66797 8.33317 6.66797C7.4127 6.66797 6.6665 7.41416 6.6665 8.33464C6.6665 9.25511 7.4127 10.0013 8.33317 10.0013Z" fill="#0C7A1F" />
                                <path d="M13.3335 8.66797L9.8515 14.326L8.66683 12.668L5.3335 17.3346H18.6668L13.3335 8.66797Z" fill="#0C7A1F" />
                            </svg>
                            <p className='text-1xl font-Poppins' >{t('PopularMachineriesForRent')}</p>
                        </div>
                        <h1 className='text-[#0C7A1F] mr-2 text-1xl font-bold hover:cursor-pointer' >{t('viewAll')}</h1>
                    </div>

                    {/* product showing */}
                    <div
                        className="flex overflow-x-auto hide-scrollbar space-x-0 md:space-x-3  "
                    // scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 
                    // style={{ scrollSnapType: 'x mandatory' }}
                    >
                        {sampleProducts.map((product) => (
                            <div
                                key={product.id}
                                className="flex-shrink-0 p-2"
                            // style={{ scrollSnapAlign: 'start', width: '80vw', maxWidth: '280px' }}
                            >
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopularMachineries