git submodule init
git submodule update --remote
yarn install

cd hafas-client || exit 2
yarn link
