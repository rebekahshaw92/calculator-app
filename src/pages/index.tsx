import Calculator from "@/components/calculator";
import { useState, useEffect } from "react";
import Footer from "@/components/footer";
export default function Home() {
  const [theme, setTheme] = useState<string>('theme1');

  const handleThemeChange = (selectedTheme: string) => {
    setTheme(selectedTheme);
  }

  useEffect(() => {
    const body = document.body;

    if (theme === 'theme1') {
      body.style.backgroundColor = "hsl(222, 26%, 31%)";
    } else if (theme === 'theme2') {
      body.style.backgroundColor = "hsl(0, 0%, 90%)";
    } else if (theme === 'theme3') {
      body.style.backgroundColor = "hsl(268, 75%, 9%)";
    }

    return () => {
      body.style.backgroundColor = "";
    };
  }, [theme]);



  return (
    <div className={`body w-full lg:w-5/12 md:w-7/12 md:mx-auto ${theme}`}>
      <div className="header flex items-center justify-between mt-[50px]">
        <div>
          <h1 className="title text-2xl lg:text-4xl mx-5">calc</h1>
        </div>


        <div className="flex items-center">
          <h6 className="uppercase theme text-[12px] lg:text-base text-center">Theam</h6>
          <div className="tw-toggle flex rounded-full w-[70px] lg:w-[100px] lg:h-[30px] mx-5 px-2">
            {["theme1", "theme2", "theme3"].map((themeOption, index) => (
              <div key={themeOption} className="flex items-center space-x-2">
                <input
                  className={`button h-[10px] w-[10px] lg:h-[15px] lg:w-[15px] rounded-full cursor-pointer 
                    ${theme === themeOption ? "opacity-100" : "opacity-0"} 
                    ${theme === themeOption ?
                      theme === "theme1" ? "bg-[#D03F2F] hover:bg-[#fb6251]" :
                        theme === "theme2" ? "bg-[#CA5502] hover:bg-[#ff8b38]" : "bg-[#00E0D1] hover:bg-[#94fffa]" : "opacity-0"}`}
                  type="radio"
                  name="toggle"
                  id={themeOption}
                  checked={theme === themeOption}
                  onChange={() => handleThemeChange(themeOption)}
                />
                <label htmlFor={themeOption} className="text-[12px] lg:text-base cursor-pointer relative -top-4 -left-4 lg:-top-7 lg:-left-5">
                  {index + 1}
                </label>
              </div>
            ))}

          </div>
        </div>
      </div>

      <Calculator />

      <Footer />
    </div>
  );
}
