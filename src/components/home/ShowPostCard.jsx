import React from 'react'
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import PostCard from './PostCard'

function ShowPostCard() {
    const { t } = useTranslation();
    const lang = useSelector((state) => state.language.lang);
    const isArabic = lang === "ar";


    const sampleProducts = [
        {
            id: 1,
            name: {
                en: "Muhammad Yasir",
                ar: "محمد ياسر"
            },
            postTime: {
                en: "2 hrs ago",
                ar: "منذ ساعتين"
            },
            postTitle: {
                en: "How to grow a money plant?",
                ar: "كيف تزرع نبات المال؟"
            },
            commentsCount: 64,
            images: [
                "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop"
            ]
        },
        {
            id: 2,
            name: {
                en: "Muhammad Yasir",
                ar: "محمد ياسر"
            },
            postTime: {
                en: "5 hrs ago",
                ar: "منذ 5 ساعات"
            },
            postTitle: {
                en: "My mango tree is dying. What to do?",
                ar: "شجرتي منغو تموت، كيف يمكنني إنقاذها؟"
            },
            commentsCount: 48,
            images: [
                "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop"
            ]
        },
        {
            id: 3,
            name: {
                en: "Muhammad Yasir",
                ar: "محمد ياسر"
            },
            postTime: {
                en: "1 day ago",
                ar: "منذ يوم"
            },
            postTitle: {
                en: "Can I grow bamboo in my backyard?",
                ar: "هل يمكنني زراعة الخيزران في فناء منزلي؟"
            },
            commentsCount: 91,
            images: [
                "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=250&fit=crop"
            ]
        },
        {
            id: 5,
            name: {
                en: "Muhammad Yasir",
                ar: "محمد ياسر"
            },
            postTime: {
                en: "6 days ago",
                ar: "منذ 6 أيام"
            },
            postTitle: {
                en: "Tips for vertical gardens",
                ar: "نصائح لحدائق الجدار العمودية"
            },
            commentsCount: 34,
            images: [
                "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=400&h=250&fit=crop"
            ]
        },
        {
            id: 6,
            name: {
                en: "Muhammad Yasir",
                ar: "محمد ياسر"
            },
            postTime: {
                en: "1 week ago",
                ar: "منذ أسبوع"
            },
            postTitle: {
                en: "How to maintain cactus in summer?",
                ar: "كيفية العناية بالصبار في الصيف؟"
            },
            commentsCount: 77,
            images: [
                "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&h=250&fit=crop"
            ]
        }
    ];




    return (
        <div>
            <div className="p-4" dir={isArabic ? "rtl" : "ltr"}>
                <div className="max-w-7xl mx-auto">
                    <div className=" ml-4 font-base text-gray-800 mb-1 flex justify-between ">
                        <div className='text-start flex gap-3'>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 12.5C0 5.87258 5.37258 0.5 12 0.5C18.6274 0.5 24 5.87258 24 12.5C24 19.1274 18.6274 24.5 12 24.5C5.37258 24.5 0 19.1274 0 12.5Z" fill="#0C7A1F" fillOpacity="0.1" />
                                <path d="M16.3133 15.7187L16.5733 17.8254C16.6399 18.3787 16.0466 18.7654 15.5733 18.4787L13.2666 17.1054C13.1066 17.012 13.0666 16.812 13.1533 16.652C13.4866 16.0387 13.6666 15.3454 13.6666 14.652C13.6666 12.212 11.5733 10.2254 8.99993 10.2254C8.47326 10.2254 7.95993 10.3054 7.47993 10.4654C7.23326 10.5454 6.99326 10.3187 7.05326 10.0654C7.65993 7.6387 9.99326 5.83203 12.7799 5.83203C16.0333 5.83203 18.6666 8.29203 18.6666 11.3254C18.6666 13.1254 17.7399 14.7187 16.3133 15.7187Z" fill="#0C7A1F" />
                                <path d="M12.6663 14.6532C12.6663 15.4466 12.373 16.1799 11.8797 16.7599C11.2197 17.5599 10.173 18.0732 8.99967 18.0732L7.25967 19.1066C6.96634 19.2866 6.59301 19.0399 6.63301 18.6999L6.79967 17.3866C5.90634 16.7666 5.33301 15.7732 5.33301 14.6532C5.33301 13.4799 5.95967 12.4466 6.91967 11.8332C7.51301 11.4466 8.22634 11.2266 8.99967 11.2266C11.0263 11.2266 12.6663 12.7599 12.6663 14.6532Z" fill="#0C7A1F" />
                            </svg>

                            <p className='text-1xl font-Poppins' >{t('showPost')}</p>
                        </div>
                        <h1 className='text-[#0C7A1F] mr-2 text-1xl font-bold hover:cursor-pointer' >{t('viewAll')}</h1>
                    </div>


                    {/* post showing */}
                    <div
                        className="flex overflow-x-auto hide-scrollbar space-x-0 md:space-x-3  "
                    >
                        {sampleProducts.map((product) => (
                            <div
                                key={product.id}
                                className="flex-shrink-0 p-2"
                            >
                                <PostCard product={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowPostCard