import { trackEvent } from "./analytics";

export type PortfolioLanguage = "fr" | "en";

export type ScrollPercent = 25 | 50 | 75 | 100;

export type ProjectDestination = "live_demo";

export const AnalyticsEvents = {
    WHATSAPP_CLICK: "whatsapp_click",
    LINKEDIN_CLICK: "linkedin_click",
    EMAIL_CLICK: "email_click",
    GITHUB_CLICK: "github_click",
    PROJECT_VIEW: "project_view",
    PROJECT_CLICK: "project_click",
    SECTION_VIEW: "section_view",
    LANGUAGE_CHANGE: "language_change",
    SCROLL_PROGRESS: "scroll_progress",
    TIME_ON_SITE: "time_on_site",
} as const;

interface LanguageParams {
    language: PortfolioLanguage;
}

interface LocationParams {
    location: string;
}

interface ProjectParams extends LanguageParams {
    projectName: string;
    projectCategory?: string;
}

export function trackWhatsappClick({
    language,
    location,
}: LanguageParams & LocationParams): void {
    trackEvent(AnalyticsEvents.WHATSAPP_CLICK, {
        language,
        location,
    });
}

export function trackEmailClick({
    language,
    location,
}: LanguageParams & LocationParams): void {
    trackEvent(AnalyticsEvents.EMAIL_CLICK, {
        language,
        location,
    });
}

export function trackLinkedinClick({
    language,
    location,
}: LanguageParams & LocationParams): void {
    trackEvent(AnalyticsEvents.LINKEDIN_CLICK, {
        language,
        location,
    });
}

export function trackGithubClick({
    language,
    location,
}: LanguageParams & LocationParams): void {
    trackEvent(AnalyticsEvents.GITHUB_CLICK, {
        language,
        location,
    });
}

export function trackProjectView({
    language,
    projectName,
    projectCategory,
}: ProjectParams): void {
    trackEvent(AnalyticsEvents.PROJECT_VIEW, {
        language,
        project_name: projectName,
        project_category: projectCategory ?? "unknown",
    });
}

export function trackProjectClick({
    language,
    projectName,
    projectCategory,
    destination,
}: ProjectParams & {
    destination: ProjectDestination;
}): void {
    trackEvent(AnalyticsEvents.PROJECT_CLICK, {
        language,
        project_name: projectName,
        project_category: projectCategory ?? "unknown",
        destination,
    });
}

export function trackSectionView({
    language,
    sectionName,
}: LanguageParams & {
    sectionName: string;
}): void {
    trackEvent(AnalyticsEvents.SECTION_VIEW, {
        language,
        section_name: sectionName,
    });
}

export function trackLanguageChange({
    previousLanguage,
    newLanguage,
}: {
    previousLanguage: PortfolioLanguage;
    newLanguage: PortfolioLanguage;
}): void {
    trackEvent(AnalyticsEvents.LANGUAGE_CHANGE, {
        previous_language: previousLanguage,
        language: newLanguage,
    });
}

export function trackScrollProgress({
    language,
    percent,
}: LanguageParams & {
    percent: ScrollPercent;
}): void {
    trackEvent(AnalyticsEvents.SCROLL_PROGRESS, {
        language,
        percent,
    });
}

export function trackTimeOnSite({
    language,
    seconds,
}: LanguageParams & {
    seconds: number;
}): void {
    trackEvent(AnalyticsEvents.TIME_ON_SITE, {
        language,
        seconds,
    });
}

