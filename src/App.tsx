import { Route, Routes } from "react-router";
import { Layout } from "./Layout.tsx";
import { Access } from "./pages/Access.tsx";
import { Agents } from "./pages/Agents.tsx";
import { Agent } from "./pages/Agent.tsx";
import { Doctrine } from "./pages/Doctrine.tsx";
import { Engagements } from "./pages/Engagements.tsx";
import { Era } from "./pages/Era.tsx";
import { Glossary } from "./pages/Glossary.tsx";
import { Home } from "./pages/Home.tsx";
import { Name } from "./pages/Name.tsx";
import { NotFound } from "./pages/NotFound.tsx";
import { Questions } from "./pages/Questions.tsx";
import { ResourceArticle } from "./pages/ResourceArticle.tsx";
import { Resources } from "./pages/Resources.tsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="name" element={<Name />} />
        <Route path="x" element={<Agent />} />
        <Route path="agents" element={<Agents />} />
        <Route path="doctrine" element={<Doctrine />} />
        <Route path="engagements" element={<Engagements />} />
        <Route path="era" element={<Era />} />
        <Route path="resources" element={<Resources />} />
        <Route path="resources/:slug" element={<ResourceArticle />} />
        <Route path="glossary" element={<Glossary />} />
        <Route path="questions" element={<Questions />} />
        <Route path="access" element={<Access />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
