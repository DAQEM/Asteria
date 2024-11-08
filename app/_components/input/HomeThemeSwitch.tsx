"use client";

import ThemeController from "../../_lib/client/themeController";

const HomeThemeSwitch = () => {
    return (
        <button
            onClick={() => ThemeController.switchTheme()}
            className={
                "grid grid-cols-[120px,120px] grid-rows-[0, 1fr] bg-base-300 rounded-full"
            }
        >
            <div className="col-span-2 h-0">
                <div className="group-data-[theme=developer]/theme:ml-[120px] btn-primary w-[120px] h-10 rounded-full transition-all duration-300"></div>
            </div>
            <div className="py-2 px-4">
                <span>Player</span>
            </div>
            <div className="py-2 px-4">
                <span>Developer</span>
            </div>
        </button>
    );
};

export default HomeThemeSwitch;
