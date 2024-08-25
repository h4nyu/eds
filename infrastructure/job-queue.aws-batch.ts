import { BatchClient, SubmitJobCommand, ListJobsCommand } from '@aws-sdk/client-batch';

const JOB_NAME_MAP = {
  "my-job": { 
    name: "getting-started-wizard-job",
    queue: "getting-started-wizard-job-queue",
    definition: "getting-started-wizard-job-definition",
  },
}
type JobName = keyof typeof JOB_NAME_MAP;

export const AWSBatchJobQueue = () => {
  const client = new BatchClient();
  const push = async (args: {
    name: JobName,
  }) => {
    const { name, queue, definition } = JOB_NAME_MAP[args.name];
    try{
      const command = new SubmitJobCommand({ jobName: name, jobQueue: queue, jobDefinition: definition });
      await client.send(command);
    }catch(err){
      console.error(err)
    }
  }
  const filter = async (args: {
    name: JobName,
  }) => {
    const { queue } = JOB_NAME_MAP[args.name];
    const command = new ListJobsCommand({ jobQueue: queue });
    try{
      const response = await client.send(command);
      console.log(response)
    }catch(err){
    }
  }
  return {
    push,
    filter
  }
}
