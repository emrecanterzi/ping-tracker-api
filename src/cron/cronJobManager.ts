const CronJobManager = require("cron-manager-node");
import job1 from "./job1";

const cronJobManager = new CronJobManager();

cronJobManager.addJob(job1);

export default cronJobManager;
