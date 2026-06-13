// src/services/emailService.ts
import emailjs from '@emailjs/browser';

const PUBLIC_KEY        = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const SERVICE_ID        = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const USER_TEMPLATE_ID  = import.meta.env.VITE_EMAILJS_BOOKING_TEMPLATE;
const ADMIN_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE;

interface BookingDetails {
  name: string;
  email: string;
  type: string;
  duration: string;
  platform: string;
  date: Date;
  time: string;
  message?: string;
  timezone?: string;  // Added timezone field
}

export async function sendBookingEmails(booking: BookingDetails): Promise<boolean> {
  const dateStr = booking.date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const platformLabel = booking.platform === 'google' ? 'Google Meet' : 'Microsoft Teams';
  const timezoneInfo = booking.timezone || 'South Africa (GMT+2)';

  const userMessage = booking.message?.trim()
    ? booking.message.trim()
    : 'No additional message provided.';

  const adminMessage = booking.message?.trim()
    ? booking.message.trim()
    : 'No additional message provided.';

  // USER confirmation
  const userParams = {
    email:        booking.email,
    to_name:      booking.name,
    meeting_type: booking.type,
    duration:     booking.duration,
    platform:     platformLabel,
    date:         dateStr,
    time:         booking.time,
    timezone:     timezoneInfo,
    message:      userMessage,
  };

  // ADMIN notification
  const adminParams = {
    email:        booking.email,
    from_name:    booking.name,
    from_email:   booking.email,
    meeting_type: booking.type,
    duration:     booking.duration,
    platform:     platformLabel,
    date:         dateStr,
    time:         booking.time,
    timezone:     timezoneInfo,
    message:      adminMessage,
  };

  try {
    emailjs.init(PUBLIC_KEY);

    const userResult  = await emailjs.send(SERVICE_ID, USER_TEMPLATE_ID,  userParams);
    console.log('Confirmation sent to user: - emailService.ts:71', booking.email, userResult.status);

    const adminResult = await emailjs.send(SERVICE_ID, ADMIN_TEMPLATE_ID, adminParams);
    console.log('Notification sent to admin: - emailService.ts:74', adminResult.status);

    return true;
  } catch (error) {
    console.error('EmailJS error: - emailService.ts:78', error);
    return false;
  }
}