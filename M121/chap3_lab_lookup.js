db.air_alliances.aggregate([
    { $unwind : "$airlines" },
		{ $lookup: {
            from: "air_routes",
            localField: "airlines",
            foreignField: "airline.name",
            as: "routes"
        }
    },
    { $unwind : "$routes" },
	{ $match : { "routes.airplane" : { $in : [ "747", "380" ] } } },
    { $group : {
		"_id" : "$name",
		"routes_count" : { $sum : 1 } 
	    }
	},
	{ $sort : {"routes_count" : -1 } }
]);