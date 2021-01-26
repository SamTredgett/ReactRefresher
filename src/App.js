import React, { useState } from 'react';

// COMPONENT IMPORTS
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

// MAIN STYLESHEET IMPORT
import './App.css';

const App = () => {
  /**
   * Array which makes use of the useState() function to update itself 
   * accoring to state changes passed in by NewGoal.js
   */
  const [courseGoals, setCourseGoals] = useState([
    {id:'cg1', text: 'Finish the .React Native Course'},
    {id:'cg2', text: 'Learn all about the Course Main Topic'},
    {id:'cg3', text: 'Help others learn too!'},
  ]);

  /**
   *  Handles changes in state by creating a new array via the concat() function
   *  and triggers a re-render of the component via the return function (line 30-35)
   * @param {addNewGoalHandler} newGoal 
   */
  const addNewGoalHandler = (newGoal) => {
    // setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(newGoal));
  };

  return (<div>
    <h2>Course Goals</h2>
    <NewGoal onAddGoal={addNewGoalHandler}/>
    <GoalList goals={courseGoals}/>
  </div>
  );
};

export default App;
