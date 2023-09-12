import { USER_ROLES } from "@/appConstants";
import { logout, useGlobalContext, verifyUser } from "@/fe";
import {
  AppHead,
  FullPageLoader,
  HousesGrid,
  MainLayoutHeader
} from "@/fe/components";
import { useMutation } from "@tanstack/react-query";
import { Layout, message } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";

const { Content } = Layout;

export default function Houses() {
  const { showLoader } = useGlobalContext();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  const { mutate: mutateVerifyUser } = useMutation({
    mutationKey: "verifyFn",
    mutationFn: () => verifyUser(),
    onError: error => {
      message.info(error);
      handleLogout();
    },
    onSuccess: data => {
      if (
        !data ||
        !data.userRole ||
        !data.userRole.includes(USER_ROLES.Admin)
      ) {
        message.info("access denied");
        handleLogout();
      }
    }
  });

  useEffect(() => {
    mutateVerifyUser();
  }, []);

  return (
    <>
      <AppHead />
      {showLoader ? <FullPageLoader /> : null}
      <Layout className="min-h-screen">
        <MainLayoutHeader
          showBack={false}
          pageTitle="Houses List"
          handleLogout={handleLogout}
        />
        <Content className="mt-16 px-6">
          <div className="mt-4"></div>
          <HousesGrid data={[]} />
        </Content>
      </Layout>
    </>
  );
}
