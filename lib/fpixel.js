export const FB_PIXEL_ID = "1566161417361183";

export const pageview = () => {
  window.fbq("track", "PageView");
};

export const event = (name, options = {}) => {
  window.fbq("track", name, options);
};
