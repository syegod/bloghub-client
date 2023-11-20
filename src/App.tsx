import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from './pages/mainpage'
import Layout from "./components/Layout";
import { useEffect, useState } from "react";
import { AuthContext } from "./contexts/AuthContext";
import axios from "./axios";
import AddPost from "./pages/addpost";
import NotFound from "./pages/notfound";
import Explore from "./pages/explore";
import PostsContextProvider from "./contexts/PostContext";

function App() {
  const [udata, setUData] = useState(null);
  const [token, setToken] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getUserData() {
      try {
        setLoading(true);
        const res = await axios.get('/auth/get-me');
        setUData(res.data?.userData);
        setToken(res.data?.token);
        setIsAuth(!!res.data?.token && !!res.data?.userData);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    getUserData();
  }, []);

  return (
    <AuthContext.Provider value={{
      userData: udata, token, isAuth, state: loading ? 'loading' : 'loaded'
    }}>
      <PostsContextProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" index element={<MainPage />} />
              <Route path="/explore" element={<Explore />} />
              {/* <Route path="/add-post" element={<AddPost />} /> */}
            </Routes>
          </Layout>
        </BrowserRouter>
      </PostsContextProvider>
    </AuthContext.Provider>
  );
}

export default App;
