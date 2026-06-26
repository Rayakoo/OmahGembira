export function toDirectImageUrl(url: string): string {
  const driveMatch = url.match(/\/file\/d\/([^/]+)/)
  if (driveMatch) {
    return `https://drive.google.com/thumbnail?id=${driveMatch[1]}&sz=w1920`
  }
  return url
}
