export default function formatRedditDate(timestamp: number): string {
  const date = new Date(timestamp * 1000);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} секунд назад`;
  } else if (diffInSeconds < 3600) {
    return `${Math.floor(diffInSeconds / 60)} минут назад`;
  } else if (diffInSeconds < 86400) {
    return `${Math.floor(diffInSeconds / 3600)} часов назад`;
  } else if (diffInSeconds < 2592000) {
    return `${Math.floor(diffInSeconds / 86400)} дней назад`;
  } else {
    return date.toLocaleDateString('ru-RU');
  }
}
