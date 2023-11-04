import { ColorModeContext, useMode } from "./Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route} from 'react-router-dom';
import Topbar from './pages/global/Topbar';
import Sidebars from './pages/global/Sidebar';
import Dashboard from './pages/dashboard';
import Team from './pages/team/Team';
import Invoices from './pages/invoices/Invoices';
import Contacts from './pages/contacts/Contacts';
import Form from './pages/form/Form';
import Calendar from './pages/calendar/Calendar';
import Bar from './pages/bar/Bar';
import Line from './pages/line/Line';
import Pie from './pages/pie/Pie';



function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
     <ThemeProvider theme={theme}>
      <CssBaseline/>
    <div className="app">
        <Sidebars/>
      <main className="content">
        <Topbar/>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/invoices" element={<Invoices/>}/>
          <Route path="/form" element={<Form/>}/> 
          <Route path="/calendar" element={<Calendar/>}/>
          <Route path="/bar" element={<Bar/>}/>
          <Route path="/pie" element={<Pie/>}/>
          <Route path="/line" element={<Line/>}/>
          
        </Routes>

      </main>
    </div>
    </ThemeProvider> 
    </ColorModeContext.Provider>
  );
}

export default App;
