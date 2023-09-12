import mongoose, { model } from "mongoose";
import { fileSchema } from "./file";
import { memberSchema } from "./member";
import { userSchema } from "./user";

export const User = mongoose.models.User || model("User", userSchema, "user");
export const Member =
  mongoose.models.Member || model("Member", memberSchema, "member");
export const File = mongoose.models.File || model("File", fileSchema, "file");
