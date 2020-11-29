import '../../env';
import jwt from 'jsonwebtoken';
import { GraphQLError } from 'graphql';
import { User } from '../../db/models/user';

export const checkAuth = async (req) => {
    try {
        if (!req.headers.authorization) {
            return new GraphQLError('Token is not provided!');
        }

        const token = req.headers.authorization.split(' ')[1] || '';

        const { user_id } = jwt.verify(token, process.env.jwtKey);

        if (!user_id) {
            return new GraphQLError('Invalid/Expired token');
        }

        const user = await User.findById(user_id);

        return user;
    } catch (err) {
        return err
    }
};
