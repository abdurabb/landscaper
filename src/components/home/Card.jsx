import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSelector } from "react-redux";

function ProductCard({ product }) {
    const lang = useSelector((state) => state.language.lang);
    const isArabic = lang === "ar";


    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [isHovered, setIsHovered] = useState(false);


    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) =>
            prev === product.images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) =>
            prev === 0 ? product.images.length - 1 : prev - 1
        );
    };

    const toggleWishlist = (e) => {
        e.stopPropagation();
        setIsWishlisted(!isWishlisted);
    };

    // content
    const title = product?.title ? product?.title[lang] || product?.title["en"] : "";
    const company = product?.company ? product?.company[lang] || product?.company["en"] : "";
    const price = product?.price
    const priceCalculation = product?.priceCal ? product?.priceCal[lang] || product?.priceCal["en"] : ""
    const location = product?.location ? product.location[lang] || product.location["en"] : ""

    return (
        <div
            className={`relative w-[220px] sm:w-[240px] md:w-[280px] bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 cursor-pointer group
                ${isHovered ? 'border-2 border-[#0C7A1F] shadow-xl scale-[1.02] ' : 'border border-gray-200 pb-4'}`}
            dir={isArabic ? "rtl" : "ltr"}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image Section */}
            <div className="relative h-[160px] overflow-hidden">
                <img
                    src={product.images[currentImageIndex]}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Wishlist Button */}
                <button
                    onClick={toggleWishlist}
                    className="absolute top-2 right-2 w-6 h-6 bg-[#F3F4F6] rounded-full shadow flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                    <svg
                        className={`w-4 h-4 ${isWishlisted ? 'text-red-500' : 'text-gray-400'}`}
                        width="14"
                        height="12"
                        viewBox="0 0 12 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.4201 1.30591C10.1647 1.05041 9.86147 0.847736 9.52774 0.709455C9.19401 0.571174 8.8363 0.5 8.47506 0.5C8.11382 0.5 7.75611 0.571174 7.42238 0.709455C7.08865 0.847736 6.78544 1.05041 6.53006 1.30591L6.00006 1.83591L5.47006 1.30591C4.95421 0.790067 4.25458 0.500267 3.52506 0.500267C2.79554 0.500267 2.09591 0.790067 1.58006 1.30591C1.06421 1.82176 0.774414 2.5214 0.774414 3.25091C0.774414 3.98043 1.06421 4.68007 1.58006 5.19591L2.11006 5.72591L6.00006 9.61591L9.89006 5.72591L10.4201 5.19591C10.6756 4.94054 10.8782 4.63732 11.0165 4.30359C11.1548 3.96986 11.226 3.61216 11.226 3.25091C11.226 2.88967 11.1548 2.53196 11.0165 2.19824C10.8782 1.86451 10.6756 1.56129 10.4201 1.30591Z"
                            fill="currentColor"
                        />
                    </svg>
                </button>

                {/* Image Navigation */}
                {product.images.length > 1 && (
                    <>
                        <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 bg-white/70 bg-opacity-80 rounded-full border border-[#F9FAFB] shadow-md flex items-center justify-center text-[#0000008F]"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>

                        <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 bg-white/70 bg-opacity-80 rounded-full border border-[#F9FAFB] shadow-md flex items-center justify-center text-[#0000008F]"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>

                        {/* Image Dots Indicator */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                            {product.images.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-1.5 h-1.5 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                                        }`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* Content Section */}
            <div className={`p-3 gap-2 `}>
                {title && <> <h3 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-2"> {title} </h3></>}
                {company && <> <p className="text-gray-500 text-xs mb-2 line-clamp-1">{company}</p></>}
                {location && <div className='flex items-center gap-2'>
                    <svg width="12" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5 5C10.5 8.5 6 11.5 6 11.5C6 11.5 1.5 8.5 1.5 5C1.5 3.80653 1.97411 2.66193 2.81802 1.81802C3.66193 0.974106 4.80653 0.5 6 0.5C7.19347 0.5 8.33807 0.974106 9.18198 1.81802C10.0259 2.66193 10.5 3.80653 10.5 5Z" stroke="#7AAF7B" strokeWidth="0.833333" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 6.5C6.82843 6.5 7.5 5.82843 7.5 5C7.5 4.17157 6.82843 3.5 6 3.5C5.17157 3.5 4.5 4.17157 4.5 5C4.5 5.82843 5.17157 6.5 6 6.5Z" stroke="#7AAF7B" strokeWidth="0.833333" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {location}
                </div>}
                {price && <div>
                    <span className='flex gap-1'><span className='text-[#0C7A1F]' >AED {price}  </span> {priceCalculation ? <>
                        <p className='text-[#9E9E9E]'> /  {priceCalculation}</p>
                    </> : <></>} </span>
                </div>}
            </div>


            <div
                className={`w-full bg-[#0C7A1F] text-white text-xs text-center overflow-hidden transition-all duration-300
    ${isHovered ? 'py-4 max-h-12' : 'py-0 max-h-0'}`}
            >
                {isArabic ? "سؤال" : "Enquiry"}
            </div>
        </div>

    );
}

export default ProductCard;
