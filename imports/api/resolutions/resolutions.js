import { Mongo } from 'meteor/mongo';

const Resolutions = new Mongo.Collection('resolutions');

export default Resolutions;

// create a collection and use our database