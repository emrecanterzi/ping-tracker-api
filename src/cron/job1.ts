import axios from "axios";
import fs from "fs";
import path from "path";

const data = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "data.json"), "utf8")
);

export default {
  // add a job
  name: "job1", // a name for job
  patern: "*/3 * * * * *", // cron job patern
  fn: async () => {
    try {
      const res = await axios.get(data.url);
      // function
      console.log(res.status);
    } catch (err) {
      console.log(err);
    }
  },
};
