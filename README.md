# webpack-coffee-mocha-demo
How to integrate webpack, coffeescript and mocha testing seamlessly.

I wrote this little demo because another project I am working on
uses coffeescript and mocha but it did have a really hacky, cobbled-together build system and I wanted it all running cleanly under webpack.

Most of what I needed to do could be accomplished fairly simply with nearly-out-of-the-box webpack config. However getting my coffeescript mocha tests running again proved to be a bit of a marathon.

For anyone wanting to do the same thing - I hope this saves you some time and frustration.

This solution uses mochapack - which is a fork of an original project called mocha-webpack. Much thanks to @sysgears for doing this as the original seems no longer to be maintained.

There is also a webpack-contrib/mocha-loader - but I have not as yet succeeded in getting this working with coffeescript. This is undoubtedly due to my laziness and/or foolishness. If you know how to do it please let me know.
