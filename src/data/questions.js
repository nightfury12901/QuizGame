export const questionsData = {
  easy: [
    {
      question: "In FCFS scheduling, the process that arrives first is:",
      answers: ["Executed first", "Executed last", "Chosen randomly", "Based on burst time"],
      correct: "Executed first"
    },
    {
      question: "In SJF, which process is given priority?",
      answers: ["Highest burst time", "Lowest burst time", "Longest waiting time", "First arrival"],
      correct: "Lowest burst time"
    },
    {
      question: "Round Robin (RR) scheduling is most suitable for:",
      answers: ["Real-time systems", "Interactive systems", "Batch processing", "None of the above"],
      correct: "Interactive systems"
    },
    {
      question: "What does CPU scheduling decide?",
      answers: ["Which process gets memory", "Which process gets CPU time", "Which process gets I/O", "Which process terminates"],
      correct: "Which process gets CPU time"
    },
    {
      question: "FCFS stands for:",
      answers: ["First Come First Serve", "First Call First System", "Fast CPU First Service", "First Class First Service"],
      correct: "First Come First Serve"
    },
    {
      question: "SJF stands for:",
      answers: ["Short Job First", "System Job First", "Simple Job Format", "Special Job Function"],
      correct: "Short Job First"
    },
    {
      question: "In which scheduling algorithm does starvation never occur?",
      answers: ["Priority Scheduling", "SJF", "FCFS", "Round Robin"],
      correct: "FCFS"
    },
    {
      question: "What is the main disadvantage of FCFS?",
      answers: ["Complex implementation", "High waiting time", "Memory overhead", "CPU overhead"],
      correct: "High waiting time"
    },
    {
      question: "Round Robin uses which data structure?",
      answers: ["Stack", "Queue", "Tree", "Graph"],
      correct: "Queue"
    },
    {
      question: "Time quantum is used in:",
      answers: ["FCFS", "SJF", "Priority", "Round Robin"],
      correct: "Round Robin"
    }
  ],

  medium: [
    {
      question: "The average waiting time in FCFS depends heavily on:",
      answers: ["Process IDs", "Order of arrival", "CPU speed", "Quantum size"],
      correct: "Order of arrival"
    },
    {
      question: "In Priority Scheduling, starvation can occur when:",
      answers: ["Processes have equal priority", "Low-priority processes never get CPU", "Quantum is too large", "All processes are I/O bound"],
      correct: "Low-priority processes never get CPU"
    },
    {
      question: "Time quantum in Round Robin should be:",
      answers: ["Very small", "Very large", "Moderate (not too small/large)", "Equal to burst time"],
      correct: "Moderate (not too small/large)"
    },
    {
      question: "Multilevel Queue Scheduling:",
      answers: ["Uses one queue for all processes", "Uses separate queues based on process type", "Does not require priority", "None of the above"],
      correct: "Uses separate queues based on process type"
    },
    {
      question: "SJF can be:",
      answers: ["Preemptive or non-preemptive", "Only preemptive", "Only non-preemptive", "None of these"],
      correct: "Preemptive or non-preemptive"
    },
    {
      question: "Which scheduling algorithm guarantees minimum average waiting time?",
      answers: ["FCFS", "SJF", "Round Robin", "Priority"],
      correct: "SJF"
    },
    {
      question: "In preemptive scheduling:",
      answers: ["Process cannot be interrupted", "Process can be interrupted", "Process runs till completion", "Process waits indefinitely"],
      correct: "Process can be interrupted"
    },
    {
      question: "Convoy effect is associated with:",
      answers: ["Round Robin", "SJF", "FCFS", "Priority Scheduling"],
      correct: "FCFS"
    },
    {
      question: "Aging technique is used to solve:",
      answers: ["Deadlock", "Starvation", "Thrashing", "Fragmentation"],
      correct: "Starvation"
    },
    {
      question: "Context switching overhead is highest in:",
      answers: ["FCFS", "SJF", "Round Robin with small quantum", "Priority"],
      correct: "Round Robin with small quantum"
    }
  ],

  hard: [
    {
      question: "In Multilevel Feedback Queue (MLFQ) scheduling, a process can:",
      answers: ["Move between queues", "Stay in the same queue always", "Only move to lower queues", "Only move to higher queues"],
      correct: "Move between queues"
    },
    {
      question: "Real-time scheduling ensures:",
      answers: ["Maximum throughput", "Task meets its deadlines", "Minimum turnaround", "CPU utilization is high"],
      correct: "Task meets its deadlines"
    },
    {
      question: "Rate Monotonic Scheduling (RMS) assigns priority based on:",
      answers: ["Task period", "CPU burst", "Arrival time", "Resource usage"],
      correct: "Task period"
    },
    {
      question: "A hard real-time system means:",
      answers: ["Missing a deadline is tolerable", "Missing a deadline causes failure", "CPU is always idle", "Tasks never complete"],
      correct: "Missing a deadline causes failure"
    },
    {
      question: "In RMS, shorter period means:",
      answers: ["Lower priority", "Higher priority", "Equal priority", "Depends on deadline"],
      correct: "Higher priority"
    },
    {
      question: "Deadline Scheduling (EDF) assigns priority to:",
      answers: ["Shortest burst", "Earliest deadline", "Randomly chosen task", "Longest period"],
      correct: "Earliest deadline"
    },
    {
      question: "EDF is considered:",
      answers: ["Static priority scheduling", "Dynamic priority scheduling", "Preemptive non-dynamic scheduling", "Non-preemptive"],
      correct: "Dynamic priority scheduling"
    },
    {
      question: "Which is optimal for uniprocessor scheduling?",
      answers: ["Rate Monotonic", "EDF (Earliest Deadline First)", "FCFS", "Round Robin"],
      correct: "EDF (Earliest Deadline First)"
    },
    {
      question: "In a soft real-time system, missing deadlines:",
      answers: ["Causes total system crash", "Degrades performance but tolerable", "Is not allowed", "Never happens"],
      correct: "Degrades performance but tolerable"
    },
    {
      question: "Deadlock occurs when:",
      answers: ["Processes share same memory", "Processes wait forever for resources", "Processes finish simultaneously", "Processes execute in parallel"],
      correct: "Processes wait forever for resources"
    },
    {
      question: "Which is NOT a necessary condition for deadlock?",
      answers: ["Mutual exclusion", "Hold and wait", "Preemption", "Circular wait"],
      correct: "Preemption"
    },
    {
      question: "The Banker's Algorithm is used for:",
      answers: ["Deadlock detection", "Deadlock avoidance", "Deadlock prevention", "Recovery"],
      correct: "Deadlock avoidance"
    }
  ]
};
