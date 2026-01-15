import { useState, useEffect } from "react";
import { Globe, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "ar", name: "العربية", flag: "🇦🇪" },
  { code: "zh-CN", name: "中文", flag: "🇨🇳" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
];

export const LanguageSelector = () => {
  const [currentLang, setCurrentLang] = useState("en");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add Google Translate script
    const addScript = () => {
      const script = document.createElement("script");
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: languages.map((l) => l.code).join(","),
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
      setIsLoaded(true);
    };

    // Check if script already exists
    if (!document.querySelector('script[src*="translate.google.com"]')) {
      addScript();
    }

    // Hide Google Translate bar
    const style = document.createElement("style");
    style.innerHTML = `
      .goog-te-banner-frame, .goog-te-balloon-frame { display: none !important; }
      .goog-te-menu-frame { box-shadow: 0 4px 20px rgba(0,0,0,0.3) !important; }
      body { top: 0 !important; }
      .skiptranslate { display: none !important; }
      #google_translate_element { display: none !important; }
      .goog-te-gadget { display: none !important; }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const changeLanguage = (langCode: string) => {
    setCurrentLang(langCode);
    
    // Trigger Google Translate
    const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event("change"));
    }
  };

  const currentLanguage = languages.find((l) => l.code === currentLang) || languages[0];

  return (
    <>
      <div id="google_translate_element" style={{ display: "none" }} />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="gap-2 text-foreground hover:text-primary">
            <Globe size={18} />
            <span className="hidden sm:inline">{currentLanguage.flag}</span>
            <ChevronDown size={14} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48 bg-card border-border">
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`cursor-pointer ${currentLang === lang.code ? "bg-accent" : ""}`}
            >
              <span className="mr-2">{lang.flag}</span>
              {lang.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
