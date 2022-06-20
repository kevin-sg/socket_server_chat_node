import * as Global from "@/global";
import * as Entity from "@/entities";
import * as Utility from "@/utilities";

export async function renewAuth({ uid }: { uid: string }): Promise<Global.IResultUserWithToken> {
  const user = await Entity.User.findById(uid);
  const token = await Utility.generateJWT({ uid: user?._id.toString() || "" });

  return { user, token };
}
