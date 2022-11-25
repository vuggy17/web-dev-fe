import * as gtag from "../gtag";
export function openHamburgerMenu() {
  gtag.event({
    action: "open_hamburgerMenu",
    category: "Layout",
    label: "label - expand hamburger",
    value: "value - open hamburger",
  });
}
export function useMobileFooter() {
  gtag.event({
    action: "use_mobile_footer",
    category: "Layout",
    label: "label - Change Page",
    value: "value - somepage",
  });
}
