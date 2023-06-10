import axios from "axios";
import fs from "fs";
import path from "path";

const data = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "data.json"), "utf8")
);

export default {
  // add a job
  name: data.title, // a name for job
  patern: data.delay == "3_SEC" ? "*/3 * * * * *" : "*/10 * * * * *", // cron job patern
  fn: async () => {
    try {
      const res = await axios(data.url, {
        method: data.method,
        timeout: data.maxResponseTime,
      });
      console.log(res.status);
      if (res.status !== data.expectedStatus) {
        // status error here
      }

      // fs.writeFileSync("test.json", JSON.stringify(res.headers));
    } catch (err) {
      if (String(err).match(/timeout/gim)) {
        console.log("timeout error");
      }
    }
  },
};
