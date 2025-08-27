import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // navbar 1
      login: "Login",
      signup: "SignUp",
      createListButton: "Create New Listing",
      // footer
      welcome: "Welcome!",
      description: "The Landscaper is a comprehensive platform designed to cater to the diverse needs of landscaping enthusiasts and professionals. The platform offers a wide range of features to facilitate the creation, management, and discovery of landscaping projects, equipment, and services.",
      companyName: "The Landscaper",
      allRightsReserved: "All Rights Reserved.",
      company: "Company",
      aboutUs: "About Us",
      contactUs: "Contact Us",
      newsEvents: "News and Events",
      visitNetwork: "Visit Landscape Network",
      faq: "FAQ",
      privacyPolicy: "Privacy Policy",
      terms: "Terms & Conditions",
      socialMedia: "Social Media",
      facebook: "Facebook",
      twitter: "Twitter",
      linkedIn: "LinkedIn",

      // product showing
      viewAll: "View all",
      popularProject:"Popular Projects",
      PopularMachineriesForRent :"Popular Machineries for Rent",
      PopularMachineriesForSale : "Popular Machineries for Sale",
      PopularTreesForSale :"Popular Trees for Sale",
      PopularAgro:"Popular Agro Chemicals for Sale",

      // second navbar
      navbar: {
        "projects": "Projects",
        "machineries": "Machineries",
        "tools": "Tools",
        "trees": "Trees",
        "chemicals": "Agro Chemicals",
        "seeds": "Seeds",
        "farms": "Farms",
        "transport": "Movers",
        "landscapeNetwork": "Landscape Network"
      },

      // banner
      banner: {
        title: "Create your dream landscaping today!",
        search: "Search",
        searchPlaceHolder: "Search for anything",
        emirates: [
          "All Emirates",
          "Abu Dhabi",
          "Dubai",
          "Sharjah",
          "Ajman",
          "Fujairah",
          "Ras Al Khaimah",
          "Umm Al Quwain",
        ],
        categories: [
          "All Categories",
          "Machineries",
          "Tools",
          "Trees",
          "Agro Chemicals",
          "Seeds",
          "Transport",
        ]
      }
    }
  },
  ar: {
    translation: {
      // navbar 1
      login: "تسجيل الدخول",
      signup: "التسجيل",
      createListButton: "إنشاء قوائم جديدة",

      // footer
      welcome: "مرحبًا!",
      description: "  هو منصة شاملة مصممة لتلبية الاحتياجات المتنوعة لعشاق ومحترفي تنسيق الحدائق. تقدم المنصة مجموعة واسعة من الميزات لتسهيل إنشاء وإدارة واكتشاف مشاريع وخدمات ومعدات تنسيق الحدائق.المصمم الخارجي ",
      companyName: "المصمم الخارجي",
      allRightsReserved: "جميع الحقوق محفوظة.",
      company: "الشركة",
      aboutUs: "معلومات عنا",
      contactUs: "تواصل معنا",
      newsEvents: "الأخبار والفعاليات",
      visitNetwork: "زيارة المنتدى",
      faq: "الأسئلة الشائعة",
      privacyPolicy: "سياسة الخصوصية",
      terms: "الشروط والأحكام",
      socialMedia: "وسائل التواصل الاجتماعي",
      facebook: "فيسبوك",
      twitter: "تويتر",
      linkedIn: "لينكد إن",

      // product showing
      viewAll: "عرض الكل",
      popularProject:"المشاريع الشعبية",
      PopularMachineriesForRent :"العناصر الشائعة في الآلات للإيجار",
      PopularMachineriesForSale : "العناصر الشائعة في الآلات للبيع",
      PopularTreesForSale :"العناصر الشائعة في قسم الأشجار للبيع",
      PopularAgro:"العناصر الشائعة في الأسمدة للبيع",

      // second navbar
      navbar: {
        "projects": "المشاريع",
        "machineries": "الآلات",
        "tools": "أدوات",
        "trees": "الأشجار",
        "chemicals": "الأسمدة",
        "seeds": "البذور",
        "farms": "المزارع",
        "transport": "النقل",
        "landscapeNetwork": "المنتدى"
      },

      // banner
      banner: {
        title: "أنشئ تنسيق الحدائق الذي تحلم به اليوم!",
        search: "البحث",
        searchPlaceHolder: "ابحث عن أي شيء",
        emirates: [
          "جميع المدن",
          "أبو ظبي",
          "دبي",
          "الشارقة",
          "عجمان",
          "الفجيرة",
          "رأس الخيمة",
          "أم القيوين"
        ],
        categories: [
          "جميع الفئات",
          "الآلات",
          "أدوات",
          "الأشجار",
          "الأسمدة",
          "البذور",
          "النقل",
        ]
      }
    }
  },
};
const savedLanguage = localStorage.getItem("language") || "en";


i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
