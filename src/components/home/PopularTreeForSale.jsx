import React from 'react'
import ProductCard from './Card'
import '../../App.css'
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function PopularTreeForSale() {
    const { t } = useTranslation();
    const lang = useSelector((state) => state.language.lang);
    const isArabic = lang === "ar";
    const sampleProducts = [
        {
            id: 1,
            title: {
                en: "Palm Tree Planting",
                ar: "زراعة شجرة النخيل"
            },
            location: {
                en: "Al Reem Island, Abu Dhabi, UAE",
                ar: "جزيرة الريم، أبوظبي، الإمارات العربية المتحدة"
            },
            price: 300,
            images: [
                "https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=400&h=250&fit=crop",
                "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&h=250&fit=crop",
                "https://images.unsplash.com/photo-1568667256549-094345857637?w=400&h=250&fit=crop",
                "https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=400&h=250&fit=crop"
            ]
        },
        {
            id: 2,
            title: {
                en: "Olive Tree Maintenance",
                ar: "صيانة أشجار الزيتون"
            },
            location: {
                en: "Jumeirah, Dubai, UAE",
                ar: "جميرا، دبي، الإمارات العربية المتحدة"
            },
            price: 250,
            images: [
                "https://images.unsplash.com/photo-1568667256549-094345857637?w=400&h=250&fit=crop", // from product 3
                "https://images.unsplash.com/photo-1617191513501-5c39f89ee7b2?w=400&h=250&fit=crop",
                "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&h=250&fit=crop",
                "https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=400&h=250&fit=crop"
            ]
        },
        {
            id: 3,
            title: {
                en: "Tree Trimming Service",
                ar: "خدمة تقليم الأشجار"
            },
            location: {
                en: "Khalifa City, Abu Dhabi, UAE",
                ar: "مدينة خليفة، أبوظبي، الإمارات العربية المتحدة"
            },
            price: 180,
            images: [
                "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&h=250&fit=crop", // from product 4
                "https://images.unsplash.com/photo-1568667256549-094345857637?w=400&h=250&fit=crop",
                "https://images.unsplash.com/photo-1617191513501-5c39f89ee7b2?w=400&h=250&fit=crop",
                "https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=400&h=250&fit=crop"
            ]
        },
        {
            id: 4,
            title: {
                en: "Pine Tree Removal",
                ar: "إزالة أشجار الصنوبر"
            },
            location: {
                en: "Al Barsha, Dubai, UAE",
                ar: "البرشاء، دبي، الإمارات العربية المتحدة"
            },
            price: 320,
            images: [
                "https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=400&h=250&fit=crop", // from product 5
                "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&h=250&fit=crop",
                "https://images.unsplash.com/photo-1568667256549-094345857637?w=400&h=250&fit=crop",
                "https://images.unsplash.com/photo-1617191513501-5c39f89ee7b2?w=400&h=250&fit=crop"
            ]
        },
        {
            id: 5,
            title: {
                en: "Garden Tree Landscaping",
                ar: "تنسيق أشجار الحدائق"
            },
            location: {
                en: "Sharjah Corniche, Sharjah, UAE",
                ar: "كورنيش الشارقة، الشارقة، الإمارات العربية المتحدة"
            },
            price: 280,
            images: [
                "https://images.unsplash.com/photo-1568667256549-094345857637?w=400&h=250&fit=crop",
                "https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=400&h=250&fit=crop",
                "https://images.unsplash.com/photo-1568667256549-094345857637?w=400&h=250&fit=crop",
                "https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=400&h=250&fit=crop",
            ]
        },
        {
            id: 6,
            title: {
                en: "Bonsai Tree Setup",
                ar: "ترتيب شجرة البونساي"
            },
            location: {
                en: "Al Ain Downtown, UAE",
                ar: "وسط مدينة العين، الإمارات العربية المتحدة"
            },
            price: 150,
            images: [
                "https://images.unsplash.com/photo-1568667256549-094345857637?w=400&h=250&fit=crop",
                "https://images.unsplash.com/photo-1602335982651-b063bb181d7b?w=400&h=250&fit=crop",
                "https://images.unsplash.com/photo-1568667256549-094345857637?w=400&h=250&fit=crop",
                "https://images.unsplash.com/photo-1602335982651-b063bb181d7b?w=400&h=250&fit=crop",
            ]
        }
    ];

    return (
        <>
            <>
                <div className="p-4 " dir={isArabic ? "rtl" : "ltr"}>
                    <div className="max-w-7xl mx-auto">
                        <div className=" ml-4 font-base text-gray-800 mb-1 flex justify-between ">
                            <div className='text-start flex gap-3'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="24" height="24" rx="12" fill="#0C7A1F" fillOpacity="0.1" />
                                    <path d="M17.9987 5.9987V7.33203C17.9987 8.56971 17.507 9.75669 16.6319 10.6319C15.7567 11.507 14.5697 11.9987 13.332 11.9987H12.6654V12.6654H15.9987V17.332C15.9987 17.6857 15.8582 18.0248 15.6082 18.2748C15.3581 18.5249 15.019 18.6654 14.6654 18.6654H9.33203C8.97841 18.6654 8.63927 18.5249 8.38922 18.2748C8.13917 18.0248 7.9987 17.6857 7.9987 17.332V12.6654H11.332V10.6654C11.332 9.42769 11.8237 8.2407 12.6989 7.36553C13.574 6.49036 14.761 5.9987 15.9987 5.9987H17.9987ZM7.66536 5.33203C8.46535 5.33138 9.25378 5.52296 9.96427 5.89062C10.6748 6.25828 11.2865 6.79126 11.748 7.4447C11.0439 8.37058 10.6635 9.50217 10.6654 10.6654V11.332H10.332C9.00595 11.332 7.73418 10.8052 6.7965 9.86757C5.85882 8.92988 5.33203 7.65812 5.33203 6.33203V5.33203H7.66536Z" fill="#0C7A1F" />
                                </svg>
                                <p className='text-1xl font-Poppins' >{t('PopularTreesForSale')}</p>
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
        </>
    )
}

export default PopularTreeForSale