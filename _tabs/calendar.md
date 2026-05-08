---
layout: page
title: Calendar
icon: fas fa-calendar-alt
toc: false
order: 7
---

<iframe
  src="https://calendar.google.com/calendar/embed?src=c_im5749fiebti9nh10jvc3n8uhg%40group.calendar.google.com&mode=MONTH&showTitle=0&showPrint=0"
  style="border: 0"
  width="100%"
  height="700"
  frameborder="0"
  scrolling="no">
</iframe>


## Upcoming Events

<div id="loading-message" style="color: gray;">⏳ Loading events...</div>
<div id="error-message"   style="color: red; display:none;"></div>
<div id="calendar-events"></div>

<style>
  .event-card {
    border-left: 4px solid var(--link-color);
    padding: 0.75rem 1rem;
    margin-bottom: 1.25rem;
    border-radius: 0 8px 8px 0;
    background: var(--card-bg);
    box-shadow: 0 2px 6px rgba(0,0,0,0.08);
  }
  .event-card h3 { margin: 0 0 0.4rem 0; font-size: 1.1rem; }
  .event-card p  { margin: 0.2rem 0; font-size: 0.9rem; color: var(--text-muted-color); }
  .event-badge {
    display: inline-block;
    font-size: 0.75rem;
    padding: 2px 8px;
    border-radius: 12px;
    background: var(--link-color);
    color: white;
    margin-bottom: 0.4rem;
  }
  .no-events { color: gray; font-style: italic; }
</style>

<script src="{{ '/assets/js/google-calendar.js' | relative_url }}"></script>
