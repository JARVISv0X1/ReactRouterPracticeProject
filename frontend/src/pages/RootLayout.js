import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function RootLayout() {
  const navigation = useNavigation();
  return (
    <>
      <MainNavigation></MainNavigation>
      <main>
        {navigation.state === "loading" && <p>Loding...</p>}
        <Outlet />
      </main>
    </>
  );
}
