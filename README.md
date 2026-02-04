# MyVote Project (V1)

A nonpartisan voter education platform built for the 2020 U.S. Presidential Election.

I was asked by a friend to build the first website for MyVote Project while they were starting the organization. MyVote Project (MVP) is a national, nonpartisan organization that curates information on candidates in an easy-to-understand format and presents policy issues critical to voters. This was my first full website built from scratch.

## Features

- **Candidate Profiles** - Detailed overviews of 2020 presidential candidates including their backgrounds, signature issues, and policy stances
- **Policy Breakdowns** - In-depth analysis of key policy issues (gun safety, background checks, assault weapons, red flag laws) with pros/cons from multiple perspectives
- **Candidate Stance Comparisons** - Visual comparison of where each candidate stands on specific policy issues
- **Interactive "Share Your Voice"** - Survey functionality allowing users to express their views on policy issues
- **Searchable Navigation** - Dropdown menus with search functionality to quickly find candidates or policies

## Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: Custom CSS with responsive design
- **Hosting**: GitHub Pages (previously myvoteproject.com)

## Getting Started

### Prerequisites

- Any modern web browser
- No build tools required - this is a static site

### Installation

```bash
git clone https://github.com/Technical-1/MyVoteProject-V1.git
cd MyVoteProject-V1
```

### Usage

Open `index.html` in your browser, or serve locally:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

Then visit `http://localhost:8000`

## Development

This is a static website with no build process:

```bash
# No installation needed - just edit the files directly

# To preview changes, open index.html in a browser
open index.html
```

## Project Structure

```
MyVoteProject-V1/
├── index.html           # Homepage with organization info
├── candidates.html      # Presidential candidate profiles
├── policies.html        # Policy issue breakdowns
├── css/
│   ├── homepage.css     # Styles for homepage
│   └── index.css        # Styles for candidates/policies pages
├── js/
│   └── index.js         # Interactive functionality
└── Images/              # Candidate photos and assets
```

## Historical Context

This was Version 1 of MyVote Project, built for the 2020 election cycle. The original code was eventually replaced when the organization partnered with an independent contractor. I stayed with the project for a year after, working with a code advisor and contractor on further development.

## Author

Jacob Kanfer - [GitHub](https://github.com/Technical-1)
