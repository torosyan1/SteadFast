import bcrypt from 'bcryptjs';
import { GraphQLError } from 'graphql';
import jwt from '../../_common/lib/jwt';
import { User } from '../../db/models/user';
import { checkAuth } from '../../_common/auth/check-auth';
import { validateSignUpData, validateSignInData } from '../../_common/helpers/validation';

export const resolver = {

    Query: {
        getUser: async (root, arg, { req }) => {
            const authUser = checkAuth(req);

            return authUser;
        },
    },

    Mutation: {
        login: async (root, arg, { res }) => {
            try {
                if (validateSignInData(arg)) {
                    return new GraphQLError(validateSignUpData(arg).details[0].message);
                }

                const user = await User.findOne({ email: arg.email });
                if (!user) {
                    return new GraphQLError('User not found or forbidden!');
                }

                const valid = await bcrypt.compare(arg.password, user.password);
                if (!valid) {
                    return new GraphQLError('Invalid password or email!');
                }

                const token = jwt.createToken({ user_id: user.id });

                res.header('Authorization', token);

                return {
                    user,
                    token,
                };
            } catch (e) {
                return e;
            }
        },

        createUser: async (root, arg, { res }) => {
            try {
                if (validateSignUpData(arg)) {
                    return new GraphQLError(validateSignUpData(arg).details[0].message);
                }

                const user = await User.findOne({ email: arg.email });

                if (user) {
                    return new GraphQLError('User alredy registred!');
                }
                const newUser = new User(arg);

                const token = jwt.createToken({ user_id: newUser.id });

                res.header('Authorization', token);

                await newUser.save();

                return {
                    newUser,
                    token,
                };
            } catch (e) {
                return e;
            }
        },
    },

};
