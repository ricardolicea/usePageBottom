import { useEffect, useState } from "react";
import "./styles.css";

// Instructions:
// Create a custom Hook to detect if the user scrolled to the bottom of the page

const usePageBottom = () => {
  /* logic goes here */
  const [reachedBottom, setReachedBottom] = useState(false);
  const element = document.getElementById("root");

  useEffect(() => {
    const handleScroll = () => {
      setReachedBottom(document.documentElement.offsetHeight -(window.innerHeight + document.documentElement.scrollTop) <= 20)
   
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);


  return reachedBottom;
};

export default function App() {
  const reachedBottom = usePageBottom();
  console.log("reachedBottom", reachedBottom);
  let arr = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
  ];
  return (
    <div className="App">
      <h1>Welcome to React Challenges</h1>
      {arr.map((num, index) => (
        <h2 key={index + " " + num}>{num}</h2>
      ))}
      <footer>&copy; 2022 React challenges.live</footer>
    </div>
  );
}
