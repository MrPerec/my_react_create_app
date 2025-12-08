export default function formatRedditDate(timestamp: number): string {
  const date = new Date(timestamp * 1000);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  // Функция для склонения числительных
  const pluralize = (number: number, words: [string, string, string]): string => {
    const cases = [2, 0, 1, 1, 1, 2];
    const index = number % 100 > 4 && number % 100 < 20 ? 2 : cases[Math.min(number % 10, 5)];
    return `${number} ${words[index]}`;
  };

  if (diffInSeconds < 60) {
    // секунды
    const seconds = diffInSeconds;
    const words: [string, string, string] = ['секунда', 'секунды', 'секунд'];
    return `${pluralize(seconds, words)} назад`;
  }

  if (diffInSeconds < 3600) {
    // минуты
    const minutes = Math.floor(diffInSeconds / 60);
    const words: [string, string, string] = ['минута', 'минуты', 'минут'];
    return `${pluralize(minutes, words)} назад`;
  }

  if (diffInSeconds < 86400) {
    // часы
    const hours = Math.floor(diffInSeconds / 3600);
    const words: [string, string, string] = ['час', 'часа', 'часов'];
    return `${pluralize(hours, words)} назад`;
  }

  if (diffInSeconds < 2592000) {
    // дни
    const days = Math.floor(diffInSeconds / 86400);
    const words: [string, string, string] = ['день', 'дня', 'дней'];
    return `${pluralize(days, words)} назад`;
  }

  if (diffInSeconds < 31536000) {
    // месяцы (примерно)
    const months = Math.floor(diffInSeconds / 2592000);
    const words: [string, string, string] = ['месяц', 'месяца', 'месяцев'];
    return `${pluralize(months, words)} назад`;
  }

  // годы
  const years = Math.floor(diffInSeconds / 31536000);
  const words: [string, string, string] = ['год', 'года', 'лет'];
  return `${pluralize(years, words)} назад`;
}
