import ReactGA from "react-ga4";

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

export function initAnalytics(): void {


    if (!measurementId) {
        console.warn("Google Analytics Measurement ID is missing.");
        return;
    }

    ReactGA.initialize(measurementId);


}

export function trackPageView(path: string): void {
    ReactGA.send({
        hitType: "pageview",
        page: path,
    });
}

export function trackEvent(
    name: string,
    params: Record<string, string | number | boolean> = {},
): void {
    ReactGA.event(name, params);
}