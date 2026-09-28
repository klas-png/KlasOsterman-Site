/* Ange data-date="ÅÅÅÅ-MM-DD" på varje .gig i respektive sidas HTML.
   Körs före sidans övriga JavaScript, så tomläget, heronotisen och animationerna
   använder rätt lista. Speldagen räknas som kommande hela dagen i svensk tid. */
(function () {
  'use strict';

  var live = document.getElementById('live');
  var upcoming = document.getElementById('gigs');
  var past = live && live.querySelector('.tidigare .lista');
  if (!live || !upcoming || !past) return;

  var todayParts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Stockholm', year: 'numeric', month: '2-digit', day: '2-digit'
  }).formatToParts(new Date());
  var today = {};
  todayParts.forEach(function (part) { today[part.type] = part.value; });
  var todayKey = today.year + '-' + today.month + '-' + today.day;
  var english = document.documentElement.lang.indexOf('en') === 0;
  var shortDate = new Intl.DateTimeFormat(english ? 'en-GB' : 'sv-SE', {
    timeZone: 'UTC', day: 'numeric', month: 'short'
  });
  var longDate = new Intl.DateTimeFormat(english ? 'en-GB' : 'sv-SE', {
    timeZone: 'UTC', day: 'numeric', month: 'long'
  });
  var upcomingShows = [], pastShows = [];

  Array.prototype.forEach.call(live.querySelectorAll('.gig[data-date]'), function (gig) {
    var key = gig.getAttribute('data-date');
    // Tolka bara fullständiga, giltiga kalenderdatum; aldrig den synliga texten.
    if (!/^\d{4}-\d{2}-\d{2}$/.test(key)) return;
    var date = new Date(key + 'T12:00:00Z');
    if (isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== key) return;
    var show = { gig: gig, key: key, date: date };
    (key < todayKey ? pastShows : upcomingShows).push(show);
  });

  function chronological(a, b) {
    return a.key < b.key ? -1 : a.key > b.key ? 1 : 0;
  }

  function render(show, container, next) {
    var gig = show.gig;
    gig.classList.toggle('next', next);
    if (container === past) gig.classList.remove('rv');
    var chip = gig.querySelector('.chip');
    if (next) {
      if (!chip) {
        chip = document.createElement('span');
        chip.className = 'chip';
        gig.insertBefore(chip, gig.firstChild);
      }
      chip.textContent = english ? 'Next' : 'Nästa';
    } else if (chip) {
      chip.remove();
    }
    var label = gig.querySelector('.d');
    if (label) label.textContent = (next ? longDate : shortDate).format(show.date);
    container.appendChild(gig);
  }

  upcomingShows.sort(chronological).forEach(function (show, index) {
    render(show, upcoming, index === 0);
  });
  pastShows.sort(function (a, b) { return chronological(b, a); }).forEach(function (show) {
    render(show, past, false);
  });
  live.classList.toggle('tom', !upcoming.querySelector('.gig'));
})();
