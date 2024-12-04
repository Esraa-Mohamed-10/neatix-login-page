import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Translations
const resources = {
  en: {
    translation: {
      email: "Email",
      pass: "Password",
      login: "Login",
      switchLanguage: "ع",
      remember: "Remember Me",
      forgotPass: "Forgot Password?",
      guide: "Quick Guide",
      video: "Watch Video",
      help: "Need Help?",
      welcome: "Welcome Back!",
      welcomeText: "We’re glad to see you again. Please log in to continue",
      hello: "Hello Again!",
      helloText:
        "Log in to access your personalized dashboard and stay connected.",
        ready:'Ready to Dive In?',
        readyText:'Sign in to explore and enjoy all the features we’ve prepared for you.',
        start:'Let’s Get Started!',
        startText: 'Log in to unlock your journey with us."',
    },
  },
  ar: {
    translation: {
      email: "البريد الالكتروني",
      pass: "كلمة المرور",
      login: "تسجيل الدخول",
      switchLanguage: "en",
      remember: "تذكرني",
      forgotPass: "نسيت كلمة الدخول؟",
      guide: "جولة سريعة",
      video: "شاهد فيديو",
      help: "تحتاج مساعدة؟",
      welcome: "أهلاً وسهلاً",
      welcomeText: "نحن سعداء برؤيتك مرة أخرى. يرجى تسجيل الدخول للمتابعة",
      hello: "مرحباً مجدداً",
      helloText:
        "سجّل الدخول للوصول إلى لوحة التحكم المخصصة والبقاء على اتصال",
        ready:'هل أنت مستعد للبدء؟',
        readyText:'سجّل الدخول لاستكشاف والاستمتاع بجميع الميزات التي أعددناها لك.',
        start:'لنبدأ',
        startText: 'سجّل الدخول لبدء رحلتك معنا',
    },
  },
};

i18n
  .use(LanguageDetector) // Automatically detects user's language
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources,
    fallbackLng: "en", // Default language
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
