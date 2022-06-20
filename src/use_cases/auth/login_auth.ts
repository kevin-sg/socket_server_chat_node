import * as Global from "@/global";
import * as Entity from "@/entities";
import * as Utility from "@/utilities";

export async function loginAuth({ email }: { email: string }): Promise<Global.IResultUserWithToken> {
  const user = await Entity.User.findOne({ email });
  const token = await Utility.generateJWT({ uid: user?._id.toString() || "" });

  return { user, token };
}
