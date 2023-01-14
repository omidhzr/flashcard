// export const vocab = [
// 	{
// 		word: "Christmas tree",
// 		image:
// 			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Xmas_tree.svg/480px-Xmas_tree.svg.png",
// 	},
// 	{
// 		word: "reindeer",
// 		image:
// 			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Toicon-icon-avocado-pull.svg/480px-Toicon-icon-avocado-pull.svg.png",
// 	},
// 	{
// 		word: "wreath",
// 		image:
// 			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Toicon-icon-avocado-decorate.svg/480px-Toicon-icon-avocado-decorate.svg.png",
// 	},
// 	{
// 		word: "gift",
// 		image:
// 			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/665-wrapped-gift-1.svg/480px-665-wrapped-gift-1.svg.png",
// 	},
// 	{
// 		word: "snowman",
// 		image:
// 			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/655-snowman.svg/480px-655-snowman.svg.png",
// 	},
// ];
export const vocab = [
	{
		question: "What is a TAS (Test and Set) lock?",
		answer:
			"A TAS lock uses an atomic instruction to test and set a flag that indicates whether the lock is currently being held by another thread. It has a simple implementation but can cause high contention if many threads try to acquire the lock at the same time.",
	},
	{
		question: "What is a TTAS (Test-test-and-set) lock?",
		answer:
			"A TTAS lock is similar to a TAS lock, but it first checks the flag before trying to acquire the lock, to reduce contention.",
	},
	{
		question: "What is an Exponential Backoff lock?",
		answer:
			"A lock that uses a backoff algorithm. Threads that fail to acquire the lock will wait for a random amount of time before retrying. The random wait time is chosen from an exponentially increasing range, to reduce contention.",
	},

	{
		question: "What is an MCS (Mellor-Crummey and Scott) lock?",
		answer:
			"An MCS lock uses a linked list of threads waiting for the lock, to avoid the contention caused by busy waiting. Each thread that wants to acquire the lock adds itself to the end of the list and then waits for the thread in front of it to release the lock.",
	},

	{
		question: "What is the difference between a spin lock and a blocking lock?",
		answer:
			"A spin lock is a synchronization mechanism that allows a thread to repeatedly check if a shared resource is available, while a blocking lock blocks a thread until the resource becomes available.",
	},
	{
		question:
			"What is the disadvantage of using a spin lock with a high contention rate?",
		answer:
			"When many threads are trying to acquire a spin lock with a high contention rate, it can lead to increased CPU usage and decreased performance due to busy waiting.",
	},
	{
		question: "What is the advantage of using an MCS lock over a TAS lock?",
		answer:
			"An MCS lock uses a linked list of threads waiting for the lock, which reduces contention by allowing each thread to wait for the specific thread holding the lock to release it, rather than constantly checking the lock's status like in TAS lock.",
	},
	{
		question: "What is the main idea behind the Andersson lock (ALock)?",
		answer:
			"The Andersson lock (ALock) is a lock that uses a hybrid of spinning and blocking to reduce contention and improve performance. It uses a combination of spinning and blocking based on the contention it is experiencing.",
	},
	{
		question:
			"What is the Exponential Backoff algorithm and how does it work in spin locks?",
		answer:
			"Exponential Backoff algorithm is a algorithm that uses randomized exponential delay before trying to acquire the lock again. The idea behind this is to reduce contention by spreading out the retries over time. If a thread fails to acquire the lock, it will wait for a random amount of time before retrying, with the random wait time chosen from an exponentially increasing range.",
	},
	{
		question: "What is a Queue-based lock?",
		answer:
			"A Queue-based lock is a type of spin lock that uses a queue to maintain the order of threads waiting for the lock. It can reduce contention by allowing each thread to wait for the specific thread holding the lock to release it, rather than constantly checking the lock's status.",
	},
	{
		question: "What is a Read-Write lock?",
		answer:
			"A Read-Write lock is a type of lock that allows multiple readers to acquire a shared resource simultaneously, but only one writer can acquire the resource at a time. This can improve performance by reducing contention when multiple threads only need to read the shared resource.",
	},
	{
		question: "What is a Fetch-and-Add spin lock?",
		answer:
			"A Fetch-and-Add spin lock is a type of spin lock that uses an atomic fetch-and-add operation to acquire the lock. This operation atomically increments a value and returns the previous value. A thread can acquire the lock by incrementing the value from 0 to 1, and release the lock by decrementing the value back to 0.",
	},
	{
		question: "What is the difference between a spin lock and a blocking lock?",
		answer:
			"A spin lock is a synchronization mechanism that allows a thread to repeatedly check if a shared resource is available, while a blocking lock blocks a thread until the resource becomes available.",
	},
	{
		question: "What is a TAS (Test-and-Set) lock?",
		answer:
			"A TAS (Test-and-Set) lock is a type of mutual exclusion mechanism used to synchronize access to shared resources in a multiprocessor environment. It is implemented using an atomic test-and-set instruction, which allows a thread to test the value of a memory location and set its value in a single operation that is guaranteed to be atomic.",
	},
	{
		question: "How does a TAS lock work?",
		answer:
			"When a thread wants to acquire a TAS lock, it first tests the value of the lock's memory location using the test-and-set instruction. If the value is 0, the thread sets the value to 1 and continues executing. If the value is already 1, the thread waits and retries the test-and-set instruction until it succeeds.",
	},
	{
		question: "What is a TTAS (Test-test-and-set) lock?",
		answer:
			"A TTAS (Test-test-and-set) lock is similar to a TAS lock, but it first checks the flag before trying to acquire the lock, to reduce contention.",
	},
	{
		question: "What is the difference between TAS and TTAS locks?",
		answer:
			"TTAS does not do TAS operations as much as TAS, therefore less cache invalidation, better performance.",
	},
	{
		question: "What is an Andersson lock (ALock)?",
		answer:
			"The Andersson lock (ALock) is a lock that uses a hybrid of spinning and blocking to reduce contention and improve performance. It uses a combination of spinning and blocking based on the contention it is experiencing.",
	},
	{
		question: "What is an MCS (Mellor-Crummey and Scott) lock?",
		answer:
			"An MCS lock uses a linked list of threads waiting for the lock, to avoid the contention caused by busy waiting. Each thread that wants to acquire the lock adds itself to the end of the list and then waits for the thread in front of it to release the lock.",
	},
	{
		question: "What is the advantage of using an MCS lock over a TAS lock?",
		answer:
			"An MCS lock uses a linked list of threads waiting for the lock, which reduces contention by allowing each thread to wait for the specific thread holding the lock to release it, rather than constantly checking the lock's status like in TAS lock.",
	},
	{
		question: "What are the drawbacks of using an Andersson lock?",
		answer:
			"The Andersson lock has drawbacks such as one bit per thread which means one cache line per thread, not good when unknown number of threads, not good for spinning on remote location, uncached arch",
	},
	{
		question: "Why is padding important for MCS locks?",
		answer:
			"Padding is important for MCS locks because it ensures that Qnodes fill up an entire cache line, so that no two threads share the same cache line, if one thread invalidates the cache line the other will not be affected.",
	},
	{
		question: "What is the issue with Queue Locks?",
		answer:
			"The issue with Queue Locks is that if one thread aborts then the successor of that thread will be starving so there is a need for a flag that the thread sets when it aborts.",
	},
];

