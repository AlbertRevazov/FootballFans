import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Footer } from "./components/Footer";
import { MainPage } from "./components/Main";
import { MapPage } from "./components/MapPage";
import { Nav } from "./components/Nav";
import { MatchesPage } from "./components/Matches";
import { Sign } from "./components/Sign";
import { useAppDispatch } from "./hooks/hooks";
import { getMe } from "./redux/features/auth/authSlice";
import { TeamsPage } from "./components/Teams";
import AuthRoute from "./utils/AuthRoute";
import { CompetitionPage } from "./components/Competitions";
import { UserPage } from "./components/User";

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMe());
  }, []);
  return (
    <>
      <Nav />
      <div className="App">
        <div className="flex">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route
              path="/matches"
              element={
                <AuthRoute>
                  <MatchesPage />
                </AuthRoute>
              }
            />

            <Route path="/teams" element={<TeamsPage />}>
              <Route
                path=":id"
                element={
                  <AuthRoute>
                    <TeamsPage />
                  </AuthRoute>
                }
              />
            </Route>
            <Route
              path="/lk"
              element={
                <AuthRoute>
                 <UserPage/>
                </AuthRoute>
              }
            ></Route>
            <Route path="/competition" element={<CompetitionPage />}>
              <Route
                path=":code"
                element={
                  <AuthRoute>
                    <CompetitionPage />
                  </AuthRoute>
                }
              />
            </Route>
            <Route path="/sign" element={<Sign />} />
            <Route
              path="/map"
              element={
                <AuthRoute>
                  <MapPage />
                </AuthRoute>
              }
            />
            <Route
              path="*"
              element={
                <div className="error">
                  <h2>Ошибочка, нет такой страницы</h2>
                  <img src="/images/404.jpg" alt="error" />
                </div>
              }
            />
          </Routes>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
      <Footer />
    </>
  );
};

export { App };
