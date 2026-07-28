import { trackEvent } from "./analytics";

export type PortfolioLanguage = "fr" | "en";

interface BaseEventParams {
    language: PortfolioLanguage;
}

interface ProjectEventParams extends BaseEventParams {
    projectName: string;
    projectCategory?: string;
}

export function trackWhatsappClick({
    language,
    location,
}: BaseEventParams & {
    location: string;
}): void {
    trackEvent("whatsapp_click", {
        language,
        location,
    });
}

export function trackEmailClick({
    language,
    location,
}: BaseEventParams & {
    location: string;
}): void {
    trackEvent("email_click", {
        language,
        location,
    });
}

export function trackLinkedinClick({
    language,
    location,
}: BaseEventParams & {
    location: string;
}): void {
    trackEvent("linkedin_click", {
        language,
        location,
    });
}

export function trackGithubClick({
    language,
    location,
}: BaseEventParams & {
    location: string;
}): void {
    trackEvent("github_click", {
        language,
        location,
    });
}



export function trackLanguageChange({
    previousLanguage,
    newLanguage,
}: {
    previousLanguage: PortfolioLanguage;
    newLanguage: PortfolioLanguage;
}): void {
    trackEvent("language_change", {
        previous_language: previousLanguage,
        language: newLanguage,
    });
}

export function trackProjectView({
    language,
    projectName,
    projectCategory,
}: ProjectEventParams): void {
    trackEvent("project_view", {
        language,
        project_name: projectName,
        project_category: projectCategory,
    });
}

export function trackProjectClick({
    language,
    projectName,
    projectCategory,
    destination,
}: ProjectEventParams & {
    destination: "demo" | "github" | "details";
}): void {
    trackEvent("project_click", {
        language,
        project_name: projectName,
        project_category: projectCategory,
        destination,
    });
}

export function trackSectionView({
    language,
    sectionName,
}: BaseEventParams & {
    sectionName: string;
}): void {
    trackEvent("section_view", {
        language,
        section_name: sectionName,
    });
}

export function trackScrollProgress({
    language,
    percent,
}: BaseEventParams & {
    percent: 25 | 50 | 75 | 100;
}): void {
    trackEvent("scroll_progress", {
        language,
        percent,
    });
}

export function trackTimeOnSite({
    language,
    seconds,
}: BaseEventParams & {
    seconds: number;
}): void {
    trackEvent("time_on_site", {
        language,
        seconds,
    });
}

