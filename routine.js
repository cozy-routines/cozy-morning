// COZY MORNING — EDIT YOUR ROUTINE HERE
// After editing this file, increase ROUTINE_VERSION (1 -> 2 -> 3...).
// That lets the offline app download your changes. Edit only this file.
// Keep each existing id unchanged: saved checkmarks use it, not the title.
// For a NEW task, copy a task and give it a new, unique id. Never reuse an old id.
// Change title for the task name and detail for its normal description.
// Move the WHOLE task object { ... } to change order; keep commas between objects.
// Keep tasks with the same group together. group is the smaller heading.
// skipStandard: true hides a task in Standard; false shows it.
// skipEmergency: true hides a task in Emergency; false shows it.
// emergencyOptional: true adds an Optional label in Emergency (still counted).
// quickTitle changes its name in Emergency; quickDetail changes its instructions.
// Empty detail/quickTitle/quickDetail strings add no extra text.
// Use double quotes around text. For a quote inside text, write \".
// Keep the three block objects and their tasks lists, brackets, and commas intact.
const ROUTINE_VERSION = "1";

const routine = [
  {
    "name": "Wake Up & Come Online",
    "tasks": [
      {
        "id": "out-of-bed",
        "title": "Get out of bed",
        "group": "Launch",
        "detail": "",
        "skipStandard": false,
        "skipEmergency": false,
        "emergencyOptional": false,
        "quickTitle": "",
        "quickDetail": ""
      },
      {
        "id": "dog-out",
        "title": "Let dog out",
        "group": "Launch",
        "detail": "",
        "skipStandard": false,
        "skipEmergency": false,
        "emergencyOptional": false,
        "quickTitle": "",
        "quickDetail": ""
      },
      {
        "id": "stretch",
        "title": "PT / stretching",
        "group": "Launch",
        "quickDetail": "Shorten, but don’t skip entirely.",
        "detail": "",
        "skipStandard": false,
        "skipEmergency": false,
        "emergencyOptional": false,
        "quickTitle": ""
      },
      {
        "id": "breakfast",
        "title": "Eat something",
        "group": "Fuel",
        "detail": "",
        "skipStandard": false,
        "skipEmergency": false,
        "emergencyOptional": false,
        "quickTitle": "",
        "quickDetail": ""
      },
      {
        "id": "water",
        "title": "Drink something",
        "group": "Fuel",
        "emergencyOptional": true,
        "detail": "",
        "skipStandard": false,
        "skipEmergency": false,
        "quickTitle": "",
        "quickDetail": ""
      },
      {
        "id": "morning-medications",
        "title": "Take morning medications",
        "group": "Fuel",
        "detail": "",
        "skipStandard": false,
        "skipEmergency": false,
        "emergencyOptional": false,
        "quickTitle": "",
        "quickDetail": ""
      }
    ]
  },
  {
    "name": "Get Ready",
    "tasks": [
      {
        "id": "shower",
        "title": "Shower",
        "group": "Hygiene & Grooming",
        "detail": "",
        "skipStandard": false,
        "skipEmergency": false,
        "emergencyOptional": false,
        "quickTitle": "",
        "quickDetail": ""
      },
      {
        "id": "teeth",
        "title": "Brush teeth",
        "group": "Hygiene & Grooming",
        "detail": "",
        "skipStandard": false,
        "skipEmergency": false,
        "emergencyOptional": false,
        "quickTitle": "",
        "quickDetail": ""
      },
      {
        "id": "hair",
        "title": "Do hair",
        "group": "Hygiene & Grooming",
        "quickTitle": "Do hair — ponytail",
        "detail": "",
        "skipStandard": false,
        "skipEmergency": false,
        "emergencyOptional": false,
        "quickDetail": ""
      },
      {
        "id": "dress",
        "title": "Get dressed",
        "group": "Hygiene & Grooming",
        "detail": "",
        "skipStandard": false,
        "skipEmergency": false,
        "emergencyOptional": false,
        "quickTitle": "",
        "quickDetail": ""
      },
      {
        "id": "makeup",
        "title": "Makeup",
        "group": "Hygiene & Grooming",
        "skipEmergency": true,
        "detail": "",
        "skipStandard": false,
        "emergencyOptional": false,
        "quickTitle": "",
        "quickDetail": ""
      }
    ]
  },
  {
    "name": "Start the Day",
    "tasks": [
      {
        "id": "walk-dog",
        "title": "Walk dog",
        "group": "Dog",
        "skipEmergency": true,
        "detail": "",
        "skipStandard": false,
        "emergencyOptional": false,
        "quickTitle": "",
        "quickDetail": ""
      },
      {
        "id": "spanish",
        "title": "Spanish practice",
        "group": "Brain",
        "quickDetail": "Shorten rather than skip.",
        "detail": "",
        "skipStandard": false,
        "skipEmergency": false,
        "emergencyOptional": false,
        "quickTitle": ""
      },
      {
        "id": "grab-lunch",
        "title": "Grab lunch / anything needed for the day",
        "group": "Launch",
        "detail": "",
        "skipStandard": false,
        "skipEmergency": false,
        "emergencyOptional": false,
        "quickTitle": "",
        "quickDetail": ""
      },
      {
        "id": "gather-day-items",
        "title": "Gather anything else that needs to leave with me",
        "group": "Launch",
        "detail": "",
        "skipStandard": false,
        "skipEmergency": false,
        "emergencyOptional": false,
        "quickTitle": "",
        "quickDetail": ""
      },
      {
        "id": "go",
        "title": "Go!",
        "group": "Launch",
        "detail": "",
        "skipStandard": false,
        "skipEmergency": false,
        "emergencyOptional": false,
        "quickTitle": "",
        "quickDetail": ""
      }
    ]
  }
];
