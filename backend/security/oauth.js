const passport = require('passport');
const OAuth2Strategy = require('passport-oauth2').Strategy;

passport.use(new OAuth2Strategy({
  authorizationURL: 'https://oauthprovider.com/auth',
  tokenURL: 'https://oauthprovider.com/token',
  clientID: process.env.OAUTH_CLIENT_ID,
  clientSecret: process.env.OAUTH_CLIENT_SECRET,
  callbackURL: '/auth/oauth/callback'
}, function(accessToken, refreshToken, profile, cb) {
  // Stub: find or create user based on profile info
  return cb(null, profile);
}));

module.exports = passport;
