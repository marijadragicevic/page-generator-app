## Running the Project

Follow these steps to set up and run the project:

### 1.Clone the Repository

-Open your command prompt or terminal and run the following command to clone the project:
git clone https://github.com/marijadragicevic/page-generator-app.git

### 2.Navigate to the Project Directory

-Change to the project directory:
cd marija-dragicevic-fatcat-task/

### 3.Install Dependencies

-Install the necessary dependencies with:
npm install

### 4.Run the Project

-Start the development server with:
npm run dev

## Enjoy using the app!

## Implementation Details

### TypeScript Conversion

The project has been converted from JavaScript to TypeScript. The TypeScript configuration includes:

-   "noImplicitAny": true
-   "strict": true
-   "strictNullChecks": true
-   "noImplicitThis": true
    Import aliases have also been set up. You can now use the format @homework-task/path/to/file.ts for imports.

### List Component

The List component displays data in a table format based on coldefs passed as props. It uses a custom hook for data fetching and manages loading and error states.

### Form Generator Component

This component is highly configurable, supporting various input fields, validation schemas, and an onSubmit function. It employs react-hook-form for form management and zod for schema validation. It also uses a custom hook for data fetching and handles loading and error states.

### Page Generator Component

Designed to handle various page layouts dynamically, this component renders different types of sections and components based on the props provided.
