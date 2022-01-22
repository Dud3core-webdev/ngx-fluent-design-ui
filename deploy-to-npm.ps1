// NOTE: Do not use this script to bump actual package version
// create a new branch in the repo and change the package JSON to the version you want to create, e.g 11.9.1 -> 12.0.0

/* arguments -- major | minor */

// get Package.json <-- Is there an NPM command to do this? If so skip to line 10
// parse it as a JSON file
// parse version as a number

// npm Whatever the command would be to bump version number

// if arg == major
// increase major version by 1, e.g 0.0.1 becomes 0.1.1

// if arg == minor
// increase minor version bt 1, e.g 0.0.1 becomes 0.0.2

// if both arg
// bump both numbers, e.g, 0.0.1 becomes 0.1.1

// commit the change
// It might be best if all changes are either reverted or committed before running this... Maybe we should revert

// git add .
// git commit -m "Auto npm deploy"
// git push -u origin {branch} <-- We might have to pass this as an Arg which is shit, will look into git docs

// ng b ngx-fluent-design --prod
// cd into dist/ngx-fluent-design

// npm publish
