import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleNavbar } from "../../redux/uiSlice";
import { setLanguage } from "../../redux/languageSlice";
import { useTranslation } from "react-i18next";

const languages = {
  en: { name: "English", flag: "/en.webp" },
  ar: { name: "العربية", flag: "/ar.png" },
};

function Navbar() {
  const dispatch = useDispatch();
  const navbarOpen = useSelector((state) => state.ui.navbarOpen);

  const { t, i18n } = useTranslation();
  const lang = useSelector((state) => state.language.lang);
  const [open, setOpen] = useState(false);

  const isArabic = lang === "ar";

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    dispatch(setLanguage(lng));
    setOpen(false);
  };

  return (
    <nav
      className={`bg-[#E7F2E9]  py-6 md:py-0 px-6 shadow-md ${isArabic ? "text-right" : "text-left"
        }`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl py-0 md:py-2 mx-auto relative   ">
        {/* logo */}
        <div className={`absolute top-1/2 transform -translate-y-1/2 ${isArabic ? "right-0" : "left-0"} `}>
          <img src="/logo.png" alt="Logo" className="h-8" />
        </div>


        <div className={`hidden md:flex items-center gap-6 justify-end  py-2 ${isArabic ? "left-0 " : "right-0 "}`}>
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className={`flex items-center gap-2  px-8  py-1  ${isArabic ? "border-l-1" : "border-r-1"} border-[#D9D9D9]`}
            >
              <img
                src={languages[lang].flag}
                alt={languages[lang].name}
                className="w-5 h-5 rounded-full"
              />
              <span className="text-sm font-medium">{languages[lang].name}</span>
            </button>

            {open && (
              <div className={`absolute mt-2 bg-[#E7F2E9] rounded-lg shadow-md w-36 z-50 ${isArabic ? "left-0" : "right-0"}`}>
                {Object.keys(languages).map((lng) => (
                  <button
                    key={lng}
                    onClick={() => changeLanguage(lng)}
                    className="flex items-center gap-2 w-full px-3 py-2 text-sm "
                  >
                    <img
                      src={languages[lng].flag}
                      alt={languages[lng].name}
                      className="w-5 h-5 rounded-full"
                    />
                    <span>{languages[lng].name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Login & Signup */}
          <div className="flex items-center gap-2 font-poppins text-[#00000099]">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <path
                d="M9 16.3125C9.825 16.3125 10.5 15.6375 10.5 14.8125H7.5C7.5 15.6375 8.1675 16.3125 9 16.3125ZM13.5 11.8125V8.0625C13.5 5.76 12.27 3.8325 10.125 3.3225V2.8125C10.125 2.19 9.6225 1.6875 9 1.6875C8.3775 1.6875 7.875 2.19 7.875 2.8125V3.3225C5.7225 3.8325 4.5 5.7525 4.5 8.0625V11.8125L3 13.3125V14.0625H15V13.3125L13.5 11.8125Z"
                fill="#6B7280"
              />
            </svg>
            <p className="text-sm">
              <span className="hover:underline cursor-pointer">{t("login")}</span>
              <span className="mx-1">/</span>
              <span className="hover:underline cursor-pointer">{t("signup")}</span>
            </p>
          </div>

          {/* button */}
          <button className="bg-[#0C7A1F] text-white px-12 py-2 rounded hover:bg-green-800 transition">
            {t("createListButton")}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className={`md:hidden absolute top-1/2 transform -translate-y-1/2 ${isArabic ? "left-0" : "right-0"}`}>
          <button onClick={() => dispatch(toggleNavbar())}>
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {navbarOpen && (
        <div className="md:hidden mt-8 space-y-4 px-4">
          {/* Mobile Language Selector */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 bg-[#E7F2E9]   rounded-lg  w-full"
            >
              <img
                src={languages[lang].flag}
                alt={languages[lang].name}
                className="w-5 h-5 rounded-full"
              />
              <span className="text-sm font-medium">{languages[lang].name}</span>
            </button>

            {open && (
              <div className="absolute mt-2 left-0  bg-[#E7F2E9] shadow-md w-36 z-50">
                {Object.keys(languages).map((lng) => (
                  <button
                    key={lng}
                    onClick={() => changeLanguage(lng)}
                    className="flex items-center gap-2 w-full px-3 py-2 text-sm "
                  >
                    <img
                      src={languages[lng].flag}
                      alt={languages[lng].name}
                      className="w-5 h-5 rounded-full"
                    />
                    <span>{languages[lng].name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* login and signup */}
          <div className="flex items-center gap-2 font-poppins text-[#00000099]">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <path
                d="M9 16.3125C9.825 16.3125 10.5 15.6375 10.5 14.8125H7.5C7.5 15.6375 8.1675 16.3125 9 16.3125ZM13.5 11.8125V8.0625C13.5 5.76 12.27 3.8325 10.125 3.3225V2.8125C10.125 2.19 9.6225 1.6875 9 1.6875C8.3775 1.6875 7.875 2.19 7.875 2.8125V3.3225C5.7225 3.8325 4.5 5.7525 4.5 8.0625V11.8125L3 13.3125V14.0625H15V13.3125L13.5 11.8125Z"
                fill="#6B7280"
              />
            </svg>
            <p className="text-sm">
              <span className="hover:underline cursor-pointer">{t("login")}</span>
              <span className="mx-1">/</span>
              <span className="hover:underline cursor-pointer">{t("signup")}</span>
            </p>
          </div>

          {/* button */}
          <button className="w-full bg-[#0C7A1F] text-white py-2 rounded">
            {t("createListButton")}
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

