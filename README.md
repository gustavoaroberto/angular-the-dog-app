# The Dog App - Angular Version

The Dog App is an Angular 18 application that fetches data from a free API to display various dog breeds. This app is part of a larger initiative to compare development experiences across different front-end frameworks. The goal is to explore how each framework handles API integration, data fetching, and creating modern, responsive web applications. This project is an integral part of my journey to learn and understand various front-end technologies' strengths and learning curves.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [License](#license)

## Features

- Fetch and display a list of dog breeds
- Detailed view of each breed with additional information
- Responsive design for mobile and desktop views
- Modern UI/UX with a focus on simplicity and usability

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/gustavoaroberto/angular-the-dog-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd angular-the-dog-app
    ```

3. Install dependencies with npm:

    ```bash
    npm install
    ```

4. Create an `environment.ts` file in the `src/environments` directory and add your API key:

    ```typescript
    export const environment = {
      production: false,
      apiUrl: 'https://api.thedogapi.com/v1',
      apiKey: 'your_api_key_here'
    };
    ```

5. Start the development server:

    ```bash
    ng serve
    ```

6. Open your browser and go to `http://localhost:4200`.

## Usage

- On the home page, you will see a list of dog breeds.
- Click on any breed to see more details.
- Use the search functionality to quickly find specific breeds.

## Technologies

- **Angular 18**: Framework for building client-side applications.
- **RxJS**: Library for reactive programming using observables.
- **Angular CLI**: Command-line interface for Angular.

## License

This project is licensed under the MIT License.
