import { Routes, Route } from "react-router-dom";

import {
  Home,
  Explore,
  Saved,
  CreatePost,
  Profile,
  EditPost,
  PostDetails,
  UpdateProfile,
  AllUsers,
} from "@/_root/pages";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import SignupForm from "@/_auth/forms/SignupForm";
import SigninForm from "@/_auth/forms/SigninForm";
import { Toaster } from "@/components/ui/toaster";

import "./globals.css";
import Discuss from "./_root/pages/Discuss";
import Saraswati from "./_root/pages/Saraswati";
import Htmlbot from "./_root/pages/Htmlbot";
import LandingPage from "./_root/pages/LandingPage";
import Materialmart from "./_root/pages/Materialmart";
import Page1 from "./_root/pages/guides/page1";
import Page2 from "./_root/pages/guides/page2";
import Page3 from "./_root/pages/guides/page3";
import Aven from "./_root/pages/clzmaterials/aven";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
      <Route path="/LandingPage" element={<LandingPage />} />
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        {/* private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/Discuss" element={<Discuss />} />
          <Route path="/Discuss/Htmlbot" element={<Htmlbot />} />
          <Route path="/Saraswati" element={<Saraswati />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/aven" element={<Aven/>} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/Materialmart" element={<Materialmart/>} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:id" element={<EditPost />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/profile/:id/*" element={<Profile />} />
          <Route path="/update-profile/:id" element={<UpdateProfile />} />
        </Route>
      </Routes>

      <Toaster />
    </main>
  );
};

export default App;
