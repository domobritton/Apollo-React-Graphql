import Resolutions from './resolutions';
import Goals from '../goals/goals';

// add new item to database
// Resolutions.insert({
//     name: 'test res',
// });

const res = Resolutions.find({}).fetch();
console.log(res);
// resolver to hit the api
export default {
    Query: {
        resolutions(obj, args, { userId }) {
            console.log(userId);
            return Resolutions.find({
                userId
            }).fetch();
        }
    },

    Resolution: {
        goals: resolution => {
            return Goals.find({
                resolutionId: resolution._id
            }).fetch();
        }
    },

    Mutation: {
        createResolution(obj, { name }, { userId }) {
            console.log(name);
            const resolutionId = Resolutions.insert({
                name,
                userId
            });
            return Resolutions.findOne(resolutionId);
        }
    }
};
