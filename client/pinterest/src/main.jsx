import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainLayout from "./routes/layout/mainLayout.jsx";
// import Homepage from "./routes/homepage/homepage.jsx";
// import CreatePage from "./routes/createPage/createPage.jsx";
// import PostPage from "./routes/postPage/postPage.jsx";
// import AuthPage from "./routes/authPage/authPage.jsx";
// import ProfilePage from "./routes/profilePage/profilePage.jsx";
// import SearchPage from "./routes/searchPage/searchPage.jsx";

const Homepage = React.lazy(() => import("./routes/homepage/homepage.jsx"));
const CreatePage = React.lazy(() =>
  import("./routes/createPage/createPage.jsx")
);
const PostPage = React.lazy(() => import("./routes/postPage/postPage.jsx"));
const AuthPage = React.lazy(() => import("./routes/authPage/authPage.jsx"));
const ProfilePage = React.lazy(() =>
  import("./routes/profilePage/profilePage.jsx")
);
const SearchPage = React.lazy(() =>
  import("./routes/searchPage/searchPage.jsx")
);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/pins/:id" element={<PostPage />} />
            <Route path="/:username" element={<ProfilePage />} />
            <Route path="/search" element={<SearchPage />} />
          </Route>
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
