"use client";

import ThemeController from "@/app/_lib/client/themeController";

const ThemeSelector = ({
    theme,
    checked,
}: {
    theme: Theme;
    checked: boolean;
}) => {
    function handleThemeChange() {
        const radio = document.getElementById(
            "theme-selector-" + theme
        ) as HTMLInputElement;
        radio.checked = true;
        ThemeController.setTheme(theme);
    }

    return (
        <button onClick={() => handleThemeChange()} data-theme={theme}>
            <div className="simple-card p-0 overflow-hidden">
                <div className="bg-base-200 p-4">
                    <div className="bg-base-100 rounded-xl p-4">
                        <div className="grid grid-cols-[3rem,1fr] gap-4">
                            <div className="bg-primary size-12 rounded-lg"></div>
                            <div className="text-start">
                                <h3 className="text-lg font-semibold capitalize">
                                    <span>{theme}</span>
                                </h3>
                                <p>Example theme text.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-base-300 capitalize flex gap-2 items-center px-4 py-2">
                    <input
                        id={"theme-selector-" + theme}
                        type="radio"
                        name="theme-selector"
                        className="radio radio-primary border-[3px] !m-0"
                        defaultChecked={checked}
                    />
                    <span>{theme}</span>
                </div>
            </div>
        </button>
    );
};

export default ThemeSelector;
