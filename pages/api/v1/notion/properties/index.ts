// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { notion } from "src-server/lib/notion";
import { Error } from "src-server/middleware/Error";
import { IResponseSuccess } from "src-server/types/response";

const handler = nc<NextApiRequest, NextApiResponse>({
  onError: Error.handleError,
  onNoMatch: Error.handleNoMatch,
}).get(
  async (req: NextApiRequest, res: NextApiResponse<IResponseSuccess<any>>) => {
    try {
      const { page_id, property_id } = req.query as {
        page_id: string;
        property_id: string;
      };
      const response = await notion.pages.properties.retrieve({
        page_id,
        property_id,
      });

      res.status(200).json({ success: true, result: response });
    } catch (e) {
      throw e;
    }
  }
);
export default handler;