export const vocab_linearizability = [
	{
		question: "What is linearization?",
		answer:
			"Linearization is the process of making concurrent operations appear as if they were executed sequentially.",
	},
	{
		question: "What is the linearizability criterion?",
		answer:
			"The linearizability criterion states that a concurrent object should appear to its clients as if its operations were executed atomically and in some total order, regardless of the actual order in which they were executed.",
	},
	{
		question: "What is a linearizable implementation?",
		answer:
			"A linearizable implementation is an implementation of a concurrent object that meets the linearizability criterion, by making its operations appear as if they were executed atomically and in some total order.",
	},
	{
		question: "What is a linearization point?",
		answer:
			"A linearization point is a specific point in the execution of a concurrent operation where it appears to have completed to all its clients.",
	},
	{
		question: "What are the benefits of linearizability?",
		answer:
			"Linearizability simplifies the reasoning about the behavior of concurrent objects and makes it easier to reason about their properties and guarantees.",
	},
	{
		question: "What are the challenges of achieving linearizability?",
		answer:
			"Achieving linearizability can be challenging due to the need for coordination and synchronization among concurrent operations and the need to deal with issues such as contention and failures.",
	},
	{
		question: "What are the trade-offs of linearizability?",
		answer:
			"Linearizability can come at the cost of increased complexity, overhead, and reduced performance, particularly in cases of high contention and high contention.",
	},
	{
		question: "How can linearizability be verified?",
		answer:
			"Linearizability can be verified by testing the concurrent object against a set of linearizability conditions, such as the conditions of atomicity and total order, and by using formal methods such as model checking and theorem proving.",
	},
	{
		question:
			"Consider the following history of events for a concurrent object: T1: read(x); T2: write(x,1); T3: read(x). Is this history of events linearizable?",
		answer:
			"No, this history of events is not linearizable because T2's write operation can occur before or after T1's read operation, so the values read by T1 and T3 may not be consistent with each other.",
	},
	{
		question:
			"Consider the following history of events for a concurrent object: T1: write(x,1); T2: read(x); T3: read(x). Is this history of events linearizable?",
		answer:
			"Yes, this history of events is linearizable because T2 and T3's read operations can only occur after T1's write operation, so the values read by T2 and T3 are guaranteed to be consistent with each other.",
	},
	{
		question:
			"What is the data structure used in a Peterson's algorithm for mutual exclusion?",
		answer:
			"A Peterson's algorithm uses two flags (want[i] and turn) and a shared resource that is protected by the flags.",
	},
	{
		question:
			"What is the data structure used in a TAS (Test-and-Set) lock for mutual exclusion?",
		answer:
			"A TAS lock uses a single memory location, often implemented as a single variable, that is protected by the test-and-set instruction.",
	},
	{
		question:
			"What is the data structure used in an MCS (Mellor-Crummey and Scott) lock for mutual exclusion?",
		answer:
			"An MCS lock uses a linked list of threads waiting for the lock, represented by a QNode data structure for each thread, and a shared tail pointer that points to the last QNode in the list.",
	},
	{
		question:
			"What is the data structure used in an ALock (Andersson lock) for mutual exclusion?",
		answer:
			"An ALock uses a queue of threads waiting for the lock, represented by an array of flags, one for each thread, and a shared tail pointer that points to the last thread in the queue.",
	},
	{
		question:
			"What is the data structure used in a Bakery lock for mutual exclusion?",
		answer:
			"A Bakery lock uses an array of flags, one for each thread, and an array of integers, one for each thread, that is used to hold the thread's ticket number.",
	},
	{
		question:
			"What is the data structure used in a CLH (Craig, Landin, and Hagersten) lock for mutual exclusion?",
		answer:
			"A CLH lock uses a linked list of threads waiting for the lock, represented by a QNode data structure for each thread, and a shared tail pointer that points to the last QNode in the list.",
	},
	{
		question:
			"What is the data structure used in a Lamport's Bakery Algorithm for mutual exclusion?",
		answer:
			"A Lamport's Bakery Algorithm uses an array of flags, one for each thread, and an array of integers, one for each thread, that is used to hold the thread's ticket number.",
	},
];

