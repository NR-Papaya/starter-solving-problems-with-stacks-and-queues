const Queue = require("../lib/queue");

const connected = (G, s, r) => {
	if (Object.keys(G).length === 0) {
		return false;
	}
	if (s === r) {
		return true;
	}
	const enqueued = [s];
	const discovered = new Queue();

	discovered.enqueue(s);

	while (discovered.first) {
		const user = discovered.dequeue();
		const following = G[user];

		for (let followedUser of following) {
			if (followedUser === r) {
				return true;
			}
			if (!enqueued.includes(followedUser)) {
				enqueued.push(followedUser);
				discovered.enqueue(followedUser);
			}
		}
	}
	return false;
};

module.exports = connected;
