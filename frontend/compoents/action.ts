"use server";

import { revalidateTag } from "next/cache";

export const action = async () => {
  revalidateTag("user");
};
