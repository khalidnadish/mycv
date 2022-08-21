import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/login/login/Login";
const Loader = lazy(() => import("../component/loader/Loader"));
const IndexPage = lazy(() => import("../pages/home/IndexPage"));
const FaqId = lazy(() => import("../pages/home/faq/FaqId"));

const MyRoutes = () => (
  <>
    <Routes>
      <Route index element={<IndexPage />} />
      <Route path="/FaqId/:faqid" element={<FaqId />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </>
);

export default React.memo(MyRoutes);
