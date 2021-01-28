import "./styles.css";

import { useState, useEffect } from 'react';
import { ChallengeDescription } from './ChallengeDescription';
import { ChallengeTitle } from './ChallengeTitle';
import { Contact } from './Contact'
import { Machine } from './model/machine'
import { getMachines } from './services/machine-services'


export default function App() {
  const [ machines, setMachines ] = useState<Machine[]>(undefined)

  useEffect(() => {
    (async () => {
      const machines = await getMachines();
      setMachines(machines)
    })()
  }, [])

  return (
    <div className="App">
      <ChallengeTitle />
      <ChallengeDescription machines={machines} />
      <Contact />
    </div>
  );
}
