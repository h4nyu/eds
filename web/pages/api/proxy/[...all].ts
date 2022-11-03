import { NextApiRequest, NextApiResponse } from "next";
import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";
import httpProxyMiddleware from "next-http-proxy-middleware";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  return await httpProxyMiddleware(req, res, {
    target: process.env.API_URL,
    pathRewrite: [
      {
        patternStr: "^/api/proxy",
        replaceStr: "",
      },
    ],
  });
};

export default withApiAuthRequired(handler);
