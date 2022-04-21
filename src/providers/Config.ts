import { z } from "zod";

export class Config {
  private readonly configSchema = z.object({
    SERVICE_NAME: z
      .string({
        required_error: "SERVICE_NAME is required",
        invalid_type_error: "SERVICE_NAME must be a string",
      })
      .min(1),
    SERVICE_PORT: z
      .number({
        required_error: "SERVICE_PORT is required",
        invalid_type_error: "SERVICE_PORT must be a number",
      })
      .min(4)
      .positive(),
    DATABASE_HOST: z
      .string({
        required_error: "DATABASE_HOST is required",
        invalid_type_error: "DATABASE_HOST must be a string",
      })
      .min(1),
    DATABASE_PORT: z
      .number({
        required_error: "DATABASE_PORT is required",
        invalid_type_error: "DATABASE_PORT must be a number",
      })
      .min(4)
      .positive(),
    DATABASE_USER: z
      .string({
        required_error: "DATABASE_USER is required",
        invalid_type_error: "DATABASE_USER must be a string",
      })
      .min(1),
    DATABASE_PWD: z
      .string({
        required_error: "DATABASE_PWD is required",
        invalid_type_error: "DATABASE_PWD must be a string",
      })
      .min(1),
    DATABASE_DB: z
      .string({
        required_error: "DATABASE_DB is required",
        invalid_type_error: "DATABASE_DB must be a string",
      })
      .min(1),
  });
  private static instance: Config;

  public SERVICE_NAME: string;
  public SERVICE_PORT: number;

  public DATABASE_HOST: string;
  public DATABASE_PORT: number;
  public DATABASE_USER: string;
  public DATABASE_PWD: string;
  public DATABASE_DB: string;

  constructor() {
    const configObj = this.configSchema.parse({
      SERVICE_NAME: process.env.SERVICE_NAME,
      SERVICE_PORT: Number(process.env.SERVICE_PORT),
      DATABASE_HOST: process.env.DATABASE_HOST,
      DATABASE_PORT: Number(process.env.DATABASE_PORT),
      DATABASE_USER: process.env.DATABASE_USER,
      DATABASE_PWD: process.env.DATABASE_PWD,
      DATABASE_DB: process.env.DATABASE_DB,
    });

    this.SERVICE_NAME = configObj.SERVICE_NAME;
    this.SERVICE_PORT = configObj.SERVICE_PORT;
    this.DATABASE_HOST = configObj.DATABASE_HOST;
    this.DATABASE_PORT = configObj.DATABASE_PORT;
    this.DATABASE_USER = configObj.DATABASE_USER;
    this.DATABASE_PWD = configObj.DATABASE_PWD;
    this.DATABASE_DB = configObj.DATABASE_DB;
  }

  public static getInstance() {
    if (!Config.instance) {
      Config.instance = new Config();
    }
    return Config.instance;
  }
}