export const vocab_atomic_registers = [
	{
		question: "What is a read-write register?",
		answer:
			"A read-write register is an object that encapsulates a value that can be observed by a read() method and modified by a write() method.",
	},
	{
		question: "What does it mean for a method call to be wait-free?",
		answer:
			"A method call is wait-free if it finishes in a finite number of steps, independently of how its execution is interleaved with steps of other concurrent method calls.",
	},
	{
		question:
			"What is the difference between a safe register and a regular register?",
		answer:
			"A safe register guarantees that a read() will return the last value written if no concurrent read/write occurred. A regular register adds the additional guarantee that if a read overlaps with a write then it will either read the old value or the new one.",
	},
	{
		question:
			"What is the difference between a regular register and an atomic register?",
		answer:
			"A regular register guarantees that the reads and writes appear to happen at a single point in time, but multiple reads that overlap the write do not have to agree on which. An atomic register guarantees that the reads and writes appear to happen at a single point in time and readers that act before or after that point will read the corresponding value and multiple reads that overlap the write agree on the value.",
	},
	{
		question: "What is linearizability?",
		answer:
			"Linearizability is a guarantee that the concurrent operations on a shared object appear to be atomic and happen at a single point in time.",
	},
	{
		question:
			"What is a linearization point in the context of an atomic register?",
		answer:
			"A linearization point is the point in time at which a concurrent read or write operation on an atomic register appears to occur. All operations that occur before this point will return the old value and all operations that occur after this point will return the new value.",
	},
	{
		question:
			"What is the difference between a linearizable register and a linearizable object?",
		answer:
			"A linearizable register is a specific type of object that guarantees linearizability for read and write operations on a single value. A linearizable object is any shared object that guarantees linearizability for all its operations.",
	},
	{
		question:
			"What is the difference between a regular register and a linearizable register?",
		answer:
			"A regular register guarantees that the reads and writes appear to happen at a single point in time, but multiple reads that overlap the write do not have to agree on which. A linearizable register guarantees that the reads and writes appear to happen at a single point in time and readers that act before or after that point will read the corresponding value and multiple reads that overlap the write agree on the value.",
	},
	{
		question:
			"What is the difference between a safe register and a linearizable register?",
		answer:
			"A safe register guarantees that a read() will return the last value written if no concurrent read/write occurred. A linearizable register guarantees that the reads and writes appear to happen at a single point in time and readers that act before or after that point will read the corresponding value and multiple reads that overlap the write agree on the value.",
	},
];
