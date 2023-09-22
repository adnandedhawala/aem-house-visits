import {
  addHouseController,
  checkAuth,
  connectDB,
  getHouseListController,
  ncErrorHandlers
} from "@/be";
import { createRouter } from "next-connect";

const router = createRouter();

router
  .use(connectDB)
  .use(checkAuth)
  .get(getHouseListController)
  .post(addHouseController);

export default router.handler(ncErrorHandlers);
