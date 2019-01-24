import Resolutions from './resolutions';

// add new item to database
// Resolutions.insert({
//     name: 'test res',
// });

const res = Resolutions.find({}).fetch();
console.log(res);
// resolver to hit the api
export default {
    Query: {
        resolutions() {
            return Resolutions.find({}).fetch();
        }
    },

    Mutation: {
        createResolution(obj, { name }, context) {
            console.log(name);
            const resolutionId = Resolutions.insert({
                name
            });
            return Resolutions.findOne(resolutionId);
        }
    }
};
