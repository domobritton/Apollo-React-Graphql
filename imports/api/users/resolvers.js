export default {
    Query: {
        user(obj, args, { user }) {
            return user || {};
        }
    },
    // pass in the object that we are resolving 'user'
    // dont have to worry about the shape of the data, just
    // remap it to a new property below
    User: {
        email: user => user.emails[0].address      
    }
};
