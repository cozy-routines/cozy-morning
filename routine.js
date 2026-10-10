// COZY MORNING — EDIT YOUR ROUTINE HERE
//
// After editing this file, increase ROUTINE_VERSION (1 -> 2 -> 3...).
// That lets the offline app download your changes. Edit only this file.
// Keep each existing id unchanged: saved checkmarks use it, not the title.
//
// For a NEW task, copy a task and give it a new, unique id. Never reuse an old id.
// Change title for the task name and detail for its normal description.
//
// Move the WHOLE task object { ... } to change order; keep commas between objects.
// Keep tasks with the same group together. group is the smaller heading.
//
// skipStandard: true hides a task in Standard; false shows it.
// skipEmergency: true hides a task in Emergency; false shows it.
// emergencyOptional: true adds an Optional label in Emergency (still counted).
// quickTitle changes its name in Emergency; quickDetail changes its instructions.
// Empty detail/quickTitle/quickDetail strings add no extra text.
//
// Use double quotes around text. For a quote inside text, write \".
//
// Keep the three block objects and their tasks lists, brackets, and commas intact.

const ROUTINE_VERSION = "2";

const routine = [
  {
    "name": "Power Up",
    "tasks": [
      {
        "id": "out-of-bed",
        "group": "Ignition",
        "title": "Get out of bed",
        "detail": "[0-5 minutes] Actually get up out of the bed. If you have the time, also make the bed to discourage yourself from getting back in.",
        "quickTitle": "Get up",
        "quickDetail": "Actually get up out of the bed.",
        "skipStandard": false,
        "skipEmergency": false,
        "emergencyOptional": false
      },
      {
        "id": "dog-out",
        "group": "Ignition",
        "title": "Let the dog out",
        "detail": "[10-15 minutes] Get Smokey's harness on, throw on a cover-up or robe, and let him outside, Multi-task and start one of your next morning tasks.",
        "quickTitle": "",
        "quickDetail": "[10 - 15 minutes] Multi-task and start another morning task.",
        "skipStandard": false,
        "skipEmergency": false,
        "emergencyOptional": false
      },
      {
        "id": "stretch",
        "group": "Ignition",
        "title": "PT / stretching",
        "detail": "[10-15 minutes] Do your morning stretches, focusing on your PT: hip flexors, quads, calves, and ankles. If you have any other time, add in any other gentle stretches that feel good.",
        "quickTitle": "Quick PT",
        "quickDetail": "[5-10 minutes] Make time for PT stretches",
        "skipStandard": false,
        "skipEmergency": false,
        "emergencyOptional": false
      },
      {
        "id": "breakfast",
        "group": "Fuel Up",
        "title": "Eat something for breakfast",
        "detail": "[10-20 minutes] Breakfast should ideally include a protein and complex carbs. If you're short on time, grab a make-ahead breakfast bite, If you have overnight oats or a shake already prepared, thank Yesterday Kim.",
        "quickTitle": "Eat something",
        "quickDetail": "[5 minutes] Grab a quick make-ahead breakfast or at least a protein bar.",
        "skipStandard": false,
        "skipEmergency": false,
        "emergencyOptional": false
      },
      {
        "id": "water",
        "group": "Fuel Up",
        "title": "Drink some water",
        "detail": "Drink at least eight ounces of water. Try to avoid caffeine.",
        "quickTitle": "Drink something",
        "quickDetail": "",
        "skipStandard": false,
        "skipEmergency": false,
        "emergencyOptional": true
      },
      {
        "id": "morning-medications",
        "group": "Fuel Up",
        "title": "Take your morning medications",
        "detail": "",
        "quickTitle": "Take Meds",
        "quickDetail": "",
        "skipStandard": false,
        "skipEmergency": false,
        "emergencyOptional": false
      }
    ]
  },
  {
    "name": "Systems Check",
    "tasks": [
      {
        "id": "shower",
        "group": "Preflight",
        "title": "Take a shower",
        "detail": "[10-15 minutes] If you have the time, you could also wash your hair (10 more minutes) and/or shave (5 more minutes)",
        "quickTitle": "Shower",
        "quickDetail": "[5-10 minutes]",
        "skipStandard": false,
        "skipEmergency": false,
        "emergencyOptional": false
      },
      {
        "id": "teeth",
        "group": "Preflight",
        "title": "Brush your teeth",
        "detail": "[2 minutes]",
        "quickTitle": "Brush teeth",
        "quickDetail": "",
        "skipStandard": false,
        "skipEmergency": false,
        "emergencyOptional": false
      },
      {
        "id": "hair",
        "group": "Suit Up",
        "title": "Do your hair",
        "detail": "[10-20 minutes] Brush your hair and do something nice with it. Blow dry it if you washed it [10 more minutes], and style it if you have time. [10 more minutes]",
        "quickTitle": "",
        "quickDetail": "[5 minutes] Brush your hair and put it up in a ponytail.",
        "skipStandard": false,
        "skipEmergency": false,
        "emergencyOptional": false
      },
      {
        "id": "makeup",
        "group": "Suit Up",
        "title": "Put on your makeup (optional)",
        "detail": "[5 minutes] If you feel like it, put on some lipstick and mascara. If you have the time (and the interest), do your whole face. [10-15 more minutes].",
        "quickTitle": "Makeup",
        "quickDetail": "[5 minutes] If you feel like it, put on lipstick and mascara.",
        "skipStandard": false,
        "skipEmergency": false,
        "emergencyOptional": true
      },
      {
        "id": "dress",
        "group": "Suit Up",
        "title": "Get dressed",
        "detail": "[5-10 minutes] If you put some clothes out last night, thank Yesterday Kim",
        "quickTitle": "",
        "quickDetail": "[5-10 minutes]",
        "skipStandard": false,
        "skipEmergency": false,
        "emergencyOptional": false
      }
    ]
  },
  {
    "name": "Launch",
    "tasks": [
      {
        "id": "walk-dog",
        "group": "Paw Patrol",
        "title": "Walk the dog",
        "detail": "[10-30 minutes] If you have the time, especially if the sun is up, take the dog for a walk.",
        "quickTitle": "",
        "quickDetail": "[10-15 minutes]",
        "skipStandard": false,
        "skipEmergency": false,
        "emergencyOptional": true
      },
      {
        "id": "spanish",
        "group": "Comms Check",
        "title": "DuoLingo",
        "detail": "[5-15 minutes] Do your Spanish practice.",
        "quickTitle": "",
        "quickDetail": "[5 minutes] Do a quick review. If you need to skip this step, remember to do it later in the day",
        "skipStandard": false,
        "skipEmergency": false,
        "emergencyOptional": true
      },
      {
        "id": "grab-lunch",
        "group": "Load Cargo",
        "title": "Pack your lunch",
        "detail": "[5-15 minutes] If you packed your lunch last night, thank Yesterday Kim. Otherwise put together a quick lunch. Be sure to include protein and complex carbs.",
        "quickTitle": "",
        "quickDetail": "[5 minutes] At least grab a protein bar.",
        "skipStandard": false,
        "skipEmergency": false,
        "emergencyOptional": false
      },
      {
        "id": "gather-day-items",
        "group": "Load Cargo",
        "title": "Get ready to walk out the door",
        "detail": "[5-10 minutes] Gather your things, such as purse or wallet, backpack or tote bag, headphones, etc. Check your calendar to make sure you have everything you need. Check the weather to see if you might need an umbrella, coat, or winter boots. If you did this last night, thank Yesterday Kim. ",
        "quickTitle": "Get ready to go",
        "quickDetail": "[5 minutes] Gather your things. If you did this last night, thank Yesterday Kim.",
        "skipStandard": false,
        "skipEmergency": false,
        "emergencyOptional": false
      },
      {
        "id": "go",
        "group": "Liftoff!",
        "title": "Go!",
        "detail": "Make sure the light is on for Smokey, lock the door behind you, and have a great day!",
        "quickTitle": "",
        "quickDetail": "",
        "skipStandard": false,
        "skipEmergency": false,
        "emergencyOptional": false
      }
    ]
  }
];
