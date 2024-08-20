import { getCookie, setCookie } from "cookies-next";

class ThemeController {
    static themeCookieName = "theme";
    static player = "player";
    static developer = "developer";

    static getTheme() {
        return getCookie(this.themeCookieName) === this.developer
            ? this.developer
            : this.player;
    }

    static setTheme(theme: string) {
        setCookie(this.themeCookieName, theme);
        document.documentElement.setAttribute("data-theme", theme);
    }

    static switchTheme() {
        this.setTheme(this.isDeveloperTheme() ? this.player : this.developer);
    }

    static isPlayerTheme() {
        return this.getTheme() === this.player;
    }

    static isDeveloperTheme() {
        return this.getTheme() === this.developer;
    }
}

export default ThemeController;
