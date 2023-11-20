import { useState } from "react";
import Form from "./components/Form";
import ItemsList from "./components/ItemsList";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {Card,CardContent,Switch,} from "@mui/material";

function App() {
  const [toggleDarkMode, setToggleDarkMode] = useState(true);
  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };
  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? "dark" : "light",
      primary: {
        main: "#90caf9",
      },
      secondary: {
        main: "#131052",
      },
    },
  });
  const [items, setItems] = useState([
    {
      id: 1,
      text: "Hello",
      completed: true,
    },
    {
      id: 2,
      text: "Nice Too",
      completed: true,
    },
    {
      id: 3,
      text: "I'm programer",
      completed: true,
    },
  ]);

  const deleteItem = (id) => {
    setItems((prev) => {
      return prev.filter((item) => item.id != id);
    });
  };

  const changeCompleted = (id) => {
    setItems((prev) => {
      return prev.map((item) => {
        if (item.id == id) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      });
    });
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>Toggle Dark mode</h2>
        <Switch checked={toggleDarkMode} onChange={toggleDarkTheme} />
        <Card sx={{height:"600px"}}>
          <CardContent>
            <div className=" h-screen grid place-items-center ">
              <div className="w-[520px] p-8">
                <h1 className="text-3xl text-center mb-8">Grocery Bud</h1>
                <Form className="dark:text-white" />
                <ItemsList
                  items={items}
                  deleteItem={deleteItem}
                  changeCompleted={changeCompleted}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </ThemeProvider>
  );
}

export default App;
