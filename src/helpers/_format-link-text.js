
export const formatLinkText = (url) => url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0];