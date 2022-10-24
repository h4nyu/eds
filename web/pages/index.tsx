import useSWR from "swr";
import { useApi } from "../hooks/use-api";
import { PageLayout } from "../components/page-layout";
import { Header } from "../components/header";

const MainPage = (props) => {
  const api = useApi();
  const { data } = useSWR("hello", api.hello);
  return (
    <PageLayout
      header={<Header />}
      content={
        <div> content goes here </div>
      }
    />
  );
};

export default MainPage;
