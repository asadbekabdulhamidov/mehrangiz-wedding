import { weddingData } from '../config/weddingData';

export function getGoogleCalendarUrl(): string {
  const startDate = new Date(weddingData.event.date);
  // Event duration: 5 hours
  const endDate = new Date(startDate.getTime() + 5 * 60 * 60 * 1000);

  const formatTime = (date: Date) => {
    return date.toISOString().replace(/-|:|\.\d\d\d/g, '');
  };

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: weddingData.event.calendarSummary,
    dates: `${formatTime(startDate)}/${formatTime(endDate)}`,
    details: `${weddingData.event.calendarDescription}\n\nManzil: ${weddingData.venue.name}, ${weddingData.venue.address}`,
    location: `${weddingData.venue.name}, ${weddingData.venue.address}`,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function downloadIcsFile(): void {
  const startDate = new Date(weddingData.event.date);
  const endDate = new Date(startDate.getTime() + 5 * 60 * 60 * 1000);

  const formatIcsDate = (date: Date) => {
    return date.toISOString().replace(/-|:|\.\d\d\d/g, '');
  };

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Jamshidbek & Mehrangis Wedding//UZ',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:wedding-${Date.now()}@jamshidbek-mehrangis.wedding`,
    `DTSTAMP:${formatIcsDate(new Date())}`,
    `DTSTART:${formatIcsDate(startDate)}`,
    `DTEND:${formatIcsDate(endDate)}`,
    `SUMMARY:${weddingData.event.calendarSummary}`,
    `DESCRIPTION:${weddingData.event.calendarDescription.replace(/\n/g, '\\n')}`,
    `LOCATION:${weddingData.venue.name}, ${weddingData.venue.address}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Jamshidbek-va-Mehrangis-Toy-Taklifnomasi.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
