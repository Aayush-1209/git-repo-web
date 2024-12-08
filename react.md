Topic 1: Understanding and Implementing State and Props

1 , 3 Debugging and output

function App() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [userData, setUserData] = useState({
    name: "Jane Doe",
    email: "jane.doe@example.com",
    bio: "Web Developer",
  });

  const updateUser = (updatedData) => setUserData(updatedData);

  return (
    <div>
      <button onClick={() => setIsEditMode(!isEditMode)}>
        {isEditMode ? "View Profile" : "Edit Profile"}
      </button>
      {isEditMode ? (
        <EditProfile user={userData} updateUser={updateUser} />
      ) : (
        <UserProfile user={userData} />
      )}
    </div>
  );
}

function EditProfile({ user, updateUser }) {
  const [updatedUser, setUpdatedUser] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };

 const handleSave = () => {
  updateUser(updatedUser);
  alert("Profile updated successfully!");
};


  return (
    <form>
      <input name="name" value={updatedUser.name} onChange={handleChange} />
      <input name="email" value={updatedUser.email} onChange={handleChange} />
      <textarea name="bio" value={updatedUser.bio} onChange={handleChange}></textarea>
      <button type="button" onClick={handleSave}>
        Save
      </button>
    </form>
  );
}

 Topic 2 Problem Set: Advanced Lifecycle Management

 1. Debuuging ==>> 

   useEffect(() => {
  const timerID = setInterval(() => setSeconds((prev) => prev + 1), 1000);
  return () => clearInterval(timerID);
}, []);

2. ==> 
   const [seconds , setSeconds ] = useState(0);
   const [isPaused, setIsPaused] = useState(false);
useEffect(() => {
  if (!isPaused) {
    const timerID = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    return () => clearInterval(timerID);
  }
}, [isPaused]);


topic 3 .>>  Set: Advanced Controlled vs. Uncontrolled Components

1.De bugging 

  function Form() {
  const ref = useRef(null);
  const handleSubmit = () => {
    console.log(ref.current.value); 
  };

  return (
    <div>
      <input ref={ref} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}


3.>output based  

function HybridForm() {
  const [name, setName] =useState('');
  const emailRef = useRef(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    if (name.length < 3) {
      console.log('Name must be at least 3 characters long');
    } else {
      console.log('Name:', name);
      console.log('Email:', emailRef.current.value);
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={name} 
        onChange={handleNameChange} 
        placeholder="Enter your name"
      />
      <input 
        ref={emailRef} 
        type="email" 
        placeholder="Enter your email"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

Topic 4: Context API for Theme Switching 

 1. 
 import React, { createContext, useState, useContext } from 'react';
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light'); 

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}


3. out based  

got some change in above code 

import React, { createContext, useState, useContext } from 'react';


const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light'); // Default theme is 'light'

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}


function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="theme-button">
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}

function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <header className={theme}>
      <h1>Welcome to the {theme} theme!</h1>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <ThemeSwitcher />
    </div>
  );
}
export default function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
