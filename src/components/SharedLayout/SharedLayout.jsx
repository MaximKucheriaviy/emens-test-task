import { Header } from "../header/Header";

export const SharedLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
