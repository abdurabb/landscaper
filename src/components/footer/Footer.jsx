import React from "react";
import { useTranslation } from "react-i18next";


function Footer() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <footer className="bg-[#F9FAFB] py-10 ">
      <div
        className={`max-w-7xl mx-auto px-6 grid gap-8 md:grid-cols-[2fr_1fr_1fr] text-gray-600 ${isArabic ? "text-right" : "text-left"}`}
        dir={isArabic ? "rtl" : "ltr"}
      >
        <div className=" ">
          <img src={'logo.png'} alt="Landscaper" className="h-8 mb-4" />
          <p className="mb-6 font-poppins font-normal text-sm">
            {t("description")}
          </p>
          <p className="text-sm text-gray-400">
            © {t("companyName")} 2025, {t("allRightsReserved")}
          </p>
        </div>

        {/* Company Links */}
        <div className="ml:0 md:ml:4">
          <h3 className="text-lg font-semibold mb-4">{t("company")}</h3>
          <div className="flex-block md:flex gap-6">
            <ul className="space-y-2 text-green-700  md:gap-y-2 md:space-y-0">
              <li><a href="#">{t("aboutUs")}</a></li>
              <li><a href="#">{t("contactUs")}</a></li>
              <li><a href="#">{t("newsEvents")}</a></li>
              <li><a href="#">{t("visitNetwork")}</a></li>
            </ul>

            <ul className="space-y-2 text-green-700  md:gap-y-2 md:space-y-0">
              <li><a href="#">{t("faq")}</a></li>
              <li><a href="#">{t("privacyPolicy")}</a></li>
              <li><a href="#">{t("terms")}</a></li>
            </ul>
          </div>
          {/* md:grid md:grid-cols-2 */}

        </div>

        {/* Social Media */}
        <div className="ml:0 md:ml-24">
          <h3 className="text-lg font-semibold mb-4">{t("socialMedia")}</h3>
          <ul className="space-y-2 text-green-700">
            <li><a href="#" className="">{t("facebook")}</a></li>
            <li><a href="#" className="">{t("twitter")}</a></li>
            <li><a href="#" className="">{t("linkedIn")}</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
