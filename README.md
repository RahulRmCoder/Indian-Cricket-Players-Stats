# Indian-Cricket-Players-Stats

A simple web application built with Node.js and Express.js to display cricket player statistics. The app allows users to search for a player's stats and view detailed information, such as matches played, runs scored, batting averages, and trophies won.

## Features

- Dynamic search for cricket player statistics.
- Displays stats such as matches, innings, runs, batting averages, and trophies.
- Clean and simple user interface built with EJS templates.
- Easy to add or update player data using a JSON file.
- Serves static assets such as images and stylesheets from the `public` directory.

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript) for templating
- JSON for storing player data
- HTML/CSS for frontend design

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/RahulRm25/Indian-Cricket-Players-Stats.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Indian-Cricket-Players-Stats
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   node index.js
   ```

5. Open your browser and go to:

   ```
   http://localhost:3001
   ```

## Project Structure

```
cricket-player-stats/
├── public/
│   ├── images/        # Player images and other static assets
│   ├── styles/       
|       ├── main.css   # CSS for styling the app
├── views/
│   ├── index.ejs      # Main HTML template for the app
├── stats.json         # JSON file containing player data
├── index.js             # Main server file
├── package.json       # Node.js dependencies and scripts
└── README.md          # Project documentation
```

## Usage

1. Open the app in your browser.
2. Select or type a player's name in the input field and submit.
3. View detailed statistics of the selected player.

## Data Format (`stats.json`)

Player data is stored in a JSON file in the following format:

```json
[
  {
    "name": "Player Name",
    "matches": 100,
    "innings": 95,
    "runs": 5000,
    "average": 50.0,
    "trophies": 5
  }
]
```

To add or update player data, simply modify the `stats.json` file.

## Enhancements (TODOs)

- [ ] Add error handling for missing players or invalid input.
- [ ] Generate player buttons dynamically based on `stats.json`.
- [ ] Add player images to the stats display.
- [ ] Improve UI/UX with better CSS styling.
- [ ] Deploy the app using platforms like Heroku or Vercel.

## License

This project is licensed under the [MIT License](LICENSE).

---

### Author

Created by **[Your Name]**. Feel free to reach out for any suggestions or improvements!
