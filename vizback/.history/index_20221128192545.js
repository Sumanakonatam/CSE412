var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());

const express = require("express");
const app = express();

const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://postgres:3cbfb5468d03ba4c5448613329d7fae5@138.197.227.144:17224/cse412')

app.get("/listings/:neighborhood", (req, res) => {
    console.log("Querying listings in neighborhood: " + req.params.neighborhood);
    console.log("Filters:");
    console.log(req.query.minPrice + " <= Price <= " + req.query.maxPrice);
    console.log("Entire home/apt? " + req.query.home + " Private room? " + req.query.room);
    console.log(req.query.minNights + " <= Minimum Nights");
    home = "\"NONEX\"";
    room = "\"NONEX\"";
    if (req.query.home == "yes") {
        home = "Entire home/apt";
    }
    if (req.query.room == "yes") {
        room = "Private room";
    }
    db.any(`
        SELECT COUNT(listing)
        FROM neighborhood,
             neighborhood_has_listing,
             listing
        WHERE neighborhood.node_id = neighborhood_has_listing.neighborhood_id
          AND listing.id = neighborhood_has_listing.listing_id
          AND neighborhood.neighborhood_group = ${"\'" + req.params.neighborhood + "\'"}
          AND price >= ${req.query.minPrice}
          AND price <= ${req.query.maxPrice}
          AND (listing.room_type = ${"\'" + home + "\'"} OR listing.room_type = ${"\'" + room + "\'"})
          AND listing.minimum_nights >= ${req.query.minNights};
    `)
        .then((data) => {
            res.send(data[0])
        })
        .catch((error) => {
            console.log('ERROR:', error)
        })

});

app.get("/hosts/:neighborhood", (req, res) => {
    console.log("Querying hosts in neighborhood: " + req.params.neighborhood);
    db.any(`
        SELECT COUNT(host)
        FROM neighborhood,
             neighborhood_has_host,
             host
        WHERE neighborhood.node_id = neighborhood_has_host.neighborhood_id
          AND host.host_id = neighborhood_has_host.host_id
          AND neighborhood.neighborhood_group = ${"\'" + req.params.neighborhood + "\'"}
    `)
        .then((data) => {
            res.send(data[0])
        })
        .catch((error) => {
            console.log('ERROR:', error)
        })

});

app.get("/neighborhoods", (req, res) => {
    console.log("Getting info for all neigborhoods");
    db.any(`
        SELECT *
        FROM neighborhood
    `)
        .then((data) => {
            res.send(data)
        })
        .catch((error) => {
            console.log('ERROR:', error)
        })
});

app.get('/', (req, res) => {
    res.send('Hello vizbnb!')
});

app.listen(8080, () => {
    console.log(`Example app listening on port 8080`)
});