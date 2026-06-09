// Build a LINE Official Account deep link that opens a chat with @manachai
// and pre-fills a message. Uses LINE's oaMessage scheme so customers can
// order in one tap instead of typing from scratch.
const LINE_OA_ID = "%40manachai"; // @manachai, URL-encoded

export function lineOrderUrl(message: string): string {
  return `https://line.me/R/oaMessage/${LINE_OA_ID}/?${encodeURIComponent(
    message
  )}`;
}
