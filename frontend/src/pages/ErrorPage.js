import { useRouteError } from "react-router-dom";
import PageContent from "./PageContent";
import MainNavigation from "../components/MainNavigation";

export default function ErrorPage() {
  const error = useRouteError();
  let title = "An Error Occoured";
  let message = "Somthing Went Wrong!";

  if (error.status === 500) {
    title = JSON.parse(error.data).title;
    message = JSON.parse(error.data).message;
  }
  if (error.status === 404) {
    title = "Page Not Found";
    message = "Error 404";
  }
  return (
    <>
      <MainNavigation></MainNavigation>
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
