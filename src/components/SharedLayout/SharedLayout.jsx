import { Outlet } from "react-router-dom";
import { Header } from "../header/Header";

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
