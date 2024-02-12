import { Request, Response } from "express";
import processService from "../service/process-service";

class ProcessController {

  async doProcess(req: Request, res: Response) {
    let data
    try {
      console.log(req.body)
      data = await processService.doProcess(req.body);
    } catch (error) {
      return error
    }
    console.log('ProcessController - processed');
    return res.send(data.data)
  }
}

let processController = new ProcessController();
export default processController;
  