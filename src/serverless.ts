import { initApp } from "./app";
import serverless from "serverless-http";

module.exports.app = serverless(initApp());
