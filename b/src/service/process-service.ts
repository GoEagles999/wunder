import { backOff } from 'exponential-backoff';

class ProcessService {
  async doProcess(input) {
    try {
      const stationId = input.id;
      const res = await backOff(() =>
        fetch(`http://irail.be/stations/NMBS/${stationId}`)
      );
      console.log('ProcessService - processed!');
      return res;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

let processService = new ProcessService();
export default processService;
