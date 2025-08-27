import React from 'react'
import ProductCard from './Card'
import '../../App.css'
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";


function PopularAgro() {
    const { t } = useTranslation();
    const lang = useSelector((state) => state.language.lang);
    const isArabic = lang === "ar";

    const sampleProducts = [
        {
            id: 1,
            title: {
                en: "Nitrogen Fertilizer",
                ar: "سماد نيتروجين"
            },
            location: {
                en: "Al Ain Industrial Area, UAE",
                ar: "المنطقة الصناعية في العين، الإمارات"
            },
            price: 25,
            priceCal: {
                en: "Kg",
                ar: "كجم"
            },
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVRiPB7ZSPz4buc4HSmkMkEgkcu8vCF5EdRQq9qysN56QEdDi884s0t89Fr8QT8Cu32OI&usqp=CAU",
                "https://cdn.dscovr.com/exploreBlogFiles/1622036604142-Harmful_effects_of_chemical_fertilizers_cover_image.png",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx5QukNHMJrBeZigqCKc9J0y1lawfPalqwkU_jmV7BYweQGzarHKmS52rQ6Atg8TsErFw&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVRiPB7ZSPz4buc4HSmkMkEgkcu8vCF5EdRQq9qysN56QEdDi884s0t89Fr8QT8Cu32OI&usqp=CAU"
            ]
        },
        {
            id: 2,
            title: {
                en: "Organic Compost",
                ar: "سماد عضوي"
            },
            location: {
                en: "Ajman Farms, UAE",
                ar: "مزارع عجمان، الإمارات"
            },
            price: 18,
            priceCal: {
                en: "Kg",
                ar: "كجم"
            },
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx5QukNHMJrBeZigqCKc9J0y1lawfPalqwkU_jmV7BYweQGzarHKmS52rQ6Atg8TsErFw&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVRiPB7ZSPz4buc4HSmkMkEgkcu8vCF5EdRQq9qysN56QEdDi884s0t89Fr8QT8Cu32OI&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVRiPB7ZSPz4buc4HSmkMkEgkcu8vCF5EdRQq9qysN56QEdDi884s0t89Fr8QT8Cu32OI&usqp=CAU",
                "https://cdn.dscovr.com/exploreBlogFiles/1622036604142-Harmful_effects_of_chemical_fertilizers_cover_image.png",

            ]
        },
        {
            id: 3,
            title: {
                en: "Pesticide Solution",
                ar: "محلول مبيدات"
            },
            location: {
                en: "Al Dhaid, Sharjah, UAE",
                ar: "الذيد، الشارقة، الإمارات"
            },
            price: 40,
            priceCal: {
                en: "Kg",
                ar: "كجم"
            },
            images: [
                "https://cdn.dscovr.com/exploreBlogFiles/1622036604142-Harmful_effects_of_chemical_fertilizers_cover_image.png",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVRiPB7ZSPz4buc4HSmkMkEgkcu8vCF5EdRQq9qysN56QEdDi884s0t89Fr8QT8Cu32OI&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVRiPB7ZSPz4buc4HSmkMkEgkcu8vCF5EdRQq9qysN56QEdDi884s0t89Fr8QT8Cu32OI&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx5QukNHMJrBeZigqCKc9J0y1lawfPalqwkU_jmV7BYweQGzarHKmS52rQ6Atg8TsErFw&usqp=CAU",
                
            ]
        },
        {
            id: 4,
            title: {
                en: "Liquid Growth Booster",
                ar: "معزز نمو سائل"
            },
            location: {
                en: "Al Quoz, Dubai, UAE",
                ar: "القصيص، دبي، الإمارات"
            },
            price: 55,
            priceCal: {
                en: "Kg",
                ar: "كجم"
            },
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx5QukNHMJrBeZigqCKc9J0y1lawfPalqwkU_jmV7BYweQGzarHKmS52rQ6Atg8TsErFw&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVRiPB7ZSPz4buc4HSmkMkEgkcu8vCF5EdRQq9qysN56QEdDi884s0t89Fr8QT8Cu32OI&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVRiPB7ZSPz4buc4HSmkMkEgkcu8vCF5EdRQq9qysN56QEdDi884s0t89Fr8QT8Cu32OI&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVRiPB7ZSPz4buc4HSmkMkEgkcu8vCF5EdRQq9qysN56QEdDi884s0t89Fr8QT8Cu32OI&usqp=CAU",
               
            ]
        },
        {
            id: 5,
            title: {
                en: "Phosphate Fertilizer",
                ar: "سماد فوسفات"
            },
            location: {
                en: "Ras Al Khaimah Farms, UAE",
                ar: "مزارع رأس الخيمة، الإمارات"
            },
            price: 35,
            priceCal: {
                en: "Kg",
                ar: "كجم"
            },
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVRiPB7ZSPz4buc4HSmkMkEgkcu8vCF5EdRQq9qysN56QEdDi884s0t89Fr8QT8Cu32OI&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx5QukNHMJrBeZigqCKc9J0y1lawfPalqwkU_jmV7BYweQGzarHKmS52rQ6Atg8TsErFw&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVRiPB7ZSPz4buc4HSmkMkEgkcu8vCF5EdRQq9qysN56QEdDi884s0t89Fr8QT8Cu32OI&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVRiPB7ZSPz4buc4HSmkMkEgkcu8vCF5EdRQq9qysN56QEdDi884s0t89Fr8QT8Cu32OI&usqp=CAU",
            ]
        },
        {
            id: 6,
            title: {
                en: "Insect Repellent Powder",
                ar: "مسحوق طارد للحشرات"
            },
            location: {
                en: "Fujairah Greenhouses, UAE",
                ar: "بيوت زجاجية في الفجيرة، الإمارات"
            },
            price: 22,
            priceCal: {
                en: "Kg",
                ar: "كجم"
            },
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVRiPB7ZSPz4buc4HSmkMkEgkcu8vCF5EdRQq9qysN56QEdDi884s0t89Fr8QT8Cu32OI&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx5QukNHMJrBeZigqCKc9J0y1lawfPalqwkU_jmV7BYweQGzarHKmS52rQ6Atg8TsErFw&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVRiPB7ZSPz4buc4HSmkMkEgkcu8vCF5EdRQq9qysN56QEdDi884s0t89Fr8QT8Cu32OI&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVRiPB7ZSPz4buc4HSmkMkEgkcu8vCF5EdRQq9qysN56QEdDi884s0t89Fr8QT8Cu32OI&usqp=CAU",
            ]
        }
    ];

    return (
        <>
            <div className="p-4" dir={isArabic ? "rtl" : "ltr"} >
                <div className="max-w-7xl mx-auto">
                    <div className=" ml-4 font-base text-gray-800 mb-1 flex justify-between ">
                        <div className='text-start flex gap-1  md:gap-3'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="12" fill="#0C7A1F" fillOpacity="0.1" />
                                <path d="M11.5339 4.70332C8.7308 4.69863 6.12799 4.7805 6.1608 4.96175L6.8508 6.09113C8.7058 5.93175 10.4746 5.87394 12.2464 5.88582C13.9089 5.89675 15.5746 5.96925 17.312 6.07613L18.2871 5.03613C18.1464 4.8255 14.7121 4.70863 11.5339 4.70332ZM11.6527 6.44738C10.1183 6.45113 8.5808 6.50957 6.97486 6.64488C6.29393 10.5093 5.91674 15.2249 6.80299 18.1343L5.97705 19.103C9.9808 19.403 14.0558 19.4999 17.9339 19.2999L16.9995 18.1874C17.6027 14.8686 17.4152 10.3374 17.0058 6.62113C15.4058 6.5255 13.8714 6.46175 12.3402 6.44957L16.5339 10.2999H14.3058C14.4246 11.0218 14.9433 11.9968 15.4902 12.8999C15.7996 13.4124 16.1152 13.9093 16.3558 14.3468C16.5964 14.7843 16.7808 15.1499 16.7808 15.5186C16.7808 16.3936 16.1902 17.1124 15.3214 17.578C14.4527 18.0468 13.2871 18.2999 11.9996 18.2999C10.7121 18.2999 9.54643 18.0468 8.67768 17.578C7.80893 17.1124 7.2183 16.3936 7.2183 15.5186C7.2183 15.1436 7.41205 14.778 7.66518 14.3343C7.9183 13.8905 8.24643 13.3905 8.56518 12.8718C9.12768 11.9624 9.64018 10.9811 9.71205 10.2999H7.24955L11.6527 6.44738ZM11.9964 6.89644L8.74955 9.73738H10.2589L10.2808 9.99363C10.3652 10.9905 9.69018 12.1186 9.0433 13.1686C8.7183 13.6936 8.3933 14.1905 8.1558 14.6124C7.91518 15.0311 7.7808 15.3936 7.7808 15.5186C7.7808 15.9749 7.99955 16.378 8.40893 16.7249C10.1027 16.5124 10.9714 16.3936 11.7339 16.3686C11.7527 16.103 11.7871 15.8374 11.8308 15.5811C10.6871 15.653 9.63393 15.3468 8.59643 14.978C9.06205 14.078 9.9183 13.4499 10.6902 13.453C10.8339 13.453 10.9746 13.4718 11.1089 13.5186C11.4589 13.6311 11.7746 14.2593 11.9839 14.7874C12.0527 14.4593 12.1183 14.178 12.1464 13.9718V13.9686C12.1746 13.7749 12.0964 13.2186 11.9964 12.7593C11.9246 12.428 11.8496 12.1374 11.8121 11.9999C11.6152 11.9999 11.4402 11.9624 11.3246 11.8436C10.5308 11.0186 11.0464 9.49363 11.7277 8.64363C12.2121 9.44988 12.8433 10.3186 13.4777 10.9186C13.3402 11.3811 13.0902 11.753 12.6058 11.9186C12.5402 11.9249 12.4589 11.9343 12.3777 11.9468C12.4214 12.1093 12.4839 12.353 12.5464 12.6374C12.5871 12.8155 12.6246 12.9999 12.6558 13.1843C12.8214 13.0311 13.0121 12.8905 13.1683 12.8843H13.2027C14.0777 12.9655 15.0683 13.8093 15.3183 15.0405C14.4589 14.6468 13.4745 14.8749 12.6964 14.0968C12.6089 14.678 12.3652 15.553 12.2996 16.3718C13.0527 16.3968 13.9214 16.5155 15.5902 16.7249C15.9995 16.378 16.2183 15.9749 16.2183 15.5186C16.2183 15.3874 16.0902 15.0311 15.8621 14.6186C15.6339 14.203 15.3245 13.7124 15.0089 13.1905C14.3808 12.153 13.7183 11.0249 13.7183 10.0186V9.73738H15.0902L11.9964 6.89644ZM11.9996 16.9218C11.3027 16.9218 10.5652 17.0155 9.16518 17.1936C9.9058 17.5343 10.8996 17.7374 11.9996 17.7374C13.0996 17.7374 14.0933 17.5343 14.8339 17.1936C13.4339 17.0155 12.6964 16.9218 11.9996 16.9218Z" fill="#0C7A1F" />
                            </svg>

                            <p className='text-base font-Poppins' >{t('PopularAgro')}</p>
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

export default PopularAgro