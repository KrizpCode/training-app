// Example of a restricted endpoint that only authenticated users can access from https://next-auth.js.org/getting-started/example

import { NextApiRequest, NextApiResponse } from "next";
import { getServerAuthSession } from "../../server/common/get-server-auth-session";

const restricted = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const session = await getServerAuthSession({ req: request, res: response });

  if (session) {
    response.send({
      content:
        "This is protected content. You can access this content because you are signed in.",
    });
  } else {
    response.send({
      error:
        "You must be signed in to view the protected content on this page.",
    });
  }
};

export default restricted;
