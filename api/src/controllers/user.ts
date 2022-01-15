import { NextFunction, Request, Response } from 'express';
// import * as UserList from '../mock/user-list.json';

export class UserController {
  public getuserList = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    return res.json([
      {
          "first_name": "Prabu",
          "last_name": "Ramu",
          "age": "30",
          "experience": "10",
          "CTC": "10 L"
      },
      {
          "first_name": "Sunny",
          "last_name": "Mark",
          "age": "25",
          "experience": "5",
          "CTC": "5 L"
      },
      {
          "first_name": "Prakash",
          "last_name": "Udhai",
          "age": "31",
          "experience": "11",
          "CTC": "11 L"
      },
      {
          "first_name": "Yogi",
          "last_name": "Babu",
          "age": "35",
          "experience": "15",
          "CTC": "20 L"
      }
  ]);
  };
}
