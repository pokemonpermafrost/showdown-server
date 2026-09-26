export const MovesCustom: import("../sim/dex-moves").MoveDataTable = {
	creepingmoss: {
		num: 2001,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Creeping Moss",
		// TODO: Nail down PP.
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1,
			allyanim: 1,
			metronome: 1,
		},
		onHit(target, source, move) {
			// TODO: Reset the grass type effect on switching out?
			if (target.getTypes().join() === "Grass" || !target.setType("Grass")) {
				// Creeping Moss should animate even when it fails.
				// Returning false would suppress the animation.
				this.add("-fail", target);
				return null;
			}
			this.add("-start", target, "typechange", "Grass");
			return target.addVolatile("trapped", source, move, "trapper");
		},
		target: "normal",
		type: "Fairy",
	},

	skewer: {
		num: 2002,
		accuracy: true,
		basePower: 70,
		category: "Physical",
		name: "Skewer",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		willCrit: true,
		target: "normal",
		type: "Steel",
	},

	dragonwave: {
		num: 2003,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Dragon Wave",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		self: {
			boosts: {
				def: -1,
				spd: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Dragon",
	},
};
