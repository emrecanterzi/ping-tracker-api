import CronJobManager from "cron-manager-node"; // import package
import job1 from "./job1";

const cronJobManager = new CronJobManager();

cronJobManager.addJob(job1);

export default cronJobManager;
