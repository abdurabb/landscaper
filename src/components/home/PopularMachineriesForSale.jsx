import React from 'react'
import ProductCard from './Card'
import '../../App.css'
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function PopularMachineriesForStore() {
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
            images: [
                "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop", // Swapped from Product 2
                "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&h=250&fit=crop",
                "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=250&fit=crop",
                "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop"
            ]
        },
        {
            id: 2,
            title: {
                en: "Excavator Rental",
                ar: "تأجير حفارة"
            },
            location: {
                en: "Al Qusais, Dubai, UAE",
                ar: "القصيص، دبي، الإمارات العربية المتحدة"
            },
            price: 350,
            images: [
                "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=250&fit=crop", // Swapped from Product 3
                "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
                "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop",
                "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&h=250&fit=crop"
            ]
        },
        {
            id: 3,
            title: {
                en: "Palm Tree Trimming",
                ar: "تشذيب أشجار النخيل"
            },
            location: {
                en: "Mirdif, Dubai, UAE",
                ar: "مردف، دبي، الإمارات العربية المتحدة"
            },
            price: 100,
            images: [
                "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop", // Swapped from Product 1
                "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=250&fit=crop",
                "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
                "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&h=250&fit=crop"
            ]
        },
        {
            id: 4,
            title: {
                en: "Mini Loaders",
                ar: "لوادر صغيرة"
            },
            location: {
                en: "Al Najda Street, Abu Dhabi, UAE",
                ar: "شارع النجدة، أبوظبي، الإمارات العربية المتحدة"
            },
            price: 200,
            images: [
                "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop", // Swapped from Product 2
                "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&h=250&fit=crop",
                "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=250&fit=crop",
                "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop"
            ]
        },
        {
            id: 5,
            title: {
                en: "Excavator Rental",
                ar: "تأجير حفارة"
            },
            location: {
                en: "Al Qusais, Dubai, UAE",
                ar: "القصيص، دبي، الإمارات العربية المتحدة"
            },
            price: 350,
            images: [
                "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=250&fit=crop", // Swapped from Product 3
                "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
                "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop",
                "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&h=250&fit=crop"
            ]
        },
        {
            id: 6,
            title: {
                en: "Palm Tree Trimming",
                ar: "تشذيب أشجار النخيل"
            },
            location: {
                en: "Mirdif, Dubai, UAE",
                ar: "مردف، دبي، الإمارات العربية المتحدة"
            },
            price: 100,
            images: [
                "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop", // Swapped from Product 1
                "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=250&fit=crop",
                "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
                "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&h=250&fit=crop"
            ]
        }
    ];

    return (
        <>
            <div className="p-4 " dir={isArabic ? "rtl" : "ltr"}>
                <div className="max-w-7xl mx-auto">
                    <div className=" ml-4 font-base text-gray-800 mb-1 flex justify-between ">
                        <div className='text-start flex gap-3'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="12" fill="#0C7A1F" fillOpacity="0.1" />
                                <path d="M17.1999 14.0015C15.985 14.0015 15 14.9865 15 16.2015C15 17.4165 15.985 18.4015 17.1999 18.4015C18.4149 18.4015 19.3999 17.4165 19.3999 16.2015C19.3999 14.9865 18.4149 14.0015 17.1999 14.0015ZM17.1999 16.8015C16.8692 16.8015 16.6 16.5323 16.6 16.2015C16.6 15.8708 16.8692 15.6015 17.1999 15.6015C17.5307 15.6015 17.7999 15.8708 17.7999 16.2015C17.7999 16.5323 17.5307 16.8015 17.1999 16.8015ZM19.1999 9.60155H17.5999V8.59655C17.5999 8.24355 17.7174 7.90255 17.9287 7.62556C18.0392 7.48056 18.0174 7.27406 17.8957 7.13831L17.3549 6.53406C17.1884 6.34781 16.8969 6.36106 16.7374 6.55356C16.2645 7.12406 16 7.8468 16 8.59655V9.60155H13.4417L12.0395 6.33006C11.9474 6.11376 11.7936 5.92935 11.5975 5.79981C11.4013 5.67026 11.1713 5.60132 10.9362 5.60156H7.59999C6.93824 5.60156 6.39999 6.13981 6.39999 6.80156V10.4645C6.18424 10.2963 5.87599 10.303 5.67774 10.5013L4.9 11.279C4.68525 11.4938 4.68525 11.842 4.9 12.0568L5.0265 12.1833C4.90175 12.4148 4.8025 12.6538 4.72875 12.9013H4.55C4.24625 12.9013 4 13.1475 4 13.4513V14.5513C4 14.855 4.24625 15.1013 4.55 15.1013H4.7285C4.8025 15.349 4.9015 15.5878 5.02625 15.8195L4.89975 15.946C4.685 16.1608 4.685 16.509 4.89975 16.7238L5.67749 17.5015C5.89224 17.7163 6.24049 17.7163 6.45524 17.5015L6.58174 17.375C6.81324 17.4998 7.05224 17.599 7.29974 17.6728V17.8515C7.29974 18.1553 7.54599 18.4015 7.84974 18.4015H8.94973C9.25348 18.4015 9.49973 18.1553 9.49973 17.8515V17.673C9.74723 17.5993 9.98623 17.5 10.2177 17.3753L10.3442 17.5018C10.559 17.7165 10.9072 17.7165 11.122 17.5018L11.8997 16.724C12.1145 16.5093 12.1145 16.161 11.8997 15.9463L11.7732 15.8198C11.898 15.5883 11.9972 15.3493 12.071 15.1018H12.25C12.5537 15.1018 12.8 14.8555 12.8 14.5518V14.4018H14.8135C15.3612 13.677 16.2215 13.2018 17.1999 13.2018C17.6659 13.2018 18.1017 13.317 18.4949 13.5068L19.7654 12.2363C19.9154 12.0863 19.9997 11.8828 19.9997 11.6705V10.4015C19.9999 9.9598 19.6417 9.60155 19.1999 9.60155ZM8.39998 16.0015C7.29549 16.0015 6.39999 15.106 6.39999 14.0015C6.39999 12.897 7.29549 12.0015 8.39998 12.0015C9.50448 12.0015 10.4 12.897 10.4 14.0015C10.4 15.106 9.50448 16.0015 8.39998 16.0015ZM8.94998 9.60155H7.99998V7.20156H10.6722L11.701 9.60155H8.94998Z" fill="#0C7A1F" />
                            </svg>
                            <p className='text-1xl font-Poppins' >{t('PopularMachineriesForSale')}</p>
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

export default PopularMachineriesForStore