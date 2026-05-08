const CALENDAR_ID = 'c_im5749fiebti9nh10jvc3n8uhg@group.calendar.google.com';
const API_KEY     = 'AIzaSyA3yisd42pJElQHE7zLrH851Wn7Z-nFKdg';
const MAX_RESULTS = 8;

async function fetchEvents() {
  const now       = new Date().toISOString();
  const encodedId = encodeURIComponent(CALENDAR_ID);
  const url       = `https://www.googleapis.com/calendar/v3/calendars/${encodedId}/events`
                  + `?key=${API_KEY}`
                  + `&timeMin=${now}`
                  + `&maxResults=${MAX_RESULTS}`
                  + `&orderBy=startTime`
                  + `&singleEvents=true`;

  const response = await fetch(url);
  if (!response.ok) throw new Error(`API error: ${response.status} ${response.statusText}`);
  const data = await response.json();
  return data.items || [];
}

function formatDateTime(dateStr, isAllDay) {
  if (isAllDay) {
    const [y, m, d] = dateStr.split('-');
    const date = new Date(y, m - 1, d);
    return date.toLocaleDateString('en-US', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
  }
  const date = new Date(dateStr);
  return date.toLocaleString('en-US', {
    weekday: 'short', year: 'numeric', month: 'short',
    day: 'numeric',   hour: '2-digit', minute: '2-digit'
  });
}

function buildEventCard(event) {
  const isAllDay       = Boolean(event.start.date);
  const startStr       = event.start.dateTime || event.start.date;
  const endStr         = event.end.dateTime   || event.end.date;
  const startFormatted = formatDateTime(startStr, isAllDay);
  const endFormatted   = formatDateTime(endStr,   isAllDay);

  const badge       = isAllDay ? '📅 All Day' : '🕐 Scheduled';
  const description = event.description ? `<p>📝 ${event.description}</p>` : '';
  const location    = event.location    ? `<p>📍 ${event.location}</p>`    : '';
  const meetLink    = event.hangoutLink
    ? `<p>🔗 <a href="${event.hangoutLink}" target="_blank">Join Google Meet</a></p>` : '';

  return `
    <div class="event-card">
      <span class="event-badge">${badge}</span>
      <h3>${event.summary || '(No Title)'}</h3>
      <p>🗓 <strong>Start:</strong> ${startFormatted}</p>
      <p>🏁 <strong>End:</strong>   ${endFormatted}</p>
      ${location}
      ${description}
      ${meetLink}
    </div>
  `;
}

function renderEvents(events) {
  const container = document.getElementById('calendar-events');
  document.getElementById('loading-message').style.display = 'none';

  if (events.length === 0) {
    container.innerHTML = '<p class="no-events">No upcoming events found.</p>';
    return;
  }
  container.innerHTML = events.map(buildEventCard).join('');
}

function renderError(err) {
  document.getElementById('loading-message').style.display = 'none';
  const errorEl = document.getElementById('error-message');
  errorEl.style.display = 'block';
  errorEl.textContent   = `Failed to load events: ${err.message}`;
  console.error(err);
}

fetchEvents().then(renderEvents).catch(renderError);
