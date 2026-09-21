const SOCIAL_URLS = {
  line: LINE_URL,
  facebook: FACEBOOK_URL,
  instagram: INSTAGRAM_URL,
};

document.querySelectorAll("[data-social]").forEach((link) => {
  const url = SOCIAL_URLS[link.dataset.social];

  if (url) {
    link.href = url;
  }
});
