//UserのMutation
exports.userMutation = {
  signUp: async (root, { input }, ctx) => {
    //const registerdUser = await ctx.models.User.signUp(input);
    //return registerdUser._id;
    return await ctx.models.User.signUp(input);
  },
  signIn: async (root, { input }, ctx) => {
    return await ctx.models.User.signIn(input, ctx); //ここ
  },
  signOut: (root, args, ctx) => {
    return ctx.models.User.signOut(ctx);
  },
};
//UserのQuery
exports.userQueries = {
  user: (root, args, ctx) => {
    return ctx.models.User.getAuthUser(ctx);
  },
};
