import { languages } from "./Languages";

export default function Button({
  file,
  setFile,
  activeLang,
  setActiveLang,
  setCode,
}) {
  const handleLanguageClick = (lang) => {
    setActiveLang(lang);
    setFile(lang.file);
    setCode(lang.helloWorld);
  };

  return (
    <>
      <div className="flex flex-col gap-1 mt-1">
        {languages.map((lang) => (
          <button
            key={lang.key}
            onClick={() => handleLanguageClick(lang)}
            data-active={activeLang.key === lang.key}
            className="
          flex flex-col items-center justify-center
          gap-1
          rounded-md
        bg-zinc-900
          py-2
          border border-[#1e1e1e]
         text-zinc-300
          transition-colors
         hover:text-white
          focus:outline-none 
           data-[active=true]:bg-[#1e1e1e]
           data-[active=true]:text-white
          duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            aria-label={`${lang.name} file`}
          >
            <img
              src={lang.icon}
              alt=""
              aria-hidden="true"
              className="h-5 w-5 sm:h-6 sm:w-6 opacity-90"
            />
            <span className="text-[10px] sm:text-[11px] font-medium leading-none">
              {lang.name}
            </span>
          </button>
        ))}
      </div>
    </>
  );
}
