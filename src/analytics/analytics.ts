import ReactGA from "react-ga4";

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

let isAnalyticsInitialized = false;

export function initAnalytics(): void {
    if (!measurementId) {
        console.warn(
            "Google Analytics Measurement ID is missing. Add VITE_GA_MEASUREMENT_ID to your environment variables.",
        );

        return;
    }

    if (isAnalyticsInitialized) {
        return;
    }

    ReactGA.initialize(measurementId, {
        testMode: import.meta.env.DEV,
    });

    isAnalyticsInitialized = true;
}

export function trackPageView(path: string, title?: string): void {
    if (!measurementId) {
        return;
    }

    ReactGA.send({
        hitType: "pageview",
        page: path,
        title: title ?? document.title,
    });
}

export function trackEvent(
    name: string,
    params: Record<string, string | number | boolean | undefined> = {},
): void {
    if (!measurementId) {
        return;
    }

    ReactGA.event(name, params);
}