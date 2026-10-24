import * as Device from 'expo-device';
import { Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AnimatedIcon } from '@/components/animated-icon';
import { HintRow } from '@/components/hint-row';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { Button , Text, View} from 'react-native';
import {useState, useEffect} from "react";

type PracticeTrackerProps = {
 solved: number;
 onSolve:() => void;
 onReset: () => void;
};

function PracticeTracker({
  solved,
  onSolve,
  onReset,
}:  PracticeTrackerProps) {
  return (
    <View>
      <Text>Solved: {solved}</Text>
      <Button title= "Solve +1" onPress={onSolve}/>
      <Button title= "Reset" onPress={onReset}/>    

      {solved >= 5 && <Text>Great Job!</Text>} 
    </View>
  )
}

function useStopwatch(isRunning: boolean) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSeconds ((s) => s+1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

    return seconds;
  }

  type StopwacthProps = {
    seconds: number;
    isRunning: boolean;
  };

  function Stopwatch ({seconds, isRunning}: StopwacthProps) {
    return (
      <View>
      <Text>Time: {seconds} seconds</Text>
      <Text> {isRunning ? "Running..." : "Paused"}</Text>
      </View>
    );
  };

  export default function Labscreen()  {
    const [solved,setSolved] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const seconds = useStopwatch(isRunning);
    
  function handleSolve(){
    setSolved((s) => s+1);
  }

  function handleReset() {
    setSolved(0);
  }
function handleStart(){
  setIsRunning(true);
}

function handleStop() {
  setIsRunning(false);
}

return (
  <View style= {{padding:20, gap:10}}>
    <Text>Practice Tracker</Text>

    <PracticeTracker
    solved= {solved}
    onSolve={handleSolve}
    onReset={handleReset}
    />
  <Text>Stopwatch</Text>
  <Stopwatch
    seconds={seconds}
    isRunning={isRunning}
  />
  <Button title = "Start" onPress ={handleStart} />
  <Button title = "Stop" onPress ={handleStop} />

  </View>
);
}



