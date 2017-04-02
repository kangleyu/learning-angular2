/// Model interface
export interface Task {
  name: String;
  deadline: Date;
  queued: boolean;
  pomodorosRequired: number;
}