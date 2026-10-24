# IT 313 – Laboratory 5: React State & Hooks in Action

## Project Description

This project is a simple mobile application built using React Native and Expo. It demonstrates how React state and hooks work through a Practice Tracker and a Stopwatch.

## Features

- **Practice Tracker:** Displays the number of solved problems.
- **Solve +1 Button:** Increases the solved count by one.
- **Reset Button:** Resets the solved count to zero.
- **Great job! Message:** Appears when the solved count reaches five or more.
- **Stopwatch:** Tracks elapsed time in seconds.
- **Start and Stop Buttons:** Start and pause the stopwatch.
- **Running Status:** Displays whether the stopwatch is running or paused.

## Technologies Used

- React Native
- Expo
- TypeScript
- React Hooks

## React Concepts Used

### 1. useState

Used to store and update the solved count, stopwatch seconds, and running status.

### 2. useEffect

Used to manage the stopwatch interval when the running status changes.

### 3. Custom Hook

The `useStopwatch` custom hook contains the logic for tracking elapsed time.

### 4. Props

Props pass data and event handler functions between `LabScreen`, `PracticeTracker`, and `Stopwatch`.

### 5. Lifting State Up

The `LabScreen` component manages shared state and passes the necessary values and functions to its child components.

### 6. Cleanup Function

The `clearInterval()` function cleans up the stopwatch interval to prevent unwanted timer behavior.

## Project Components

- `LabScreen` – Main screen that manages the application state.
- `PracticeTracker` – Displays and updates the solved count.
- `Stopwatch` – Displays elapsed seconds and timer status.
- `useStopwatch` – Custom hook that manages stopwatch logic.

## How to Run the Project

1. Install Node.js on your computer.
2. Open a terminal in the project folder.
3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Start the Expo development server:

   ```bash
   npx expo start
   ```

5. Open Expo Go on your mobile device and scan the QR code, or use an available emulator.

## Testing

The application can be tested by:

1. Pressing **Solve +1** to increase the solved count.
2. Pressing **Reset** to return the solved count to zero.
3. Solving five or more problems to display the **Great job!** message.
4. Pressing **Start** to begin the stopwatch.
5. Pressing **Stop** to pause the stopwatch.
6. Starting and stopping the timer to check that it works correctly.

## Learning Objectives

This activity demonstrates how to manage component state, use React hooks, create a custom hook, pass props between components, handle button events, conditionally render content, and clean up timer intervals.
