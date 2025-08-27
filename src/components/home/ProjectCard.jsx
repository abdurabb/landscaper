import React from "react";
import { useSelector } from "react-redux";

function ProjectCard({ product }) {
    const lang = useSelector((state) => state.language.lang);
    const isArabic = lang === "ar";
    const title = product?.title ? product?.title[lang] || product?.title["en"] : "";
    const company = product?.company ? product?.company[lang] || product?.company["en"] : "";

    return (
        <div
            dir={isArabic ? "rtl" : "ltr"}
            className="max-w-xs bg-white mt-2 rounded-xl  shadow-sm overflow-hidden">
            <img
                src={`${product?.image ? product?.image : "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop"}`}
                alt="Artificial turf solutions"
                className="w-full h-40 object-cover"
            />

            <div className="p-4">
                <h3 className="text-gray-900 font-semibold text-base">
                    {title}
                </h3>
                <p className="text-gray-500 text-sm">{company}</p>
            </div>
        </div>
    );
}

export default ProjectCard;
