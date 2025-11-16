import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const location = useLocation();

    useEffect(() => {
        // Force browser to allow manual control of scroll
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }

        // Absolutely force scroll to top
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }, 0);

    }, [location.key]); // 🔥 HashRouter FIX

    return null;
}
