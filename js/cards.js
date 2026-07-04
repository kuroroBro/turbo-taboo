// Taboo card deck data (50 cards per category)
const TABOO_CARDS = [
  {
    "id": 1,
    "targetWord": "IPHONE",
    "category": "Technology",
    "tabooWords": [
      "Apple",
      "Phone",
      "Smartphone",
      "Screen",
      "Tim Cook"
    ]
  },
  {
    "id": 2,
    "targetWord": "WI-FI",
    "category": "Technology",
    "tabooWords": [
      "Internet",
      "Router",
      "Password",
      "Signal",
      "Connection"
    ]
  },
  {
    "id": 3,
    "targetWord": "ROBOT",
    "category": "Technology",
    "tabooWords": [
      "Machine",
      "Artificial",
      "Metal",
      "Android",
      "Terminator"
    ]
  },
  {
    "id": 4,
    "targetWord": "BLUETOOTH",
    "category": "Technology",
    "tabooWords": [
      "Wireless",
      "Headphones",
      "Connect",
      "Pair",
      "Speaker"
    ]
  },
  {
    "id": 5,
    "targetWord": "LAPTOP",
    "category": "Technology",
    "tabooWords": [
      "Computer",
      "Keyboard",
      "Screen",
      "Portable",
      "Charger"
    ]
  },
  {
    "id": 6,
    "targetWord": "PRINTER",
    "category": "Technology",
    "tabooWords": [
      "Paper",
      "Ink",
      "Print",
      "Scan",
      "Copier"
    ]
  },
  {
    "id": 7,
    "targetWord": "USB DRIVE",
    "category": "Technology",
    "tabooWords": [
      "Flash",
      "Storage",
      "Plug",
      "Data",
      "Thumb"
    ]
  },
  {
    "id": 8,
    "targetWord": "WEBCAM",
    "category": "Technology",
    "tabooWords": [
      "Camera",
      "Video",
      "Zoom",
      "Lens",
      "Stream"
    ]
  },
  {
    "id": 9,
    "targetWord": "DRONE",
    "category": "Technology",
    "tabooWords": [
      "Fly",
      "Remote",
      "Camera",
      "Propeller",
      "Aerial"
    ]
  },
  {
    "id": 10,
    "targetWord": "VR HEADSET",
    "category": "Technology",
    "tabooWords": [
      "Virtual",
      "Goggles",
      "Reality",
      "Immersive",
      "Oculus"
    ]
  },
  {
    "id": 11,
    "targetWord": "SMARTWATCH",
    "category": "Technology",
    "tabooWords": [
      "Wrist",
      "Apple Watch",
      "Fitness",
      "Notifications",
      "Band"
    ]
  },
  {
    "id": 12,
    "targetWord": "TABLET",
    "category": "Technology",
    "tabooWords": [
      "iPad",
      "Screen",
      "Touch",
      "Portable",
      "Apps"
    ]
  },
  {
    "id": 13,
    "targetWord": "KEYBOARD",
    "category": "Technology",
    "tabooWords": [
      "Keys",
      "Type",
      "Computer",
      "Letters",
      "QWERTY"
    ]
  },
  {
    "id": 14,
    "targetWord": "COMPUTER MOUSE",
    "category": "Technology",
    "tabooWords": [
      "Click",
      "Cursor",
      "Computer",
      "Scroll",
      "Pad"
    ]
  },
  {
    "id": 15,
    "targetWord": "MONITOR",
    "category": "Technology",
    "tabooWords": [
      "Screen",
      "Display",
      "Computer",
      "Pixels",
      "HDMI"
    ]
  },
  {
    "id": 16,
    "targetWord": "SERVER",
    "category": "Technology",
    "tabooWords": [
      "Data",
      "Network",
      "Computer",
      "Cloud",
      "Rack"
    ]
  },
  {
    "id": 17,
    "targetWord": "FIREWALL",
    "category": "Technology",
    "tabooWords": [
      "Security",
      "Network",
      "Block",
      "Hacker",
      "Protect"
    ]
  },
  {
    "id": 18,
    "targetWord": "ALGORITHM",
    "category": "Technology",
    "tabooWords": [
      "Code",
      "Steps",
      "Computer",
      "Formula",
      "Program"
    ]
  },
  {
    "id": 19,
    "targetWord": "SOFTWARE UPDATE",
    "category": "Technology",
    "tabooWords": [
      "Download",
      "Install",
      "Version",
      "Patch",
      "Bug"
    ]
  },
  {
    "id": 20,
    "targetWord": "CLOUD STORAGE",
    "category": "Technology",
    "tabooWords": [
      "Upload",
      "Files",
      "Internet",
      "Backup",
      "Drive"
    ]
  },
  {
    "id": 21,
    "targetWord": "GAME CONSOLE",
    "category": "Technology",
    "tabooWords": [
      "PlayStation",
      "Xbox",
      "Controller",
      "Games",
      "TV"
    ]
  },
  {
    "id": 22,
    "targetWord": "SMART TV",
    "category": "Technology",
    "tabooWords": [
      "Screen",
      "Streaming",
      "Remote",
      "Apps",
      "HDMI"
    ]
  },
  {
    "id": 23,
    "targetWord": "GPS",
    "category": "Technology",
    "tabooWords": [
      "Navigation",
      "Maps",
      "Satellite",
      "Location",
      "Directions"
    ]
  },
  {
    "id": 24,
    "targetWord": "QR CODE",
    "category": "Technology",
    "tabooWords": [
      "Scan",
      "Square",
      "Camera",
      "Barcode",
      "Pattern"
    ]
  },
  {
    "id": 25,
    "targetWord": "ARTIFICIAL INTELLIGENCE",
    "category": "Technology",
    "tabooWords": [
      "AI",
      "Robot",
      "ChatGPT",
      "Machine",
      "Learning"
    ]
  },
  {
    "id": 26,
    "targetWord": "SOCIAL MEDIA",
    "category": "Technology",
    "tabooWords": [
      "Instagram",
      "Facebook",
      "Post",
      "Scroll",
      "Likes"
    ]
  },
  {
    "id": 27,
    "targetWord": "PODCAST",
    "category": "Technology",
    "tabooWords": [
      "Audio",
      "Episode",
      "Microphone",
      "Listen",
      "Spotify"
    ]
  },
  {
    "id": 28,
    "targetWord": "CRYPTOCURRENCY",
    "category": "Technology",
    "tabooWords": [
      "Bitcoin",
      "Blockchain",
      "Digital",
      "Wallet",
      "Mining"
    ]
  },
  {
    "id": 29,
    "targetWord": "SELFIE STICK",
    "category": "Technology",
    "tabooWords": [
      "Extend",
      "Camera",
      "Photo",
      "Arm",
      "Phone"
    ]
  },
  {
    "id": 30,
    "targetWord": "POWER BANK",
    "category": "Technology",
    "tabooWords": [
      "Battery",
      "Charge",
      "Portable",
      "Cable",
      "Backup"
    ]
  },
  {
    "id": 31,
    "targetWord": "EARBUDS",
    "category": "Technology",
    "tabooWords": [
      "AirPods",
      "Wireless",
      "Ear",
      "Music",
      "Case"
    ]
  },
  {
    "id": 32,
    "targetWord": "ROUTER",
    "category": "Technology",
    "tabooWords": [
      "Wi-Fi",
      "Internet",
      "Modem",
      "Signal",
      "Box"
    ]
  },
  {
    "id": 33,
    "targetWord": "E-READER",
    "category": "Technology",
    "tabooWords": [
      "Kindle",
      "Books",
      "Screen",
      "Digital",
      "Pages"
    ]
  },
  {
    "id": 34,
    "targetWord": "3D PRINTER",
    "category": "Technology",
    "tabooWords": [
      "Print",
      "Plastic",
      "Layer",
      "Model",
      "Filament"
    ]
  },
  {
    "id": 35,
    "targetWord": "FACIAL RECOGNITION",
    "category": "Technology",
    "tabooWords": [
      "Face",
      "Unlock",
      "Scan",
      "Security",
      "Camera"
    ]
  },
  {
    "id": 36,
    "targetWord": "AUTOCORRECT",
    "category": "Technology",
    "tabooWords": [
      "Typing",
      "Phone",
      "Fix",
      "Spelling",
      "Mistake"
    ]
  },
  {
    "id": 37,
    "targetWord": "STREAMING SERVICE",
    "category": "Technology",
    "tabooWords": [
      "Netflix",
      "Watch",
      "Subscribe",
      "Movies",
      "Binge"
    ]
  },
  {
    "id": 38,
    "targetWord": "TOUCHSCREEN",
    "category": "Technology",
    "tabooWords": [
      "Tap",
      "Finger",
      "Display",
      "Phone",
      "Swipe"
    ]
  },
  {
    "id": 39,
    "targetWord": "HARD DRIVE",
    "category": "Technology",
    "tabooWords": [
      "Storage",
      "Data",
      "Computer",
      "Disk",
      "Memory"
    ]
  },
  {
    "id": 40,
    "targetWord": "MICROCHIP",
    "category": "Technology",
    "tabooWords": [
      "Silicon",
      "Computer",
      "Tiny",
      "Circuit",
      "Processor"
    ]
  },
  {
    "id": 41,
    "targetWord": "SATELLITE",
    "category": "Technology",
    "tabooWords": [
      "Space",
      "Orbit",
      "Signal",
      "Dish",
      "GPS"
    ]
  },
  {
    "id": 42,
    "targetWord": "HOLOGRAM",
    "category": "Technology",
    "tabooWords": [
      "3D",
      "Projection",
      "Light",
      "Image",
      "Futuristic"
    ]
  },
  {
    "id": 43,
    "targetWord": "SPAM EMAIL",
    "category": "Technology",
    "tabooWords": [
      "Junk",
      "Inbox",
      "Scam",
      "Delete",
      "Unwanted"
    ]
  },
  {
    "id": 44,
    "targetWord": "VIDEO CALL",
    "category": "Technology",
    "tabooWords": [
      "Zoom",
      "Screen",
      "Camera",
      "Meeting",
      "Call"
    ]
  },
  {
    "id": 45,
    "targetWord": "SELF-DRIVING CAR",
    "category": "Technology",
    "tabooWords": [
      "Autonomous",
      "Tesla",
      "Driver",
      "Automatic",
      "Sensors"
    ]
  },
  {
    "id": 46,
    "targetWord": "SMART HOME",
    "category": "Technology",
    "tabooWords": [
      "Alexa",
      "Automation",
      "Devices",
      "Voice",
      "Connected"
    ]
  },
  {
    "id": 47,
    "targetWord": "FINGERPRINT SCANNER",
    "category": "Technology",
    "tabooWords": [
      "Thumb",
      "Unlock",
      "Print",
      "Scan",
      "Security"
    ]
  },
  {
    "id": 48,
    "targetWord": "E-COMMERCE",
    "category": "Technology",
    "tabooWords": [
      "Online",
      "Shopping",
      "Amazon",
      "Website",
      "Cart"
    ]
  },
  {
    "id": 49,
    "targetWord": "FIBER OPTIC",
    "category": "Technology",
    "tabooWords": [
      "Cable",
      "Internet",
      "Light",
      "Fast",
      "Wire"
    ]
  },
  {
    "id": 50,
    "targetWord": "OPERATING SYSTEM",
    "category": "Technology",
    "tabooWords": [
      "Windows",
      "Mac",
      "Software",
      "Computer",
      "Boot"
    ]
  },
  {
    "id": 51,
    "targetWord": "SUPERMAN",
    "category": "Pop Culture",
    "tabooWords": [
      "Batman",
      "Cape",
      "Krypton",
      "Clark Kent",
      "Hero"
    ]
  },
  {
    "id": 52,
    "targetWord": "STAR WARS",
    "category": "Pop Culture",
    "tabooWords": [
      "Jedi",
      "Lightsaber",
      "Yoda",
      "Force",
      "Darth Vader"
    ]
  },
  {
    "id": 53,
    "targetWord": "TAYLOR SWIFT",
    "category": "Pop Culture",
    "tabooWords": [
      "Singer",
      "Swiftie",
      "Grammy",
      "Pop",
      "Album"
    ]
  },
  {
    "id": 54,
    "targetWord": "NETFLIX",
    "category": "Pop Culture",
    "tabooWords": [
      "Stream",
      "Movies",
      "Subscription",
      "Binge",
      "TV"
    ]
  },
  {
    "id": 55,
    "targetWord": "HARRY POTTER",
    "category": "Pop Culture",
    "tabooWords": [
      "Wizard",
      "Hogwarts",
      "Wand",
      "Magic",
      "Voldemort"
    ]
  },
  {
    "id": 56,
    "targetWord": "MARVEL",
    "category": "Pop Culture",
    "tabooWords": [
      "Avengers",
      "Superhero",
      "Comic",
      "Movie",
      "Stan Lee"
    ]
  },
  {
    "id": 57,
    "targetWord": "BARBIE",
    "category": "Pop Culture",
    "tabooWords": [
      "Doll",
      "Pink",
      "Ken",
      "Toy",
      "Mattel"
    ]
  },
  {
    "id": 58,
    "targetWord": "MICKEY MOUSE",
    "category": "Pop Culture",
    "tabooWords": [
      "Disney",
      "Ears",
      "Cartoon",
      "Minnie",
      "Mouse"
    ]
  },
  {
    "id": 59,
    "targetWord": "THE SIMPSONS",
    "category": "Pop Culture",
    "tabooWords": [
      "Homer",
      "Cartoon",
      "Yellow",
      "Springfield",
      "Bart"
    ]
  },
  {
    "id": 60,
    "targetWord": "TIKTOK",
    "category": "Pop Culture",
    "tabooWords": [
      "App",
      "Video",
      "Dance",
      "Trend",
      "Short"
    ]
  },
  {
    "id": 61,
    "targetWord": "BEYONCE",
    "category": "Pop Culture",
    "tabooWords": [
      "Singer",
      "Queen B",
      "Destiny's Child",
      "Album",
      "Pop"
    ]
  },
  {
    "id": 62,
    "targetWord": "THE BEATLES",
    "category": "Pop Culture",
    "tabooWords": [
      "Band",
      "John Lennon",
      "Rock",
      "Liverpool",
      "Music"
    ]
  },
  {
    "id": 63,
    "targetWord": "JAMES BOND",
    "category": "Pop Culture",
    "tabooWords": [
      "Spy",
      "007",
      "Agent",
      "Martini",
      "Secret"
    ]
  },
  {
    "id": 64,
    "targetWord": "GAME OF THRONES",
    "category": "Pop Culture",
    "tabooWords": [
      "Dragon",
      "Throne",
      "HBO",
      "Westeros",
      "Sword"
    ]
  },
  {
    "id": 65,
    "targetWord": "SPIDER-MAN",
    "category": "Pop Culture",
    "tabooWords": [
      "Web",
      "Superhero",
      "Peter Parker",
      "Marvel",
      "Villain"
    ]
  },
  {
    "id": 66,
    "targetWord": "OSCAR AWARD",
    "category": "Pop Culture",
    "tabooWords": [
      "Trophy",
      "Academy",
      "Movie",
      "Statue",
      "Winner"
    ]
  },
  {
    "id": 67,
    "targetWord": "GRAMMY AWARD",
    "category": "Pop Culture",
    "tabooWords": [
      "Music",
      "Trophy",
      "Award",
      "Singer",
      "Show"
    ]
  },
  {
    "id": 68,
    "targetWord": "DISNEY",
    "category": "Pop Culture",
    "tabooWords": [
      "Mickey",
      "Movies",
      "Cartoon",
      "Park",
      "Princess"
    ]
  },
  {
    "id": 69,
    "targetWord": "PIXAR",
    "category": "Pop Culture",
    "tabooWords": [
      "Animation",
      "Movies",
      "Toy Story",
      "Studio",
      "Cartoon"
    ]
  },
  {
    "id": 70,
    "targetWord": "THE AVENGERS",
    "category": "Pop Culture",
    "tabooWords": [
      "Superhero",
      "Marvel",
      "Team",
      "Iron Man",
      "Movie"
    ]
  },
  {
    "id": 71,
    "targetWord": "LADY GAGA",
    "category": "Pop Culture",
    "tabooWords": [
      "Singer",
      "Pop",
      "Meat Dress",
      "Album",
      "Music"
    ]
  },
  {
    "id": 72,
    "targetWord": "ELVIS PRESLEY",
    "category": "Pop Culture",
    "tabooWords": [
      "King",
      "Rock",
      "Singer",
      "Hips",
      "Music"
    ]
  },
  {
    "id": 73,
    "targetWord": "MICHAEL JACKSON",
    "category": "Pop Culture",
    "tabooWords": [
      "King of Pop",
      "Moonwalk",
      "Singer",
      "Thriller",
      "Music"
    ]
  },
  {
    "id": 74,
    "targetWord": "FRIENDS",
    "category": "Pop Culture",
    "tabooWords": [
      "Sitcom",
      "TV Show",
      "Central Perk",
      "Ross",
      "Comedy"
    ]
  },
  {
    "id": 75,
    "targetWord": "STRANGER THINGS",
    "category": "Pop Culture",
    "tabooWords": [
      "Netflix",
      "Upside Down",
      "Kids",
      "80s",
      "Show"
    ]
  },
  {
    "id": 76,
    "targetWord": "PIRATES OF THE CARIBBEAN",
    "category": "Pop Culture",
    "tabooWords": [
      "Jack Sparrow",
      "Ship",
      "Pirate",
      "Disney",
      "Sea"
    ]
  },
  {
    "id": 77,
    "targetWord": "JURASSIC PARK",
    "category": "Pop Culture",
    "tabooWords": [
      "Dinosaur",
      "Movie",
      "Island",
      "T-Rex",
      "Spielberg"
    ]
  },
  {
    "id": 78,
    "targetWord": "TITANIC",
    "category": "Pop Culture",
    "tabooWords": [
      "Ship",
      "Movie",
      "Iceberg",
      "Sink",
      "Leonardo"
    ]
  },
  {
    "id": 79,
    "targetWord": "THE WIZARD OF OZ",
    "category": "Pop Culture",
    "tabooWords": [
      "Dorothy",
      "Yellow Brick Road",
      "Witch",
      "Movie",
      "Kansas"
    ]
  },
  {
    "id": 80,
    "targetWord": "SHREK",
    "category": "Pop Culture",
    "tabooWords": [
      "Ogre",
      "Green",
      "Donkey",
      "Movie",
      "Swamp"
    ]
  },
  {
    "id": 81,
    "targetWord": "MINIONS",
    "category": "Pop Culture",
    "tabooWords": [
      "Yellow",
      "Despicable Me",
      "Banana",
      "Goggles",
      "Cartoon"
    ]
  },
  {
    "id": 82,
    "targetWord": "POKEMON",
    "category": "Pop Culture",
    "tabooWords": [
      "Pikachu",
      "Card",
      "Catch",
      "Trainer",
      "Game"
    ]
  },
  {
    "id": 83,
    "targetWord": "THE LION KING",
    "category": "Pop Culture",
    "tabooWords": [
      "Simba",
      "Disney",
      "Africa",
      "Movie",
      "Pride"
    ]
  },
  {
    "id": 84,
    "targetWord": "FROZEN",
    "category": "Pop Culture",
    "tabooWords": [
      "Elsa",
      "Disney",
      "Snow",
      "Ice",
      "Movie"
    ]
  },
  {
    "id": 85,
    "targetWord": "JUSTIN BIEBER",
    "category": "Pop Culture",
    "tabooWords": [
      "Singer",
      "Pop",
      "Canadian",
      "Music",
      "Teen"
    ]
  },
  {
    "id": 86,
    "targetWord": "RIHANNA",
    "category": "Pop Culture",
    "tabooWords": [
      "Singer",
      "Fenty",
      "Pop",
      "Music",
      "Umbrella"
    ]
  },
  {
    "id": 87,
    "targetWord": "KANYE WEST",
    "category": "Pop Culture",
    "tabooWords": [
      "Rapper",
      "Music",
      "Ye",
      "Kim",
      "Album"
    ]
  },
  {
    "id": 88,
    "targetWord": "ARIANA GRANDE",
    "category": "Pop Culture",
    "tabooWords": [
      "Singer",
      "Pop",
      "Ponytail",
      "Music",
      "Grammy"
    ]
  },
  {
    "id": 89,
    "targetWord": "THE HUNGER GAMES",
    "category": "Pop Culture",
    "tabooWords": [
      "Katniss",
      "Movie",
      "Arena",
      "Book",
      "District"
    ]
  },
  {
    "id": 90,
    "targetWord": "TWILIGHT",
    "category": "Pop Culture",
    "tabooWords": [
      "Vampire",
      "Edward",
      "Movie",
      "Bella",
      "Werewolf"
    ]
  },
  {
    "id": 91,
    "targetWord": "SNOOPY",
    "category": "Pop Culture",
    "tabooWords": [
      "Dog",
      "Cartoon",
      "Peanuts",
      "Charlie Brown",
      "Comic"
    ]
  },
  {
    "id": 92,
    "targetWord": "SPONGEBOB",
    "category": "Pop Culture",
    "tabooWords": [
      "Cartoon",
      "Sea",
      "Yellow",
      "Nickelodeon",
      "Sponge"
    ]
  },
  {
    "id": 93,
    "targetWord": "BATMAN",
    "category": "Pop Culture",
    "tabooWords": [
      "Superhero",
      "Cape",
      "Gotham",
      "Bruce Wayne",
      "DC"
    ]
  },
  {
    "id": 94,
    "targetWord": "THE ROCK",
    "category": "Pop Culture",
    "tabooWords": [
      "Wrestler",
      "Actor",
      "Dwayne",
      "Muscles",
      "Movie"
    ]
  },
  {
    "id": 95,
    "targetWord": "INSTAGRAM",
    "category": "Pop Culture",
    "tabooWords": [
      "App",
      "Photo",
      "Post",
      "Social Media",
      "Story"
    ]
  },
  {
    "id": 96,
    "targetWord": "YOUTUBE",
    "category": "Pop Culture",
    "tabooWords": [
      "Video",
      "Channel",
      "Subscribe",
      "Creator",
      "App"
    ]
  },
  {
    "id": 97,
    "targetWord": "OSCAR THE GROUCH",
    "category": "Pop Culture",
    "tabooWords": [
      "Sesame Street",
      "Trash Can",
      "Green",
      "Grumpy",
      "Puppet"
    ]
  },
  {
    "id": 98,
    "targetWord": "WINNIE THE POOH",
    "category": "Pop Culture",
    "tabooWords": [
      "Bear",
      "Honey",
      "Disney",
      "Piglet",
      "Hundred Acre"
    ]
  },
  {
    "id": 99,
    "targetWord": "BARNEY",
    "category": "Pop Culture",
    "tabooWords": [
      "Purple",
      "Dinosaur",
      "Kids Show",
      "Song",
      "Friend"
    ]
  },
  {
    "id": 100,
    "targetWord": "ELMO",
    "category": "Pop Culture",
    "tabooWords": [
      "Red",
      "Sesame Street",
      "Puppet",
      "Furry",
      "Kids"
    ]
  },
  {
    "id": 101,
    "targetWord": "UMBRELLA",
    "category": "Everyday Objects",
    "tabooWords": [
      "Rain",
      "Open",
      "Handle",
      "Cover",
      "Wet"
    ]
  },
  {
    "id": 102,
    "targetWord": "TOOTHBRUSH",
    "category": "Everyday Objects",
    "tabooWords": [
      "Teeth",
      "Bristles",
      "Brush",
      "Paste",
      "Dentist"
    ]
  },
  {
    "id": 103,
    "targetWord": "REFRIGERATOR",
    "category": "Everyday Objects",
    "tabooWords": [
      "Cold",
      "Fridge",
      "Kitchen",
      "Food",
      "Freezer"
    ]
  },
  {
    "id": 104,
    "targetWord": "BACKPACK",
    "category": "Everyday Objects",
    "tabooWords": [
      "Bag",
      "School",
      "Straps",
      "Carry",
      "Zipper"
    ]
  },
  {
    "id": 105,
    "targetWord": "PILLOW",
    "category": "Everyday Objects",
    "tabooWords": [
      "Bed",
      "Soft",
      "Sleep",
      "Head",
      "Cushion"
    ]
  },
  {
    "id": 106,
    "targetWord": "SCISSORS",
    "category": "Everyday Objects",
    "tabooWords": [
      "Cut",
      "Blade",
      "Paper",
      "Sharp",
      "Snip"
    ]
  },
  {
    "id": 107,
    "targetWord": "CANDLE",
    "category": "Everyday Objects",
    "tabooWords": [
      "Wax",
      "Flame",
      "Light",
      "Wick",
      "Burn"
    ]
  },
  {
    "id": 108,
    "targetWord": "MIRROR",
    "category": "Everyday Objects",
    "tabooWords": [
      "Reflection",
      "Glass",
      "Look",
      "Wall",
      "Bathroom"
    ]
  },
  {
    "id": 109,
    "targetWord": "WALLET",
    "category": "Everyday Objects",
    "tabooWords": [
      "Money",
      "Pocket",
      "Cards",
      "Leather",
      "Cash"
    ]
  },
  {
    "id": 110,
    "targetWord": "SUNGLASSES",
    "category": "Everyday Objects",
    "tabooWords": [
      "Eyes",
      "Lens",
      "Sun",
      "Shade",
      "Wear"
    ]
  },
  {
    "id": 111,
    "targetWord": "ALARM CLOCK",
    "category": "Everyday Objects",
    "tabooWords": [
      "Wake",
      "Time",
      "Snooze",
      "Ring",
      "Morning"
    ]
  },
  {
    "id": 112,
    "targetWord": "VACUUM CLEANER",
    "category": "Everyday Objects",
    "tabooWords": [
      "Clean",
      "Suck",
      "Carpet",
      "Dust",
      "Floor"
    ]
  },
  {
    "id": 113,
    "targetWord": "FRYING PAN",
    "category": "Everyday Objects",
    "tabooWords": [
      "Cook",
      "Kitchen",
      "Stove",
      "Handle",
      "Metal"
    ]
  },
  {
    "id": 114,
    "targetWord": "HAMMER",
    "category": "Everyday Objects",
    "tabooWords": [
      "Nail",
      "Tool",
      "Hit",
      "Wood",
      "Handle"
    ]
  },
  {
    "id": 115,
    "targetWord": "LADDER",
    "category": "Everyday Objects",
    "tabooWords": [
      "Climb",
      "Rungs",
      "Tall",
      "Steps",
      "Reach"
    ]
  },
  {
    "id": 116,
    "targetWord": "FLASHLIGHT",
    "category": "Everyday Objects",
    "tabooWords": [
      "Light",
      "Battery",
      "Dark",
      "Beam",
      "Torch"
    ]
  },
  {
    "id": 117,
    "targetWord": "SUITCASE",
    "category": "Everyday Objects",
    "tabooWords": [
      "Travel",
      "Pack",
      "Luggage",
      "Wheels",
      "Trip"
    ]
  },
  {
    "id": 118,
    "targetWord": "KEYS",
    "category": "Everyday Objects",
    "tabooWords": [
      "Lock",
      "Door",
      "Metal",
      "Ring",
      "Open"
    ]
  },
  {
    "id": 119,
    "targetWord": "NAPKIN",
    "category": "Everyday Objects",
    "tabooWords": [
      "Wipe",
      "Paper",
      "Table",
      "Mouth",
      "Cloth"
    ]
  },
  {
    "id": 120,
    "targetWord": "BROOM",
    "category": "Everyday Objects",
    "tabooWords": [
      "Sweep",
      "Floor",
      "Dust",
      "Handle",
      "Bristles"
    ]
  },
  {
    "id": 121,
    "targetWord": "TOWEL",
    "category": "Everyday Objects",
    "tabooWords": [
      "Dry",
      "Bathroom",
      "Wet",
      "Cloth",
      "Shower"
    ]
  },
  {
    "id": 122,
    "targetWord": "STAPLER",
    "category": "Everyday Objects",
    "tabooWords": [
      "Paper",
      "Office",
      "Click",
      "Metal",
      "Staples"
    ]
  },
  {
    "id": 123,
    "targetWord": "CALENDAR",
    "category": "Everyday Objects",
    "tabooWords": [
      "Dates",
      "Month",
      "Days",
      "Wall",
      "Schedule"
    ]
  },
  {
    "id": 124,
    "targetWord": "THERMOMETER",
    "category": "Everyday Objects",
    "tabooWords": [
      "Temperature",
      "Fever",
      "Mercury",
      "Degrees",
      "Measure"
    ]
  },
  {
    "id": 125,
    "targetWord": "PILLOWCASE",
    "category": "Everyday Objects",
    "tabooWords": [
      "Cover",
      "Bed",
      "Pillow",
      "Fabric",
      "Sleep"
    ]
  },
  {
    "id": 126,
    "targetWord": "CLOTHESPIN",
    "category": "Everyday Objects",
    "tabooWords": [
      "Clip",
      "Laundry",
      "Hang",
      "Wood",
      "Clothesline"
    ]
  },
  {
    "id": 127,
    "targetWord": "TOASTER",
    "category": "Everyday Objects",
    "tabooWords": [
      "Bread",
      "Kitchen",
      "Pop",
      "Slice",
      "Breakfast"
    ]
  },
  {
    "id": 128,
    "targetWord": "REMOTE CONTROL",
    "category": "Everyday Objects",
    "tabooWords": [
      "Buttons",
      "TV",
      "Channel",
      "Batteries",
      "Click"
    ]
  },
  {
    "id": 129,
    "targetWord": "CANDLESTICK",
    "category": "Everyday Objects",
    "tabooWords": [
      "Holder",
      "Metal",
      "Table",
      "Stand",
      "Decor"
    ]
  },
  {
    "id": 130,
    "targetWord": "DOORMAT",
    "category": "Everyday Objects",
    "tabooWords": [
      "Wipe",
      "Feet",
      "Entrance",
      "Welcome",
      "Floor"
    ]
  },
  {
    "id": 131,
    "targetWord": "CLOTHES HANGER",
    "category": "Everyday Objects",
    "tabooWords": [
      "Closet",
      "Hang",
      "Shirt",
      "Wire",
      "Wardrobe"
    ]
  },
  {
    "id": 132,
    "targetWord": "TRASH CAN",
    "category": "Everyday Objects",
    "tabooWords": [
      "Garbage",
      "Bin",
      "Waste",
      "Lid",
      "Throw"
    ]
  },
  {
    "id": 133,
    "targetWord": "NOTEBOOK",
    "category": "Everyday Objects",
    "tabooWords": [
      "Pages",
      "Write",
      "Pen",
      "School",
      "Cover"
    ]
  },
  {
    "id": 134,
    "targetWord": "WRISTWATCH",
    "category": "Everyday Objects",
    "tabooWords": [
      "Time",
      "Wrist",
      "Clock",
      "Hands",
      "Band"
    ]
  },
  {
    "id": 135,
    "targetWord": "EYEGLASSES",
    "category": "Everyday Objects",
    "tabooWords": [
      "Lens",
      "Vision",
      "Frame",
      "See",
      "Glasses"
    ]
  },
  {
    "id": 136,
    "targetWord": "PAPERCLIP",
    "category": "Everyday Objects",
    "tabooWords": [
      "Metal",
      "Bend",
      "Paper",
      "Office",
      "Clip"
    ]
  },
  {
    "id": 137,
    "targetWord": "SPONGE",
    "category": "Everyday Objects",
    "tabooWords": [
      "Wash",
      "Dish",
      "Soak",
      "Soap",
      "Absorb"
    ]
  },
  {
    "id": 138,
    "targetWord": "BLANKET",
    "category": "Everyday Objects",
    "tabooWords": [
      "Warm",
      "Bed",
      "Cover",
      "Cozy",
      "Soft"
    ]
  },
  {
    "id": 139,
    "targetWord": "CORKSCREW",
    "category": "Everyday Objects",
    "tabooWords": [
      "Wine",
      "Twist",
      "Bottle",
      "Metal",
      "Open"
    ]
  },
  {
    "id": 140,
    "targetWord": "LIGHTBULB",
    "category": "Everyday Objects",
    "tabooWords": [
      "Bright",
      "Screw",
      "Electric",
      "Glow",
      "Idea"
    ]
  },
  {
    "id": 141,
    "targetWord": "CLOTHES IRON",
    "category": "Everyday Objects",
    "tabooWords": [
      "Wrinkle",
      "Steam",
      "Hot",
      "Press",
      "Fabric"
    ]
  },
  {
    "id": 142,
    "targetWord": "BATTERY",
    "category": "Everyday Objects",
    "tabooWords": [
      "Power",
      "Charge",
      "Energy",
      "Electric",
      "AA"
    ]
  },
  {
    "id": 143,
    "targetWord": "MATCHES",
    "category": "Everyday Objects",
    "tabooWords": [
      "Fire",
      "Strike",
      "Box",
      "Flame",
      "Light"
    ]
  },
  {
    "id": 144,
    "targetWord": "TAPE MEASURE",
    "category": "Everyday Objects",
    "tabooWords": [
      "Length",
      "Inches",
      "Roll",
      "Measure",
      "Ruler"
    ]
  },
  {
    "id": 145,
    "targetWord": "SCREWDRIVER",
    "category": "Everyday Objects",
    "tabooWords": [
      "Twist",
      "Tool",
      "Screw",
      "Handle",
      "Flathead"
    ]
  },
  {
    "id": 146,
    "targetWord": "BUCKET",
    "category": "Everyday Objects",
    "tabooWords": [
      "Water",
      "Handle",
      "Carry",
      "Plastic",
      "Pail"
    ]
  },
  {
    "id": 147,
    "targetWord": "PLUNGER",
    "category": "Everyday Objects",
    "tabooWords": [
      "Toilet",
      "Clog",
      "Suction",
      "Bathroom",
      "Handle"
    ]
  },
  {
    "id": 148,
    "targetWord": "CLOTHESLINE",
    "category": "Everyday Objects",
    "tabooWords": [
      "Rope",
      "Hang",
      "Dry",
      "Pins",
      "Outside"
    ]
  },
  {
    "id": 149,
    "targetWord": "DOORBELL",
    "category": "Everyday Objects",
    "tabooWords": [
      "Ring",
      "Button",
      "Door",
      "Chime",
      "Visitor"
    ]
  },
  {
    "id": 150,
    "targetWord": "MAGNET",
    "category": "Everyday Objects",
    "tabooWords": [
      "Attract",
      "Metal",
      "Fridge",
      "Pull",
      "Pole"
    ]
  },
  {
    "id": 151,
    "targetWord": "PIZZA",
    "category": "Food",
    "tabooWords": [
      "Cheese",
      "Slice",
      "Italian",
      "Pepperoni",
      "Crust"
    ]
  },
  {
    "id": 152,
    "targetWord": "SUSHI",
    "category": "Food",
    "tabooWords": [
      "Rice",
      "Japanese",
      "Raw",
      "Fish",
      "Roll"
    ]
  },
  {
    "id": 153,
    "targetWord": "POPCORN",
    "category": "Food",
    "tabooWords": [
      "Movie",
      "Butter",
      "Kernel",
      "Snack",
      "Bag"
    ]
  },
  {
    "id": 154,
    "targetWord": "CHOCOLATE",
    "category": "Food",
    "tabooWords": [
      "Sweet",
      "Cocoa",
      "Candy",
      "Bar",
      "Brown"
    ]
  },
  {
    "id": 155,
    "targetWord": "HAMBURGER",
    "category": "Food",
    "tabooWords": [
      "Bun",
      "Patty",
      "Cheese",
      "Fries",
      "Grill"
    ]
  },
  {
    "id": 156,
    "targetWord": "TACO",
    "category": "Food",
    "tabooWords": [
      "Mexican",
      "Shell",
      "Meat",
      "Salsa",
      "Fold"
    ]
  },
  {
    "id": 157,
    "targetWord": "SPAGHETTI",
    "category": "Food",
    "tabooWords": [
      "Pasta",
      "Noodles",
      "Sauce",
      "Italian",
      "Fork"
    ]
  },
  {
    "id": 158,
    "targetWord": "ICE CREAM",
    "category": "Food",
    "tabooWords": [
      "Cold",
      "Cone",
      "Scoop",
      "Sweet",
      "Frozen"
    ]
  },
  {
    "id": 159,
    "targetWord": "PANCAKE",
    "category": "Food",
    "tabooWords": [
      "Syrup",
      "Flat",
      "Breakfast",
      "Batter",
      "Stack"
    ]
  },
  {
    "id": 160,
    "targetWord": "DONUT",
    "category": "Food",
    "tabooWords": [
      "Hole",
      "Glaze",
      "Sweet",
      "Sprinkles",
      "Round"
    ]
  },
  {
    "id": 161,
    "targetWord": "HOT DOG",
    "category": "Food",
    "tabooWords": [
      "Bun",
      "Sausage",
      "Mustard",
      "Ketchup",
      "Grill"
    ]
  },
  {
    "id": 162,
    "targetWord": "FRENCH FRIES",
    "category": "Food",
    "tabooWords": [
      "Potato",
      "Fried",
      "Salt",
      "Ketchup",
      "Crispy"
    ]
  },
  {
    "id": 163,
    "targetWord": "SANDWICH",
    "category": "Food",
    "tabooWords": [
      "Bread",
      "Slices",
      "Fillings",
      "Lunch",
      "Layers"
    ]
  },
  {
    "id": 164,
    "targetWord": "BACON",
    "category": "Food",
    "tabooWords": [
      "Pork",
      "Crispy",
      "Breakfast",
      "Strip",
      "Fry"
    ]
  },
  {
    "id": 165,
    "targetWord": "CEREAL",
    "category": "Food",
    "tabooWords": [
      "Milk",
      "Breakfast",
      "Bowl",
      "Box",
      "Crunchy"
    ]
  },
  {
    "id": 166,
    "targetWord": "SALAD",
    "category": "Food",
    "tabooWords": [
      "Lettuce",
      "Greens",
      "Dressing",
      "Bowl",
      "Vegetables"
    ]
  },
  {
    "id": 167,
    "targetWord": "SOUP",
    "category": "Food",
    "tabooWords": [
      "Bowl",
      "Broth",
      "Spoon",
      "Hot",
      "Liquid"
    ]
  },
  {
    "id": 168,
    "targetWord": "STEAK",
    "category": "Food",
    "tabooWords": [
      "Beef",
      "Grill",
      "Meat",
      "Medium",
      "Cut"
    ]
  },
  {
    "id": 169,
    "targetWord": "WATERMELON",
    "category": "Food",
    "tabooWords": [
      "Fruit",
      "Seeds",
      "Green",
      "Red",
      "Summer"
    ]
  },
  {
    "id": 170,
    "targetWord": "BANANA",
    "category": "Food",
    "tabooWords": [
      "Yellow",
      "Peel",
      "Fruit",
      "Monkey",
      "Curved"
    ]
  },
  {
    "id": 171,
    "targetWord": "STRAWBERRY",
    "category": "Food",
    "tabooWords": [
      "Red",
      "Fruit",
      "Seeds",
      "Sweet",
      "Berry"
    ]
  },
  {
    "id": 172,
    "targetWord": "PEANUT BUTTER",
    "category": "Food",
    "tabooWords": [
      "Jar",
      "Spread",
      "Nutty",
      "Jelly",
      "Sandwich"
    ]
  },
  {
    "id": 173,
    "targetWord": "CHEESE",
    "category": "Food",
    "tabooWords": [
      "Dairy",
      "Slice",
      "Yellow",
      "Milk",
      "Melt"
    ]
  },
  {
    "id": 174,
    "targetWord": "EGG",
    "category": "Food",
    "tabooWords": [
      "Yolk",
      "Shell",
      "Breakfast",
      "Chicken",
      "Crack"
    ]
  },
  {
    "id": 175,
    "targetWord": "BREAD",
    "category": "Food",
    "tabooWords": [
      "Loaf",
      "Slice",
      "Bakery",
      "Wheat",
      "Toast"
    ]
  },
  {
    "id": 176,
    "targetWord": "MILK",
    "category": "Food",
    "tabooWords": [
      "Cow",
      "White",
      "Dairy",
      "Carton",
      "Drink"
    ]
  },
  {
    "id": 177,
    "targetWord": "COFFEE",
    "category": "Food",
    "tabooWords": [
      "Caffeine",
      "Bean",
      "Cup",
      "Morning",
      "Espresso"
    ]
  },
  {
    "id": 178,
    "targetWord": "TEA",
    "category": "Food",
    "tabooWords": [
      "Bag",
      "Hot",
      "Cup",
      "Leaves",
      "Kettle"
    ]
  },
  {
    "id": 179,
    "targetWord": "BURRITO",
    "category": "Food",
    "tabooWords": [
      "Wrap",
      "Mexican",
      "Rice",
      "Beans",
      "Tortilla"
    ]
  },
  {
    "id": 180,
    "targetWord": "NACHOS",
    "category": "Food",
    "tabooWords": [
      "Chips",
      "Cheese",
      "Salsa",
      "Mexican",
      "Dip"
    ]
  },
  {
    "id": 181,
    "targetWord": "LASAGNA",
    "category": "Food",
    "tabooWords": [
      "Layers",
      "Pasta",
      "Cheese",
      "Italian",
      "Bake"
    ]
  },
  {
    "id": 182,
    "targetWord": "MEATBALL",
    "category": "Food",
    "tabooWords": [
      "Round",
      "Sauce",
      "Beef",
      "Spaghetti",
      "Italian"
    ]
  },
  {
    "id": 183,
    "targetWord": "WAFFLE",
    "category": "Food",
    "tabooWords": [
      "Grid",
      "Syrup",
      "Breakfast",
      "Batter",
      "Crisp"
    ]
  },
  {
    "id": 184,
    "targetWord": "BAGEL",
    "category": "Food",
    "tabooWords": [
      "Round",
      "Hole",
      "Cream Cheese",
      "Bread",
      "Toast"
    ]
  },
  {
    "id": 185,
    "targetWord": "PRETZEL",
    "category": "Food",
    "tabooWords": [
      "Twist",
      "Salt",
      "Snack",
      "Dough",
      "Knot"
    ]
  },
  {
    "id": 186,
    "targetWord": "POTATO CHIPS",
    "category": "Food",
    "tabooWords": [
      "Crunchy",
      "Bag",
      "Salty",
      "Snack",
      "Fried"
    ]
  },
  {
    "id": 187,
    "targetWord": "CUPCAKE",
    "category": "Food",
    "tabooWords": [
      "Frosting",
      "Sweet",
      "Small",
      "Bake",
      "Dessert"
    ]
  },
  {
    "id": 188,
    "targetWord": "BIRTHDAY CAKE",
    "category": "Food",
    "tabooWords": [
      "Candles",
      "Icing",
      "Party",
      "Sweet",
      "Slice"
    ]
  },
  {
    "id": 189,
    "targetWord": "GRILLED CHEESE",
    "category": "Food",
    "tabooWords": [
      "Bread",
      "Melted",
      "Toasted",
      "Cheese",
      "Sandwich"
    ]
  },
  {
    "id": 190,
    "targetWord": "APPLE PIE",
    "category": "Food",
    "tabooWords": [
      "Dessert",
      "Crust",
      "Sweet",
      "Fruit",
      "Slice"
    ]
  },
  {
    "id": 191,
    "targetWord": "FRIED CHICKEN",
    "category": "Food",
    "tabooWords": [
      "Crispy",
      "Bucket",
      "Drumstick",
      "Fried",
      "Bones"
    ]
  },
  {
    "id": 192,
    "targetWord": "RAMEN",
    "category": "Food",
    "tabooWords": [
      "Noodles",
      "Broth",
      "Japanese",
      "Bowl",
      "Soup"
    ]
  },
  {
    "id": 193,
    "targetWord": "SMOOTHIE",
    "category": "Food",
    "tabooWords": [
      "Blend",
      "Fruit",
      "Drink",
      "Cup",
      "Straw"
    ]
  },
  {
    "id": 194,
    "targetWord": "MILKSHAKE",
    "category": "Food",
    "tabooWords": [
      "Cold",
      "Blend",
      "Sweet",
      "Straw",
      "Ice Cream"
    ]
  },
  {
    "id": 195,
    "targetWord": "GUACAMOLE",
    "category": "Food",
    "tabooWords": [
      "Avocado",
      "Dip",
      "Green",
      "Mexican",
      "Chips"
    ]
  },
  {
    "id": 196,
    "targetWord": "PICKLE",
    "category": "Food",
    "tabooWords": [
      "Sour",
      "Cucumber",
      "Jar",
      "Green",
      "Brine"
    ]
  },
  {
    "id": 197,
    "targetWord": "OATMEAL",
    "category": "Food",
    "tabooWords": [
      "Breakfast",
      "Bowl",
      "Oats",
      "Hot",
      "Spoon"
    ]
  },
  {
    "id": 198,
    "targetWord": "YOGURT",
    "category": "Food",
    "tabooWords": [
      "Dairy",
      "Spoon",
      "Cup",
      "Creamy",
      "Cultures"
    ]
  },
  {
    "id": 199,
    "targetWord": "HONEY",
    "category": "Food",
    "tabooWords": [
      "Bees",
      "Sweet",
      "Sticky",
      "Jar",
      "Golden"
    ]
  },
  {
    "id": 200,
    "targetWord": "MARSHMALLOW",
    "category": "Food",
    "tabooWords": [
      "Fluffy",
      "White",
      "Campfire",
      "Sweet",
      "Soft"
    ]
  },
  {
    "id": 201,
    "targetWord": "EIFFEL TOWER",
    "category": "Places",
    "tabooWords": [
      "Paris",
      "France",
      "Tower",
      "Iron",
      "Landmark"
    ]
  },
  {
    "id": 202,
    "targetWord": "BEACH",
    "category": "Places",
    "tabooWords": [
      "Sand",
      "Ocean",
      "Wave",
      "Sun",
      "Swim"
    ]
  },
  {
    "id": 203,
    "targetWord": "HOSPITAL",
    "category": "Places",
    "tabooWords": [
      "Doctor",
      "Nurse",
      "Sick",
      "Patient",
      "Emergency"
    ]
  },
  {
    "id": 204,
    "targetWord": "AIRPORT",
    "category": "Places",
    "tabooWords": [
      "Plane",
      "Flight",
      "Terminal",
      "Luggage",
      "Gate"
    ]
  },
  {
    "id": 205,
    "targetWord": "SCHOOL",
    "category": "Places",
    "tabooWords": [
      "Students",
      "Teacher",
      "Class",
      "Homework",
      "Desk"
    ]
  },
  {
    "id": 206,
    "targetWord": "LIBRARY",
    "category": "Places",
    "tabooWords": [
      "Books",
      "Quiet",
      "Shelves",
      "Read",
      "Borrow"
    ]
  },
  {
    "id": 207,
    "targetWord": "ZOO",
    "category": "Places",
    "tabooWords": [
      "Animals",
      "Cage",
      "Lion",
      "Ticket",
      "Exhibit"
    ]
  },
  {
    "id": 208,
    "targetWord": "RESTAURANT",
    "category": "Places",
    "tabooWords": [
      "Menu",
      "Waiter",
      "Food",
      "Table",
      "Eat"
    ]
  },
  {
    "id": 209,
    "targetWord": "MUSEUM",
    "category": "Places",
    "tabooWords": [
      "Art",
      "Exhibit",
      "History",
      "Painting",
      "Tour"
    ]
  },
  {
    "id": 210,
    "targetWord": "GYM",
    "category": "Places",
    "tabooWords": [
      "Workout",
      "Weights",
      "Exercise",
      "Treadmill",
      "Muscles"
    ]
  },
  {
    "id": 211,
    "targetWord": "SUPERMARKET",
    "category": "Places",
    "tabooWords": [
      "Groceries",
      "Cart",
      "Aisle",
      "Checkout",
      "Shop"
    ]
  },
  {
    "id": 212,
    "targetWord": "AMUSEMENT PARK",
    "category": "Places",
    "tabooWords": [
      "Rides",
      "Roller Coaster",
      "Tickets",
      "Fun",
      "Games"
    ]
  },
  {
    "id": 213,
    "targetWord": "MOVIE THEATER",
    "category": "Places",
    "tabooWords": [
      "Screen",
      "Popcorn",
      "Tickets",
      "Seats",
      "Film"
    ]
  },
  {
    "id": 214,
    "targetWord": "CHURCH",
    "category": "Places",
    "tabooWords": [
      "Pray",
      "Religion",
      "Cross",
      "Priest",
      "Worship"
    ]
  },
  {
    "id": 215,
    "targetWord": "PARK",
    "category": "Places",
    "tabooWords": [
      "Grass",
      "Playground",
      "Trees",
      "Bench",
      "Outdoor"
    ]
  },
  {
    "id": 216,
    "targetWord": "STADIUM",
    "category": "Places",
    "tabooWords": [
      "Sports",
      "Crowd",
      "Field",
      "Seats",
      "Game"
    ]
  },
  {
    "id": 217,
    "targetWord": "GRAND CANYON",
    "category": "Places",
    "tabooWords": [
      "Arizona",
      "Canyon",
      "Rocks",
      "Hike",
      "Deep"
    ]
  },
  {
    "id": 218,
    "targetWord": "NIAGARA FALLS",
    "category": "Places",
    "tabooWords": [
      "Waterfall",
      "Water",
      "Canada",
      "Boat",
      "Mist"
    ]
  },
  {
    "id": 219,
    "targetWord": "GREAT WALL OF CHINA",
    "category": "Places",
    "tabooWords": [
      "China",
      "Wall",
      "Long",
      "Stone",
      "Ancient"
    ]
  },
  {
    "id": 220,
    "targetWord": "STATUE OF LIBERTY",
    "category": "Places",
    "tabooWords": [
      "New York",
      "Torch",
      "Statue",
      "Crown",
      "Green"
    ]
  },
  {
    "id": 221,
    "targetWord": "TIMES SQUARE",
    "category": "Places",
    "tabooWords": [
      "New York",
      "Billboards",
      "Crowd",
      "Lights",
      "City"
    ]
  },
  {
    "id": 222,
    "targetWord": "LAS VEGAS",
    "category": "Places",
    "tabooWords": [
      "Casino",
      "Nevada",
      "Gamble",
      "Lights",
      "Strip"
    ]
  },
  {
    "id": 223,
    "targetWord": "HOLLYWOOD",
    "category": "Places",
    "tabooWords": [
      "Sign",
      "Movies",
      "California",
      "Stars",
      "Actors"
    ]
  },
  {
    "id": 224,
    "targetWord": "DISNEYLAND",
    "category": "Places",
    "tabooWords": [
      "Amusement",
      "Mickey",
      "Rides",
      "Park",
      "California"
    ]
  },
  {
    "id": 225,
    "targetWord": "THE WHITE HOUSE",
    "category": "Places",
    "tabooWords": [
      "President",
      "Washington",
      "Government",
      "Oval Office",
      "White"
    ]
  },
  {
    "id": 226,
    "targetWord": "THE PYRAMIDS",
    "category": "Places",
    "tabooWords": [
      "Egypt",
      "Ancient",
      "Pharaoh",
      "Sand",
      "Triangle"
    ]
  },
  {
    "id": 227,
    "targetWord": "MOUNT EVEREST",
    "category": "Places",
    "tabooWords": [
      "Climb",
      "Tall",
      "Mountain",
      "Nepal",
      "Snow"
    ]
  },
  {
    "id": 228,
    "targetWord": "THE AMAZON RAINFOREST",
    "category": "Places",
    "tabooWords": [
      "Jungle",
      "Trees",
      "Brazil",
      "Wild",
      "Green"
    ]
  },
  {
    "id": 229,
    "targetWord": "SAHARA DESERT",
    "category": "Places",
    "tabooWords": [
      "Sand",
      "Hot",
      "Dry",
      "Camel",
      "Dunes"
    ]
  },
  {
    "id": 230,
    "targetWord": "THE GREAT BARRIER REEF",
    "category": "Places",
    "tabooWords": [
      "Coral",
      "Australia",
      "Ocean",
      "Fish",
      "Underwater"
    ]
  },
  {
    "id": 231,
    "targetWord": "VENICE",
    "category": "Places",
    "tabooWords": [
      "Canals",
      "Italy",
      "Gondola",
      "Boat",
      "Water"
    ]
  },
  {
    "id": 232,
    "targetWord": "LONDON",
    "category": "Places",
    "tabooWords": [
      "England",
      "Big Ben",
      "Bridge",
      "Queen",
      "UK"
    ]
  },
  {
    "id": 233,
    "targetWord": "NEW YORK CITY",
    "category": "Places",
    "tabooWords": [
      "Skyscraper",
      "Subway",
      "Big Apple",
      "Broadway",
      "Taxi"
    ]
  },
  {
    "id": 234,
    "targetWord": "TOKYO",
    "category": "Places",
    "tabooWords": [
      "Japan",
      "City",
      "Sushi",
      "Neon",
      "Crowded"
    ]
  },
  {
    "id": 235,
    "targetWord": "PARIS",
    "category": "Places",
    "tabooWords": [
      "France",
      "Eiffel",
      "Croissant",
      "Louvre",
      "Romance"
    ]
  },
  {
    "id": 236,
    "targetWord": "OFFICE",
    "category": "Places",
    "tabooWords": [
      "Desk",
      "Work",
      "Cubicle",
      "Meeting",
      "Computer"
    ]
  },
  {
    "id": 237,
    "targetWord": "TRAIN STATION",
    "category": "Places",
    "tabooWords": [
      "Platform",
      "Ticket",
      "Track",
      "Depart",
      "Rail"
    ]
  },
  {
    "id": 238,
    "targetWord": "GAS STATION",
    "category": "Places",
    "tabooWords": [
      "Fuel",
      "Pump",
      "Car",
      "Station",
      "Fill"
    ]
  },
  {
    "id": 239,
    "targetWord": "BANK",
    "category": "Places",
    "tabooWords": [
      "Money",
      "Teller",
      "Vault",
      "Account",
      "Deposit"
    ]
  },
  {
    "id": 240,
    "targetWord": "POST OFFICE",
    "category": "Places",
    "tabooWords": [
      "Mail",
      "Stamp",
      "Package",
      "Letter",
      "Deliver"
    ]
  },
  {
    "id": 241,
    "targetWord": "FIRE STATION",
    "category": "Places",
    "tabooWords": [
      "Firefighter",
      "Truck",
      "Hose",
      "Alarm",
      "Rescue"
    ]
  },
  {
    "id": 242,
    "targetWord": "POLICE STATION",
    "category": "Places",
    "tabooWords": [
      "Officer",
      "Badge",
      "Cell",
      "Arrest",
      "Cop"
    ]
  },
  {
    "id": 243,
    "targetWord": "DENTIST OFFICE",
    "category": "Places",
    "tabooWords": [
      "Teeth",
      "Chair",
      "Drill",
      "Cavity",
      "Cleaning"
    ]
  },
  {
    "id": 244,
    "targetWord": "COURTHOUSE",
    "category": "Places",
    "tabooWords": [
      "Judge",
      "Trial",
      "Jury",
      "Law",
      "Gavel"
    ]
  },
  {
    "id": 245,
    "targetWord": "FARM",
    "category": "Places",
    "tabooWords": [
      "Barn",
      "Animals",
      "Crops",
      "Tractor",
      "Field"
    ]
  },
  {
    "id": 246,
    "targetWord": "CAMPGROUND",
    "category": "Places",
    "tabooWords": [
      "Tent",
      "Fire",
      "Woods",
      "Sleeping Bag",
      "Outdoors"
    ]
  },
  {
    "id": 247,
    "targetWord": "PLAYGROUND",
    "category": "Places",
    "tabooWords": [
      "Slide",
      "Swing",
      "Kids",
      "Sandbox",
      "Monkey Bars"
    ]
  },
  {
    "id": 248,
    "targetWord": "PARKING LOT",
    "category": "Places",
    "tabooWords": [
      "Cars",
      "Spaces",
      "Lines",
      "Lot",
      "Park"
    ]
  },
  {
    "id": 249,
    "targetWord": "LIGHTHOUSE",
    "category": "Places",
    "tabooWords": [
      "Ocean",
      "Beam",
      "Tower",
      "Ships",
      "Coast"
    ]
  },
  {
    "id": 250,
    "targetWord": "CASTLE",
    "category": "Places",
    "tabooWords": [
      "King",
      "Queen",
      "Moat",
      "Medieval",
      "Tower"
    ]
  }
];
