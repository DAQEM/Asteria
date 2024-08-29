import ThemeSelector from "@/app/_components/theme/ThemeSelector";
import { cookies } from "next/headers";

export default function Page() {
    const cookiesStore = cookies();

    return (
        <div className="simple-card">
            <h2 className="text-2xl font-semibold">
                <span>Theme</span>
            </h2>
            <p>Choose your preferred theme.</p>
            <div className="grid lg:grid-cols-2 gap-4 mt-4">
                <ThemeSelector
                    theme="player"
                    checked={
                        !cookiesStore.get("theme") ||
                        cookiesStore.get("theme")?.value === "player"
                    }
                />
                <ThemeSelector
                    theme="developer"
                    checked={cookiesStore.get("theme")?.value === "developer"}
                />
            </div>
        </div>
    );
}
