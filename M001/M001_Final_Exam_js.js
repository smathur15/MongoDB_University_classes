Problem:

Connect to our class Atlas cluster from Compass and view the citibike.trips collection. Use the schema view and any filters you feel are necessary to determine the range of values for the usertype field. Which of the following are values found in this collection for the field usertype?

{usertype: {$nin: ["Subscriber", "Customer"]}}
*****************************************************************************
Problem:

Connect to our class Atlas cluster from Compass and view the 100YWeatherSmall.data collection. Using the Schema view, explore the wind field. The wind field has the value type of document. Which of the following best describes the schema of this embedded document?

*******************************************************************************

Problem:
How many documents in the citibike.trips collection have the key tripduration set to null? Ignore any documents that do not contain the tripduration key.

db.trips.find({$and: [{tripduration: null}, {tripduration: {$exists: true}}]}).count()

*************************************************************************************
Problem:
The cast includes either of the following actors: "Jack Nicholson", "John Huston".
The viewerRating is greater than 7.
The mpaaRating is "R".

use video

db.movies.find({cast: {$in: ["Jack Nicholson", "John Huston"]}, viewerRating: {$gt: 7}, mpaaRating: "R"}).count()
*************************************************************************************************