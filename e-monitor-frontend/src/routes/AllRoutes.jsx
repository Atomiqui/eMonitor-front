import {Routes, Route} from "react-router-dom";

//Rota Inicial assim que o usuário abrir o site
import WelcomePage from "../pages/Welcome/Welcome-Page";

//3 Rotas responsaveis por cadastro de usuario e escolha de modelo de cadastro
import Choice from "../pages/Choice/Choice";
import MonitorRegister from "../components/Register/MonitorRegister"
import EstudanteRegister from "../components/Register/StudentRegister";

//Rota de Login geral da aplicação
import Login from "../components/Login/Login";

//2 Rotas referentes ao Lobby do estudante e do monitor
import LobbyMonitor from "../components/Lobby-Monitor/LobbyMonitor";
import LobbyStudent from "../components/Lobby-Student/LobbyStudent";



const AllRoutes = () => {
    return (
        <Routes>
            <Route path={"/"} element={< WelcomePage />}/>

            <Route path={"/choice"} element={< Choice />}/>

            <Route path={"/login"} element={< Login />}/>
            <Route path={"/monitor-register"} element={< MonitorRegister />}/>
            <Route path={"/student-register"} element={< EstudanteRegister />}/>
            

            <Route path={"/lobby-monitor"} element={< LobbyMonitor />}/>
            <Route path={"/lobby-student"} element={< LobbyStudent />}/>
        </Routes>
    )
}   

export default AllRoutes;