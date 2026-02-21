/*  ╔══════════════════════════════════════════════════╗
    ║  PARTY SETTINGS  –  Change everything here!     ║
    ╚══════════════════════════════════════════════════╝  */

var PARTY = {

  /* ── Page ── */
  pageTitle: '🎉 Πάρτι Γενεθλίων – Ελένη & Γιώργος',

  /* ── Children ── */
  child1: {
    name:      'Ελένη',
    nameGen:   'Ελένης',       // genitive case (used in ICS / copy text)
    nameAccu:  'Ελενης',       // accusative no accents (RSVP message)
    age:       4,
    emoji:     '👸',
    emblem:    '⭐',            // girl superhero emblem
    ariaLabel: 'Ελένη, 4 χρονών',
    turnLabel: 'Γίνεται 4!',
    title:     'Ελένη',        // running-character tooltip
  },
  child2: {
    name:      'Γιώργος',
    nameGen:   'Γιώργου',
    nameAccu:  'Γιωργου',
    age:       2,
    emoji:     '🦸‍♂️',
    emblem:    '⚡',            // boy superhero emblem + running char + flyHero
    ariaLabel: 'Γιώργος, 2 χρονών',
    turnLabel: 'Γίνεται 2!',
    title:     'Γιώργος',
  },

  /* ── Date & Time ── */
  date: {
    full:       'Κυριακή 01 Μαρτίου',    // displayed in zone2
    time:       '10:30 – 13:30',          // displayed in zone2
    miniCalMon: 'ΜΑΡ',                    // CSS mini-calendar header
    miniCalDay: '01',                     // CSS mini-calendar day
  },

  /* ── Calendar ICS ── */
  calendar: {
    dtStart:   '20260301T083000Z',   // UTC start
    dtEnd:     '20260301T113000Z',   // UTC end
    filename:  'party-eleni-giorgos.ics',
  },

  /* ── Venue ── */
  venue: {
    name:       '«Παίξε Γέλασε»',
    nameClean:  'Παίξε Γέλασε',           // no guillemets (for ICS/copy)
    address:    'Κυπρίων Αγωνιστών 14, Αργυρούπολη 16451',
    mapsUrl:    'https://www.google.com/maps/search/?api=1&query=Κυπρίων+Αγωνιστών+14+Αργυρούπολη+16451',
    website:    'https://paixe-gelase.gr',
    websiteLabel: 'paixe-gelase.gr',      // display text for link
    geo:        '37.9060;23.7510',
  },

  /* ── RSVP ── */
  rsvp: {
    deadline:     'Τρίτη 24 Φλεβάρη',
    phone:        '6981933201',            // display / tel: link
    phoneIntl:    '306981933201',           // international (Viber)
    allergenNote: '⚠️ Ενημερώστε μας για τυχόν αλλεργίες.',
  },

  /* ── Theme ── */
  theme: 'Disney Πριγκίπισσες & Υπερήρωες',

  /* ── Texts ── */
  text: {
    startScreenTitle:    '🎂 Party Level!',
    startScreenSub:      'Διπλό πάρτι γενεθλίων σε περιμένει!',
    startBtnLabel:       '🚀 Ξεκίνα',

    zone1Title:          '🦸 Heroes!',
    zone1Sub:            'Γνώρισε τους ήρωες του πάρτι',

    zone2Title:          '⏰ Time Quest',
    zone2DateLabel:      'Ημερομηνία',
    zone2TimeLabel:      'Ώρα',
    zone2CalendarTooltip:'Πρόσθεσε στο ημερολόγιο',

    zone3Title:          '📍 Location Portal',
    zone3VenueLabel:     'Χώρος',
    zone3DirectionsBtn:  '🗺️ Οδηγίες',
    zone3WebsiteBtn:     '🌐 Website χώρου',

    zone4Title:          '📩 RSVP Quest',
    zone4DeadlinePrefix: 'Απάντησε έως',
    zone4CallBtn:        '📞 Κάλεσε',
    zone4ViberBtn:       '💜 Viber',

    zone5Title:          '🎊 Σε περιμένουμε!',
    zone5Sub:            'Για πολύ παίχνιδι, γέλια και τούρτα! 🎉',

    speechBubble:        'Πατήστε το 📅 για να προσθέσετε<br>το party στο ημερολόγιο σας',

    toastCopied:         '✅ Αντιγράφηκε!',
    toastViberPaste:     '✅ Μήνυμα αντιγράφηκε! Κάνε paste στο Viber',

    /* Viber RSVP message – use {child1} and {child2} as placeholders */
    viberMessage:        'Γεια σας! Για το παρτυ της {child1} & του {child2}:\n\n'
                       + 'Θα ερθουμε! 🎉\n'
                       + 'Θα ειμαστε ___ ατομα\n'
                       + 'Αλλεργιες: Καμια / ___\n\n',
  },
};
